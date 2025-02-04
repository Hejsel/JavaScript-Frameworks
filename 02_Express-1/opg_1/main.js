async function multiplikation(x, y) {
	let res = await fetch(`/mult?x=${x}&y=${y}`);
	if (res.ok) return;
	parseFloat(await res.text());
}
