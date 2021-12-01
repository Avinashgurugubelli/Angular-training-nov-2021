/**
 * JAVA SCRIPT: basics
 */

// Number datatype variable
let a = 400;
// console.log -> will print to the browser console.
console.log(a);
// typeof -> to check the data type of the variable.
console.log(typeof a);

// string datatype variable
let firstName = "Martin";
let lastName = "Deppe";
// String concatination
let fullName = firstName + ", " + lastName;
console.log("first name: " + firstName);
console.log("last name: " + lastName);
console.log("full name: " + fullName);
// console.log(typeof firstName);

// Concatinating different datatypes
console.log(a + firstName);

// Arithmetic operators
let num1 = 100;
let num2 = 200;
// Add
console.log(num1 + num2);
// substract
console.log(num1 - num2);
// multiply
console.log(num1 * num2);
// divide
console.log(num1 / num2);

/**
 * Difference b/w let and const:
 * refer: https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75
 * 
 */
let phoneNumber = "123456";
console.log("Phone number: " + phoneNumber); // o/p: 123456
// altering a variable - reassigning a value
phoneNumber = "789456";
console.log("Phone number: " + phoneNumber); // o/p: 789456

const city = "Hyderabad";
// console.log(city); 
// city = "bangalore"; // Error: Uncaught TypeError: Assignment to constant variable.
console.log(city);



/**
 * Java script objects - or json object - dictionary
 * 
 * Example: employee
 * properties of an employee: EmployeeID, Name, Salary etc.
 * 
 * Example: car
 * properties of car: model, name, year, brand, color
 * 
 * syntax: let variable_name = {"key": "value"}
 * - Key should be unique
 */

let car = {
    'brand': 'Sokoda',
    'name': 'Rapid',
    'year': 2021,
    'color': 'red'
};

// let car2 = {
//     'brand': 'Honda',
//     'name': 'City',
//     'year': 2020,
//     'color': 'white'
// };

console.log(car);
// accessing a given property
console.log('Car brand: ' + car.brand);
console.log('Car color: ' + car.color);
console.log('Car year: ' + car['year']);
