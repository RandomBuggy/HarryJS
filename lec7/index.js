let a = prompt("Hey, what's your age?");
console.log(typeof a);
console.log(Number.parseInt(a));

if (a > 0) {
    console.log("valid age");
}

if (true) {
    console.log("this is true");
}
else {
    console.log("this is false");
}


if (a == 12) {
    console.log("age is 12");
}

else if (a == 18) {
    console.log("age is 18");
}

else {
    console.log("age is either 12 or 18");
}

switch ("tty") {
    case "abc":
        console.log("case 1th");
        break;
    case "def":
        console.log("case 2th");
        break;
    default:
        console.log("default case");
}

console.log("You can", (a >= 18) ? "drive" : "not drive");
