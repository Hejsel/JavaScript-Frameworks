const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
const IP = 'localhost';
const path = require('path');

// ➤ Opsætning af EJS som template-motor
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ➤ Opsæt body-parser til at håndtere POST-data
app.use(express.urlencoded({ extended: true }));

// ➤ Simulere en brugerfil, hvor hver bruger har info og logdata
const usersFile = path.join(__dirname, 'users.txt');

// ➤ Helper-funktion til at læse brugere fra fil
const readUsers = () => {
	if (fs.existsSync(usersFile)) {
		const data = fs.readFileSync(usersFile, 'utf-8');
		return data.split('\n').map((line) => {
			const [username, password, lastLogin] = line.split(',');
			return { username, password, lastLogin };
		});
	}
	return [];
};

// ➤ Route for loginformular
app.get('/', (req, res) => {
	res.render('login');
});

// ➤ Route til at håndtere login
app.post('/login', (req, res) => {
	const { username, password } = req.body;
	const users = readUsers();

	const user = users.find((u) => u.username === username && u.password === password);

	if (user) {
		const lastLogin = new Date().toLocaleString();
		// Opdater brugeren med ny login-tid
		const updatedUsers = users.map((u) => {
			if (u.username === username) {
				u.lastLogin = lastLogin;
			}
			return u;
		});

		// Gem opdaterede brugere tilbage til filen
		const updatedData = updatedUsers.map((u) => `${u.username},${u.password},${u.lastLogin}`).join('\n');
		fs.writeFileSync(usersFile, updatedData);

		// Server den personaliserede side
		res.render('dashboard', { username, lastLogin });
	} else {
		res.send('Invalid username or password');
	}
});

// ➤ Start serveren
app.listen(port, IP, () => {
	console.log(`Serveren kører på http://${IP}:${port}`);
});
