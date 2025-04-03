const express = require("express");
const app = express();
app.get("/long-poll", (req, res) => {
  const timeout = Math.floor(Math.random() * 5) * 1000;
  const side = Math.random() < 0.5 ? "venstre" : "højre";
  const settimeout = setTimeout(() => { 
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(`${side}:${timeout}`);
  }, timeout);
});
app.listen(3000, () => console.log("Kører på 3000"));