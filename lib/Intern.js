const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super (name, id, email); 
        this.github = github;
    }
    getRole() {
        return "Intern";
    }
    school() {
        return this.school;
    }
}

module.exports = Intern; 