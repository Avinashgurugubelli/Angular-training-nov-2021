/**
 * Conditional statements: (CS)
 * 
 * CS are used to perform different actions based on some condition.
 * 
 * if -> this block will be executed when the condition is true
 * else -> this is vise versa for if -> i.e this block will be executed when the condition is false.
 *
 * else if -> to sepecify a new condition -> if the first condition is false.
 * 
 * switch -> to specify many altenative blocks of code to execute based on condition.
 */


/**
 * Election portal -  
 * if age >= 18 -> then eligible to vote
 * if else age > 200 -> invalid age
 * else not eligible to vote
 */

let age = 20;

/**
 * If syntax:
 * 
 * if(condition) {
 *  code block
 * }
 */
if (age >= 18) {
    console.log("eligible to vote!");
}
else {
    console.log("Minor, not eligible to vote");
}

/**
 * Example: greet a person
 * 
 * if time < 9AM -> Good morning
 * if time < 20 -> Good Day
 * else -> good evening
 */
let time = 16;
if (time <= 9) {
    console.log("Good morning");
}
else if (time < 20) {
    console.log("Have a great day");
}
else {
    console.log("Good evening")
}

/**
 * switch: to specify many altenative blocks of code to execute based on condition.
 * 
 * switch(expression/ condition) {
 *  case 1:
 *     // code block
 *      break; // reserved word in JS. this is mandatory to write to come out of switch.
 *  case 2:
 *     // code block
 *      break; // reserved word in JS. this is mandatory to write to come out of switch.
 * 
 *  default:
 *      code block
 *      break;
 * }
 * 
 */
let day = "";
const today = new Date().getDay();
switch (today) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = "Invalid input";
        break;
        
}
console.log("Today is: " + day);