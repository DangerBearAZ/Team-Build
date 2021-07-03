const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates a new employee object', () => {
    const employee = new Employee('Claire', '12A', 'email');

    expect(employee.name).toBe('Claire');
    expect(employee.id).toBe('12A');
    expect(employee.email).toBe('email');
   
});

