/* expression in JS -> a value which you can assign to a varaianle or to a constsant,
 like:- !true;, 7;, also those statements whom have not been shows error by JIT compiler

 for mathematical computation, we need operators, n typrs of operstors in JS:-
    1. arithmatic operstors
        a. additon:- +
        b. subtraction:- -
        c. multiplication:- *
        d. division:- /
        e. exponential:- **
        f. modulus:- %
        g. increment:- ++
        h. decrement:- --

    2. assignment operstors
        a. assign:- =
        b. plus-assign:- +=
        c. minus-assign:- -=
        d. multiply-assign:- *=
        e. divide-assign:- /=
        f. modulo-assign:- %=
        g. exponent-assign:- **=

    3. comparison operstors
        a. equal to:- ==
        b. not equal to:+ !=
        c. (type+value) equal to:- ===
        d. (type+value) not equal to:- !==
        e. greater than:- >
        f. less than:- <
        g. greater than or equal to:- >=
        h. less than or equal to:- <=
        i. ternary:- ?

    4. logical operstors
        a. and:- &&
        b. or:- ||
        c. not:- !

    5. bitwise operators
        a. left-shift:- <<
        b. right-shift:- >>
        c. bitwise and:- &
        d. bitwise or:- |

    6. typeof operators
        a. typeof:- typeof <operand>
*/

let a = 45;
let b = 4;

console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a ** b = ", a ** b);
console.log("a % b = ", a % b);
console.log("a++ = ", a++);
console.log("++a = ", ++a);
console.log("b-- = ", b--);
console.log("--b = ", --b);


console.log();

let x = 9;

console.log("x += 5 = ", x += 5);
console.log("x -= 5 = ", x -= 5);
console.log("x *= 5 = ", x *= 5);
console.log("x /= 5 = ", x /= 5);
console.log("x %= 5 = ", x %= 5);
console.log("x **= 5 = ", x **= 5);



console.log();

let c1 = 6;
let c2 = 7;

console.log("c1 == c2 -> ", c1 == c2);
console.log("c1 != c2 -> ", c1 != c2);
console.log("c1 === c2 -> ", c1 === c2);
console.log("c1 !== c2 -> ", c1 !== c2);
console.log("c1 > c2 -> ", c1 > c2);
console.log("c1 < c2 -> ", c1 < c2);
console.log("c1 >= c2 -> ", c1 >= c2);
console.log("c1 <= c2 -> ", c1 <= c2);



console.log();

let p = true;
let q = false;

console.log("p && q = ", p && q);
console.log("p || q = ", p || q);
console.log("!true = ", !true);
console.log("!false = ", !false);


console.log();

console.log(typeof p);
