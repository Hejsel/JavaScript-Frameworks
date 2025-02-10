const express = require('express');
const app = express();
const port = 3000;
const IP = 'localhost';

// ➤ Opsætning af Pug som template-motor
app.set('view engine', 'pug');
app.set('views', __dirname + '/views'); // Sørg for, at vi kigger i /views-mappen

// ➤ Sender skakbræt HTML til klienten
app.get('/opgave3', (req, res) => {
	// ➤ Hent skakbrætstørrelse fra URL-parameteren (default 8x8)
	const size = parseInt(req.query.size) || 8;
	const backgroundColor = req.query.color || 'black';

	// ➤ Opret en array med tal fra 0 til size-1
	const rangeArray = Array.from({ length: size }, (_, index) => index);

	// ➤ Send data til Pug-templaten
	res.render('opgave3', { size, backgroundColor, rangeArray });
});

// ➤ Start serveren
app.listen(port, IP, () => {
	console.log(`Serveren kører på http://${IP}:${port}`);
});

// Eksempel:
// URL: http://localhost:3000/opgave3?color=blue&size=8
// Dette vil ændre den sorte farve på skakbrættet til blå.
