
console.log("Promise timer example.");

function myPromise() {
    console.log("Entered myPromise function");

    const p = new Promise(function (myResolve, myReject) {
        setTimeout(function () {
            myResolve("welcome to JS");
        }, 5000);
    });

    console.log("myPromise function return");
    return p;

}

console.log("my promise function called");

myPromise()
    .then((value) => console.log(value))
    .catch((error) => console.log(error))
    .finally(() => console.log("Finally being executed"));

console.log("myPromise function call completed.");
