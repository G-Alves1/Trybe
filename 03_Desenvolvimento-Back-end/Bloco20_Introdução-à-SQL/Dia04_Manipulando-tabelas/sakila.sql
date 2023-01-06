USE sakila;

/*******1*******/
INSERT INTO
    staff (first_name, last_name, address_id, store_id, active, username)
VALUES ('Gabriel', 'Alves', 2, 1, 1, 'Gabs');

/*******2*******/
INSERT INTO
    staff (first_name, last_name, address_id, store_id, active, username)
VALUES
    ('Elon', 'Musk', 2, 1, 1, 'ElonM'),
    ('Jeff', 'Bezos', 2, 1, 1, 'JeffB');

/*******3*******/
INSERT INTO actor (first_name, last_name)
SELECT first_name, last_name
FROM customer
ORDER BY customer_id ASC
LIMIT 5;

/*******4*******/
INSERT INTO category (name)
VALUES
    ('Acao'),
    ('Comedia'),
    ('Esporte');

/*******5*******/
INSERT INTO store (manager_staff_id, address_id)
VALUES (3, 3);

/*******6*******/
SET SQL_SAFE_UPDATES = 0;
UPDATE actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

/*******7*******/
SET SQL_SAFE_UPDATES = 0;
UPDATE category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';

/*******8*******/
SET SQL_SAFE_UPDATES = 0;
UPDATE film
SET rental_rate = 25
WHERE length > 100
    AND (rating = 'G' OR rating = 'PG' OR rating = 'PG-13')
    AND replacement_cost > 20;

/*******9*******/
SET SQL_SAFE_UPDATES = 0;
UPDATE film
SET rental_rate = (
    CASE
        WHEN length BETWEEN 1 AND 100 THEN 10
        WHEN length > 100 THEN 20
    END
);

/*******10*******/
SELECT actor_id
FROM actor
WHERE first_name = 'KARL';

DELETE FROM film_actor
WHERE actor_id = 12;

DELETE FROM actor
WHERE first_name = 'KARL';

/*******11*******/
SELECT actor_id
FROM actor
WHERE first_name = 'MATTHEW';

DELETE FROM film_actor
WHERE actor_id IN (8, 103, 181);

DELETE FROM actor
WHERE first_name = 'MATTHEW';

/*******12*******/
DELETE FROM film_text
WHERE DESCRIPTION LIKE '%saga%';

/*******13*******/
TRUNCATE film_actor;

TRUNCATE film_category;