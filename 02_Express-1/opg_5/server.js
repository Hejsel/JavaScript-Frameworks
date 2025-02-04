const express = require('express');
const app = express();
const port = 3000;
const IP = 'localhost';

app.use('/index', express.static('02_Express-1/opg_5/index.html'));

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

// Middleware til at logge anmodninger
function logRequest(req, res, next) {
	const logMessage = `[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`;
	console.log(logMessage); // Logger anmodningens metode og URL
	next(); // Gå videre til næste middleware eller rute
}

// Middleware til at håndtere fejl
function errorHandler(err, req, res, next) {
	console.error(`Fejl: ${err.message}`); // Logger fejlmeddelelsen
	res.status(500).send('Der opstod en fejl på serveren');
}

// Anvend logging middleware
app.use(logRequest);

// Brug middleware til at parse ren tekst
app.use(renTekstParser);

// POST-anmodning til at modtage tekst og returnere checksum
app.post('/submit', (req, res, next) => {
	if (!req.body || req.body.trim() === '') {
		const error = new Error('Fejl: Ingen tekst modtaget');
		error.status = 400; // Sæt status til 400 (Bad Request)
		return next(error); // Videregiv fejlen til errorHandler
	}

	let checksum = beregnChecksum(req.body); // Beregn checksum

	res.setHeader('Content-Type', 'text/plain');
	res.send(checksum.toString()); // Returner checksum som tekst
});

// Anvend global fejlbehandlingsmiddleware (skal være sidst)
app.use(errorHandler);

app.listen(port, IP, () => {
	console.log(`Serveren kører på http://${IP}:${port}`);
});
