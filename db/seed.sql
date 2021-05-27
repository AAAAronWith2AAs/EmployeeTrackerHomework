USE employees;


INSERT INTO department (name)
VALUES 
("Sales"),
("Engineering"),
("Finance");

INSERT INTO role (title, salary, departmentId)
VALUES 
("engineer", 200000, 2),
("sales", 60000, 1),
("finance", 80000, 3);


INSERT INTO employee (firstName, lastName, roleId, managerId)
VALUES 
("aaron", "mendoza", 1, NULL),
("alexis", "welch", 2, NULL),
("bob", "levy", 3, NULL);
