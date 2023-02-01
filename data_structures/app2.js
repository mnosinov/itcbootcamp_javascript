let colors = ['red', 'yellow', 'pink', 'orange', 'black', 'white', 123];
let item, len, index;

console.log(colors);

colors.push('maroon');

console.log(colors);
item = colors.pop();
console.log(item);
console.log(colors);
item = colors.shift();
console.log(item);
console.log(colors);
len = colors.unshift('silver');
console.log(len);
console.log(colors);

index = colors.indexOf('black');
console.log('index of black', index);
console.log(colors[index]);
console.log('index of black', colors.indexOf('gray'));
console.log('index of black', colors.indexOf('silver'));

const sportTypes = ['football', 'golf', 'running', 'polo', 'swimming'];

len = sportTypes.push('judo');
console.log(len);
console.log(sportTypes);
item = sportTypes.pop();
console.log(item);
console.log(sportTypes);
len = sportTypes.unshift('climbing');
console.log(len);
console.log(sportTypes);
item = sportTypes.shift();
console.log(item);
console.log(sportTypes);

index = sportTypes.indexOf('polo');
console.log(index);

