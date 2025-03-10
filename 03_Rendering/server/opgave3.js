const express = require('express');
const app = express();
const port = 3000;
const IP = 'localhost';

// ➤ Opsætning af EJS som template-motor
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); // Sikrer, at vi kigger i /views-mappen

// ➤ Sender skakbræt HTML til klienten
app.get('/opgave3', (req, res) => {
	// ➤ Hent skakbrætstørrelse fra URL-parameteren (default 8x8)
	const size = parseInt(req.query.size) || 8;
	const backgroundColor = req.query.color || 'black';

	// ➤ Send data til EJS-templaten
	res.render('opgave3', { size, backgroundColor });
});

// ➤ Start serveren
app.listen(port, IP, () => {
	console.log(`Serveren kører på http://${IP}:${port}`);
});

// Eksempel:
// URL: http://localhost:3000/opgave3?color=blue&size=8
// Dette vil ændre den sorte farve på skakbrættet til blå.
