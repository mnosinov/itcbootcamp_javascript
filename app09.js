let currentYear = 2023;

let presidentsQauntity = 3;

let makronBirthYear = 1977;
let baidenBirthYear = 1942;
let trumpBirthYear = 1946;

let makronAge = currentYear - makronBirthYear;
let baidenAge = currentYear - baidenBirthYear;
let trumpAge = currentYear - trumpBirthYear;

let agesSum = makronAge + baidenAge + trumpAge;
let avgAge = agesSum / presidentsQauntity;

console.log("Makron's age is",  makronAge);
console.log("Baiden's age is", baidenAge);
console.log("Trump's age is " + trumpAge);
console.log("Total sum of presidents ages is", agesSum);
console.log("Average age of presidents is", avgAge);
