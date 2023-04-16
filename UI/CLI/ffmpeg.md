# FFmpeg

FFmpeg is a powerful cross-platform command-line tool used for handling multimedia files. It can be used to convert audio and video files to different formats, apply various effects and filters, and even stream content over the network.

## Installation

- Windows:
  1. Download a static build of FFmpeg from the official [website](https://ffmpeg.org/download.html).
  2.  Extract the contents of the zip file to a directory of your choice.
  3.  Add the directory containing the ffmpeg.exe and ffprobe.exe files to your system's PATH environment variable.

- MacOs
  1. Install [Homebrew](https://brew.sh/) if you haven't already.
  2. Open a terminal and run the following command: `brew install ffmpeg`.

- Linux
  1. To install FFmpeg on Linux, use your distribution's package manager. For example, on Ubuntu and Debian, run the following command:
   `sudo apt-get install ffmpeg`.

## Basic commands

| Description                                              | Command                                                                                                                                    |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Convert a video file to a different format               | `ffmpeg -i input.mp4 output.avi`                                                                                                           |
| Extract audio from a video file                          | `ffmpeg -i input.mp4 -vn -acodec copy output.mp3`                                                                                          |
| Convert a video to a GIF                                 | `ffmpeg -i input.mp4 -vf "scale=320:-1,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" output.gif`                                      |
| Concatenate two video files                              | `ffmpeg -i input1.mp4 -i input2.mp4 -filter_complex "[0:v:0][0:a:0][1:v:0][1:a:0]concat=n=2:v=1:a=1" output.mp4`                           |
| Trim a video clip                                        | `ffmpeg -i input.mp4 -ss 00:00:10 -t 00:00:20 -c:v copy -c:a copy output.mp4`                                                              |
| Add a watermark to a video                               | `ffmpeg -i input.mp4 -i watermark.png -filter_complex "overlay=10:10" output.mp4`                                                          |
| Extract a specific segment from a video and create a GIF | `ffmpeg -i input.mp4 -ss 00:01:00 -t 00:00:10 -filter_complex "scale=320:-1,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" output.gif` |
| Convert a video to a series of images                    | `ffmpeg -i input.mp4 -vf fps=1/5 output%d.png`                                                                                             |
| Create a video from a series of images                   | `ffmpeg -framerate 30 -i image%d.png -c:v libx264 -r 30 -pix_fmt yuv420p output.mp4`                                                       |