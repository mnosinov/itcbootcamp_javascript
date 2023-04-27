var finalDestination = function(currentPos, directions) {
  var locales = [
    ["Deepwood Motte", "Shadow Tower", "Castle Black", "Eastwatch", "Bay of Seals"],
    [ "The Stony Shore", "Torrhen's Square", "Winterfell", "The Dreadfort", "Karhold"],
    [ "Flint's Finger", "Barrowtown", "Moat Cailin", "White Harbour", "Widow's Wat"],
    [ "Pyke", "Seagard", "The Twins", "Sisterton", "The Fingers"],
    [ "The Crag", "Riverrun", "Darry", "The Eyrie", "Gulltown"],
    [ "Castamere", "Acorn Hall", "Harrenhal", "Maidenpool", "Dragonstone"],
    [ "Lannisport", "Stoney Sept", "King's Landing", "Blackwater Bay", "Sharp Point"],
    [ "High Garden", "Bitterbridge", "King's Wood", "Storm's End", "Evenfall"],
    [ "Old Town", "Horn Hill", "Prince's Pass", "Planky Town", "Sunspear"]
  ];

	// find current position indexes
	let iPos = 0, jPos = 0;

	while (iPos < 9) {
		jPos = locales[iPos].findIndex(locale => locale === currentPos);
		if (jPos !== -1) break;
		iPos++;
	}
	if (iPos == 9) return 'Current Position not found';

	// change position
	for (let move of directions.split(" ")) {
		let direction = move[0];
		let steps = +move[1];
		if (direction === 'N') iPos -= steps;
		if (direction === 'S') iPos += steps;
		if (direction === 'W') jPos -= steps;
		if (direction === 'E') jPos += steps;
	}

	// check for limits
	if (iPos < 0) return 'The Wall blocks your way';
	if (iPos > 8 || jPos < 0 || jPos > 4) return 'You do not have a ship to cross this sea.';
	return locales[iPos][jPos];
}

console.log(finalDestination("King's Landing", "N5"));	//"Winterfell"
console.log(finalDestination("King's Landing", "N2 W1")); // "Riverrun");
console.log(finalDestination("King's Landing", "S2 E2")); // "Sunspear");
console.log(finalDestination("Winterfell", "W1 S3")); // "Riverrun");
console.log(finalDestination("Winterfell", "S3 W1 S2 W1")); // "Lannisport");
console.log(finalDestination("King's Landing", "N7")); // "The Wall blocks your way");
console.log(finalDestination("King's Landing", "E3")); // "You do not have a ship to cross this sea.");
console.log(finalDestination("King's Landing", "W1 S3")); // "You do not have a ship to cross this sea.");
console.log(finalDestination("Winterfell", "S2 W3")); // "You do not have a ship to cross this sea.");
