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
console.log("new cars: " + JSON.stringify(newCars));

// Conditional statements
for (let i = 0; i < cars.length; i++) {
    const currentCar = cars[i];
    // Add condtion -> use if or if else, else
    if (currentCar.year != 2020) {
        // Add new element(currentCar) to newCars array
        newCars.push(currentCar);
    }
}
console.log("new cars: " + JSON.stringify(newCars));

// FOR - IN loop - used to loop the objects

let person = {
    firstName: 'Jack',
    lastName: 'Kollar',
    age: 50
};

console.log(JSON.stringify(person));

for (const key in person) {
    const value = person[key];
    console.log(key + ": " + value)
}

/**
 * While loop:
 * syntax: 
 * while(condition) {
 *  // code
 * }
 * 
 */
let count = 0;
while (count <= 5) {
    console.log("current count: " + count);
    count++; // i.e. count = count+1;
}

// Nested loop.

let employees = [
    {
        firstName: 'Jack',
        lastName: 'Kollar',
        age: 50,
        phoneNumbers: [152255, 44521],
        skills: [
            {
                skillName: 'Javascript',
                experience: 5
            },
            {
                skillName: 'Web development',
                experience: 5
            }
        ]
    },
    {
        firstName: 'Martin',
        lastName: 'deppe',
        age: 35,
        phoneNumbers: [445222, 1125463],
        skills: [
            {
                skillName: 'C#',
                experience: 5
            },
            {
                skillName: 'Python',
                experience: 5
            }
        ]
    }
];

// Looping list of employyes
for (let i = 0; i < employees.length; i++) {
    // holding the current employe at the index i
    const currentEmployee = employees[i];

    // holding the current employee skills 
    const currentEmployeeSkills = currentEmployee.skills;

    // Looping the current employee skill to display it's values.
    for (let j = 0; j < currentEmployeeSkills.length; j++) {

        // current skill
        const skill = currentEmployeeSkills[j];

        // // logging
        // console.log(`{employee name: ${currentEmployee.firstName}, ${currentEmployee.lastName}, skills: {
        //     name: ${skill.skillName},
        //     experience: ${skill.experience}
        // }}`);

        // 3rd loop -> looping the curernt employee skills Json object.
        for (const s in skill) {
            // logging
            console.log(`{employee name: ${currentEmployee.firstName}, ${currentEmployee.lastName},
            ${s}: ${skill[s]},
        }`);
        }
    }
}

// reverse order loop
const numbers = [100, 200, 300];
for (let n = numbers.length-1; n >= 0; n--) {
    console.log(`value at index ${n}: ${numbers[n]}`);
}