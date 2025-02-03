const express = require('express');
const app = express();
const port = 3001;
const IP = 'localhost';
//const path = require('path');

app.get('/mult', (req, res) => {
	let x = parseFloat(req.query.x);
	let y = parseFloat(req.query.y);
	res.setHeader('Content-Type', 'text/plain');
	res.send((x * y).toString());
});

app.listen(port, IP, () => {
	console.log(`Serveren kører på http://${IP}:${port}`); //det er selvfølgelig ikke obligatorisk at have dette console-statement
});
