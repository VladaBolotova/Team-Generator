class Employee{
    constractor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;

    }

getname(){
    return this.name;
}

getId(){
    return this.id;
}

getEmail(){
    return this.email;
}

getRole(){
    return "Employee";
}
}

module.exports = Employee;
