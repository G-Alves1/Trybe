USE Scientists;

/*******1*******/
SELECT *
FROM Scientists
WHERE name LIKE '%e%';

/*******2*******/
SELECT name
FROM Projects
WHERE code LIKE "A%"
ORDER BY name ASC;

/*******3*******/
SELECT code, name
FROM Projects
WHERE code LIKE "%3%"
ORDER BY name ASC;

/*******4*******/
SELECT scientist
FROM AssignedTo
WHERE Project IN('AeH3', 'Ast3', 'Che1');

/*******5*******/
SELECT *
FROM Projects
WHERE hours > 500;

/*******6*******/
SELECT *
FROM Projects
WHERE hours BETWEEN 250 AND 800;

/*******7*******/
SELECT code, name
FROM Projects
WHERE name NOT LIKE 'A%';

/*******8*******/
SELECT name
FROM Projects
WHERE code LIKE '%H%';