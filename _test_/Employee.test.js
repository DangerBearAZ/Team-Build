const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates a new employee object', () => {
    const employee = new Employee('');

    expect(employee.name).toBe('');
    expect(employee.id).toBe('');
    expect(eployee.email).toBe('');
    expect(employee.office).toBe('');
});

