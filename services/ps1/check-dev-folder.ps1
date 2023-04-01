Write-Host "Enter your dev folder Path (C:\dev)" -ForegroundColor Green
$path = Read-Host -Prompt "Path"

Get-ChildItem -Path $path -Directory | ForEach-Object {
    $folder = $_.Name
    $gitignorePath = Join-Path -Path $_.FullName -ChildPath ".gitignore"
    $nodeModulesPath = Join-Path -Path $_.FullName -ChildPath "node_modules"
    
    if (-not (Test-Path $gitignorePath)) {
        Write-Host "Git ignore file missing for $folder project." -ForegroundColor Red
    }
    
    if (Test-Path $nodeModulesPath) {
        Write-Host "node_modules folder found in $folder project." -ForegroundColor Yellow
    }
}
