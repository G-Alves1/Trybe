USE sakila;

/*******1*******/
SELECT A.actor_id, A.first_name, F.film_id
FROM actor AS A
INNER JOIN film_actor AS F
ON A.actor_id = F.actor_id;

/*******2*******/
SELECT S.first_name, S.last_name, A.address
FROM staff AS S
INNER JOIN address AS A
ON S.address_id = A.address_id;

/*******3*******/
SELECT
    C.customer_id,
    C.first_name,
    C.email,
    C.address_id,
    A.address
FROM customer AS C
INNER JOIN address AS A
ON C.address_id = A.address_id
ORDER BY C.first_name DESC
LIMIT 100;

/*******4*******/
SELECT
    C.first_name,
    C.email,
    C.address_id,
    A.address,
    A.district
FROM customer AS C
INNER JOIN address AS A
ON C.address_id = A.address_id
WHERE A.district = 'California' AND C.first_name LIKE '%rene%';

/*******5*******/
SELECT C.first_name, COUNT(A.address) AS quantidade_de_endereco
FROM customer AS C
INNER JOIN address AS A
ON A.address_id = C.address_id
WHERE C.active = 1
GROUP BY C.customer_id
ORDER BY first_name DESC, last_name DESC;

/*******6*******/
SELECT
    S.first_name,
    S.last_name,
    AVG(P.amount) AS media
FROM staff AS S
INNER JOIN payment AS P
ON S.staff_id = P.staff_id
WHERE YEAR(P.payment_date) = 2006
GROUP BY S.staff_id;

/*******7*******/
SELECT
    A.actor_id, 
    A.first_name, 
    F.film_id, 
    F.title
FROM actor AS A
INNER JOIN film_actor AS FA
ON A.actor_id = FA.actor_id
INNER JOIN film AS F
ON F.film_id = FA.film_id;