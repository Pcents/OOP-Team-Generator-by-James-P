const inquirer = require('inquirer');
const fs = require('fs');
// dunnon why these aint working
console.log("we out here")

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
const questions = [
    // list input for type of job-have something that changes the last questions based on it?
    {
        type: 'list',
        name: 'job',
        message: 'What is your position?',
        choices: ['Manager', 'Engineer', 'Intern'],
        // when?:
        // .then(function(answers))

    },

    // when inquirer statement-run specific question-extra question at the end
    {
        type: 'input',
        name: 'names',
        message: 'What is name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Do you have and ID number.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    //more info-maybe and if-then for manager/engineer/intern? when statement-built into the question object
    {
        type: 'input',
        name: 'engineer',
        message: 'What if your Github account?',
    },
    {
        type: 'input',
        name: 'intern',
        message: 'What school are you attending?',
    },
    {
        type: 'input',
        name: 'manager',
        message: 'What is your office number?',
    }
];


// function writeToFile(filename, data) {

//     fs.writeFile(filename, data, (error) => { if (error) throw error; console.log("success!") });
// }

// for loop for the returned data. how to combine data from manage, engineer, intern all in one loop?

function runIt() {
    return inquirer.prompt(questions)
        .then((data) => {
            console.log(data)
            // we call genMark and are passing the answers-and the function that contains the 
            // const markDown = genMark(data)
            // writeToFile("./dis/readme.md", markDown)
        
            return data
        })
        .catch((error) => {
            console.log(error)
        })
}
runIt();
// second function to add another employee or build the team-either calls function or hand off info (write to file)

// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address

// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated