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
                        function writeHtml();
                        console.log("this would be writes if i wrote that")
                    }
                })
        });
};


function writeHtml(addEmployee) {
    const name = member.getName();
    const role = member.getRole();
    const id = member.getId();
    const email = member.getEmail();
    let data = "";

    const html =  `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="/dist/style.css">
        <title>My Team</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-warning mb-5 navbar-red">
            <span class="navbar-brand mb-0 h2 w-100 text-center ">My Team</span>
        </nav>
        <div class="container">
            <div class="row">`;

  


addEmployee();