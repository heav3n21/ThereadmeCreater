
const fs = require('fs');
const inquirer = require(`inquirer`);
const fileName = `README.md`;



const generateReadMe = ({ title, screenShot, credits, stack, license, description1, description2, description3, description4, installer }) => {
    let emblem = "12";
    if (license == "MIT") {
        emblem = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

    } else if (license == "MOZILLA") {
        emblem = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    }


    return `
# ${title}
${emblem}
## Description

### What was your motivation?

* ${description1}
### Why did you build this project? 
* ${description2}
### What problem does it solve?
* ${description3}
### What did you learn?
* ${description4}
## Table of Contents

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

For installation please go to your cli and clone this url ${installer}
To use this generator, simply clone the repository to your local machine and run the index.js \nfile in your terminal. The tool will guide you through the process of creating your\n readme.md file, providing helpful prompts and examples along the way. Once you have\n completed the prompts, your new readme.md file will be generated and ready to use.

## Usage



    
![its an img](${screenShot})

## Credits
* Collaborators
${credits}


## License
${license}
## Technology
${stack}
`
}

function questions()  {
    inquirer
        .prompt([
            {
                name: 'title',
                type: 'input',
                message: 'what is the title:',
            },
            {
                name: 'stack',
                type: 'input',
                message: 'what languages did you use: ',

            },
            {
                name: 'license',
                type: 'rawlist',
                message: 'what license will use pick one:',
                choices: [`MIT`, `MOZILLA`]
            },
            {
                name: 'description1',
                type: 'input',
                message: 'What was your motivation?',
            },
            {
                name: 'description2',
                type: 'input',
                message: 'What problem does it solve?',
            },
            {
                name: 'description3',
                type: 'input',
                message: 'Why did you build this project?',
            },
            {
                name: 'description4',
                type: 'input',
                message: 'What did you learn?'
            },

            {
                name: 'Installer',
                type: 'input',
                message: `please provide the https code link or ssh: `,

            },
            {
                name: `gitHubUsername`,
                type: `input`,
                message: `please provide your github link`,

            },
            {
                name: `screenShot`,
                type: `input`,
                message: `please provide a link of a screenshot of your website:`
            },
            {
                name: 'credits',
                type: 'input',
                message: 'please provide any links towards collaborators'
            }


        ])
        .then(data => {

            const readMeFormatted = generateReadMe(data)
            writeToFile(fileName, readMeFormatted)

        })

    };


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('works')
    );
    
}


function init() { 
    questions()
}


init();
