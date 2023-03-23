const mixes = [7, 7.5, '7', true, false, BigInt(50),  undefined, null];
console.log(mixes.length);
console.log(mixes[60] /* will print undefined */);
console.log(mixes);

mixes[8] = "Not Present"; // adding new value
console.log(mixes);
mixes[6] = "tty"; // changing value
console.log(mixes);
console.log(typeof mixes);
