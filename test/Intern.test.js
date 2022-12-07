const Intern = require("./lib/intern");
const employee = new Employee("Vlada", "070110", "vladislavabolotova@gmail.com", "Miami");

test('test if we can het the values for the intern object',()=>{
    expect(intern.name).toBe('Vlada');
    expect(intern.id).toBe('070110');
    expect(intern.email).toBe('vladislavabolotova@gmail.com');
    expect(intern.school).toBe('Miami');
});

test('if we can get the name from the getName() method ', ()=>{
    expect(intern.getNmae()).toBe('Vlada');
});

test('if we can get the ID from the getID() method', ()=>{
    expect(intern.getId()).toBe('070110');
});

test('if we can get an email from the getEmail() method', ()=>{
    expect(intern.getEmail()).toBe('vladislavabolotova@gmail.com');
});

test('if we can get an email from the getofficeNumber() method', ()=>{
    expect(intern.getSchool()).toBe('Miami');
});

test('if we can get a role from the getRole() method', ()=>{
    expect(intern.getRole()).toBe('Intern');
});