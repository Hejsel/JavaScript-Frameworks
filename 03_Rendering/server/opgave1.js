const express = require('express');
const app = express();
const port = 3000;
const IP = 'localhost';

// ➤ Sender skakbræt HTML til klienten
app.get('/skakbraet', (req, res) => {
	// ➤ Hent skakbrætstørrelse fra URL-parameteren (default 8x8)
	const size = parseInt(req.query.size) || 8;

	// ➤ Generer HTML for skakbrættet
	let skakBraetHTML = genererSkakBraet(size);

	// ➤ Send HTML som svar
	res.send(skakBraetHTML);
});

// ➤ Funktion til at generere HTML med skakbrættet som en tabel
function genererSkakBraet(size) {
	let skakBraet = `
		<!DOCTYPE html>
		<html lang="da">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Skakbræt</title>
			<style>
				table { border-collapse: collapse; }
				td { width: 50px; height: 50px; }
				.skak-sort { background-color: black; }
				.skak-hvid { background-color: white; }
			</style>
		</head>
		<body>
			<h1>Skakbræt (${size}x${size})</h1>
			<table border="1">`;

	// ➤ Generer skakbrættet som en tabel
	for (let i = 0; i < size; i++) {
		skakBraet += '<tr>';
		for (let j = 0; j < size; j++) {
			let klasse = (i + j) % 2 === 0 ? 'skak-hvid' : 'skak-sort';
			skakBraet += `<td class="${klasse}"></td>`;
		}
		skakBraet += '</tr>';
	}

	skakBraet += `
			</table>
		</body>
		</html>`;

	return skakBraet;
}

// ➤ Start serveren
app.listen(port, IP, () => {
	console.log(`Serveren kører på http://${IP}:${port}`);
});
