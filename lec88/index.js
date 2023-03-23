/*
block scope -> let and const provide this
function scope -> scoped inside function
global scope -> the global reference
*/

let a = 10;

{
    let a = 8;
    console.log(a);
}
console.log(a);

function A() {
    let a = 12;
    console.log(a);
}
A();
console.log(a);
