const express = require('express');
const app = express();
const port = 3000;
const IP = 'localhost';

app.listen(port, IP, () => {
	console.log(`Serveren kører på http://${IP}:${port}`); //det er selvfølgelig ikke obligatorisk at have dette console-statement
});
