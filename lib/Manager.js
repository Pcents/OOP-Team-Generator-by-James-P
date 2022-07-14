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
    getRole() {
        return "Manager";
    }
}
module.exports = Manager;