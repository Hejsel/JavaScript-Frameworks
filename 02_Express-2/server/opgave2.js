const express = require('express');
const fs = require("fs");
const app = express();
const port = 3000, IP = "127.0.0.1";
const filmappe = __dirname + "/";
app.use(express.urlencoded({ extended: true }));
app.get("/:fil", (req, res, next) => {
  let fil = req.params.fil;
  if (fil.startsWith("opgave")) {
    if (!fil.endsWith(".html")) fil += ".html";
    res.sendFile(filmappe + fil);
  } else next();
})
app.get("/mult", (req, res) => {
  let x = parseFloat(req.query.x);
  let y = parseFloat(req.query.y);
  res.setHeader('Content-Type', "text/plain");
  res.send((x * y).toString());
});
app.post("/submit", (req, res) => {
  let s = "";
  for (let b1 of req.body.ord1) for (let b2 of req.body.ord2) s += b1 + b2;
  res.send(s);
})
app.listen(port, IP, () => {
  console.log(`Serveren kører på ${IP}:${port}`);
});