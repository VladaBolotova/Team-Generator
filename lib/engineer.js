const Employee=require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github ){

        super(name, id, email);

        this.github=github;
    }
    
    getGithub(){
        return this.github;
    }
    
    getRole(){
        return "Engineer";
    }

    toString(){
        return  `<div class="container w-25 ">
        <ul class="card">
        <div class="card-header">${this.name} Engineer
        </div>
        
        <div class="lcard-header">ID ${this.id}</div>
        <div class="card-body">Email: <span id="email"><a href="mailto:${this.email}">${this.email}</a></span></div>
        <div class="card-footer">GitHub: <a href="https://github.com ${this.gitHub}">${this.gitHub}</a></div>
        </ul>
        </div>`
    }
}

module.exports = Engineer;