import os
from colors import bcolors

GITHUB_USERNAME = 'OzZaken'
IGNORE = ['gen-link-tree.service.js', '.git',
          'node_modules', 'public', '.gitignore', '.vscode']

REPO_NAME = os.path.basename(os.path.abspath('.'))

print(f"{bcolors.START}START: building {REPO_NAME} folder tree.{bcolors.ENDC}")


def generate_folder_structure(folder_path, prefix='', is_last_item=True, count=None):
    if count is None:
        count = {'files': 0, 'folders': 0}

    if not os.path.isdir(folder_path):
        file_name = os.path.basename(folder_path)
        file_path = os.path.relpath(folder_path, start=os.getcwd())
        link = f'https://github.com/{GITHUB_USERNAME}/{REPO_NAME}/blob/main/{file_path}'
        is_md_file = os.path.splitext(file_name)[1] == '.md'
        file_name_tag = f'*{file_name}*' if is_md_file else file_name
        count['files'] += 1
        return f'{prefix}{"└── " if is_last_item else "├── "}[{file_name_tag}]({link})\n'

    folder_name = os.path.basename(folder_path)
    folder_name_tag = f'**{folder_name}**'
    count['folders'] += 1
    contents = os.listdir(folder_path)
    folder_structure = f'{prefix}{"└── " if is_last_item else "├── "}{folder_name_tag}\n'

    for i, name in enumerate(contents):
        if name in IGNORE:
            continue

        child_path = os.path.join(folder_path, name)
        is_last_child = i == len(contents) - 1
        child_prefix = f'{prefix}{"    " if is_last_item else "│   "}'
        child_structure = generate_folder_structure(
            child_path, child_prefix, is_last_child, count)

        folder_structure += child_structure

    return folder_structure


def generate_file_structure():
    structure_file_path = './structure.md'

    try:
        os.remove(structure_file_path)
    except OSError:
        pass

    folder_path = os.getcwd()
    folder_name = os.path.basename(folder_path)
    count = {'files': 0, 'folders': 0}
    folder_structure = generate_folder_structure(folder_path, '', True, count)

    with open(structure_file_path, 'w', encoding='utf-8') as f:
        f.write(
            f'# {folder_name} Tree:\n### {count["files"]} files in {count["folders"]} folders.\n{folder_structure}')

    print(f"{bcolors.SUCCESS}Success: Structure file generated successfully at {structure_file_path}.{bcolors.SUCCESS}")


if __name__ == '__main__':
    generate_file_structure()
