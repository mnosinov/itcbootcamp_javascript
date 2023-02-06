const cars = [
  { make: "Toyota", model: "Camry", year: 2005 },
  { make: "Tesla", model: "Model 3", year: 2019 },
  { make: "Honda", model: "Accord", year: 2007 },
  { make: "Ford", model: "Mustang", year: 2022 },
  { make: "Chevrolet", model: "Silverado", year: 2010 },
  { make: "Dodge", model: "Charger", year: 2016 },
  { make: "Nissan", model: "Altima", year: 2014 },
  { make: "BMW", model: "3 Series", year: 2015 },
  { make: "Jeep", model: "Wrangler", year: 2017 },
  { make: "Subaru", model: "Outback", year: 2018 }
];

console.log(cars.filter( car => car.year > 2014 ));
console.log(cars.filter( car => car.make.toLowerCase().indexOf('s') !== -1 ));
