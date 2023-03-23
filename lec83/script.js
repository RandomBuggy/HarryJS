// prblm 01
class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    // prblm 02
    add(num) {
        this.real = this.real + num.real;
        this.imaginary = this.imaginary + num.imaginary;
    }
    show() {
        console.log(`${this.real}+${this.imaginary}i`);
    }

    // prblm 04
    get real() {
        return this._real;
    }
    get imaginary() {
        return this._imaginary;
    }

    set real(newReal) {
        this._real = newReal;
    }
    set imaginary(newimaginary) {
        this._imaginary = newimaginary;
    }
}

let a = new Complex(2, 4);
let b = new Complex(2, 6);

a.show();
b.show();

a.add(b);
a.show();

class Human {
    constructor(name, favFood) {
        this.name = name;
        this.favFood = favFood;
    }
    walk() {
        console.log(`${this.name} human is walking`);
    }
}

class Student extends Human {
    walk() {
        console.log(`${this.name} student is walking`);
    }
}

let obj = new Student("harry", "bhindi");

obj.walk();

// prblm 03
console.log(obj instanceof Human);
console.log(obj instanceof Student);


// prblm 04
a.show();
console.log(a.real);
console.log(a.imaginary);
a.real = 40;
a.imaginary = 50;
a.show();
