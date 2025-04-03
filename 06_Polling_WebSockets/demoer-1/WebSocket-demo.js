const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 3000 });
server.on("connection", (klient) => {
  console.log(`${server.clients.size} klient(er) er tilkoblet`);
  klient.on("message", (data) => {
    server.clients.forEach(client => {
      if (client !== klient && client.readyState === WebSocket.OPEN) client.send(data.toString());
    });
  });
  klient.on("close", () => console.log("Klienten er frakoblet"));
});
console.log("WebSocketserver kører på ws://localhost:3000");