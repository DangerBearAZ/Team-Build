const iquire = require('inquirer');
const fs = require('fs');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const { fillCard, writeToFile } = require('./src/team-template');
const Employee = require('./lib/Employee');

//put your people here 
const employee = [];


function addEmployee() {
    inquirer.prompt([{
        type: 'input',
        message: "Enter employee name.(Required)",
        name: "name",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You need to enter a name');
                return false;
            }
        }
    },
    {
        type: 'list',
        message: "Select employee roll(Required)",
        choices: ["Manager", "Engineer", "Intern", "Employee"],
        name: "role",
        validate: roleInput => {
            if (roleInput) {
                return true;
            } else {
                console.log('Please define role');
                return false;
            }
        }
    },
    {
        message: 'Enter Employee ID',
        name: 'id'
    },
    {
        message: 'Enter Employee Email',
        name: 'email'
    }])
        //end of promt 
        //else if for specific employee type needs
        .then(function ({ name, role, id, email }) {
            let roleInfo = '';
            if (role === "Engineeer") {
                roleInfo = "Github name";
            } else if (role === "Intern") {
                roleInfo = "school";
            } else {
                roleInfo = "office phone number";
            }
            //promt for roll specifics 
            inquirer.prompt([{
                message: `Enter employee's ${roleInfo}`,
                name: 'roleInfo'
            },
            {
                type: 'confirm',
                name: 'newEmployee',
                message: 'Would you like to add another employee?',
                default: false
            }
            ])
                .then(function (data) {
                    var employeeConstruction =  new Employee(name, id, email);
                    //new intern some data use switch case some what like if then 
                    employee.push(employeeConstruction)
                    console.log(employee);
                    
                    
                    if (data.newEmployee) {
                        addEmployee();

                    } 
                    else {
                        fillCard(employee)
                    }
                })
        });
};
  

addEmployee()
