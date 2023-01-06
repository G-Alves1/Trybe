USE sakila;

/*******1*******/
SELECT UCASE('Trybe');

/*******2*******/
SELECT replace('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');

/*******3*******/
SELECT LENGTH('Uma frase qualquer');

/*******4*******/
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);

/*******5*******/
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');

/*******6*******/
SELECT film_id, title,
IF(title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme') AS 'conheço o filme?'
FROM film;

/*******7*******/
SELECT title, rating,
    CASE
        WHEN rating = 'G' THEN 'Livre para todos'
        WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
        ELSE 'Proibido para menores de idade'
    END AS 'público Alvo'
FROM film;

/*******8*******/
SELECT IF(15 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou Ímpar';

/*******9*******/
SELECT 220 DIV 12;

/*******10*******/
SELECT IF(220 MOD 12 = 0, 'NÃO', CONCAT('SIM, ', 220 MOD 12, ' lugares'));

/*******11*******/
SELECT FLOOR(15 + (RAND() * 5));

/*******12*******/
SELECT ROUND(15.7515971, 5);

/*******13*******/
SELECT FLOOR(39.494);

/*******14*******/
SELECT CEIL(85.234);

/*******15*******/
SELECT DATEDIFF('2030-01-20', NOW());

/*******16*******/
SELECT TIMEDIFF('10:25:45', '11:00:00');

/*******17*******/
SELECT
    AVG(length) AS 'Média de Duração',
    MIN(length) AS 'Duração Mínima',
    MAX(length) AS 'Duração Máxima',
    SUM(length) AS 'Tempo de Exibição Total',
    COUNT(*) AS 'Filmes Registrados'
FROM film;

/*******18*******/
SELECT active, COUNT(*)
FROM customer
GROUP BY active;

/*******19*******/
SELECT store_id, active, COUNT(*)
FROM customer
GROUP BY store_id, active;

/*******20*******/
SELECT AVG(rental_duration) AS avg_rental_duration, rating
FROM film
GROUP BY rating
ORDER BY avg_rental_duration DESC;

/*******21*******/
SELECT district, COUNT(*)
FROM address
GROUP BY district
ORDER BY COUNT(*) DESC;

/*******22*******/
SELECT rating, AVG(length) duracao_media
FROM film
GROUP BY rating
HAVING duracao_media BETWEEN 115.0 AND 121.50
ORDER BY duracao_media DESC;

/*******23*******/
SELECT rating, SUM(replacement_cost) AS custo_de_substituicao
FROM film
GROUP BY rating
HAVING custo_de_substituicao  > 3950.50
ORDER BY custo_de_substituicao ASC;