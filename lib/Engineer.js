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
    // keep outside first curleys
    // github(username)
    getGithub();
    getRole() {
        return this.Employee();
    }
    // (overidden to return engeneer)
}
// need to get a new employee- overide the rolw
// const engineer = new Engineer(name, id, email, github);
module.exports = Engineer;
