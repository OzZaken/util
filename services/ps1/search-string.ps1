# Prompt\Enter folder path and string to search

# $folderPath = Read-Host "Enter folder path"
$folderPath = Read-Host "Enter folder path"

$searchString = Read-Host "Enter string to search"
# $searchString = Read-Host "Enter string to search"

# Get all child items in specified folder and search for the specified string
Get-ChildItem -Path $folderPath -Recurse | Select-String -Pattern $searchString -List | Select Path