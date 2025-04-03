const http = require('http');
const hostname = "127.0.0.1";
const port = 8080;

// Opret HTTP-server
const httpServer = http.createServer();

// Opret en Socket.IO-server
const { Server } = require('socket.io');
const io = new Server(httpServer);

io.on("connection", (socket) => {
    // Når klienten ønsker at skifte rum
    socket.on("rumskift", (rumIdentifier) => {
        // Først, hvis klienten allerede er i et rum, kan vi få den til at forlade det
        if (socket.data.room) {
            socket.leave(socket.data.room); // Forlad tidligere rum
        }

        // Tilslut klienten til det nye rum
        socket.join(rumIdentifier);
        socket.data.room = rumIdentifier; // Gem ruminformation i socket.data
        console.log(`Bruger skiftede til rum: ${rumIdentifier}`);
    });

    // Håndter indkommende beskeder
    socket.on('send name', (username) => {
        io.to(socket.data.room).emit("send name", username); // Send navnet til alle i samme rum
    });

    socket.on('send message', (chat) => {
        io.to(socket.data.room).emit("send message", chat); // Send beskeden til alle i samme rum
    });

    // Håndter klientfrakobling
    socket.on('disconnect', () => {
        console.log('En bruger blev frakoblet');
    });
});

// Start serveren
httpServer.listen(port, hostname, () => {
  console.log(`Serveren kører på http://${hostname}:${port}`);
});
