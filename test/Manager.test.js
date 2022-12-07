const Manager = require("./lib/manager");
const employee = new Employee("Vlada", "070110", "vladislavabolotova@gmail.com", "222");

test('test if we can het the values for the manager object',()=>{
    expect(manager.name).toBe('Vlada');
    expect(manager.id).toBe('070110');
    expect(manager.email).toBe('vladislavabolotova@gmail.com');
    expect(manager.officeNumber).toBe('222');
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

test('if we can get an email from the getofficeNumber() method', ()=>{
    expect(manager.getOfficeNumber()).toBe('222');
});

test('if we can get a role from the getRole() method', ()=>{
    expect(manager.getRole()).toBe('Manager');
});