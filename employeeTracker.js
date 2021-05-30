const { prompt } = require("inquirer");
const { printTable } = require("console-table-printer");
const db = require("./db/db");
const connection = require("./db/connection");

init();

function init() {
  mainMenu();
}

async function mainMenu() {
  const mainMenu = await prompt([
    {
      type: "list",
      name: "mainMenu",
      message: "What would you like to do?",
      choices: [
        {
          name: "View All Employees",
          value: "view_employees",
        },
        // {
        //   name: "View All Employees By Department",
        //   value: "view_employees_department"
        // },
        // {
        //   name: "View All Employees By Manager",
        //   value: "view_employees_manager"
        // },
        {
          name: "View Roles",
          value: "view_roles",
        },
        {
          name: "View All Departments",
          value: "view_departments",
        },
        {
          name: "Add Employees",
          value: "add_employees",
        },
        // {
        //   name: "Remove Employees",
        //   value: "view_employees"
        // },
        {
          name: "Add Roles",
          value: "add_roles",
        },
        {
          name: "Add Departments",
          value: "add_departments",
        },
        {
          name: "Update Employee Roles",
          value: "update_employee_roles",
        },
        {
          name: "Exit",
          value: "exit",
        },
      ],
    },
  ]).then((data) => {
    switch (data.mainMenu) {
      case "view_employees":
        viewEmployees();
        break;
      case "view_roles":
        viewRoles();
        break;
      case "view_departments":
        viewDepartments();
        break;
      case "add_employees":
        addEmployees();
        break;
      case "add_roles":
        addRoles();
        break;
      case "add_departments":
        addDepartments();
        break;
      case "update_employee_roles":
        updateRoles();
        break;
      case "exit":
        connection.end();
    }
  });
}

//View departments, roles, employees
async function viewEmployees() {
  const employees = await db.findAllEmployees();
  console.log("\n");
  printTable(employees);

  mainMenu();
}

async function viewDepartments() {
  const department = await db.findDepartments();
  console.log("\n");
  printTable(department);

  mainMenu();
}
async function viewRoles() {
  const role = await db.findRoles();
  console.log("\n");
  printTable(role);

  mainMenu();
}

//Add departments, roles, employees
function addDepartments() {
  inquirer.prompt();
}
function addRoles() {
  inquirer.prompt();
}
function addEmployees() {
  inquirer.prompt();
}

//Update employee roles

function updateDepartments() {
  inquirer.prompt();
}
function updateRoles() {
  inquirer.prompt();
}
function updateEmployees() {
  inquirer.prompt();
}

//-----------bottom--------------//
