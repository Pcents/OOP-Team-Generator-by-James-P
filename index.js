const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const teamCards = require('./src/cards')
const path = require('path')
const assembleTeam = [];
console.log("we out here")

const promptManager  = () =>{
return inquirer.prompt(
 [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
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
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?',
    }
    ]
)
.then(answers =>{
console.log (answers);
const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
assembleTeam.push(manager);
anothaOne();
})
};
// to see if we want to add another employee or create the team
const anothaOne = () =>{
    return inquirer.prompt([
        {
            type: 'list',
            name: 'job',
            message: 'Would you like to add another employee or assemble your team?',
            choices: ['Engineer', 'Intern', 'Ready to assemble!' ]        
        }
    ])
    .then(choice =>{
switch (choice.job){
    case "Engineer":
    promptEngineer();
    break;
    case "Intern":
    promptIntern();
    break;
    default:
    teamAssembly();
}
    })
};
// engineer questions
const promptEngineer  = () =>{
    return inquirer.prompt(
     [
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
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
        {
            type: 'input',
            name: 'github',
            message: 'What if your Github account?',
         },
        ]
    )
    .then(answers =>{
    console.log (answers);
    const engineer = new Engineer (answers.name, answers.id, answers.email, answers.github)
    assembleTeam.push(engineer);
    anothaOne();
    })
    };

    // Intern questions
    const promptIntern  = () =>{
        return inquirer.prompt(
         [
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?',
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
            {
                type: 'input',
                name: 'school',
                message: 'What school are you attending?',
            },
            ]
        )
        .then(answers =>{
        console.log (answers);
        const intern = new Intern (answers.name, answers.id, answers.email, answers.school)
        assembleTeam.push(intern);
        anothaOne();
        })
        };

// how will i send this out to cards.js?
const teamAssembly = () => {
    console.log("DEV TEAM, ASSEEEEBLE!")
    fs.writeFileSync(outputPath, teamCards(assembleTeam))
}
promptManager();

