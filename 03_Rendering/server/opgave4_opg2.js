const express = require('express');
const app = express();
const port = 3000;
const IP = 'localhost';

// ➤ Opsætning af Pug som template-motor
app.set('view engine', 'pug');
app.set('views', __dirname + '/views'); // Sørg for at kigge i /views-mappen

// ➤ Route til forsiden
app.get('/', (req, res) => {
	// Generer to tilfældige heltal mellem -5,000,000 og 5,000,000
	const x = Math.floor(Math.random() * 1000000) - 5000000;
	const y = Math.floor(Math.random() * 1000000) - 5000000;
	const z = x * y;

	// Send data til Pug-templaten
	res.render('opgave2', { x, y, z });
});

// ➤ Start serveren
app.listen(port, IP, () => {
	console.log(`Serveren kører på http://${IP}:${port}`);
});
