class RailwayForm {
    constructor(name, trainNo, address) {
        this.name = name;
        this.trainNo = trainNo;
        this.address = address;
        console.log(`Constructor called with ${this.name}, ${this.trainNo}, ${this.address}`);
    }
    fill(name) {
        this.name = name;
    }
    submit() {
        console.log(`${this.name}'s form submitted`);
        console.log(`submit details: ${this.name}, ${this.trainNo}, ${this.address}`);
    }
    cancel() {
        console.log(`${this.name}'s form cancelled`);
        this.name = null;
        this.trainNo = null;
        this.address = null;
    }
}

let harryForm = new RailwayForm("harry", 765215, null);
let rohanForm = new RailwayForm("rohan", 614579, undefined);


harryForm.submit();
harryForm.cancel();
harryForm.submit();

rohanForm.submit();
rohanForm.cancel();
rohanForm.submit();
