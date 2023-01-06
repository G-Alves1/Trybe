USE sakila;

/*******1*******/
SELECT *
FROM customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

/*******2*******/
SELECT first_name
FROM customer
WHERE active = 0 AND store_id = 2 AND first_name <> 'KENNETH'
ORDER BY first_name ASC;

/*******3*******/
SELECT title, description, release_year, replacement_cost
FROM film
WHERE rating <> 'NC-17' AND replacement_cost >= 18.00
ORDER BY replacement_cost DESC, title ASC
LIMIT 100;

/*******4*******/
SELECT COUNT(*)
FROM customer
WHERE active = 1 AND store_id = 1;

/*******5*******/
SELECT *
FROM customer
WHERE active = 0 AND store_id = 1;

/*******6*******/
SELECT title
FROM film
WHERE rating = 'NC-17'
ORDER BY rental_rate ASC, title ASC
LIMIT 50;

/*******7*******/
SELECT *
FROM film
WHERE title LIKE '%ace%';

/*******8*******/
SELECT *
FROM film
WHERE description LIKE '%china';

/*******9*******/
SELECT *
FROM film
WHERE description LIKE '%girl%' AND title LIKE '%lord';

/*******10*******/
SELECT *
FROM film
WHERE title LIKE '___gon%';

/*******11*******/
SELECT *
FROM film
WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';

/*******12*******/
SELECT *
FROM film
WHERE title LIKE '%academy' OR title LIKE 'mosquito%';

/*******13*******/
SELECT *
FROM film
WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';

/*******14*******/
SELECT first_name, last_name, email
FROM customer
WHERE last_name IN('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name ASC;

/*******15*******/
SELECT email
FROM customer
WHERE address_id BETWEEN 172 AND 176
ORDER BY email ASC;

/*******16*******/
SELECT COUNT(*)
FROM payment
WHERE DATE(payment_date) BETWEEN '2005-05-01' AND '2005-08-01';

/*******17*******/
SELECT title, release_year, rental_duration
FROM film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title ASC;

/*******18*******/
SELECT title, rating
FROM film
WHERE rating IN('G', 'PG', 'PG-13')
ORDER BY title ASC
LIMIT 500;

/*******19*******/
SELECT COUNT(*)
FROM payment
WHERE DATE(payment_date) = '2005-05-25';

/*******20*******/
SELECT COUNT(*)
FROM payment
WHERE payment_date BETWEEN '2005-07-01' AND '2005-08-22';

/*******21*******/
SELECT
    DATE(rental_date) AS Data,
    YEAR(rental_date) AS Ano ,
    MONTH(rental_date) AS Mes,
    DAY(rental_date) AS Dia,
    HOUR(rental_date) AS Hora,
    MINUTE(rental_date) AS Minuto,
    SECOND(rental_date) AS Segundo
FROM rental
WHERE rental_id = 10330;

/*******22*******/
SELECT *
FROM payment
WHERE DATE(payment_date) = '2005-07-28' AND HOUR(payment_date) >= 22;