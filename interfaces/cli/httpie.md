# [httpie](https://httpie.io/)
HTTPie is a command-line tool that allows users to interact with web servers through HTTP requests. It provides a simple and intuitive syntax for sending HTTP requests and displaying the responses in a terminal-friendly format.

## Installation

HTTPie can be installed on various platforms using package managers like `apt`, `brew`, `yum`, `pip`, or by downloading the binary directly from the website.

### Installing with package managers

#### Ubuntu/Debian: `sudo apt install httpie`
#### macOS : `brew install httpie`
#### Fedora/CentOS: `sudo yum install httpie`
#### Python pip: `pip install httpie`


### Installing the binary

You can download the binary directly from the [official website](https://httpie.io/docs#installation) and install it on your system. Once downloaded, extract the file and add the binary to your system path.

## Usage

HTTPie has a simple and intuitive syntax that allows users to send HTTP requests and display responses in a human-readable format. The basic syntax for sending a request
is as follows: `http [flags] [METHOD] URL [REQUEST_ITEMS...]`


### Sending a GET request

To send a GET request to a server, use the following command:
`http GET https://httpbin.org/get`


This will send a GET request to the server at the specified URL and display the response in the terminal.

### Sending a POST request

To send a POST request to a server, use the following command:
`http POST https://httpbin.org/post name=John email=john@example.com`

This will send a POST request to the server at the specified URL with the specified data in the request body.

### Headers

To add headers to a request, use the `-h` or `--header` flag followed by the header name and value:

`http GET https://httpbin.org/get -h 'Authorization: Token 12345'`


This will send a GET request with an `Authorization` header.

### Query parameters

To add query parameters to a request, use the `?` character followed by the parameter name and value:

`http GET https://httpbin.org/get?name=John`


This will send a GET request with a `name` query parameter.

### JSON data

To send JSON data in a request, use the `-j` or `--json` flag followed by the JSON data:

`http POST https://httpbin.org/post -j '{"name": "John", "email": "john@example.com"}'`


This will send a POST request with JSON data in the request body.

## Conclusion

HTTPie is a powerful command-line tool for interacting with web servers through HTTP requests. Its simple and intuitive syntax makes it easy to use, and its various features like JSON support, syntax highlighting, and SSL verification make it a great alternative to other command-line tools like `curl`.