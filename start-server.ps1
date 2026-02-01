# Start HTTP Server for StoneWick Site
# This script starts a Python HTTP server on port 3000 for viewing the site

# Change to the site directory
Set-Location "C:\Users\mrpee\Desktop\StoneWickSite"

# Start the Python HTTP server on port 3000
Write-Host "Starting Python HTTP server on port 3000..." -ForegroundColor Green
Write-Host "Site will be available at: http://localhost:3000" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

python -m http.server 3000