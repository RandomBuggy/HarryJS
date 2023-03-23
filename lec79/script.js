class Employee {
    login() {
        console.log("Employee has logged in");
    }
    logout() {
        console.log("Employee has logged out");
    }
    requestLeaves(leave) {
        console.log(`Employee has requested ${leave} leaves`);
    }
}

class Programmer extends Employee {
    requestCoffee(amout) {
        console.log(`Programmer has requested ${amout} coffees`);
    }
    requestLeaves(leave) {
        super.requestLeaves(leave+1);
    }
}

let employee = new Employee();
let programmer = new Programmer();

employee.login();
employee.requestLeaves(3);
employee.logout();


programmer.login();
programmer.requestCoffee(4);
programmer.requestLeaves(3);
programmer.logout();
