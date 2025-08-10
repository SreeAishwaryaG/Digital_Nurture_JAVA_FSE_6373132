# Branching and Merging in GitLab

## Objectives
- Explain branching and merging  
- Create a branch in GitLab  
- Create a merge request in GitLab  

## Lab Overview
In this exercise, we:
1. Created a new branch `GitNewBranch` from the main branch.
2. Added a file `branchfile.txt` with sample content.
3. Committed the changes to the branch.
4. Pushed the branch to GitLab.
5. Created a merge request to merge changes into the master branch.

## Prerequisites
- Git environment set up with P4Merge tool for Windows.
- GitLab account and repository.

## Steps Performed
1. **Create and switch to new branch:**
   ```bash
   git checkout -b GitNewBranch
Add file in branch:

echo "This is content for GitNewBranch" > branchfile.txt
git add branchfile.txt
git commit -m "Add branchfile.txt in GitNewBranch"
Push branch to GitLab:


git push origin GitNewBranch
Merge in GitLab UI:

Open repository in GitLab.

Create a Merge Request from GitNewBranch to master.

Review and approve merge.

Delete branch after merging:


git branch -d GitNewBranch
Outcome
Successfully created and merged a feature branch into the master branch using Git and GitLab.


