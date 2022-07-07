// we need the info from employee since its our parent class
const Employee = require('./Employee');

class Manager extends Employee {
    // officeNumber
    constructor(name, id, email, officeNumber) {
        super(name, id, email)

        this.officeNumber = officeNumber;
    }
    // officeNumber
    getofficeNumber();
    // getRole(overidden to return (inter))
    getRole() {
        return this.Employee();
    }
    // getRole(overiden to return Manage)

}
// const engineer = new Engineer(name, id, email, github);
module.exports = Manager;