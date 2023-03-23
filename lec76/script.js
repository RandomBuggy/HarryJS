class RailwayForm {
    fill(name) {
        this.name = name;
    }
    submit() {
        console.log(`${this.name}'s form submitted`);
    }
    cancel() {
        console.log(`${this.name}'s form cancelled`);
    }
}

let harryForm = new RailwayForm();
let rohanForm = new RailwayForm();


harryForm.fill("harry");
harryForm.submit();
harryForm.cancel();

rohanForm.fill("rohan");
rohanForm.submit();
rohanForm.cancel();
