# Merge Conflict Resolution in Git

## Objectives
- Explain how to resolve conflicts during a merge.

## Lab Overview
In this exercise, we simulate a merge conflict scenario between the `master` branch and a feature branch `GitWork`.  
We intentionally modify the same file in both branches, merge them, and resolve the conflict using a 3-way merge tool.

## Prerequisites
- Git environment set up.
- P4Merge installed and configured as Git's merge tool.
- GitLab repository with `master` branch available.

## Steps Performed

1. **Verify master branch is clean:**
   ```bash
   git status
git checkout -b GitWork
echo "<message>Hello from GitWork branch</message>" > hello.xml
git add hello.xml
git commit -m "Add hello.xml in GitWork branch"

git checkout master
echo "<message>Hello from master branch</message>" > hello.xml
git add hello.xml
git commit -m "Add hello.xml in master branch"
git log --oneline --graph --decorate --all
git merge GitWork
git add hello.xml
git commit -m "Resolve merge conflict in hello.xml"

echo "*.orig" >> .gitignore
git add .gitignore
git commit -m "Ignore merge backup files"

git branch -d GitWork
git log --oneline --graph --decorate

