// raw for loop

let number = Number.parseInt(window.prompt("Enter a number: "));
let sum = 0;

for (let i=1; i < number; i++) {
    sum += i;
}
console.log(`The sum of ${number}'th numbers is ${sum}`)


let obj = {
    harry: 56,
    shuv: 55,
    ritika: 67,
    shivika: 77,
    shiv: 68
}

// modern for loop
// evaluate keys of a object - ES6
for (let keys in obj) {
    console.log(`Key: ${keys}, Value: ${obj[keys]}`)
}

// for-of loop; prints ${values} of an ${iterable}

for (let values of "number") {
    console.log(values);
}

// for-in loop
