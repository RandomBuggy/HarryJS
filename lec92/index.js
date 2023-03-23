// prblm 01
const print = async (text, n=2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, 1000 * n);
    });
};

(async () => {
    let t = await print("Hello");
    console.log(t);
    t = await print("World");
    console.log(t);
})();

// prblm 02
const array = [1, 2, 3];
const avg = (a, b, c) => a+b+c;

console.log(`avg: ${avg(...array)}`);

// prblm 03
(async () => {
    let out = await print("ABCD", 6);
    console.log(out);
    out = await print("XYZ", 8);
    console.log(out);
}) ();

// prblm 04
const f = (p, r, t) => (p*r*t)/100;
console.log(f(1000, 5, 10));
