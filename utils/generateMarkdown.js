// function to generate markdown for README
function generateMarkdown(project) {
  return `# ${project.title}

  License badge
  <img src = https://img.shields.io/badge/license-${project.license}-blueviolet.svg />

  ## Description
  ${project.description}
  

  ## Table of Content
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contribution](#Contributing)
  * [tests](#Tests)
  * [Questions](#Questions)

  ## Installation
  ${project.installation}

  ## Usage
  ${project.usage}

  ## License
  * This project is licensed under ${project.license} license.

  ## Contributing
  ${project.contribution}

  ## Tests
  ${project.tests}

  ## Questions
  If you have any questions, welcome to drop me an email at below or visit my repo -
  
  * [${project.email}](mailto:${project.email})
  * http://github.com/${project.github}`;
}

module.exports = generateMarkdown;
