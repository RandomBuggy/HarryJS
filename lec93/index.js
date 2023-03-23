class Password {
    constructor() {
        console.log("Welcome to Password Generator");
        this.password = "";
    }
    generate(len) {
        let lowercase = "abcdefghijklmnopqrstuvwxyz";
        let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let numbers = "0123456789";
        let specials = `!"#$%&\'()*+,-./:;<=>?@[\\]^_\`{|}~`

        if(len<4) {
            console.log("your password should be at least 4 character long");
        }
        else {
            let i = 0;
           while(i<len) {
                this.password += lowercase[Math.floor(Math.random()*lowercase.length)] + uppercase[Math.floor(Math.random()*uppercase.length)] + numbers[Math.floor(Math.random()*numbers.length)] + specials[Math.floor(Math.random()*specials.length)];
                i += 1;
            }
        }
        this.password = this.password.substr(len);
        return this.password;
    }
}

let p = new Password();
console.log(p.generate(10));
