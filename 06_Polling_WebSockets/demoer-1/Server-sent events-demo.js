const express = require("express");
const app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
app.get("/sse", (req, res) => {
  console.log("Klient er forbundet");
  let timeout = Math.floor(Math.random() * 5) * 1000;
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Access-Control-Allow-Origin", "*");
  setTimeout(send, timeout);
  function send() {
    clearTimeout (timeoutID); // NEW V
    const side = Math.random() < 0.5 ? "venstre" : "højre";
    res.write(`event:${side}\n`) // NEV V TILFØJET TIL AT ARBEJDE MED UNDERKANALER
    res.write(`data:${timeout}\n\n`);
    //res.write(`data:${side}:${timeout}\n\n`); OLD V
    timeout = Math.floor(Math.random() * 5) * 1000;
    timeoutID = setTimeout(send, timeout); // NEW V
    //const settimeout = setTimeout(send, timeout); OLD V
  }
  req.on("close", () => {
    console.log("Klienten er gået");
  });
});
app.listen(3000, () => console.log("SSE-server kører på http://localhost:3000"));
//curl -X GET "https://opensky-network.org/api/states/all"