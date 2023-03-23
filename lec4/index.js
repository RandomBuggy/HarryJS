/* main 2 types -> data types in Js, 1.Premitive, 2.Object
 Premitive 7 types:-
    a. number
    b. string
    c. symbol
    d. boolean
    e. bigint
    f. null
    g. undefined
Object:-
    simply key-value pair, similar like other languages Map, HashMap, HashTable, Dictionary etc
    just loje other OOPS supported languages, it can take functions(method) as value

    key -> can be either string/number or value -> can be any Premitive+Object
*/

let a = null;
let b = 345;
let c = true; // false;
let d = BigInt("567");
let e = "RandomBuggy";
let f = Symbol("I am a nice symbol");
let g = undefined;
let h;

console.log(a, b, c, d, e, f, g, h);
console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g, typeof h);

const item = {
    "harry": true,
    "larry": "name",
    12: null
}

// object key-value access syntax 1
console.log(item);
console.log(item[12]);
console.log(item["harry"]);

console.log(item["jibrish"]); // as no key named `jibrish` so, will print `undefined`

// object key-value access syntax 2
console.log(item.harry);
console.log(item.larry);
console.log(item[12]); // you can not access numeric key->value with . operator
