let p1 = new Promise((resolve, reject) => {
    console.log("promise is pending");
    setTimeout(() => {
        console.log("I am a promise and I am fulfilled");
        resolve(true);
    }, 5000);
});

let p2 = new Promise((resolve, reject) => {
    console.log("promise is pending");
    setTimeout(() => {
        console.log("I am a promise and I am rejected");
        reject(new Error("Hi, I am an error!"));
    }, 5000);
});

// console.log(p1, p2);
/*
promises are executed (act like thread) parallally
*/

// To get the result/value
p1.then((value) => {
    console.log("promise resolve 'value'="+value);
});

// To get the error
p2.catch((err) => {
    console.log("handling error 'error'="+err);
});

// efficient one
p1.then((value) => {
    console.log(value);
},
(error) => {
    console.log(error);
});
