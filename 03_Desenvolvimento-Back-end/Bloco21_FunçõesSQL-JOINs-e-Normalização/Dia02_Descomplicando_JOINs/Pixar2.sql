USE Pixar2;

/*******1*******/
SELECT
    M.title, B.domestic_sales, B.international_sales
FROM Movies AS M
INNER JOIN BoxOffice AS B
ON M.id = B.movie_id;

/*******2*******/
SELECT
    M.title, (B.domestic_sales + B.international_sales) AS Vendas
FROM Movies AS M
INNER JOIN BoxOffice AS B
ON M.id = B.movie_id
WHERE B.international_sales > B.domestic_sales;

/*******3*******/
SELECT M.title, B.rating
FROM Movies AS M
INNER JOIN BoxOffice AS B
ON M.id = B.movie_id
ORDER BY B.rating DESC;

/*******4*******/
SELECT
    T.name, T.location,
    M.title, M.director, M.year, M.length_minutes
FROM Theater AS T
LEFT JOIN Movies AS M
ON T.id = M.theater_id
ORDER BY T.name;

/*******5*******/
SELECT
    T.id, T.name, T.location,
    M.title, M.director, M.year, M.length_minutes
FROM Theater AS T
RIGHT JOIN Movies AS M
ON T.id = M.theater_id
ORDER BY T.name;

/*******6*******/
SELECT
    M.id, M.title, M.director, M.year, M.length_minutes, M.theater_id
FROM Movies AS M
INNER JOIN BoxOffice AS B
ON M.id = B.movie_id
WHERE B.rating > 8 AND M.theater_id IS NOT NULL;
