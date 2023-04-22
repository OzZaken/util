# Youtube-dl

youtube-dl is a command-line tool for downloading videos from YouTube.com and other video sharing websites. It is open-source and available for Windows, macOS, and Linux. This tool allows you to download videos in various formats, resolutions, and qualities. Additionally, it can download videos from playlists and channels, and it supports downloading only audio from videos.


## Installation
## Installation

To install `youtube-dl`, use one of the following commands:

### Windows

1. Download the latest `youtube-dl` binary from [https://youtube-dl.org/](https://youtube-dl.org/).
2. Place the `youtube-dl` executable in a directory that is in your system's PATH. For example, you can place it in `C:\Windows\System32` to make it available system-wide.

### macOS

1. Install Homebrew by following the instructions at [https://brew.sh/](https://brew.sh/).
2. Open Terminal and type `brew install youtube-dl` to install `youtube-dl`.

### Linux

- Ubuntu and Debian-based distributions:
    ```
    sudo apt-get install youtube-dl
    ```
- Other distributions:
    Refer to the installation instructions on [https://youtube-dl.org/](https://youtube-dl.org/).




## usage
http://ytdl-org.github.io/youtube-dl/download.html
<!-- Download youtube lib  -->
youtube-dl --continue --retries -f bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best -o "D:\FullStack\May-course1\%(title)s.%(ext)s" "https://www.youtube.com/playlist?list=PLHAMNNdDePp7gD_OCEyXcCNWUmL8CGTxg"
<!-- Best Audio only -->
youtube-dl --yes-playlist -f bestaudio/best -o "D:\FullStack\May-Course\%(title)s.%(ext)s" "https://www.youtube.com/playlist?=PLHAMNNdDePp7gD_OCEyXcCNWUmL8CGTxg" 

This command will download the best quality video and audio separately and merge them together to a single mp4 file, and will save the file with the video title as the file name in the specified directory.

| Description                                  | Command                          |
|----------------------------------------------|----------------------------------|
| Download a video                             | `youtube-dl <video URL>`         |
| Download only the audio of a video           | `youtube-dl -x <video URL>`      |
| Download all the videos in a playlist        | `youtube-dl <playlist URL>`      |

| Description                                             | Command                                       |
|---------------------------------------------------------|-----------------------------------------------|
| Download a video with a specific format                 | `youtube-dl -f <format> <video URL>`          |
| Download subtitles for a video                          | `youtube-dl --write-sub <video URL>`          |
