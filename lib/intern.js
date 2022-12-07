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
}
const intern = new Intern("Vlada", "070110", "vladislavabolotova@gmail.com", "Miami");
console.log(intern.name);
module.exports= Intern;