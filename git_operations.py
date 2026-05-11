#!/usr/bin/env python
import os
import subprocess
import sys

os.chdir(r'c:\Users\User\OneDrive\Workspace\manojverma-dev')

print("=" * 60)
print("STEP 1: Check recent commit conventions (last 20)")
print("=" * 60)
result = subprocess.run(['git', 'log', '--oneline', '-20'], capture_output=True, text=True)
print(result.stdout)
if result.stderr:
    print("STDERR:", result.stderr)

print("\n" + "=" * 60)
print("STEP 2: Check user's commit style")
print("=" * 60)
result = subprocess.run(['git', 'config', 'user.name'], capture_output=True, text=True)
user_name = result.stdout.strip()
print(f"User: {user_name}")
result = subprocess.run(['git', 'log', '--oneline', f'--author={user_name}', '-10'], capture_output=True, text=True)
print(result.stdout)

print("\n" + "=" * 60)
print("STEP 3: Check git status")
print("=" * 60)
result = subprocess.run(['git', 'status', '--short'], capture_output=True, text=True)
print(result.stdout)
if result.stderr:
    print("STDERR:", result.stderr)

print("\n" + "=" * 60)
print("STEP 4: Check staged and unstaged changes")
print("=" * 60)
result = subprocess.run(['git', 'diff', '--cached', '--stat'], capture_output=True, text=True)
print("CACHED/STAGED STAT:")
print(result.stdout if result.stdout else "(no staged changes)")

result = subprocess.run(['git', 'diff', '--cached'], capture_output=True, text=True)
print("CACHED DIFF:")
print(result.stdout if result.stdout else "(no staged changes)")

result = subprocess.run(['git', 'diff', '--stat'], capture_output=True, text=True)
print("\nUNSTAGED DIFF STAT:")
print(result.stdout if result.stdout else "(no unstaged changes)")

print("\n" + "=" * 60)
print("STEP 5: Stage all changes if needed")
print("=" * 60)
result = subprocess.run(['git', 'add', '-A'], capture_output=True, text=True)
print("Staged all changes with: git add -A")
if result.stderr:
    print("STDERR:", result.stderr)

print("\n" + "=" * 60)
print("STEP 6: Generate commit message")
print("=" * 60)

commit_message = """fix: Improve profile image display with object-contain

- Changed image object fit from object-cover to object-contain
- Prevents unintended cropping of professional headshot
- Maintains aspect ratio and shows full image within container
- Enhances visual quality of hero section

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"""

print("Generated commit message:")
print(commit_message)

print("\n" + "=" * 60)
print("STEP 7: Execute the commit")
print("=" * 60)
result = subprocess.run(['git', 'commit', '-m', commit_message], capture_output=True, text=True)
print(result.stdout)
if result.stderr:
    print("STDERR:", result.stderr)

print("\n" + "=" * 60)
print("STEP 8: Confirm commit completed (git status)")
print("=" * 60)
result = subprocess.run(['git', 'status', '--short'], capture_output=True, text=True)
print(result.stdout if result.stdout else "Working directory clean")

print("\n" + "=" * 60)
print("STEP 9: Show the new commit")
print("=" * 60)
result = subprocess.run(['git', 'log', '--oneline', '-1'], capture_output=True, text=True)
print(result.stdout)

print("\n" + "=" * 60)
print("Complete git log of last 3 commits")
print("=" * 60)
result = subprocess.run(['git', 'log', '--oneline', '-3'], capture_output=True, text=True)
print(result.stdout)
