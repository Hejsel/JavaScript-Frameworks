const express = require('express');
const app = express();
const port = 3000;
const IP = 'localhost';

let igang = false,intervalID;
app.get("/long-poll", (req, res) => {
  if(!intervalID) intervalID = setInterval(async () => {
    if (igang) return;
    igang = true;
    const result = await fetch("https://netzfrequenzmessung.de:9080/frequenz04a.xml?c=" + Math.round(Math.random() * 100000) * 31);
    const tekst = await result.text();
    igang = false;
    let frekvensTekst = tekst.match(/<f2>(.+)<\/f2>/);console.log(frekvensTekst);
    if (frekvensTekst) {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.send(frekvensTekst[1]);
      clearInterval(intervalID);intervalID=null;
    }
  }, 1000);
});
app.listen(port, IP, () => {
	console.log(`Serveren kører på http://${IP}:${port}`); //det er selvfølgelig ikke obligatorisk at have dette console-statement
});