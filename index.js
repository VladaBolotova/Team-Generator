const fs = require('fs');
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const inquirer = require('inquirer');
const path = require ('path');
const teamMember = [];






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
    teamMember.push(manager);
    menu();
   

})

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

const createTeam =(teamMember)=>{

const managerFunction = (manager) => {
    const maHtml = `
    <div class="box">
    <div class="name"${manager.name} Manager>
    </div>
    <ul class="list">
    <li class="list-item">ID ${manager.id}</li>
    <li class="list-item">Email: <span id="email"><a href="mailto:${manager.email}"></a></span></li>
    <li class="list-item">Office number: ${manager.ofNumber}</li>
    </ul>
    </div>`
}
const engineerFunction = (engineer) => {
    const enHtml = `
    <div class="box">
    <div class="name"${engineer.name} Engineer>
    </div>
    <ul class="list">
    <li class="list-item">ID ${engineer.id}</li>
    <li class="list-item">Email: <span id="email"><a href="mailto:${engineer.email}"></a></span></li>
    <li class="list-item">GitHub: <a href="https://github.com ${engineer.gitHub}"</li>
    </ul>
    </div>`
}
const internFunction = (intern) => {
    const inHtml = `
    <div class="box">
    <div class="name"${intern.name} Intern>
    </div>
    <ul class="list">
    <li class="list-item">ID ${intern.id}</li>
    <li class="list-item">Email: <span id="email"><a href="mailto:${intern.email}"></a></span></li>
    <li class="list-item">School: ${intern.school}"</li>
    </ul>
    </div>`
}

        

// const htmlPage = createTeam();


//     fs.writeFile('index.html', htmlPage, (err)=>
//         err ? console.error(err) : console.log('Commit logged'));
}

const htmlPage = () =>{
   return
    ` <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylysheet" href="./Assets/style.css"></link>
        <title>Team Generator</title>
    </head>
    <body>
        <header>
        <h1>My team</h1>
        </header>
        ${createTeam()}
       
         </body>
        </html>
     
`
}