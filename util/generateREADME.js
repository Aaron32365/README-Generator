//requiring fs to generate readme file
////////////////////////////////////////////////////
const fs = require('fs')
////////////////////////////////////////////////////

//exporting function that writes a readme file with gathered data 
////////////////////////////////////////////////////
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
 <img src='${el}'/>
`).join('')}

    `   
    fs.writeFile('GeneratedREADME/README.md', readME, 'utf8', (err) => {
        if(err){
            console.log(err)
        }
        console.log("Please see the GeneratedREADME folder for your newly generated README.md")
    })
}
////////////////////////////////////////////////////
