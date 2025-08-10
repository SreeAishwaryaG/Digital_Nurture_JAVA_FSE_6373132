# Ignoring Unwanted Files in Git Using `.gitignore`

## Overview
This exercise demonstrates how to use Git's `.gitignore` file to prevent unwanted files and folders from being tracked in a repository. In this case, `.log` files and a `log` directory are ignored.

## Steps Completed
1. Created a sample log file `debug.log` in the repository working directory.
2. Created a `log` folder containing a test log file.
3. Created a `.gitignore` file in the repository root.
4. Added rules to `.gitignore` to:
   - Ignore all files with the `.log` extension.
   - Ignore the `log` folder and its contents.
5. Staged and committed `.gitignore` to the local repository.
6. Verified using `git status` that `.log` files and the `log` folder are not tracked by Git.
7. Pushed the `.gitignore` changes to the remote GitLab repository.

## `.gitignore` Rules Used
Ignore all .log files
*.log

Ignore the log folder
log/



## Outcome
The `.gitignore` file successfully prevents `.log` files and the `log` folder from being tracked by Git. Only the `.gitignore` file itself is committed, ensuring clean and relevant version history.