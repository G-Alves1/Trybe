/*******1*******/
SELECT 'Gabriel';

/*******2*******/
SELECT 'Gabriel', 'Alves', 'Mariana', 21;

/*******3*******/
SELECT 'Gabriel' AS 'name', 'Alves' AS 'last_name', 'Mariana' AS 'hometown', 21 AS 'age';

/*******4*******/
SELECT 13*8;

/*******5*******/
SELECT now() AS 'data_atual';

/*******6*******/
SELECT *
FROM sakila.city;

/*******7*******/
SELECT first_name, last_name
FROM sakila.customer;

/*******8*******/
SELECT *
FROM sakila.rental;

/*******9*******/
SELECT title, description, release_year
FROM sakila.film;

/*******10*******/
SELECT *
FROM sakila.nome_da_tabela;

/*******11*******/
SELECT CONCAT(title, ' ', release_year) AS 'lançamento_do_filme'
FROM sakila.film;

/*******12*******/
SELECT CONCAT(title, ' ', rating) AS classificação
FROM sakila.film;

/*******13*******/
SELECT CONCAT(address, ' ', district) AS endereço
FROM sakila.address;

/*******14*******/
SELECT DISTINCT nome, idade
FROM Escola.Estudantes;

/*******15*******/
SELECT DISTINCT nome
FROM Escola.Estudantes;

/*******16*******/
SELECT DISTINCT idade
FROM Escola.Estudantes;

/*******17*******/
SELECT COUNT(password)
FROM sakila.staff;

/*******18*******/
SELECT COUNT(*)
FROM sakila.staff;

/*******19*******/
SELECT COUNT(email)
FROM sakila.staff;

/*******20*******/
SELECT *
FROM sakila.film;

/*******21*******/
SELECT title, release_year, rating
FROM sakila.film;

/*******22*******/
SELECT COUNT(*)
FROM sakila.film;

/*******23*******/
SELECT DISTINCT last_name
FROM sakila.actor;

/*******24*******/
SELECT COUNT(DISTINCT last_name)
FROM sakila.actor;

/*******25*******/
SELECT *
FROM sakila.actor
ORDER BY last_name, first_name DESC;

/*******26*******/
SELECT *
FROM sakila.language
LIMIT 5
OFFSET 1;

/*******27*******/
SELECT *
FROM sakila.film;

/*******28*******/
SELECT title, release_year, length, rating, replacement_cost
FROM sakila.film
ORDER BY length DESC, replacement_cost ASC
LIMIT 20;
 