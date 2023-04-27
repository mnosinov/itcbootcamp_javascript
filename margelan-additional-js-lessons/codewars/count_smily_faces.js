//return the total number of smiling faces in the array

function countSmileys(arr) {
	let allowedSymbols = ':;)D-~';
	let result = 0;
	for (let face of arr) {
		let isFace = true;
		// check face 1
		for (let c of face) {
			if (!allowedSymbols.includes(c)) {
				isFace = false;
				break;
			}
		}
		// check face 2
		if (face.length) {

		}
		// check smile
		let isSmile = true;
		// Each smiley face must contain a valid pair of eyes.
		// Eyes can be marked as : or ;
		if (!(face.includes(':') || face.includes(';'))) isSmile = false;
		console.log(1, face, isSmile);
		// Every smiling face must have a smiling mouth that should be
		// marked with either ) or D
		if (!(face.includes(')') || face.includes('D'))) isSmile = false;
		if (isSmile && isFace) result ++;
		console.log(1, face, isSmile, result);
	}
  return result;
}

NOT FINISHED CODE STATE!

console.log(countSmileys([':)', ';(', ';}', ':-D']));       // should return 2;
console.log(countSmileys([';D', ':-(', ':-)', ';~)']));     // should return 3;
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); // should return 1;
console.log(countSmileys([":-)" , ";~D" , ":-D" , ":_D"])); // should return 1;
console.log(countSmileys([":---)" , "))" , ";~~D" , ";D"])); 
