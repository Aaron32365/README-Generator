module.exports = [{
    type: 'input',
    name: 'username',
    message: "Enter your Github Username "
},{
    type: 'input',
    name: 'title',
    message: "Enter the title of your project "
    
},{
    type: 'input',
    name: 'description',
    message: "Enter your project description"
},{
    type: 'input',
    name: 'installation',
    message: "Enter the installation guide for your project "
},{
    type: 'input',
    name: 'usage',
    message: "Enter how to use your project "
},{
    type: 'input',
    name: 'license',
    message: "Enter any corresponding licenses for your project "
},{
    type: 'input',
    name: 'contributors',
    message: "Enter the names of any contributors to your project "
},{
    type: 'checkbox',
    name: 'contents',
    message: "Please check what you'd like to be in your projects table of contents ",
    choices: ['Title', 'Description', 'Installation', 'Usage', 'License', ' Contributors', 'Badges']
}
]
