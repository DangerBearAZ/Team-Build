const Intern = require('../lib/Intern');

test("add school to employee", () =>  {
const employee = new Intern('Claire', '12A', 'email', 'school')
expect (employee.school).tobe(school);
});

// test("the getRole() function should overide and return manager", () => {
//     const employee =  new Intern('Claire', '12A', 'email', 'school'); 
//     expect(employee.getRole()).toBe("Intern");
// });


