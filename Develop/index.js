const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you run tests for your project?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
        } else {
            console.log('README.md file has been successfully generated!');
        }
    });
}

function init() {
    inquirer.prompt(questions)
        .then(answers => {
            const markdownContent = generateMarkdown(answers);
            writeToFile('README.md', markdownContent);
        });
}

init();