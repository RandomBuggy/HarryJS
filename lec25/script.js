console.time("some-sample-label");
console.log(console);
console.log("this log message");
console.error("this error message");
console.warn("this warining message");
console.info("this info message");
console.assert(5!==5);
console.assert(5===5);

let obj = {
    a: 1,
    b: 2,
    c: 3
}

console.table(obj);
console.timeEnd("some-sample-label");
