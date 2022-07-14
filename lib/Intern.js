// we need the info from employee since its our parent class
const Employee = require('./Employee');
// we are extending the info from employee into here
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)

        this.school = school;
    }
    // school
    getSchool(){
        return this.school;
    }
    // getRole(overidden to return (inter))
    getRole() {
        return "Intern";
    }
}
module.exports = Intern;