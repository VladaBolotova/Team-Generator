const fs = require('fs');
const Manager = require("./lib/manager");
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
    })
}