// we need the info from employee since its our parent class
const Employee = require('./Employee');
// need to extend employee into here
class Engineer extends Employee {
    // create a constructor function with a super to pass in
    constructor(name, id, email, github) {
        super(name, id, email)
        // do not need github in the super-
        this.github = github;
    }
    // github(username)
    getGithub(){
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}
module.exports = Engineer;
