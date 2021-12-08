
console.log("Java script execution context");

console.log("v value before assignment: " + v); // undefined.

// console.log("l value before assignment: " + l); // reference error

// console.log("c value before assignment: " + c); // reference error

var v = 200;
let l = 100;
const c = 300;

console.log("v value: " + v);
console.log("L value: " + l);
console.log("C value: " + c);


var n = 20;

function abc () {
    console.log("abc executed");
}

function multiply(num) {
    var result = n * num;
    abc();
    return result;
}

var m1 = multiply(5); // 100
console.log("M1: " + m1);

var m2 = multiply(10); // 200
console.log("M2: " + m2);

