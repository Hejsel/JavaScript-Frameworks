async function sendData(event) {
	event.preventDefault();

	let tekst = document.getElementById('data').value;
	let res = await fetch('/submit', {
		method: 'POST',
		headers: { 'Content-Type': 'text/plain' },
		body: tekst,
	});

	if (res.ok) {
		document.write(await res.text()); // Viser checksum direkte på siden
	} else {
		document.write('Fejl i serverkommunikation.');
	}
}
