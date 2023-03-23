// prblm - 01
let a = "RandomBuggy";
console.log(a + 1); // result concatenation

// prblm - 02
console.log(typeof (a + 1));

// prblm - 03
const b = {
    name: "RandomBuggy",
    section: 1,
    isPresent: false
}
//b = "tty"; // throws error, you can not change a constant
//b = 345; // throws error, you can not change a constant

// prblm - 04
b["TTY"] = "terminal"; // no error, because `const b` is a refetence to the object

// prblm - 05
const dict = {
    appreciate: "recognize the full worth of.",
    ataraxia: "a state of freedom from emotional disterbence and anxiety",
    yakka: "work, specially hard work"
}
console.log(dict.appreciate);
console.log(dict.ataraxia);
console.log(dict.yakka);
