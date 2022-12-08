const fs = require('fs');
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const inquirer = require('inquirer');
const path = require ('path');
const teamMember = [];





//promp questions for manager//

inquirer.prompt([
    {
        name:"name",
        message: "What is your name?",
        type:"input",
    },
    {
        name:"id",
        message: "What is your id?",
        type:"input",
    },
    {
        name:"email",
        message: "What is your email?",
        type:"input",
    },
    {
        name:"ofNumber",
        message: "What is your office number?",
        type:"input",
    },

]).then((res)=>{
    //getting the user input
    const manager = new Manager(res.name, res.id, res.email, res.ofNumber);
    //pushing into emmpty arrray of Team Mmembers
    teamMember.push(manager);
    menu();
   

})

// defining function with few choice and using swith method to call following functions
function menu(){
    inquirer.prompt({
        name:"buildTeam",
        message: "Do you want to keep building your team?",
        choices: ["building engineer", "building intern", "finish building my team"],
        type:"list",
    }).then(function (choice){
        switch(choice.buildTeam){
            case "building engineer":
                addEngineer();
            break;
            case "building intern":
                addIntern();
            break;
            default:
                createTeam();
                
        }
    })
};

const addEngineer =()=> {
    inquirer.prompt([
        {
            name:"name",
            message: "What is the name of enginneer?",
            type:"input",
        },
        {
            name:"id",
            message: "What is the id of engineer?",
            type:"input",
        },
        {
            name:"email",
            message: "What is the email of engineer?",
            type:"input",
        },
        {
            name:"gitHub",
            message: "What is your GitHub of engineer?",
            type:"input",
        },
    ]).then((res)=> {
    
        const engineer = new Engineer(res.name, res.id, res.email, res.gitHub);
        teamMember.push(engineer);
        menu();
        
})
}

const addIntern =()=> {
    inquirer.prompt([
        {
            name:"name",
            message: "What is the name of intern?",
            type:"input",
        },
        {
            name:"id",
            message: "What is the id of intern?",
            type:"input",
        },
        {
            name:"email",
            message: "What is the email of intern?",
            type:"input",
        },
        {
            name:"school",
            message: "What is the school of intern?",
            type:"input",
        },
    ]).then((res)=> {
    
        const intern = new Intern(res.name, res.id, res.email, res.school);
        teamMember.push(intern);
        menu();
        
})
}

const createTeam =()=>{
const html =     ` <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <title>Team Generator</title>
</head>
<body>.
<div class="jumbotron container-fluid ml-30 mt-2 text-center p-2" style="background-color:#404040 ;color: white;">
<h1> My Team</h1>
</div>
    ${teamMember.join("")}
   
     </body>
    </html>
 
`        



    fs.writeFile('index.html', html, (err)=>
        err ? console.error(err) : console.log('Team geterated succesfull'));
}

