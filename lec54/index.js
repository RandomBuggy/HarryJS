let promise = new Promise((resolve, reject) => {
    window.alert("I am an alert inside promise");
    resolve(56);
});

console.log("Hello 0");

let timerId = setTimeout(() => {
    console.log("Hello 2")
}, 2000);

console.log("Hello 2");

console.log(promise);
/*
promise-object has two attribute:- state & result
state:- pending, result, error
result:- resolve/reject
*/
