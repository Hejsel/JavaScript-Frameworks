const express = require('express');
const app = express();
const port = 3000;
const IP = 'localhost';
const path = require('path');
const filmappe = path.join(__dirname, '../client/');

// ➤ Gør "/" til at returnere opgave1.html automatisk
app.get('/', (req, res) => {
	res.sendFile(filmappe + 'opgave1.html');
});

// ➤ Loader filer som f.eks. "opgave1.html"
app.get('/:fil', (req, res, next) => {
	let fil = req.params.fil;
	if (fil.startsWith('opgave')) {
		if (!fil.endsWith('.html')) fil += '.html';
		res.sendFile(filmappe + fil);
	} else next();
});

// ➤ Multiplikations-API
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
