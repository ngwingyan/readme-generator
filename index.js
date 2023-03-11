// calling relevant libraries (given in starter code)
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// define the questions prompting users for README
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the project description?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions. Please put N/A if not available.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage instruction. Please put N/A if not available.',
  },
  {
    type: 'list',
    message: 'Which of the following licenses do you prefer to use for the project?',
    name: 'license',
    choices: ['MIT', 'gpl3.0', 'ccby4.0'],
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Please provide contribution guideline. Please put N/A if not available.',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide test instructions for this application. Please put N/A if not available.',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please provide your email.',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please provide your github username.',
  },
];

// function to write README file
function writeToFile(filename, project) {
  fs.writeFile(filename, generateMarkdown(project), (err) =>
    err ? console.error(err) : console.log('Your README is successfully created!')
  )
};



// function to initialize program
function init() {
  inquirer.prompt(questions).then((project) => {
    const filename = `${project.title}.md`;
    writeToFile(filename, project);
  })
};

// function call to initialize program
init();
