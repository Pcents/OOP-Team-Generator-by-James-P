// we need the info from employee since its our parent class
const Employee = require('./Employee');

class Manager extends Employee {
    // officeNumber
    constructor(name, id, email, officeNumber) {
        // can call the parent constructor with our super
        super(name, id, email)

        this.officeNumber = officeNumber;
    }
    // officeNumber
    getofficeNumber(){
        return this.officeNumber;
    }
    // getRole(overidden to return (inter))
    getRole() {
        return "Manager";
    }
    // getRole(overiden to return Manage)

}
// const engineer = new Engineer(name, id, email, github);
module.exports = Manager;