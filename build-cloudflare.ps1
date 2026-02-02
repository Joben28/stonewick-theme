# Build script for Cloudflare Pages deployment
# Creates a public folder with all necessary files

Write-Host "Building site for Cloudflare Pages..." -ForegroundColor Green

# Create public directory
$publicDir = "public"
if (Test-Path $publicDir) {
    Remove-Item -Recurse -Force $publicDir
}
New-Item -ItemType Directory -Path $publicDir | Out-Null

# Copy index.html
Copy-Item "index.html" -Destination "$publicDir/"

# Copy CSS folder
Copy-Item "css" -Destination "$publicDir/" -Recurse

# Copy dist folder (compiled JS)
Copy-Item "dist" -Destination "$publicDir/" -Recurse

Write-Host "`n✅ Build complete!" -ForegroundColor Green
Write-Host "Upload the 'public' folder to Cloudflare Pages" -ForegroundColor Cyan
Write-Host "`nFiles ready in: $((Get-Item $publicDir).FullName)" -ForegroundColor Yellow
