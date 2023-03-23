class Animal {
    constructor(name) {
        this._name = name;
    }
    fly() {
        console.log(`${this.name} is flying`);
    }

    get name() {
        return this._name;
    }
    set name(n) {
        this._name = n;
    }
}

class Rabbit extends Animal {
}

let meow = new Animal("Meow");

meow.fly();
console.log(meow.name);
meow.name = "Teow";
console.log(meow.name);
meow.fly();

console.log(`The "instanceof" Operator`);
console.log(meow instanceof Animal);
console.log(meow instanceof Rabbit);
