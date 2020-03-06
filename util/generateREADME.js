const fs = require('fs')

module.exports = (returnData, answers, badge) => {

    readME = `# ${answers.title}
    
# Descripion:
## ${answers.description}


# Table of Contents:
${answers.contents.map(el => `
* [${el.trim()}](#${el.trim()})
`).join('')}


# Installation
## ${answers.installation}

# Usage
## ${answers.usage}

# License
## ${answers.license}

# Contributors
## ${answers.contributors}


![Picture of ${returnData.name}](${returnData.picture})

### ${returnData.name}

${returnData.url}

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
