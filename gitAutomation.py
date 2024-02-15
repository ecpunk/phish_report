import requests
import subprocess
import json
import os

def get_github_repo(username, repo_name, token):
    """ Check if a GitHub repository exists """
    url = f"https://api.github.com/repos/{username}/{repo_name}"
    headers = {"Authorization": f"token {token}"}
    response = requests.get(url, headers=headers)
    return response.status_code == 200

def create_github_repository(repo_name, username, token):
    """ Create a private GitHub repository using the GitHub API """
    url = "https://api.github.com/user/repos"
    headers = {"Authorization": f"token {token}"}
    data = {"name": repo_name, "private": True}
    response = requests.post(url, headers=headers, data=json.dumps(data))
    return response.status_code == 201

def set_remote_repository(repo_name, username):
    """ Set the remote repository URL """
    url = f"https://github.com/{username}/{repo_name}.git"
    subprocess.call(["git", "remote", "add", "origin", url])
    subprocess.call(["git", "remote", "set-url", "origin", url])  # Update remote URL

def add_commit_and_push(branch_name):
    """ Adds, commits, and pushes changes """
    commit_message = input("Enter commit message: ")
    subprocess.call(["git", "add", "."])
    subprocess.call(["git", "commit", "-m", commit_message])
    subprocess.call(["git", "push", "origin", branch_name])

def read_github_credentials(filepath):
    """ Read GitHub credentials from a file """
    with open(filepath, 'r') as file:
        lines = file.readlines()
        credentials = {}
        for line in lines:
            key, value = line.strip().split('=')
            credentials[key] = value
        return credentials['username'], credentials['token']

def check_git_repository():
    """ Check if the current directory is a git repository """
    return subprocess.call(["git", "rev-parse", "--is-inside-work-tree"]) == 0

def main():
    credentials_file = "/Users/jon/Desktop/code/github_credentials.txt"
    username, token = read_github_credentials(credentials_file)
    repo_name = os.path.basename(os.path.abspath('.'))

    if not get_github_repo(username, repo_name, token):
        print(f"Repository '{repo_name}' does not exist on GitHub. Creating it now...")
        if create_github_repository(repo_name, username, token):
            print(f"Repository '{repo_name}' created on GitHub.")
        else:
            print("Failed to create repository on GitHub.")
            return

    if not check_git_repository():
        subprocess.call(["git", "init"])
    set_remote_repository(repo_name, username)

    current_branch = subprocess.check_output(["git", "branch", "--show-current"]).strip().decode()
    add_commit_and_push(current_branch)

if __name__ == "__main__":
    main()
