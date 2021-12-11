console.log("Promise timer example");
function myPromise() {
    console.log("myPromise functon [ENTER]");
    const p = new Promise(function (myResolve, myReject) {
        setTimeout(function () { myResolve("Welcome to JS"); }, 5000);
    });
    console.log("myPromise functon [RETURN]");
    return p;
}


// console.log("myPromise functon called");

// myPromise()
//     .then((value) => console.log(value))
//     .catch((error) => console.log(error))
//     .finally(() => console.log("myPromise: Finally block executed"));

// console.log("myPromise functon call completed.");

/**
 * Output:
 * 
 *  Promise timer example
 *  myPromise functon called
 *  myPromise functon [ENTER]
 *  myPromise functon [RETURN]
 *  myPromise functon call completed.
 * 
 *  Welcome to JS
 *  myPromise: Finally block executed
 */

// Calling a promise - second way usin Async await

async function callPromise() {
    try {
        console.log("Calling a promise");
        let value = await myPromise();
        console.log("Value: " + value);
        console.log("Promise call completed");
    }
    catch (ex) {
        console.log(ex);
    }
    finally {
        console.log("myPromise: Finally block executed");
    }
}

callPromise();