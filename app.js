const colors = ["white", "black", "blue", "red"];
console.log(colors.indexOf("red"));
let indexOfRed = colors.indexOf("red");

let deletedColors = colors.splice(indexOfRed, 1);
console.log(deletedColors);
console.log(colors);
deletedColors = colors.splice(0, 2);
console.log(deletedColors);
console.log(colors);

let indexOfAbcentColor = colors.indexOf("orange");
console.log(indexOfAbcentColor);

