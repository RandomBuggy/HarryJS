let a = {
    name: "harry",
    language: "JavaScript"
    run: () => {
        console.log("self run");
    }
}

console.log(a);

/*
every javascript object has a scepcial property called `prototype` if any property/method is not found in any specific object, yhe javascript inherit it from the prototype. this is callee prototypal-inheritance.

prototype of a object -> can be another object
*/

let p = {
    run: () => {
        console.log("run");
    }
};

a.__proto__ = p;
p.__proto__ = {
    name: "me"
};

a.run();
console.log(a.name);
