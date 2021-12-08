let array1 = [1, 3, 5, 7];
let array2 = [2, 4, 6, 8, 10, 14, 16, 18];

let arrayLen = Math.max(array1.length, array2.length);



// //len1= array1.length;
// //len2= array2.length;
// let arrayLen = 0;

// if (array1.length >= array2.length) {
//   arrayLen = array1.length;
// }
// else {
//   arrayLen = array2.length;
// }

let totalsum = 0;
for (let i = 0; i < arrayLen; i++) {
    // Terinary operator
    // const val = array1[i] != undefined ? array1[i] : 0;
    // const val2 = array2[i] != undefined ? array2[i] : 0;
    // totalsum = totalsum + val + val2;

    if (array1[i] != undefined) {
        totalsum += array1[i];
    }
    if (array2[i] != undefined) {
        totalsum += array2[i];
    }
};




console.log("Team Eg Array:" + totalsum);



function isEligibleToVote(age) {
    // if(age>=18) {
    //     return `age: ${age} - Majaor: Eligible to vote`;
    // }
    // else {
    //     return `age: ${age} - minor: Not eligible to vote`
    // }
    //  console.log("age: "+ age + "  Majaor: Eligible to vote")

    // Terinary operator
    return (age >= 18 ? `age: ${age} - Majaor: Eligible to vote` : `age: ${age} - minor: Not eligible to vote`);
}

console.log(isEligibleToVote(5));
console.log(isEligibleToVote(10));
console.log(isEligibleToVote(40));
console.log(isEligibleToVote(18));


array1.reduce((p, cv, ci, arr) => {
    console.log("Prev value: "+ p);
    console.log("current value: "+ cv);
    console.log("current index: "+ ci);
    console.log("array "+ arr);
});