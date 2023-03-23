// prblm 01
let a = [];
a.push(Number.parseInt(window.prompt("Enter an element: ")));
console.log(a);

// prblm 02
let b = [];
let res = -1;
while (res != 0) {
    res = window.prompt("Enter an element: ");
    b.push(res);
}
console.log(a);

// prblm 03
const new_iterable = [263, 4774, 2883, 46, 4253, 456, 475].filter((t) => {
    return t%10==0;
});
console.log(new_iterable);


// prblm 04

const new_iterable2 = [263, 4774, 2883, 46, 4253, 456, 475].map((t) => {
    return t*t;
});
console.log(new_iterable2);

// prblm 05
let array = [1,2,3,4,5,6,7,8];

const result = array.reduce((x, y) => {
    return x+y;
});
console.log(result);
