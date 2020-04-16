//requiring necessary modules
////////////////////////////////////////////////////
const axios = require('axios')
const generateREADME = require('./generateREADME')
////////////////////////////////////////////////////

//exporting function for grabbing github data
////////////////////////////////////////////////////
module.exports = (answers, badges) => {
    const queryUrl = `https://api.github.com/users/${answers.username}`;
    const answerList = answers
    const badgeList = badges
    
    axios
    .get(queryUrl).then((response) => {
        data = response.data
        returnData = {
            name: data.name,
            url: data.url,
            picture: data.avatar_url
        }
        return returnData
    })
    
// function call to generate readme with data returned from query
////////////////////////////////////////////////////
    .then((returnData) => {
        generateREADME(returnData, answerList, badgeList), (err) => {
            if(err){
                console.log(err)
            }
        }
    })
}
////////////////////////////////////////////////////