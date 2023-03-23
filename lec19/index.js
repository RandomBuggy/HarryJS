let num = [3, 54, 1, 2, 4];

// aiterating array -> raw for loop
for (let i=0; i < num.length; i++) {
    console.log(num[i]);
}

// aiterating array -> for-each loop
num.forEach((value) => {
    console.log(value*value);
});

// Arrray.from(other iterable_object) like HTML-collection -> raw-array-object
Array.from(window.document.getElementsByClassName("item")).forEach((element) => {
    window.console.log(element);
});


// aiterating array -> for...of loop
for (let i of num) {
    console.log(i); // for...of loop access array's value
}

// iterating array -> for...in loop
for (let i in num) {
    console.log(`key: ${i}, value: ${num[i]}`); // for...in loop access array's index(keys)
}
