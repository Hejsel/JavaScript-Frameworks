const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 3000 });

const klienter = new Map(); // For at holde styr på klienterne
const beskedBuffer = new Map(); // For at gemme beskeder for offline klienter

server.on("connection", (klient) => {
  let id = null; // Klientens ID

  // Når en klient sender en besked
  klient.on("message", (data) => {
    const { id: senderId, besked, modtagerId } = JSON.parse(data);

    // Gemmer klientens ID
    if (!id) {
      id = senderId;
      klienter.set(id, klient);
      console.log(`Klient med ID ${id} forbundet.`);

      // Hvis der er beskeder gemt for denne klient (f.eks. hvis den var offline)
      if (beskedBuffer.has(id)) {
        const gemteBeskeder = beskedBuffer.get(id);
        gemteBeskeder.forEach((gemtBesked) => {
          klient.send(gemtBesked); // Send de gemte beskeder til klienten
        });
        beskedBuffer.delete(id); // Ryd beskedbufferen
      }
    }

    // Send besked til den angivne modtager
    if (klienter.has(modtagerId)) {
      const modtager = klienter.get(modtagerId);
      if (modtager.readyState === WebSocket.OPEN) {
        modtager.send(`Besked fra ${senderId}: ${besked}`);
      } else {
        // Hvis modtageren er offline, gem beskeden
        if (!beskedBuffer.has(modtagerId)) {
          beskedBuffer.set(modtagerId, []);
        }
        beskedBuffer.get(modtagerId).push(`Besked fra ${senderId}: ${besked}`);
        console.log(`Besked gemt for offline modtager ${modtagerId}`);
      }
    } else {
      console.log(`Modtager med ID ${modtagerId} ikke fundet.`);
    }
  });

  // Når en klient frakobles
  klient.on("close", () => {
    if (id) {
      klienter.delete(id);
      console.log(`Klient med ID ${id} frakoblet.`);
    }
  });
});

console.log("WebSocket-server kører på ws://localhost:3000");
