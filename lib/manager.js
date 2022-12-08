const Employee=require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){

        super(name, id, email,);
        
        this.officeNumber=officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
    
    getRole(){
        return "Manager";
    }

    toString(){
        return  `<div class="box">
        <div class="name"${this.name} Manager>
        </div>
        <ul class="list">
        <li class="list-item">ID ${this.id}</li>
        <li class="list-item">Email: <span id="email"><a href="mailto:${this.email}">${this.email}</a></span></li>
        <li class="list-item">Office number: ${this.officeNumber}</li>
        </ul>
        </div>`
    }
}

module.exports = Manager;
