/**
 * Loops can execute the code for the number of times specified.
 */
console.log("Loop execution started");
for (let i = 0; i < 5; i++) {
    console.log("loop index value: " + i);
}
console.log("Loop execution completed");

let cars = [
    {
        'brand': 'Sokoda',
        'name': 'Rapid',
        'year': 2021,
        'color': 'red'
    },
    {
        'brand': 'Honda',
        'name': 'City',
        'year': 2020,
        'color': 'white'
    }
];
for (let i = 0; i < cars.length; i++) {
    console.log("car value at index " + i + ": " + JSON.stringify(cars[i]));
}

let newCars = [];
console.log("new cars: "+ JSON.stringify(newCars));

// Conditional statements
for(let i= 0; i< cars.length; i++) {
    const currentCar = cars[i];
    // Add condtion -> use if or if else, else
    if(currentCar.year != 2020) {
        // Add new element(currentCar) to newCars array
        newCars.push(currentCar);
    }
}

console.log("new cars: "+ JSON.stringify(newCars));


