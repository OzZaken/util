## `intro Sockets`

A socket is a software component that enables two computers to establish a connection and exchange data over a network.

It can be thought of as an endpoint in a two-way communication link.

Sockets are used to build a variety of network applications, such as web browsers, instant messaging programs, and online games.

Sockets operate on the transport layer of the network protocol stack.

The most common transport layer protocols are TCP (Transmission Control Protocol) and UDP (User Datagram Protocol).

TCP is a reliable, connection-oriented protocol that guarantees delivery of data, while UDP is a faster, connectionless protocol that does not guarantee delivery of data.

---

### `How Do Sockets Work?`
Sockets use a client-server model to establish a connection.

The client sends a request to the server, which then accepts the request and establishes a connection.

Once the connection is established, data can be exchanged between the client and the server.

There are two types of sockets `stream sockets` and `datagram sockets`:
- `Stream sockets` use TCP and provide a reliable, ordered, and error-checked stream of bytes
- `datagram sockets`: use UDP and provide an unreliable, unordered, and unverified transmission of packets.
---

<strong>`WebSockets`</strong>
A `socket` is a `low-level networking technology` that provides a way for processes on different computers to communicate with each other over a network.
It allows data to be sent and received between two endpoints over a network, using a combination of IP addresses and port numbers.

`WebSockets`, on the other hand, are a `higher-level protocol` that run over sockets.

`WebSockets` provide a way for web `browsers` to establish a persistent, `bi-directional` communication channel with a `server`.

This enables `real-time, event-driven communication between the server and the browser`, which can be useful for applications such as online gaming, chat applications, and real-time analytics.

In summary, sockets are a low-level networking technology that provides a basic communication channel, while WebSockets are a higher-level protocol that build on top of sockets to provide a more sophisticated communication channel specifically designed for web-based applications.


# `Usage` 
Sockets can be used in full-stack development to build real-time applications, such as chat applications, real-time gaming applications, and collaborative tools.

In order to use sockets in your application, you will need to implement a socket server on the backend and a socket client on the frontend.

# `Server`
To implement a socket server on the backend, you will need to choose a programming language and a socket library. Some popular socket libraries include:

- Node.js: Socket.IO
- Python: SocketServer
- Java: java.net.Socket
- Ruby: EventMachine

Once you have chosen a socket library, you can create a socket server that listens for incoming connections and handles data transmission between the client and the server.
```bash
npm install socket.io
npm install express
```

```javascript
var app = require('express')()
var http = require('http').createServer(app)
var io = require('socket.io')(http)

io.on('connection', function(socket){
    console.log('a user connected')
       
    socket.on('disconnect', function(){
        console.log('user disconnected')
    })  
})
```

# `Client`
To implement a socket client on the frontend, you will need to use a socket library that is compatible with your chosen socket server. Some popular socket libraries for the frontend include:

- Socket.IO (JavaScript)
- SockJS (JavaScript)
- Stomp (JavaScript)
- SocketRocket (Swift)

Once you have chosen a socket library, you can create a socket client that establishes a connection with the server and sends and receives data.

```html
<script src="/socket.io/socket.io.js"></script>
<script>
var socket = io()
</script>
```


# `Handling a single event`

Server
```javascript
io.on('connection', (socket) => {
    socket.on('chat newMsg'
        , (msg) => {
            console.log('Server got msg: ' + msg)
        })
})
```

Client:
```javascript
socket.emit('chat newMsg','hello world')
```


# `Send message`

#### `Sending a message`
emitting an event to all connected sockets

Server
```javascript
io.on('connection', (socket) => {
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
    socket.on('newMsg', (msg) => {
        console.log('message: ' + msg)
        msgs.push(msg)
        io.emit('addMsg', msg)
    })
})
```

Client
```javascript
socket.on('addMsg', addMsg)
function addMsg(msg) {
    var elMsg = document.createElement('li')
    elMsg.innerText = `${msg.nickname}: ${msg.txt}`
    elMsgs.appendChild(elMsg)
    window.scrollTo(0, document.body.scrollHeight)
}
```

---

#### `Sending to specific client`
```javascript
socket.emit('addMsg', 'Just for you')
```

#### `Sending to all connected clients (sockets)`
```javascript
// Sending to all connected clients (sockets)
io.emit('addMsg', 'You are all welcome')
```

---

#### `Sending to all clients except specific socket (e.g. the sender)`
```javascript
socket.broadcast.emit('addMsg', 'Puki joined')
```

# More Ideas
```javascript
setTimeout(() => {
    socket.emit('newMsg',
        { from: 'System', txt: 'Thanks for sharing' })
}, 1500)
```
# `Best Practices`

1. Use a message format that is easy to parse and validate, such as JSON or XML.
2. Implement error handling to handle unexpected data or disconnections.
3. Use secure sockets (SSL/TLS) to encrypt data transmission.
4. Monitor socket connections to prevent memory leaks or other performance issues.
5. Test socket functionality thoroughly to ensure that it works as expected.