// requiring necessary modules 
////////////////////////////////////////////////////
const questions = require('./util/questions')
const inquirer = require('inquirer')
var qeury = require('./util/qeury')
////////////////////////////////////////////////////
initialize()

//initialization function, starts readme generation
////////////////////////////////////////////////////
async function initialize(){
    var answers = await inquirer.prompt(questions)
    var badges = await addBadges()
    qeury(answers, badges)
}
////////////////////////////////////////////////////

// function for adding multiple badges
////////////////////////////////////////////////////
async function addBadges(){
    var badgeList = []
    do {
        var badge = await inquirer.prompt([{
            type: "input",
            name: 'badges',
            message: "Please insert a link to a badge you'd like to enter, or enter Q to quit"
        }])
        if(badge.badges != 'q') badgeList.push(badge.badges)
    } while (badge.badges.toUpperCase() != 'q'.toUpperCase())
    return badgeList
}
////////////////////////////////////////////////////