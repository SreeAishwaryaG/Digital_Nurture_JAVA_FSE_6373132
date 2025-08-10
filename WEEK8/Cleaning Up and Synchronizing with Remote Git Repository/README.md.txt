# Cleaning Up and Pushing to Remote Git

## Objectives
- Explain how to clean up and push back to a remote Git repository.

## Lab Overview
In this exercise, we verify the local repository state, synchronize it with the remote repository, and push pending changes from the lab **Git-T03-HOL_002** to the remote.

## Prerequisites
- Git environment set up.
- Remote repository on GitLab.
- Completed lab **Git-T03-HOL_002** changes available locally.

## Steps Performed

1. **Verify master branch is clean:**
   ```bash
   git status
git branch -a
git pull origin master
git push origin master

