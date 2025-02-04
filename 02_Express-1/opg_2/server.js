const express = require('express');
const app = express();
const port = 3000;
const IP = 'localhost';

app.use('/index', express.static('02_Express-1/opg_2/index.html'));

app.use(express.urlencoded({ extended: true }));
app.post('/submit', (req, res) => {
	const data = req.body;
	console.log('Modtaget:', data);
	res.send('POST- anmodningen er blevet modtaget');
});

/*
app.use((req, res, next) => {
	// Middleware til logging
	console.log(`[${new Date().toLocaleString()}]
	${req.method} ${req.url}`);
	next();
});
app.use((req, res, next) => {
	// Middleware til autentificering
	if (isAuthenticated) {
		next(); // User er ok, gå videre til næste middleware
	} else {
		res.status(401).send('Unauthorized'); // User er ikke ok, send 401 til klienten
	}
});
app.use(express.static('public')); // express.static() returnerer faktisk et middleware til statiske filer, som kalder next() internt
app.get('/home', (req, res) => {
	// Routespecifik handler
	res.send('Welcome to the home page!');
});
app.use((err, req, res, next) => {
	// Fejlbehandler
	console.error(`Error: ${err.message}`);
	res.status(500).send('Internal Server Error');
});
*/

app.listen(port, IP, () => {
	console.log(`Serveren kører på http://${IP}:${port}`); //det er selvfølgelig ikke obligatorisk at have dette console-statement
});
