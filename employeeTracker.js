const mysql = require("mysql");
const { prompt } = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employeeTrackerDB",
});

init();

function init() {
  menu();
}

async function menu() {
  const menu = await prompt([
    {
      type: "list",
      name: "menu",
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
          name: "Add Employees",
          value: "add_employees",
        },
        // {
        //   name: "Remove Employees",
        //   value: "view_employees"
        // },
        {
          name: "View Roles",
          value: "view_roles",
        },
        {
          name: "Add Roles",
          value: "add_roles",
        },
        {
          name: "View All Departments",
          value: "view_departments",
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
          name: "Quit",
          value: "quit",
        },
      ],
    },
  ]);

  switch (menu) {
    case "view_employees":
      return viewEmployees();
    case "add_employees":
      return addEmployees();
    case "view_roles":
      return viewRoles();
    case "add_roles":
      return addRoles();
    case "view_departments":
      return viewDepartments();
    case "add_departments":
      return addDepartments();
    case "update_employee_roles":
      return updateRoles();
    case "quit":
      return quit();
  }
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

//View departments, roles, employees
function viewDepartments() {
  inquirer.prompt();
}
function viewRoles() {
  inquirer.prompt();
}
async function viewEmployees() {
  const employees = await connection.query(
    "SELECT employee.id, employee.firstName, employee.lastName, role.title, department.name AS department, role.salary, CONCAT(manager.firstName, ' ', manager.lastName) AS manager FROM employee LEFT JOIN role on employee.roleId = role.id LEFT JOIN department on role.departmentId = department.id LEFT JOIN employee manager on manager.id = employee.managerId;"
  );
  console.log("view employees");
  console.log("\n");
  console.table(employees);
  menu();
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
connection.connect((err) => {
  if (err) throw err;
});
