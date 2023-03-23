class Animal {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log(`Animal ${Animal.capitalize(this.name)} is walking`);
    }

    static capitalize(name) {
        return name.charAt(0).toUpperCase() + name.substr(1, name.length);
    }
}

let j = new Animal("jack");
j.walk();

console.log(Animal.capitalize("tty"));
