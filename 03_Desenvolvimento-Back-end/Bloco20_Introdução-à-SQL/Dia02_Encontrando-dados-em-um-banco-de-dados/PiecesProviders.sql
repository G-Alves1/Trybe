USE PiecesProviders;

/*******1*******/
SELECT Piece, Price
FROM Provides
WHERE Provider = 'RBT';

/*******2*******/
SELECT Piece, Price
FROM Provides
ORDER BY Price DESC
LIMIT 5;

/*******3*******/
SELECT DISTINCT Provider, Price
FROM Provides
ORDER BY Price DESC
LIMIT 4
OFFSET 2;

/*******4*******/
SELECT *
FROM Provides
WHERE Provider = 'HAL'
ORDER BY Price DESC;

/*******5*******/
SELECT COUNT(Provider)
FROM Provides
WHERE Piece = 1;