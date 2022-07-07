// parent class

class Employee {
    // create a constructor with objects(?)
    // these will fill in with data from the inquirer questions
    constructor(name, id, email) {
        // name
        this.name = name;
        // id
        this.id = id;
        // email
        this.email = email;
    }
    // individual methods ready to be set up
    getName();
    getId();
    getEMail();
    getRole();
    // (returns Employee)
    printInfo() {
        console.log(`Hi, im ${this.name}`)
        console.log(`my id number is ${this.id}`)
        console.log(`my email in ${this.email}`)
    }
}
module.exports = Employee;
