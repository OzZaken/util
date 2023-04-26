# I install docker

1. `docker version`: print version
2. `docker build -t hello-docker .`: build with tag dir hello-docker with all its content
3. `docker images` or `docker image ls` : list images
4. `docker run hello-docker`: run image.
5. `docker ps`: list processes.
6. `docker ps -a`: list all processes

# II relative websites
- [dockerHub](https://hub.docker.com/)
- [play with docker](https://labs.play-with-docker.com/):
  - `alt + Enter` for full screen
  - `docker pull [package name]`: pull image

# III pull and run ubuntu with docker.
- `docker pull ubuntu` or shortcut `docker run ubuntu`: pull image
- `docker run -it ubuntu`: start container interact mode
- `root@39e40de1d7d9:/#`destructure of ubuntu shell    
    - `root`: current loggedin user
    - `@`: separates the username from the hostname 
    - `39e40de1d7d9`: named of the machine
    - `:`:  separate the hostname (or username, if applicable) from the path.
    - `/`:  path separator used in Unix.
    - `#` or `$`: user is logged in as the root user, while `$` for non-root user.


# V basics linux commands on:
- `echo hello world`: basic log
- `whoami`: current loggedin user
- `echo $0`: location of the shell program
- `history`: location of the shell program
-    - `!2`: return history index command (whoami i follow by steps)
- `apt`: advanced management tool, contains full CRUD and more for packages.
- `apt list`:list apps.
- `apt update`: update the package database.
- `apt install nano`: download text editor
- `nano`: open text editor
- `ctrl + L`: like `cls` / `console.clear()` clear the console.
- `apt remove nano`: delete text editor.
- `apt install python2-minimal` : install python.
- `echo $PATH`: 
- `python2 --version`: 


# VI LINUX structure     
(in linux everything is a file, even directories just like javascript variables )

/ `#` root directory

├── `bin`          # essential command binaries (e.g. ls, cp, mv)

├── `boot`         # files required for booting the system

├── `dev`          # device files for all hardware devices (e.g. /dev/sda for first hard drive)

├── `etc`          # system-wide configuration files or editable text configuration.

├── `home`         # user home directories

├── `lib`          # libraries required by binaries in /bin and /sbin

├── `media`        # typically used to mount removable media (e.g. CD-ROMs, USB drives)

├── `mnt`          # typically used to temporarily mount filesystems

├── `opt`          # optional add-on software packages

├── `proc`         # information about processes and system resources

├── `root`         # home directory for the root user

├── `run`          # runtime data (e.g. process IDs) for system services

├── `sbin`         # essential system binaries (e.g. init, shutdown, ifconfig)

├── `srv`          # data for services provided by the system

├── `sys`          # information about the system hardware

├── `tmp`          # temporary files

├── `usr`          # user programs and libraries

│   ├── `bin`      # non-essential command binaries (e.g. ping, ssh)

│   ├── `include`  # C header files for developing programs

│   ├── `lib`      # libraries for user programs

│   ├── `local`    # locally installed software packages (not part of the default installation)

│   ├── `sbin`     # non-essential system binaries (e.g. useradd)

│   └── `share`    # architecture-independent data (e.g. icons, documentation)

└── `var`          # variable data (e.g. logs, mail, spool files)



# V LINUX fs

- `pwd`: print working directory, where we are.
- `ls`: list directories just like `dir`.
  - `ls -1`: break 1 item per line (-2 will not work trust me i try).
  - `ls -l`: long list, more details.   
  - `ls [path to file]`:    
>    | Permissions | Hard links | Owner | Group | Size | Modified    | Name           |
>    | ----------- | ---------- | ----- | ----- | ---- | ----------- | -------------- |
>    | lrwxrwxrwx  | 1          | root  | root  | 7    | Mar 8 02:05 | bin -> usr/bin |
- `cd ~`: got to home directory.     
- `mkdir test`: create directory.     
- `mv test docker`: rename.     
- `cd docker`: enter docker.     
- `touch hello.txt`: create file.     
- `touch file1.txt file2.txt file3.txt`: create multiple file.     
- `mv hello.txt hello-docker.txt`: rename.     
- `mv hello-docker.txt`: rename.     
- `mv hello-docker.txt /etc`: move to different directory.     
- `rm file*`: delete all files name file...     
- `rm -r directory*`: delete directory recursive.     

# useful
on the command line press `ctrl + w` to clear line
- `docker-compose down --rmi all`:stop and remove the containers, networks, and volumes associated with a Docker Compose project, and it also removes all images created by the project.
