/**
 * Functions:
 * 
 * Defnition:
 * ---------
 * A JS Function is a block of code written to perform a given task.
 * 
 * Syntax 1: (Also called as Function statement / function declaration)
 * function functionName(param1, param2, param3, ......) {
 *      // code to be executed.
 * }
 * 
 * Syntax 2: Function expression
        let func1 = function() {
            console.log("function 1 called");
        }
 * 
 * Syntax 3: Arrow functions
        let a = () => {
            // code block
        }
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
    if (n / 2) {
        console.log('value: ' + n + ' is even number');
    }
    else {
        console.log('value: ' + n + ' is odd number');
    }
}

// calling a parameterised function
add(1, 2);
add(10, 20);

console.log("accessing function before declaration: " + addTwoNumbers(1000, 2000)); //

// Function with return
function addTwoNumbers(n1, n2) {
    const sumValue = n1 + n2;
    return sumValue;
}

// Calling environment
const finalValue = addTwoNumbers(50, 30);
isEvenNumer(finalValue);

// console.log(func1()); // reference error

// Function expression
let func1 = function () {
    return "function 1 called";
}
console.log(func1());

// Arrow functions or anonymous fun
let a = () => {
    console.log("Arrow function called");
}

// Calling an arrow function
a();

// Arrow functions with parameters -> n1, n2 we call it as parameters
let arrowFuncWithParams = (n1, n2) => {
    const sum = n1 + n2;
    console.log("arrowFuncWithParams: Sum value" + sum);
}

// Function calling -> here 1,2 we call it as arguments
arrowFuncWithParams(1, 2);

/**
 * First class functions (example: fcfn)
 * The ability of a function to be used as value and can be passed as Argument to another function
 */
let fcfn = (callbackfun) => {
    console.log("First class function (fcfn) called");
    callbackfun();
}

function childFunction() {
    console.log("Child Function (childFunction) called");
}

// calling function
fcfn(childFunction);


// Function chaining -> Passing first class function to another first class function
function childFunction2() {
    console.log("Child Function (childFunction2) called");
}

let fcfn1 = (callbackfun) => {
    console.log("First class function(fcfn1) called");
    return callbackfun;
}

let fcfn2 = (cb) => {
    console.log("First class function(fcfn2) called");
    cb();
}

// Calling a function
const f1 = fcfn1(childFunction2);
console.log(f1);
fcfn2(f1);

