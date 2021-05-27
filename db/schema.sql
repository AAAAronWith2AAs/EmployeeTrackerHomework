-- * **employee**:

--   * **id** - INT PRIMARY KEY
--   * **first_name** - VARCHAR(30) to hold employee first name
--   * **last_name** - VARCHAR(30) to hold employee last name
--   * **role_id** - INT to hold reference to role employee has
--   * **manager_id** - INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager

DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;

CREATE TABLE employee (
    id INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(30),
    lastName VARCHAR(30),
    roleId INTEGER UNSIGNED NOT NULL, 
    INDEX roleIndex(roleId),
    CONSTRAINT FKrole FOREIGN KEY(roleId) REFERENCES role(id) ON DELETE CASCADE,
    managerId INTEGER UNSIGNED,
    INDEX managerIndex(managerId),
    CONSTRAINT FKmanager FOREIGN KEY(managerId) REFERENCES employee(id) ON DELETE SET NULL
);

-- * **department**:

--   * **id** - INT PRIMARY KEY
--   * **name** - VARCHAR(30) to hold department name
CREATE TABLE department (
    id INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL

);

-- * **role**:

--   * **id** - INT PRIMARY KEY
--   * **title** -  VARCHAR(30) to hold role title
--   * **salary** -  DECIMAL to hold role salary
--   * **department_id** -  INT to hold reference to department role belongs to

CREATE TABLE role (
    id INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL UNSIGNED NOT NULL,
    departmentId INTEGER UNSIGNED NOT NULL,
    INDEX department_id(departmentId),
    CONSTRAINT FKdepartment FOREIGN KEY(departmentId) REFERENCES department(id) ON DELETE CASCADE

);

