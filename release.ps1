#!/usr/bin/env pwsh
# =============================================================
# StoneWick Theme — Release Script
# Usage:
#   .\release.ps1              # patch bump (1.2.3 → 1.2.4)
#   .\release.ps1 minor        # minor bump (1.2.3 → 1.3.0)
#   .\release.ps1 major        # major bump (1.2.3 → 2.0.0)
#   .\release.ps1 1.5.0        # exact version
# =============================================================
param(
    [string]$Bump = "patch"
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

# ── helpers ──────────────────────────────────────────────────
function Write-Step { param([string]$Msg) Write-Host "`n▸ $Msg" -ForegroundColor Cyan }
function Write-Ok   { param([string]$Msg) Write-Host "  ✓ $Msg" -ForegroundColor Green }
function Write-Fail { param([string]$Msg) Write-Host "  ✗ $Msg" -ForegroundColor Red; exit 1 }

# ── root guard ───────────────────────────────────────────────
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $Root

if (-not (Test-Path "package.json")) {
    Write-Fail "package.json not found. Run this script from the project root."
}

# ── read current version ─────────────────────────────────────
Write-Step "Reading current version"
$Pkg = Get-Content "package.json" -Raw | ConvertFrom-Json
$Current = $Pkg.version
Write-Ok "Current: v$Current"

# ── calculate new version ─────────────────────────────────────
Write-Step "Calculating new version"
if ($Bump -match '^\d+\.\d+\.\d+$') {
    $New = $Bump
} else {
    $Parts = $Current -split '\.'
    $Ma = [int]$Parts[0]
    $Mi = [int]$Parts[1]
    $Pa = [int]$Parts[2]

    switch ($Bump.ToLower()) {
        "major" { $Ma++; $Mi = 0; $Pa = 0 }
        "minor" { $Mi++; $Pa = 0 }
        "patch" { $Pa++ }
        default { Write-Fail "Unknown bump type '$Bump'. Use: patch | minor | major | x.y.z" }
    }
    $New = "$Ma.$Mi.$Pa"
}
Write-Ok "New version: v$New"

# ── confirm ───────────────────────────────────────────────────
$Confirm = Read-Host "`n  Release v$Current → v$New? [Y/n]"
if ($Confirm -ne "" -and $Confirm -notmatch '^[Yy]') {
    Write-Host "  Aborted." -ForegroundColor Yellow
    exit 0
}

# ── bump package.json ─────────────────────────────────────────
Write-Step "Updating package.json"
$PkgRaw = Get-Content "package.json" -Raw
$PkgRaw = $PkgRaw -replace '"version": "' + [regex]::Escape($Current) + '"', '"version": "' + $New + '"'
Set-Content "package.json" $PkgRaw -NoNewline
Write-Ok "package.json → v$New"

# ── build CSS ─────────────────────────────────────────────────
Write-Step "Building CSS"
node scripts/build-css.js
if ($LASTEXITCODE -ne 0) { Write-Fail "CSS build failed." }
Write-Ok "Build complete"

# ── git add + commit ──────────────────────────────────────────
Write-Step "Committing"
$Message = Read-Host "  Commit message [Release v$New]"
if ($Message -eq "") { $Message = "Release v$New" }

git add -A
git commit -m $Message
if ($LASTEXITCODE -ne 0) { Write-Fail "git commit failed." }
Write-Ok "Committed: $Message"

# ── git tag ───────────────────────────────────────────────────
Write-Step "Tagging v$New"
git tag "v$New"
if ($LASTEXITCODE -ne 0) { Write-Fail "git tag failed (tag may already exist)." }
Write-Ok "Tagged v$New"

# ── push ──────────────────────────────────────────────────────
Write-Step "Pushing to origin"
git push origin main
git push origin "v$New"
if ($LASTEXITCODE -ne 0) { Write-Fail "git push failed." }

Write-Host "`n✅ v$New released successfully!`n" -ForegroundColor Green
