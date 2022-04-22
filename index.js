const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const util = require('util');

require('dotenv').config();


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'employeesDB',
    password: 'password'
  });

const promptUser = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: ['View All Employees',
            'Add Employee',
            'Update Employee Role',
            'View All Roles',
            'Add Role',
            'View All Departments',
            'Add Department',
            'Quit']
        }
    ])
    .then((answers) => {
        const { choices } = answers;
        
        if (choices === 'View All Employees') {
            showEmployees();
        }

        if (choices === 'Add Employee') {
            addEmployee();
        }

        if (choices === 'Update Employee Role') {
            updateEmployeeRole();
        }
        
        if (choices === 'View All Roles') {
            showRoles();
        }
        
        if (choices === 'Add Role') {
            addRole();
        }

        if (choices === 'View All Departments') {
            showDepartments();
        }
        
        if (choices === 'Add Department') {
            addDepartment();
        }
        
        if (choices === 'Quit') {
            connection.end();
        };
    });
};

promptUser()
