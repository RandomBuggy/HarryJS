let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(true);
    }, 2000);
});

p1.then((value) => {
    console.log(value);
});

p1.then((value) => {
    console.log(`resolve: ${value}`);
})

/*
Promise-chaining:- works as serial-connection
Promise-multiple-handlars:- works as parallal-connection
*/
