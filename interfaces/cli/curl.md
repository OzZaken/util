# curl

`curl` is a command-line tool for transferring data over various protocols.

It supports `HTTP`, `FTP`, `SMTP`, and many other protocols, and can be used to download files, upload files, and send requests to web servers.

## commands
| Description                                                      | Command                                                                                 |
| ---------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Retrieving the content of a webpage                              | `curl http://example.com`                                                               |
| Retrieving the content of a webpage and saving it to a file      | `curl http://example.com -o example.html`                                               |
| Retrieving the content of a webpage and displaying the headers   | `curl -i http://example.com`                                                            |
| Retrieving the content of a webpage using a specific HTTP method | `curl -X POST http://example.com`                                                       |
| Sending data to a server                                         | `curl -d "name=value" http://example.com`                                               |
| Sending JSON data to a server                                    | `curl -H "Content-Type: application/json" -d '{"key":"value"}' http://example.com`      |
| Uploading a file to a server                                     | `curl -F "file=@/path/to/file.txt" http://example.com/upload`                           |
| Retrieving the content of a webpage using a proxy                | `curl -x http://proxy-server:port http://example.com`                                   |
| Retrieving the content of a webpage using basic authentication   | `curl -u username:password http://example`                                              |
| Retrieving JSON data from an API                                 | `curl -H "Content-Type: application/json" -G https://api.example.com/data`              |
| Retrieving and formatting JSON data from an API                  | `curl -H "Content-Type: application/json" -G https://api.example.com/data               | jq` |
| Retrieving and saving JSON data from an API                      | `curl -H "Content-Type: application/json" -G https://api.example.com/data -o data.json` |

## Basic Usage
To download a file using `curl`, you can use the following command: 
`curl -O <url>`


Replace `<url>` with the URL of the file you want to download. The `-O` option tells `curl` to save the file with the same name as the remote file.

You can also use `curl` to send HTTP requests, like so:
`curl <url>`


This will send a GET request to the specified URL and print the response to the console.

## Advanced Usage

`curl` is a very powerful tool with many advanced features. Some examples of advanced usage include:

- Sending data in the body of an HTTP request (`curl -X POST -d 'data' <url>`)
- Using authentication (`curl -u username:password <url>`)
- Following redirects (`curl -L <url>`)
- Setting custom headers (`curl -H 'header: value' <url>`)

For more information about using `curl`, consult the documentation and man pages.