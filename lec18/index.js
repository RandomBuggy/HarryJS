let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// delete operstor
console.log(num.length);
delete num[0];
console.log(num);
console.log(num.length);

console.log(num.concat(['x', 'y', 'z']));

let xyz = [34, 67, 12, 9, 0, 7, 45, 86, 55];
console.log(xyz);
xyz.sort();
console.log(xyz);

const compare = (a, b) => {
    return a-b;
}
// .sort() with compare function
xyz.sort(compare);
console.log(xyz);

xyz.reverse();
console.log(xyz);

// splice and slice
console.log(num.splice(3, 5, 67, 786, 3532, 6765, 9875, 813))
console.log(num);

console.log(num.slice(3, 8));
