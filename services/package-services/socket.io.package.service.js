const http = require("http");
const socketio = require("socket.io");

class SocketIOService {
  constructor(server) {
    this.io = socketio(server);
    this.users = new Map();
    this.initialize();
  }

  initialize() {
    this.io.on("connection", (socket) => {
      console.log(`Socket connected: ${socket.id}`);

      // Register the user when they connect
      socket.on("register-user", (userData) => {
        this.registerUser(socket.id, userData);
      });

      // Broadcast the chat message to all users
      socket.on("send-chat-message", (messageData) => {
        this.broadcastMessage(messageData);
      });

      // Unregister the user when they disconnect
      socket.on("disconnect", () => {
        this.unregisterUser(socket.id);
      });
    });
  }

  registerUser(socketId, userData) {
    console.log(`User registered: ${userData.username}`);
    this.users.set(socketId, userData);
    this.broadcastUserList();
  }

  unregisterUser(socketId) {
    if (this.users.has(socketId)) {
      const userData = this.users.get(socketId);
      console.log(`User unregistered: ${userData.username}`);
      this.users.delete(socketId);
      this.broadcastUserList();
    }
  }

  broadcastMessage(messageData) {
    console.log(`Chat message from ${messageData.username}: ${messageData.message}`);
    this.io.emit("chat-message", messageData);
  }

  broadcastUserList() {
    const userList = Array.from(this.users.values());
    console.log(`User list updated: ${JSON.stringify(userList)}`);
    this.io.emit("user-list", userList);
  }
}

module.exports = SocketIOService;
