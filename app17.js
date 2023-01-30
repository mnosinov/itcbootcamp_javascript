let speed = prompt("What is the number");

if (speed > 80 && speed <= 120) {
	console.log("You are driving like Shumaher");
} else if (speed <= 80 && speed > 60) {
	console.log("You are driving like Fettel");
} else if (speed <= 60 && speed > 40) {
	console.log("You are driving like Hamilton");
} else if (speed <= 40) {
	console.log("You are driving like grandma");
} else {
	console.log("You are driving like Rocket");
}
