const { test } = require('@jest/globals');
const Engineer = require('../lib/Engineer');


test("can set the git hub account", () => {
    const employee = new Engineer('Claire', '12A', 'email', 'github');
    expect(employee.github).toBe('github')
});



// test("the getRole() function should overide and return Engineer", () => {
//     const employee = new Engineer('Claire', '12A', 'email', 'office');
//     expect(employee.getRole()).toBe(Engineer);
// });
