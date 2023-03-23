/* closure = function(function-expression) + it's lexical environment's reference (not value) */
let message = "Good Global";
function hello1() {
    let message = "Good Morning"
    {
        let message = "Good Evening";
        console.log("hello 1 " + message);
    }
    console.log("hello 1 " + message);

    let c = function hello2() { // function expression
        console.log("hello 2 " + message /* this message variable wil be sent to lexical-environment before clearing the parent-function-call-stack */);
    }
    message = "tty";
    return c;
}

console.log(message);
// hello1();

let out_func_expression = hello1();
out_func_expression();

function returnFunc() {
    let x = () => {
        let a = 1;
        console.log(a);
        let y = () => {
            // let a = 2;
            console.log(a);
            let z = () => {
                // let a = 3;
                console.log(a);
            }
            z();
        }
        a = 999;
        y();
    }
    return x;
}

let a = returnFunc();
a();
