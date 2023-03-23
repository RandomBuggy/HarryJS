// map(), filter(), reduce() -> higher order array methods
let num = [45, 23, 21];

const new_array = num.map((val, idx, arr) => {
    console.log(val, idx, arr);
    return val*2;
});
console.log(new_array);


let num2 = [45, 23, 21, 0, 3, 5, 65, 34];

const new_array2 = num2.filter((value) => {
    return value%2==0;
});
console.log(new_array2);

const result = num2.reduce((a, b) => {
    return a+b;
});
console.log(typeof result, result);
