console.log("Promise timer example");
function myPromise() {
    console.log("myPromise functon [ENTER]");
    const p = new Promise(function (myResolve, myReject) {
        setTimeout(function () { myResolve("Welcome to JS"); }, 5000);
    });
    console.log("myPromise functon [RETURN]");
    return p;
}
console.log("myPromise functon called");

myPromise()
    .then((value) => console.log(value))
    .catch((error) => console.log(error))
    .finally("myPromise: Finally block executed");

console.log("myPromise functon call completed.");

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
 */