#!/bin/bash

# Set variables
commit_message="Push from push-service"
branch_name="main"

# Prompt for confirmation before running the script
read -p "Are you sure you want to push changes to $branch_name branch? (y/n) " confirm
if [[ "$confirm" != "y" ]]; then
    exit 1
fi

# Check if Git is installed
if ! [ -x "$(command -v git)" ]; then
  echo 'Error: git is not installed.' >&2
  exit 1
fi

# Delete all "node_modules" folders using npm
npm prune

# Add all changes to Git
git add .

# Commit changes with message
if ! git commit -m "$commit_message"; then
  echo 'Error: git commit failed.' >&2
  exit 1
fi

# Push changes to remote repository
if ! git push origin $branch_name; then
  echo 'Error: git push failed.' >&2
  exit 1
fi