// prblm 01
let age = Number.parseInt(window.prompt("Enter Your Age: "));
window.document.body.style.background = window.prompt("Enter Background Color", "yellow");
while (window.confirm("Do you want to play again?")) { // prblm 02
if (age < 0) {
    console.error(`age: ${age} Negative Value Entered`)
    break;
}
if (age>4) {
    window.location.href = "https://google.com/";
}
if (age>=18?true:false) {
    window.alert("You can drive!");
}

else {
    window.alert("You can not drive!");
}
}
