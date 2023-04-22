# ngrok

`ngrok` is a powerful tool used for exposing local web servers to the internet.

It creates a secure tunnel to a public URL, allowing you to access your local website from anywhere.

## Installation

### Windows

To install ngrok on Windows, follow these steps:

1. Download the ngrok executable from the official [website](https://ngrok.com/download).
2. Extract the contents of the zip file to a directory of your choice.
3. Add the directory containing the `ngrok.exe` file to your system's PATH environment variable.

### macOS

To install ngrok on macOS, follow these steps:

1. Install Homebrew if you haven't already: https://brew.sh/
2. Open a terminal and run the following command: `brew install --cask ngrok`

### Linux

To install ngrok on Linux, use the following commands: 

`wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-amd64.zip
unzip ngrok-stable-linux-amd64.zip`


## Basic Usage

| Description                                         | Command                            |
| --------------------------------------------------- | ---------------------------------- |
| Expose a local web server on port 80                | `ngrok http 80`                    |
| Expose a local web server on a custom subdomain     | `ngrok http -subdomain=myapp 80`   |
| Expose a local web server using HTTPS               | `ngrok http --bind-tls=true 80`    |
| Inspect HTTP traffic in a web interface             | `ngrok http --inspect=false 80`    |

These are just a few examples of what ngrok can do. For more information, refer to the official documentation: https://ngrok.com/docs .