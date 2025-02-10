const express = require('express');
const app = express();
const port = 3000;
const IP = 'localhost';
const path = require('path');

const nav = `<nav>
	<a href="/">Hjem</a>
	<a href="/oversigt">Oversigt</a>
	<a href="/login">Login</a>
</nav>`;

// ➤ Statisk Routing
app.use('/images', express.static('01_Express-1/images/offentlige'));

// ➤ Dynamisk Routing (Forfinet)
/*
app.get('/:filename(login|oversigt)', (req, res) => {
	res.sendFile(path.join(__dirname, req.params.filename + '.html'));
}); //dette er reelt en hændelseslytter, req er objektet for anmodningen, res er objektet for responsen
*/

// ➤ Dynamisk Routing (Besal)
/*
app.get('/login/:filename', (req, res) => {
	//res.setHeader('Content-Type', 'text/html');
	res.sendFile(path.join(__dirname, '/login.html'));
});
app.get('/oversigt/:filename', (req, res) => {
	//res.setHeader('Content-Type', 'text/html');
	res.sendFile(path.join(__dirname, '/oversigt.html'));
});
*/
app.listen(port, IP, () => {
	console.log(`Serveren kører på http://${IP}:${port}`); //det er selvfølgelig ikke obligatorisk at have dette console-statement
});
