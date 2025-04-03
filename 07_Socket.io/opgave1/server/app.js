const http = require('http');
const hostname = "127.0.0.1";
const port = 8080;

const httpServer = http.createServer();

const { Server } = require('socket.io');
const io = new Server(httpServer, {
  // Hvis man vil have connection state recovery
  connectionStateRecovery: {}
});

io.on('connection', (socket) => {
    socket.on('send name', (username) => {
        io.emit('send name', (username));
    });

    socket.on('send message', (chat) => {
        io.emit('send message', (chat));
    });
});
/*
io.on("connection", (socket) => {
  socket.on('eventNavn1', (callback1) => {
    // Håndter eventNavn1
  });

  socket.on('eventNavnN', (callbackN) => {
    // Håndter eventNavnN
  });
});
*/
io.listen(httpServer);
httpServer.listen(port, hostname, () => {
  console.log(`Serveren kører på http://${hostname}:${port}`);
});
