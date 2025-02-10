const express = require('express');
const app = express();
const port = 3000;
const IP = 'localhost';
const path = require('path');
const filmappe = path.join(__dirname, '../client/');

// ➤ Sætter en statisk routing, hvor endpointet "/" returnere variablen filmappe som indeholder stien til indholdet i mappen client/ som så er sat til filen opgave1.html
app.get('/', (req, res) => {
	res.sendFile(filmappe + 'opgave1.html');
});

// ➤ Loader filer via dynamisk routing som f.eks. "opgave1", "opgave2" osv. ved at kople en del af URL'en som en variabel/parameter ved navn fil ved at definere et parameter i URL'en med ":", sammen med req.params.fil
app.get('/:fil', (req, res, next) => {
	let fil = req.params.fil;
	if (fil.startsWith('opgave')) {
		if (!fil.endsWith('.html')) fil += '.html';
		res.sendFile(filmappe + fil);
	} else next();
});

// ➤ Multiplikations-API som loades via en specifik routing med endpointet /mult
app.get('/mult', (req, res) => {
	let x = parseFloat(req.query.x);
	let y = parseFloat(req.query.y);
	res.setHeader('Content-Type', 'text/plain');
	res.send((x * y).toString());
});

// ➤ Start serveren
app.listen(port, IP, () => {
	console.log(`Serveren kører på http://${IP}:${port}`);
});
