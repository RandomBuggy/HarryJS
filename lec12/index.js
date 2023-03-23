// prblm 01

let marks = {
    harry: 98,
    shuhbam: 56,
    lovish: 66,
    monika: 83
}

for (let i=0; i < Object.keys(marks).length; i++) {
    console.log(`The mark of ${Object.keys(marks)[i]} is ${marks[Object.keys(marks)[i]]}`);
}

// prblm 02

for (let key in marks) {
    console.log(`The mark of ${key} is ${marks[key]}`);
}

// prblm 03
let crtNum = 56;

while (Number.parseInt(window.prompt("Enter a number: ")) != crtNum) {
}

console.log("You have entered the correct number");

// prblm 04

const mean = (a, b, c, d, e) => {
    return (a+b+c+d+e)/5;
}
console.log(`mean: ${mean(1, 2, 3, 4, 5)}`);
