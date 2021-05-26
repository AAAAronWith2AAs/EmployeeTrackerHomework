USE employeeTrackerDB;

INSERT INTO employee (firstName, lastName, roleId, managerId)
VALUES 
("aaron", "mendoza", 1, NULL),
("alexis", "welch", 2, NULL),
("bob", "levy", 3, NULL);

INSERT INTO department (name)
VALUES 
("Sales"),
("Engineering"),
("Finance");

INSERT INTO role (title, salary, departmentId)
VALUES 
();

