const iquire = require('inquirer');
const fs = require('fs');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');

//put your people here lol! 
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
        choices: ["Manager", "Engineer", "Intern"],
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
                    console.log(data.newEmployee);
                    if (data.newEmployee) {
                        addEmployee();

                    } 
                    else {
                        //write html funtion 
                        console.log("this would be writes if i wrote that")
                    }
                })
        });
}

addEmployee();