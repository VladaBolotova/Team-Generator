const Employee=require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school){

        super(name, id, email,);
       
        this.school=school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern";
    }

    toString(){
        return `
        <div class="box">
        <div class="name">${this.name} Intern
        </div>
        <ul class="list">
        <li class="list-item">ID ${this.id}</li>
        <li class="list-item">Email: <span id="email"><a href="mailto:${this.email}">${this.email}</a></span></li>
        <li class="list-item">School: ${this.school}"</li>
        </ul>
        </div>`
    }
}
const intern = new Intern("Vlada", "070110", "vladislavabolotova@gmail.com", "Miami");
console.log(intern.name);
module.exports= Intern;