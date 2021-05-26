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
  mainMenu();
}

async function mainMenu() {
  const mainMenu = await prompt([
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
          name: "Quit",
          value: "quit",
        },
      ],
    },
  ]).then((response) => {
    switch (response.mainMenu) {
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
        quit();
    }
  });
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
  connection.query("SELECT dept_name FROM department", (err, res) => {
    if (err) throw err;

    inquirer
      .prompt([
        {
          type: "rawlist",
          message: "For which department do you wish to obtain info?",
          choices() {
            const deptArray = [];
            res.forEach(({ dept_name }) => {
              deptArray.push(dept_name);
            });
            return deptArray;
          },
          name: "deptChoice",
        },
      ])
      .then((response) => {
        //query DB for relevant results to display
        connection.query(
          `SELECT first_name, last_name, title, MANAGER_ID, salary, dept_name FROM employee INNER JOIN role ON employee.role_id = role.id INNER JOIN department ON role.department_id = department.id WHERE dept_name = "${response.deptChoice}"`,
          (err, res) => {
            if (err) throw err;
            const table = cTable.getTable(res);
            console.log(table);

            mainMenu();
          }
        );
      });
  });
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

function quit() {
  connection.end;
}

//-----------bottom--------------//
connection.connect((err) => {
  if (err) throw err;
});
