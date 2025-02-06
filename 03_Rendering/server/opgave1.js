const express = require('express');
const app = express();
const port = 3000;
const IP = 'localhost';
const path = require('path');

// ➤ Sender skakbræt HTML til klienten
app.get('/skakbraet', (req, res) => {
	// ➤ Hent skakbrætstørrelse fra URL-parameteren (default 8x8)
	const size = parseInt(req.query.size) || 8;

	// ➤ Generer HTML for skakbrættet
	let skakBraetHTML = genererSkakBraet(size);

	// ➤ Send HTML som svar
	res.send(skakBraetHTML);
});

// ➤ Funktion til at generere HTML til skakbrættet
function genererSkakBraet(size) {
	let skakBraet =
		'<!DOCTYPE html><html lang="da"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Skakbræt</title><style> .skak-rude {width: 50px; height: 50px; display: inline-block;} .skak-svart {background-color: black;} .skak-hvid {background-color: white;} </style></head><body><h1>Skakbræt (' +
		size +
		'x' +
		size +
		')</h1><div style="display: grid; grid-template-columns: repeat(' +
		size +
		', 50px);">';

	// ➤ Generer skakbrættet
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			let klasse = (i + j) % 2 === 0 ? 'skak-hvid' : 'skak-svart';
			skakBraet += `<div class="skak-rude ${klasse}"></div>`;
		}
	}

	skakBraet += '</div></body></html>';
	return skakBraet;
}

// ➤ Start serveren
app.listen(port, () => {
	console.log(`Serveren kører på http://localhost:${port}`);
});
