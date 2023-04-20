<h1>Bash Scripts</h1>
Bash scripts are a way of automating tasks and performing complex operations using the command line interface.
Bash, short for Bourne-Again SHell, is a command language interpreter that is widely used on Unix-based systems such as Linux and macOS.

A Bash script is a text file that contains a series of commands to be executed by the Bash shell.
The commands can include anything that can be executed in a command-line interface, such as running programs, manipulating files, and interacting with system resources.

# Creating a Bash Script
To create a Bash script, you need to create a new text file and give it a .sh extension.
For example, you could create a file named `myscript.sh`
Open the file in a text editor and add the following line at the top of the file:
```bash
#!/bin/bash
```
This line is called the "shebang" and tells the operating system that the file should be executed as a Bash script.

Next, add your commands to the file. For example, you could write:
```bash
#!/bin/bash

echo "Hello, World!"
```

# Running a Bash Script
To run a Bash script, you need to make the file executable.
You can do this using the chmod command:
```bash
chmod +x myscript.sh
```
This will give the file permission to be executed.
You can then run the script by typing:
```bash
./myscript.sh
```
The ./ at the beginning tells the shell to look in the current directory for the script to execute.