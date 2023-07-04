"use strict";
// What more you can do with functions
function add(n1, n2) {
    return n1 + n2;
}
// Void type - used when you're not returning anything. It's however best to let TypeScript infer the type. Undefined is also a type in TypeScript, if given to a function, the function must return nothing (return;).
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
// Explicitly defining function variables eg
// let combineValues;
// combineValues = add;
// // if we set combineValues = 5, TypeScript will be unable to give us an error because we did not explicitly define the variable as a function, typescript inferred it to be an any type variable.Therfore we need to give combineValues a type of function.
// combineValues = 5;
// console.log(combineValues(8, 8));
// Function types
// let combineValues: Function;
let combineValues;
combineValues = add;
console.log(combineValues(8, 8));
addAndHandle(10, 29, (result) => {
    console.log(result);
    // if returned, nothing will be done with the return result
});
