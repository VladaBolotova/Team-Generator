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
        return  `<div class="container w-25">
        <ul class="card">
        <div class="card-header">${this.name} Manager
        </div>
        
        <div class="card-header">ID ${this.id}</div>
        <div class="card-body">Email: <span id="email"><a href="mailto:${this.email}">${this.email}</a></span></div>
        <div class="card-footer">Office number: ${this.officeNumber}</div>
        </ul>
        </div>`
    }
}

module.exports = Manager;
