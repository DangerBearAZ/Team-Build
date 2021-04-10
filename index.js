const iquire = require ('inquirer');
const fs = require('fs');
const Engineer = require ("./lib/Engineer");
const Intern = require ("./lib/Intern");
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');

//put your people here lol! 
const employee = []; 

function addEmployee() {
    inquirer.prompt([{
        type: 'input',
        message: "Enter team member's name.(Required",
        name: "name",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You need to enter a name');
                return false;
            }
        }
    }

])
};

addEmployee ();