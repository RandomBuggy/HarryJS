/*
cookies are sent to the browser per request
but for every-domain browser reserves a tiny storage -> localStorage, you can manipulate the storage through localStorage() API
*/


let key = window.prompt("Enter Your Key");
let value = window.prompt("Enter Your Value");

localStorage.setItem(key, value);

console.log(`In localStorage key is ${key} and value is ${localStorage.getItem(key)}`);

if (key === "red" || value === "blue") {
    localStorage.removeItem(key);
}

if (key === "0") {
    localStorage.clear();
}

console.log(localStorage.length);
console.log(localStorage.getItem(localStorage.key(2)));

/*
localStorage can be manipulated as an object
like:-

localStorage.one = jydx
delete localStorage.one

NOTE:-
both key-value must be ${typeof string}
from JSON class we can store-json-object by using these two methods JSON.stringify(), JSON.parse() .
*/
