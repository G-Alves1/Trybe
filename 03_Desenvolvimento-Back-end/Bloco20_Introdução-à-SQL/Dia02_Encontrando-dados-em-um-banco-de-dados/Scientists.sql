USE Scientists;

/*******1*******/
SELECT 'This is SQL Exercise, Practice and Solution';

/*******2*******/
SELECT 1, 2, 3;

/*******3*******/
SELECT 10 + 15;

/*******4*******/
SELECT 10 * (15 + 1);

/*******5*******/
SELECT *
FROM Scientists;

/*******6*******/
SELECT name AS 'nome_do_projeto', hours AS 'tempo_de_trabalho'
FROM Projects;

/*******7*******/
SELECT name
FROM Scientists
ORDER BY name ASC;

/*******8*******/
SELECT name
FROM Projects
ORDER BY name DESC;

/*******9*******/
SELECT CONCAT('O projeto ', name, ' precisou de ', hours, ' horas para ser concluído.')
FROM Projects;

/*******10*******/
SELECT name, hours
FROM Projects
ORDER BY hours DESC
LIMIT 3;

/*******11*******/
SELECT DISTINCT Project
FROM AssignedTo;

/*******12*******/
SELECT name
FROM Projects
ORDER BY hours DESC
LIMIT 1;

/*******13*******/
SELECT name
FROM Projects
ORDER BY hours ASC
LIMIT 1
OFFSET 1;

/*******14*******/
SELECT *
FROM Projects
ORDER BY hours ASC
LIMIT 5;

/*******15*******/
SELECT CONCAT('Existem ', COUNT(name), ' cientistas na tabela Scientists.')
FROM Scientists;