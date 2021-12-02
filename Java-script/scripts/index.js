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
 * 
 * refer: https://www.w3schools.com/js/js_json_intro.asp
 * 
 */

let car1 = {
    'brand': 'Sokoda',
    'name': 'Rapid',
    'year': 2021,
    'color': 'red'
};

console.log("Type of car 1: " + typeof car1);

let car2 = {
    'brand': 'Honda',
    'name': 'City',
    'year': 2020,
    'color': 'white'
};

// Nested object
let person = {
    firstName: 'Jack',
    lastName: 'Kollar',
    age: 50,
    address: {
        permnantAddress: {
            addressLine1: '',
            addressLine2: '',
            city: 'Hyd',
            state: 'TS'
        },
        currentAddress: {
            addressLine1: '',
            addressLine2: '',
            city: 'Mumbai',
            state: 'Maharastra'
        }
    },
    skills: [
        {
            skillName: 'Javascript',
            experience: 5
        },
        {
            skillName: 'Web development',
            experience: 5
        }
    ],
    phoneNumbers: [152255, 44521]
};

console.log(car1);
// accessing a given property
console.log('Car brand: ' + car1.brand);
console.log('Car color: ' + car1.color);
console.log('Car year: ' + car1['year']);

// Accessing nested object value
console.log('Perminant address city: ' + person.address.permnantAddress.city);
console.log("Person first skill: " + person.skills[0].skillName);
// Or
console.log('current address city: ' + person['address']['currentAddress']['city']);


/**
 * Array: is a special variable which can hold multiple values.
 * example: let names = ["Jack", "Jim", "Jhon"]
 * Accessing elements in array:
 * console.log(names[0]);
 * 
 */
// Declaration
let names = ["Jack", "Jim", "Jhon"];
let cars = [car1, car2];

//  Accessing elements in array
console.log("name at index 0: " + names[0]);
console.log("name at index 1: " + names[1]);
console.log("name at index 2: " + names[2]);
// JSON.stringify -> will convert object as strting
console.log("car details at index 0: " + JSON.stringify(cars[0]));
console.log("car details at index 1: " + JSON.stringify(cars[1]));

console.log("cars list: " + JSON.stringify(cars));

console.log("Person details: " + JSON.stringify(person));

console.log("Person Address details: " + JSON.stringify(person.address));

// Updating an object
// Example (updating property directly): Update person age.
person.age = 56;

// Example (updating property inside array): update person skill - 1
person.skills[0].skillName = "java";

/**
 * Adding new element to existing JSON object
 * Example: add new proprty called currentWorkingCompany to person object.
 */
person['currentWorkingCompany'] = 'Apple';

// Adding a new proprty to an existing array first element.
person.skills[0]["rating"] = 5;

// Adding a new property whose vaue is of type obj
person['workExperience'] = [
    {
        company: 'ABX',
        noOfYears: 2,
        projectName: 'XYS'
    },
    {
        company: 'Intel',
        noOfYears: 5,
        projectName: 'Graphics'
    }
];

console.log('Updated person details: ' + JSON.stringify(person));
