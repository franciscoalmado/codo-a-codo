
for (var i = 2; i <= 100; i++) {
	let primo = 1;
	let contador = 2;
	while((contador <= i/contador) && primo) {
		if (i % contador === 0) {
			primo = 0;
		}
		contador++;
	}
	if(primo) {
		console.log("N°: "+i)
	}
}