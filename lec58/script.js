let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 1");
    }, 1000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 2");
    }, 2000);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 3");
    }, 3000);
});

p1.then((value) => {
    console.log(value);
});

p2.then((value) => {
    console.log(value);
});

p3.then((value) => {
    console.log(value);
});

// Promise API - has 6 static methods
let promise_all = Promise.all(Array(p1, p2, p3));
promise_all.then((value) => {
    console.log(value);
    value.forEach((element) => {
        console.log(element);
    });
});


let promise_all_2 = Promise.allSettled(Array(p1, p2, p3));
promise_all_2.then((value) => {
    console.log(value);
    value.forEach((element) => {
        console.log(element);
    });
});

let promise_race = Promise.race(Array(p1, p2, p3));
promise_race.then((value) => {
    console.log(value, typeof value);
});

let promise_any = Promise.any(Array(p1, p2, p3));
promise_any.then((value) => {
    console.log(value);
});

Promise.resolve(1234567890).then((value) => {
    console.log(value);
});

Promise.reject(undefined).catch((error) => {
    console.log(error);
});
