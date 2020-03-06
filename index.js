const questions = require('./util/questions')
const inquirer = require('inquirer')
qeury = require('./util/qeury')

initialize()

async function initialize(){
    var answers = await inquirer.prompt(questions)
    console.log(answers)
    var badges = await addBadges()
    console.log(badges)
    qeury(answers, badges)
}

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