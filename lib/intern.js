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
        return  `<div class="container w-25">
       <ul class="card">
        <div class="card-header">${this.name} Intern
        </div>
        
        <div class="card-header">ID ${this.id}</div>
        <div class="card-body">Email: <span id="email"><a href="mailto:${this.email}">${this.email}</a></span></div>
        <div class="card-footer">School: ${this.school}"</div>
        </ul>
        </div>`
    }
}
// const intern = new Intern("Vlada", "070110", "vladislavabolotova@gmail.com", "Miami");
// console.log(intern.name);
module.exports= Intern;