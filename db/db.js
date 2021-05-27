const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }
  findAllEmployees() {
    return this.connection.query(
      "SELECT employee.id, employee.firstName, employee.lastName, role.title, department.name AS department, role.salary, CONCAT(manager.firstName, ' ', manager.lastName) AS manager FROM employee LEFT JOIN role on employee.roleId = role.id LEFT JOIN department on role.departmentId = department.id LEFT JOIN employee manager on manager.id = employee.managerId;"
    );
  }
  createEmployees(employee) {}
  updateEmployeeRole(employee, roleId) {}
  findRoles() {
    return this.connection.query(
      "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.departmentId = department.id;"
    );
  }
  createRoles(role) {}
  findDepartments() {
    return this.connection.query(
      "SELECT department.id, department.name, SUM(role.salary) AS department_budget FROM department LEFT JOIN role on role.departmentId = department.id LEFT JOIN employee ON employee.roleId = role.id GROUP BY department.id, department.name;"
    );
  }
  createDepartments(department) {}
}

module.exports = new DB(connection);
