function columns(list) {
	const maxLength = Math.max(...list.map((word) => word.length));

	for (let i = 0; i < maxLength; i++) {
		for (let j = 0; j < list.length; j++) {
			let letter = '';
			if (list[j][i] == undefined) {
				letter = ' ';
			} else {
				letter = list[j][i] + ' ';
			}
			process.stdout.write(letter);
		}
		console.log();
	}
}

columns(['Hello', 'World', 'in', 'a', 'frame']);
