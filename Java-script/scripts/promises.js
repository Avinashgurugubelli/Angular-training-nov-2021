/**
 * Promise:
 * - Like in real life - A promise can be kept(resolve) or can be broken(reject)
 * - As we know JS is designed to not wait for an Async block of code to completely
 *    execute before another Async part of code can run.
 * - Using Promise we can defer the execution og the code block untill an Asnc code req completed.
 * 
 * 
 * Real time example:
 * - If u r loading a data from Data base(DB) - let say time taken to complete this task is 10sec.
 * - During this 10sec - you want your customer/client to let know some data is fetching from DB - like displaying loading indicator
 */

// Promise declaration
let prom = new Promise((resolve, reject) => {
    let x = 10;
    if (x === 0) {
        resolve("Success");
    }
    else {
        reject("failed");
    }
});

// Calling a promise
prom.then((value) => {
    // When promise is resolved then this block (then) of code will be executed.
    console.log(value);
}).catch((error) => {
    // When the proise is rejected then this catch block of code will be executed.
    console.log(error);
}).finally(() => {
    // This finally block will be executed every time either in case of success/error i.e resolve/reject
    console.log("Finally block executed.");
});



