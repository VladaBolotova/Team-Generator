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
        return `
        <div class="box">
        <div class="name">${this.name} Engineer
        </div>
        <ul class="list">
        <li class="list-item">ID ${this.id}</li>
        <li class="list-item">Email: <span id="email"><a href="mailto:${this.email}">${this.email}</a></span></li>
        <li class="list-item">GitHub: <a href="https://github.com ${this.gitHub}">${this.gitHub}</a></li>
        </ul>
        </div>`
    }
}

module.exports = Engineer;