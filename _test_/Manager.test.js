const { expect, test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test("the getRole() function should overide and return manager", () => {
    const employee =  new Manager('Claire', '12A', 'email', 'office'); 
    expect(employee.getRole()).toBe("Manager")
});

test("the getRole() function should overide and return Manager", () => {
    const employee =  new Manager('Claire', '12A', 'email', 'office'); 
    expect(employee.getRole()).toBe("Manager");
});
