## Exercícios 1 - sakila.sql

**1.** Insira um novo funcionário na tabela *sakila.staff* .

**2.** Insira dois funcionários novos em apenas uma query .

**3.** Selecione os cinco primeiros nomes e sobrenomes da tabela *sakila.customer* e cadastre essas pessoas como atores na tabela *sakila.actor* .

**4.** Cadastre três categorias de uma vez só na tabela *sakila.category* .

**5.** Cadastre uma nova loja na tabela *sakila.store* .

**6.** Atualize o primeiro nome de todas as pessoas da tabela *sakila.actor* que possuem o primeiro nome "JULIA" para "JULES".

**7.** Foi exigido que a categoria "Sci-Fi" seja alterada para "Science Fiction".

**8.** Atualize o valor do aluguel para $25 de todos os filmes com duração maior que 100 minutos e que possuem a classificações "G" , "PG" ou "PG-13" e um custo de substituição maior que $20.

**9.** Foi determinado pelo setor financeiro que haverá um reajuste em todos os preços dos filmes, com base em sua duração. Para todos os filmes com duração entre 0 e 100, o valor do aluguel passará a ser $10,00, e o aluguel dos filmes com duração acima de 100 passará a ser de $20,00.

**10.** Exclua do banco de dados o ator com o nome de "KARL".

**11.** Exclua do banco de dados os atores com o nome de "MATTHEW".

**12** Exclua da tabela *film_text* todos os registros que possuem a palavra "saga" em suas descrições.

**13.** Apague da maneira mais performática possível todos os registros das tabelas *film_actor* e *film_category* .

**14.** Inspecione todas as tabelas do banco de dados sakila e analise quais restrições *ON DELETE* foram impostas em cada uma. Use o Table Inspector para fazer isso (aba DDL).

**15.** Exclua o banco de dados e o recrie.

---

## Exercícios 2 - Pixar.sql
Para realizar os exercícios 1 a 7, restaure o banco de dados *Pixar* abaixo.

```sh
    DROP SCHEMA IF EXISTS Pixar;
    CREATE SCHEMA Pixar;
    USE Pixar;

    CREATE TABLE Movies (
        id INTEGER auto_increment PRIMARY KEY NOT NULL,
        title VARCHAR(30) NOT NULL,
        director VARCHAR(30) NULL,
        year INT NOT NULL,
        length_minutes INT NOT NULL
    );

    CREATE TABLE BoxOffice (
        movie_id INTEGER,
        FOREIGN KEY (movie_id) REFERENCES Movies (id),
        rating DECIMAL(2,1) NOT NULL,
        domestic_sales INT NOT NULL,
        international_sales INT NOT NULL
    );

    INSERT INTO Movies(title, director, year, length_minutes)
        VALUES ('Toy Story', 'John Lasseter', 1995, 81),
            ('Vida de inseto', 'Andrew Staton', 1998, 95),
            ('ratatui', 'Brad Bird', 2010, 115),
            ('UP', 'Pete Docter', 2009, 101),
            ('Carros', 'John Lasseter', 2006, 117),
            ('Toy Story 2', 'John Lasseter', 1999, 93),
            ('Valente', 'Brenda Chapman', 2012, 98);


    INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
        VALUES (1, 8.3, 190000000, 170000000),
            (2, 7.2, 160000000, 200600000),
            (3, 7.9, 245000000, 239000000),
            (4, 6.1, 330000000, 540000000),
            (5, 7.8, 140000000, 310000000),
            (6, 5.8, 540000000, 600000000),
            (7, 7.5, 250000000, 190000000);
```

**1.** Insira as produções da Pixar abaixo na tabela *Movies* :
* Monstros SA, de Pete Docter, lançado em 2001, com 92 minutos de duração.
* Procurando Nemo, de John Lasseter, lançado em 2003, com 107 minutos de duração.
* Os Incríveis, de Brad Bird, lançado em 2004, com 116 minutos de duração.
* WALL-E, de Pete Docter, lançada em 2008, com 104 minutos de duração.

**2.** Procurando Nemo foi aclamado pela crítica! Foi classificado em 6.8, fez 450 milhões no mercado interno e 370 milhões no mercado internacional. Adicione as informações à tabela *BoxOffice* .

**3.** O diretor do filme "Procurando Nemo" está incorreto, na verdade ele foi dirigido por Andrew Staton. Corrija esse dado utilizando o *UPDATE* .

**4.** O título do filme "Ratatouille" esta escrito de forma incorreta na tabela *Movies* , além disso, o filme foi lançado em 2007 e não em 2010. Corrija esses dados utilizando o *UPDATE* .

**5.** Insira as novas classificações abaixo na tabela *BoxOffice* , lembre-se que a coluna *movie_id* é uma foreign key referente a coluna *id* da tabela *Movies* :
* Monsters SA, classificado em 8.5, lucrou 300 milhões no mercado interno e 250 milhões no mercado internacional.
* Os Incríveis, classificado em 7.4, lucrou 460 milhões no mercado interno e 510 milhões no mercado internacional.
* WALL-E, classificado em 9.9, lucrou 290 milhões no mercado interno e 280 milhões no mercado internacional.

**6.** Exclua da tabela *Movies* o filme "WALL-E".

**7.** Exclua da tabela *Movies* todos os filmes dirigidos por "Andrew Staton".

**8.** Altere a classificação da tabela *BoxOffice* para 9.0 de todos os filmes que lucraram mais de 400 milhões no mercado interno.

**9.** Altere a classificação da tabela *BoxOffice* para 6.0 de todos os filmes que lucraram menos de 300 milhões no mercado internacional e mais de 200 milhões no mercado interno.

**10.** Exclua da tabela *Movies* todos os filmes com menos de 100 minutos de duração.
