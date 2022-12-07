const Employee = require('../employee');
const employee = new Employee("Vlada", "070110", "vladislavabolotova@gmail.com");

test('test if we can het the values for the employee object',()=>{
    expect(employee.name).toBe('Vlada');
    expect(employee.id).toBe('070110');
    expect(employee.email).toBe('vladislavabolotova@gmail.com');
});

test('if we can get the name from the getName() method ', ()=>{
    expect(employee.getNmae()).toBe('Vlada');
});

test('if we can get the ID from the getID() method', ()=>{
    expect(employee.id()).toBe('070110');
});

test('if we can get an email from the getEmail() method', ()=>{
    expect(employee.email()).toBe('vladislavabolotova@gmail.com');
});

test('if we can get a role from the getRole() method', ()=>{
    expect(employee.role()).toBe('Employee');
});
