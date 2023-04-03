# Prompt the user for a path
$path = Read-Host "Enter a path to search for node_modules folders (`C:\dev`, `C:\dev\subFolder`) "

# Check if the path exists
if (-not (Test-Path $path)) {
    Write-Host "Path not found: $path" -ForegroundColor Red
    exit
}

# Search for all node_modules folders under the path
$folders = Get-ChildItem -Path $path -Recurse -Directory -Filter "node_modules" | Where-Object { $_.FullName -notmatch "\\node_modules\\" }

# Loop through each node_modules folder
foreach ($folder in $folders) {
  # Get the relative path of the folder for the log
  $relativePath = $folder.FullName.Replace($path + "\","")

    # Highlight the folder in green
    Write-Host "Found node_modules folder: $relativePath" -ForegroundColor Green


    # Ask the user if they want to delete the folder
    $choice = Read-Host "Do you want to delete this folder? [Y]es/[N]o"

    # Check the user's choice
    switch ($choice.ToLower()) {
        "y" {
            # Delete the folder and all its contents
            Remove-Item -Path $folder.FullName -Recurse -Force
            Write-Host "Deleted folder: $($folder.FullName)" -ForegroundColor Cyan
        }
        "n" {
            # Continue searching for node_modules folders
            Write-Host "Skipping folder: $($folder.FullName)" -ForegroundColor Cyan
        }
        default {
            # Invalid choice, continue searching for node_modules folders
            Write-Host "Invalid choice, skipping folder: $($folder.FullName)" -ForegroundColor Red
        }
    }
}

# Log when the search and deletion process is complete
Write-Host "Finished searching and deleting node_modules folders under the path: $path" -ForegroundColor Green