class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    details() {
        console.log(`${this.name} and ${this.color}`);
    }
    run() {
        console.log(`${this.name} is running`);
    }
    sout() {
        console.log(`${this.name} is souting`);
    }
}

class Monkey extends Animal {
    constructor(name, color) {
        super(name, color);
    }
    eatBanana() {
        console.log(`${this.name} is eating`);
    }
}

let monkey = new Monkey("Lilo", "green");

monkey.details();
monkey.run();
monkey.sout();
monkey.eatBanana();
