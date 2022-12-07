const Employee = require("../lib/employee");
const employee = new Employee("Vlada", "070110", "vladislavabolotova@gmail.com");

test('test if we can het the values for the employee object',()=>{
    expect(employee.name).toBe('Vlada');
    expect(employee.id).toBe('070110');
    expect(employee.email).toBe('vladislavabolotova@gmail.com');
});

test('if we can get the name from the getName() method ', ()=>{
    expect(employee.getName()).toBe('Vlada');
});

test('if we can get the ID from the getID() method', ()=>{
    expect(employee.getId()).toBe('070110');
});

test('if we can get an email from the getEmail() method', ()=>{
    expect(employee.getEmail()).toBe('vladislavabolotova@gmail.com');
});

test('if we can get a role from the getRole() method', ()=>{
    expect(employee.getRole()).toBe('Employee');
});
