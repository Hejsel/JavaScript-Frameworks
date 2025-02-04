const express = require('express');
const app = express();
const port = 3000;
const IP = 'localhost';

app.use('/index', express.static('02_Express-1/opg_3/index.html'));

// Middleware til at parse tekstbaseret data
function renTekstParser(req, res, next) {
	if (req.headers['content-type'] !== 'text/plain') return next();
	let rawData = '';
	req.on('data', (chunk) => (rawData += chunk));
	req.on('end', () => {
		req.body = rawData;
		next();
	});
	req.on('error', (err) => next(err));
}

// Enkel checksum-funktion
function beregnChecksum(tekst) {
	let checksum = 0;
	for (let i = 0; i < tekst.length; i++) {
		checksum += tekst.charCodeAt(i); // Summerer ASCII-værdierne
	}
	return checksum % 256; // Begrænser resultatet til 0-255
}

app.use(renTekstParser); // Bruger middleware til at parse ren tekst

// POST-anmodning til at modtage tekst og returnere checksum
app.post('/submit', (req, res) => {
	if (!req.body) {
		return res.status(400).send('Fejl: Ingen tekst modtaget');
	}

	let checksum = beregnChecksum(req.body); // Beregn checksum

	res.setHeader('Content-Type', 'text/plain');
	res.send(checksum.toString()); // Returner checksum som tekst
});

app.listen(port, IP, () => {
	console.log(`Serveren kører på http://${IP}:${port}`);
});
