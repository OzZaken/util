# Hypertext Transfer Protocol (HTTP) 

`HTTP` is a protocol used for transferring data over the web.

It is the foundation of data communication on the World Wide Web, where it is used to deliver web pages and other resources from web servers to clients such as web browsers.
## `Request`
```ps1
[METHOD] [RESOURCE_REQUESTED] [HTTP version]
Host: [URI]
User-Agent: [CLIENT_SYS_INFO]
Accept: [RES_TYPE]
Accept-Language: [RES_LANGUAGE][RES_SEC_LANGUAGE]
Accept-Encoding: [ENCODE]
Connection: [CONNECTION_TYPE]
```

1. **Request Line**: The Request Line contains the HTTP `method`, `URI` (Uniform Resource Identifier), and `HTTP version`.
   ```ps1
   GET /index.html HTTP/1.1
   ```
2. **Request Headers**:  Headers are separated from the request line by a blank line, contains additional information about the request, such as the `user agent`, `content type`, and `accept encoding` may include information such as the `length of the content`, or `authorization information`.
    ```ps1
    Host: www.example.com
    User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36
    Accept-Language: en-US,en;q=0.5
    ```
3. **Request Body**: Optional message body containing data sent by the client to the server. This component is not always present in HTTP requests, depending on the HTTP method being used.
   ```ps1
   username=johndoe&password=secret
   ```

### HTTP request example:

```ps1
GET /index.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:58.0) Gecko/20100101 Firefox/58.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Connection: keep-alive
```

> Since this is a `GET` request, there is no request body.
> 
> 
> `Accept-Language`:
> The `;q=0.5` parameter is used to indicate that the client's preference for the second language listed (in this case, any variant of English) is lower than the preference for the first language listed (English US). 
> 
>---
> `Connection`:
>Indicate how the connection between the client and server should be managed.
>It can contain one or more comma-separated values indicating the desired option(s).
>
>Here are the different options that can be specified:
>
>       `keep-alive`: This option instructs the server to keep the connection open after the request has been completed, so that subsequent requests can be sent over the same connection. This can improve performance by reducing the overhead of establishing a new connection for each request.
>
>       `close`: This option instructs the server to close the connection after the response has been sent. This is the default behavior if the Connection header is not present in the request or if no options are specified.
> 
>---


## `Response`
An HTTP response message consists of three parts: Status Line, Response Headers, and Message Body.

1. `Status Line`: Status Line: The Status Line contains the HTTP version, `status code`, and `status message`.
2. `Response Headers`: (A blank line indicating the end of the response headers.) Additional information about the response is provided in the form of headers. These headers may include information such as the content type of the response body, the length of the content, or caching directives.
3. `Response Body`: The message body containing the requested data or error information, sent by the server to the client. This component is not always present in HTTP responses, depending on the status code and headers being used.

Here is an example HTTP response structure:

```php
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1234
Cache-Control: max-age=3600

<!DOCTYPE html>
<html>
<head>
    <title>Example Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>

```

In this example, the HTTP version is HTTP/1.1, the status code is 200, and the status message is OK. The headers provide additional information about the response, such as the content type, length, and caching directives. The response body contains an HTML document that will be displayed by the client's web browser.