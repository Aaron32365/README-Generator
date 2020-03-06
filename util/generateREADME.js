const fs = require('fs')

module.exports = (returnData, answers, badge) => {

    readME = `## ${answers.title}
    
## Descripion:
# ${answers.description}


## Table of Contents:
${answers.contents.map(el => `
* [${el}](#${el})
`).join('')}


## Installation
# ${answers.installation}

## Usage
# ${answers.usage}

## License
# ${answers.license}

## Contributors
# ${answers.contributors}


${returnData.name}
${returnData.url}
${returnData.picture}

${badge.map(el => `
 ${el}
`).join('')}

    `   
    fs.writeFile('GeneratedREADME/README.md', readME, 'utf8', (err) => {
        if(err){
            console.log(err)
        }
    })
}
