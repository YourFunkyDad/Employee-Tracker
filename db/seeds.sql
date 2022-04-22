USE employeesDB;

INSERT INTO department (name)
VALUES 
    ('Media'),
    ('Sales'),
    ('Marketing'),
    ('IT');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Marketing', 50000, 1),
    ('Accountant', 80000, 2),
    ('Software Developer', 100000, 3),
    ('Project Manager', 120000, 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES
    ('Jacob', 'Allred', 1);