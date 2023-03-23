const sayHello = () => {
    console.log('Hello');
}
sayHello();

/*
if arrow-function-body has only 1 line -> no carlibrasis is needed
if arrow-function-declaration has only 1 argument -> no parenthesis is needed
*/

const noCarlibrasis = () => console.log("no carlibrasis example");
noCarlibrasis();

const noParenthesis = a => console.log(`no parenthesis:value=${a}`);
noParenthesis(7);

let x = {
    name: "Harry",
    role: "JS Developer",
    exp: 30,
    show: function () {
        let that = this;
        console.log(this);
        console.log(`name=${this.name}, role=${this.role}, experience=${this.exp}`);
        setTimeout(function () {
            console.log(this);
            console.log(`name=${this.name}, role=${this.role}, experience=${this.exp}`);
            console.log(`name=${that.name}, role=${that.role}, experience=${that.exp}`);
        }, 2000);
        setTimeout(() => {
            /* arrow-function advantage is `this` points to it's parent-function's `this`, also knownas `lexical this` */
            console.log(`arrow function advantage`);
            console.log(`name=${this.name}, role=${this.role}, experience=${this.exp}`);
        }, 2000);
    }
}
/*
Let Clear Confusion About `this`
inside a object,
    if a function is made using `function` keyword, then `this` refers to the-current-object
    inside nested-function using `function` keyword, then `this` refers to the-globsl-objec (window)
    inside a event, then `this` refers to the-element-of-dom which has received the event
*/
x.show();
