<h1> Git </h1>
Git is a popular version control system that allows developers to track changes to their code and collaborate with others on a project. 

---

- [Git Commands  ↑](#git-commands--)
- [Branching and Merging  ↑](#branching-and-merging--)
- [.gitignore  ↑](#gitignore--)
  - [commons Files to ignore:  ↑](#commons-files-to-ignore--)
  - [commons Folders to ignore:  ↑](#commons-folders-to-ignore--)
- [.gitattributes  ↑](#gitattributes--)
- [Git Bash  ↑](#git-bash--)
  - [commands  ↑](#commands--)

##  Git Commands  <a href="#top" class="right">↑</a>
| Command                            | Description                                                                                  |
| ---------------------------------- | -------------------------------------------------------------------------------------------- |
| `git init`                         | Initializes a new Git repository in the current directory.                                   |
| `git add <file>`                   | Adds a file to the staging area, ready to be committed.                                      |
| `git commit -m "<commit message>"` | Commits changes to the repository with a descriptive message.                                |
| `git status`                       | Displays the current status of the repository, including any changes that have been made.    |
| `git log`                          | Displays a log of all commits that have been made to the repository.                         |
| `git branch`                       | Displays a list of all branches in the repository.                                           |
| `git checkout <branch>`            | Switches to the specified branch.                                                            |
| `git merge <branch>`               | Merges the specified branch into the current branch.                                         |
| `git pull`                         | Fetches and merges changes from a remote repository.                                         |
| `git push`                         | Pushes local changes to a remote repository.                                                 |
| `git push <remote> <branch>`       | Pushes the committed changes to the specified remote and branch                              |
| `git fetch <remote>`               | Fetches changes from a remote repository without merging them.                               |
| `git diff`                         | Displays the difference between the working directory and the staging area.                  |
| `git reset <file>`                 | Removes a file from the staging area.                                                        |
| `git revert <commit>`              | Creates a new commit that undoes the changes made in the specified commit.                   |
| `git rm <file>`                    | Removes a file from the repository.                                                          |
| `git mv <old path> <new path>`     | Moves or renames a file in the repository.                                                   |
| `git pull <remote> <branch>`       | Fetches the latest changes from the specified remote and merges them into the current branch |
| `git rebase <branch>`              | Rebases the current branch onto the specified branch                                         |
| `git reset --hard HEAD`            | Resets the working directory to the last committed state                                     |
| `git tag <tag-name>`               | Tags the current commit with the specified name                                              |
| `git stash`                        | Stashes the changes in the working directory                                                 |
| `git cherry-pick <commit>`         | Applies the changes introduced by the specified commit to the current branch                 |
| `git remote`                       | Lists all remote repositories                                                                |
| `git remote add <name> <url>`      | Adds a new remote repository with the specified name and URL                                 |

## Branching and Merging  <a href="#top" class="right">↑</a>
Branching in Git involves creating a separate copy of the codebase, called a branch, from the main or master branch.
Each branch can be used to implement a new feature or fix a bug, and developers can work independently on their respective branches without affecting the main branch.
To create a new branch in Git, you can use the command: `git branch [branch-name]`.

Once a feature is completed or a bug is fixed, the changes made in the branch need to be merged back to the main branch.
This process is called merging.
To merge a branch, you need to switch to the branch you want to merge into and use the command git merge [branch-name].
Git will automatically merge the changes made in the branch and resolve any conflicts that may arise.

In some cases, conflicts may occur when merging changes from different branches.
Conflicts happen when two or more developers make changes to the same code in different branches.
Git will prompt the developer to manually resolve the conflicts before the merge can be completed.

## .gitignore  <a href="#top" class="right">↑</a>
The .gitignore file is used to tell Git which files and directories to ignore when committing changes to the repository.
This is useful for files that are generated automatically by your development environment, such as log files or compiled binaries.

To create a .gitignore file, simply create a new file in the root directory of your repository named .gitignore, and list the files and directories that you want Git to ignore, one per line.
Here's an example:
### commons Files to ignore:  <a href="#top" class="right">↑</a>
| Filename                 | Description                                                                              |
| ------------------------ | ---------------------------------------------------------------------------------------- |
| `.env`                   | Contains sensitive information such as API keys, database credentials, and other secrets |
| `.DS_Store`              | Hidden file created by macOS that stores metadata about files in a directory             |
| `*.log`                  | Log files generated by various tools and applications                                    |
| `*.swp`                  | Temporary files created by some text editors                                             |
| `.idea/`                 | Directory containing configuration files for the IntelliJ IDEA IDE                       |
| `.vscode/`               | Directory containing configuration files for the Visual Studio Code IDE                  |
| `yarn.lock`              | Contains specific version information for packages installed via Yarn                    |
| `package-lock.json`      | Contains specific version information for packages installed via npm                     |
| `npm-debug.log*`         | Log files generated by npm                                                               |
| `yarn-debug.log*`        | Log files generated by Yarn                                                              |
| `yarn-error.log*`        | Log files generated by Yarn                                                              |
| `/.vscode`               | Directory containing configuration files for the Visual Studio Code IDE                  |
| `/node_modules`          | Contains all the dependencies of a Node.js project and can be very large                 |
| `/.pnp`                  | PnP (Plug and Play) configuration files for Yarn                                         |
| `.pnp.js`                | PnP (Plug and Play) configuration files for Yarn                                         |
| `/coverage`              | Contains coverage reports generated by testing frameworks                                |
| `/build`                 | Contains build artifacts generated by various tools and applications                     |
| `.env.local`             | Contains local environment variables for development                                     |
| `.env.development.local` | Contains local environment variables for development                                     |
| `.env.test.local`        | Contains local environment variables for testing                                         |
| `.env.production.local`  | Contains local environment variables for production                                      |

### commons Folders to ignore:  <a href="#top" class="right">↑</a>
| Folder              | Description                                                                |
| ------------------- | -------------------------------------------------------------------------- |
| `node_modules/`     | Contains all the dependencies of a Node.js project and can be very large   |
| `bower_components/` | Contains all the dependencies of a Bower project                           |
| `vendor/`           | Contains all the dependencies of a PHP project                             |
| `__pycache__/`      | Contains compiled bytecode for Python modules                              |
| `.pytest_cache/`    | Contains cache files generated by pytest                                   |
| `.gradle/`          | Contains the Gradle build cache and other configuration files              |
| `build/`            | Contains build artifacts generated by various tools and applications       |
| `dist/`             | Contains distribution packages generated by various tools and applications |
| `coverage/`         | Contains coverage reports generated by testing frameworks                  |
| `.nyc_output/`      | Contains code coverage reports generated by the nyc tool for Node.js       |



## .gitattributes  <a href="#top" class="right">↑</a>
The .gitattributes file is used to associate attributes with files in the repository.
These attributes can be used to control how Git handles various aspects of the files in the repository, such as how line endings are normalized or how merges are performed.

To create a .gitattributes file, simply create a new file in the root directory of your repository named .gitattributes, and list the files and directories that you want to apply attributes to, one per line.
Here's an example:
- `text=auto`: automatically detect whether a file should be treated as a text or binary file, and handle line endings appropriately.
- `* binary`: treat all files as binary, which means that Git will not attempt to make any line-ending conversions or perform any other text-specific processing.
- `*.txt text`: treat all files with a .txt extension as text files, which means that Git will handle line endings appropriately for the current environment.
- `*.jpg binary`: treat all files with a .jpg extension as binary files, which means that Git will not attempt to make any line-ending conversions or perform any other text-specific processing.
- `*.exe -text`: treat all files with a .exe extension as binary files and explicitly disable any text-specific processing.

## Git Bash  <a href="#top" class="right">↑</a>
Git Bash is a command line tool that provides a command-line interface for interacting with Git repositories on Windows. It allows users to run Git commands, as well as other Unix-like commands, from within a Windows environment.

### commands  <a href="#top" class="right">↑</a>
| Command                      | Description                                                                 |
| ---------------------------- | --------------------------------------------------------------------------- |
| `cd [directory]`             | Change directory to [directory]                                             |
| `ls`                         | List files and directories in the current directory                         |
| `ls [directory]`             | List files and directories in [directory]                                   |
| `mkdir [directory]`          | Create a new directory named [directory]                                    |
| `touch [file]`               | Create a new file named [file]                                              |
| `rm [file]`                  | Remove the file named [file]                                                |
| `rm -r [directory]`          | Remove the directory [directory] and all its contents (use with caution!)   |
| `mv [source] [destination]`  | Move or rename [source] to [destination]                                    |
| `cp [source] [destination]`  | Copy [source] to [destination]                                              |
| `cat [file]`                 | Display the contents of [file]                                              |
| `less [file]`                | Display the contents of [file] one page at a time                           |
| `echo [text] > [file]`       | Write [text] to [file], overwriting its contents                            |
| `echo [text] >> [file]`      | Append [text] to the end of [file]                                          |
| `grep [pattern] [file]`      | Search [file] for lines that contain [pattern]                              |
| `git add [file]`             | Add [file] to the staging area for the next commit                          |
| `git commit -m "[message]"`  | Commit the changes in the staging area with the given [message]             |
| `git push [remote] [branch]` | Push the local changes to the [branch] of [remote]                          |
| `git pull [remote] [branch]` | Pull the remote changes to the [branch] of [remote] to the local repository |
| `git clone [repository]`     | Create a local copy of the [repository] in the current directory            |