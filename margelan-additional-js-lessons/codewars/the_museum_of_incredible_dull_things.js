function removeMin(arr) {
	let result = arr;
	let minValue = arr.reduce((a, b) => Math.min(a, b), arr[0]);
	let minValueIndex = arr.findIndex(el => el === minValue);
	return arr.filter((el, index) => !(el == minValue && index == minValueIndex));
}
/*
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
*/

console.log(removeMin([1,2,3,4,5]))
console.log(removeMin([5,3,2,1,4]))
console.log(removeMin([2,2,1,2,1]))
