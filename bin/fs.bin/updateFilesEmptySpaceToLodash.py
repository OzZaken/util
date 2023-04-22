import os

folder_path = input("Enter the folder path: ")

# get a list of all the files in the folder
file_list = os.listdir(folder_path)

# iterate over each file in the folder
for file_name in file_list:
    # check if the file name contains any spaces
    if " " in file_name:
        # generate the new file name by replacing spaces with underscores
        new_file_name = file_name.replace(" ", "_")
        # construct the full file paths for the old and new file names
        old_file_path = os.path.join(folder_path, file_name)
        new_file_path = os.path.join(folder_path, new_file_name)
        # rename the file by moving it to the new file path
        os.rename(old_file_path, new_file_path)

print("Done!")