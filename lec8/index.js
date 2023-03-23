// prblm 01
let age = prompt("What's your age?");

if (age >= 10 && age <= 20) {
    console.log("Your age is included between 10 and 20");
}
else {
    console.log("Your age is not included between 10 and 20");
}

// prblm 02

let a = Number.parseInt(prompt("What's your age?"));
console.log(a);

switch (a) {
    case 12:
        console.log("your age is 12");
        break;
    case 13:
        console.log("your age is 13");
        break;
    case 14:
        console.log("your age is 14");
        break;
    case 15:
        console.log("your age is 15");
        break;
    default:
        console.log("your age is not special");
}

// prblm 03

let b = Number.parseInt(prompt("Enter a number: "));

if ( b % 2 == 0 && b % 3) {
    console.log("number: divisible by 2 and 3");
}
else {
    console.log("number: non-divisible by 2 and 3");
}

// prblm 05

console.log(Number.parseInt(window.prompt("Enter a number: ")) > 18 ? "You can drive" : "You can non drive");
