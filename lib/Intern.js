// we need the info from employee since its our parent class
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)

        this.school = school;
    }
    // school
    getSchool();
    // getRole(overidden to return (inter))
    getRole() {
        return this.Employee();
    }
}
// const intern = new Intern (${questions.names}, id, email, github);
module.exports = Intern;