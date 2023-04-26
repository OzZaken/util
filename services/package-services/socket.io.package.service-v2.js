const { Server } = require("socket.io")
// optional add to server:
// , {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"],
//   },
// }
class SocketIOService {
  constructor(server) {
    this.io = new Server(server);
    this.io.on("connection", this.onConnection.bind(this));
  }

  onConnection(socket) {
    console.log(`Socket ${socket.id} connected`);

    socket.on("disconnect", () => {
      console.log(`Socket ${socket.id} disconnected`);
    });
  }

  joinRoom(socket, roomId) {
    socket.join(roomId);
    console.log(`Socket ${socket.id} joined room ${roomId}`);
  }

  leaveRoom(socket, roomId) {
    socket.leave(roomId);
    console.log(`Socket ${socket.id} left room ${roomId}`);
  }

  emitToRoom(roomId, event, data) {
    this.io.to(roomId).emit(event, data);
    console.log(`Emitted ${event} to room ${roomId}`);
  }

  emitToSocket(socketId, event, data) {
    this.io.to(socketId).emit(event, data);
    console.log(`Emitted ${event} to socket ${socketId}`);
  }
}

module.exports = SocketIOService;
