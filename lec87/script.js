/*
distructuring

unpack -> values from array or oroperties from object := into distinct variables
*/

// distructuring values

let array = [3, 5, 7, 9, 11, 13, 15, 17]
let [a, b] = array;
let [c, ...rest] = array;
console.log(a, b);
console.log(c, rest);

let [f, , , ...rest2] = array;
console.log(f);
console.log(rest2);

// distructuring properties

let {p, q} = {x:1, y:2};
console.log(p, q);

// spread syntax
let obj = {...array};
console.log(typeof obj, obj);

const sum = (v1, v2, v3, v4, v5, v6, v7, v8) => {
    return v1+v2+v3+v4+v5+v6+v7+v8;
};

console.log(sum(...array));

let obj2 = {
    name: "Harry",
    address: "ABC",
    company: "XYZ"
}

console.log({...obj2, name: "John"}); // overriding key-value with spread-syntax
