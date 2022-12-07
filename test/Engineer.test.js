const Engineer = require("./lib/engineer");
const employee = new Employee("Vlada", "070110", "vladislavabolotova@gmail.com", "VladaBolotova");

test('test if we can het the values for the engineer object',()=>{
    expect(engineer.name).toBe('Vlada');
    expect(engineer.id).toBe('070110');
    expect(engineer.email).toBe('vladislavabolotova@gmail.com');
    expect(engineer.github).toBe('VladaBolotova');
});

test('if we can get the name from the getName() method ', ()=>{
    expect(manager.getNmae()).toBe('Vlada');
});

test('if we can get the ID from the getID() method', ()=>{
    expect(manager.getId()).toBe('070110');
});

test('if we can get an email from the getEmail() method', ()=>{
    expect(manager.getEmail()).toBe('vladislavabolotova@gmail.com');
});

test('if we can get an email from the getEmail() method', ()=>{
    expect(manager.getGithub()).toBe('VladaBolotova');
});

test('if we can get a role from the getRole() method', ()=>{
    expect(manager.getRole()).toBe('Engineer');
});