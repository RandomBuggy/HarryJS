/*
HOISTING
js-engine-interpreter (logically/virtually) puts all the declaration on top of the script, then start execution, this simple technique is called hoisting

NOTE
js-engine only hoists declarations (like variables, functions, classes, etc) not initialisations
variables are `undefined` until they reach initialisation
 function exprrssion (function-pointer) and class are not hoisted
*/
console.log(`a=${a}`);
greet()

function greet() {
    console.log("Good Morning");
};

var a = 10;
// let a = 10;
/* hoists -> behaves differently (in variable declaration+initialisation) in case of const/let and vsr keyword */
console.log(`a=${a}`);
