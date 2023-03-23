async function harry() {
let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("27 deg");
    }, 2000);
});

let bengaloreWaether = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("21 deg");
    }, 2000);
});
    // may don't use this method, delhiWeather.then(alert), rather use this
    console.log("fetching delhi weather...");
    let delhiW = await delhiWeather;
    console.log(`delhi weather is ${delhiW}`);
    console.log("fetching bengalore weather...");
    let bengaloreW = await bengaloreWaether;
    console.log(`delhi weather is ${bengaloreW}`);
};

const charry = async () => {
    console.log("I am waiting...");
}

const m = async () => {
    let a = await harry();
    let b = await charry();
}

/*
harry().then((x) => {
    x.forEach((element) => {
        console.log(element);
    });
});
*/

// more effective+smart way of above block is below
m();

/*
async/await makes a function/method asynchronous and make it able to return a Promise 
also make it able to use all native Promise-dot-then-dot-catch-etc-methods
*/
