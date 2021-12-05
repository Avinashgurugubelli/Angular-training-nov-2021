/**
 * Functions:
 * 
 * Defnition:
 * ---------
 * A JS Function is a block of code written to perform a given task.
 * 
 * Syntax:
 * function functionName(param1, param2, param3, ......) {
 *      // code to be executed.
 * }
 * 
 * When it will be executed?
 * - When it is invoked/called from a javascript code.
 * - When an event is performed (example: button click)
 * 
 * 
 * Why we need functions?
 * - You can reuse the code
 */

let n = 100;

console.log("Javascript function examples");

// Function with out parameters
function log() {
    console.log("Welcome to Java script");
}

// calling a function
log();

// Function with parameters
function add(n1, n2) {
    const sumValue = n1 + n2;
    console.log(`Sum value: ${sumValue}`);
}

function isEvenNumer(n) {
    if(n/2) {
        console.log('value: ' + n + ' is even number');
    }
    else {
        console.log('value: ' + n + ' is odd number');
    }
}

// calling a parameterised function
add(1, 2);
add(10, 20);

// Function with return
function addTwoNumbers(n1, n2) {
    const sumValue = n1 + n2;
    return sumValue;
}

// Calling environment
const finalValue = addTwoNumbers(50, 30);
isEvenNumer(finalValue);



