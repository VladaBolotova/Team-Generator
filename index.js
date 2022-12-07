const fs = require('fs');
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const inquirer = require('inquirer');
const path = require ('path');


// const enterManager = () =>{
//     return 
// }





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
    
    const manager = new Manager(res.name, res.id, res.email, res.ofNumber);
    menu();
    console.log(manager);
})

function menu(){
    inquirer.prompt({
        name:"buildTeam",
        message: "Do you want to keep building your team?",
        choices: ["building engineer", "building intern", "finish building my team"],
        type:"list",
    }).then(function choice(){
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
        menu();
        
})
}

const createTeam =()=>{

    const html = [];





    
    fs.writeFile('index.html', html, (err)=>
        err ? console.error(err) : console.log('Commit logged'));
}
