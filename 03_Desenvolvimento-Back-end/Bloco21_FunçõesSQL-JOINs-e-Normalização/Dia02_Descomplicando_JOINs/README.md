## Exercícios 1 - sakila.sql

**1.** Monte uma query que exiba o **id do ator** , **nome do ator** e **id do filme** em que ele já atuou usando as tabelas *actor* e *film_actor* .

**2.** Use o *JOIN* para exibir o **nome** , **sobrenome** e **endereço** de cada um dos funcionários do banco. Use as tabelas *staff* e *address* .

**3.** Exiba o **id do cliente** , **nome** e **email** dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o **id do endereço** e o ****nome da rua**** onde o cliente mora. Essas informações podem ser encontradas nas tabelas *customer* e *address* .

**4.** Exiba o **nome** , **email** , **id do endereço** , **endereço** e **distrito** dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas *address* e *customer* .

**5.** Exiba o **nome** e a **quantidade de endereços** dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela *address* e *customer* .

**6.** Monte uma query que exiba o **nome** , **sobrenome** e a **média de valor** ( *amount* ) paga aos funcionários no ano de 2006. Use as tabelas pa*yment e *staff* . Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.

**7.** Monte uma query que exiba o **id do ator** , **nome** , **id do filme** e **título do filme** , usando as tabelas *actor* , *film_actor* e *film* . Dica: você precisará fazer mais de um JOIN na mesma query .

## Exercícios 2 - hr.sql

**1.** Queremos saber o **Nome** das **pessoas colaboradoras** e suas respectivas **gerências** (*manager*) cujos departamentos (*department*) são diferentes.

**2.** Exiba o **Nome** e a **quantidade de pessoas lideradas** de cada pessoa gerente.

## Exercícios 3 - Pixar2.sql

Faça os exercícios 1 a 6 utilizando banco de dados Pixar abaixo:
```sh
    DROP SCHEMA IF EXISTS Pixar2;
    CREATE SCHEMA Pixar2;
    USE Pixar2;

    CREATE TABLE Theater (
        id INTEGER auto_increment PRIMARY KEY NOT NULL,
        name VARCHAR(30) NOT NULL,
        location VARCHAR(30) NULL
    );

    CREATE TABLE Movies (
        id INTEGER auto_increment PRIMARY KEY NOT NULL,
        title VARCHAR(30) NOT NULL,
        director VARCHAR(30) NULL,
        year INT NOT NULL,
        length_minutes INT NOT NULL,
        theater_id INTEGER,
        FOREIGN KEY (theater_id) REFERENCES Theater (id)
    );

    CREATE TABLE BoxOffice (
        movie_id INTEGER,
        FOREIGN KEY (movie_id) REFERENCES Movies (id),
        rating DECIMAL(2,1) NOT NULL,
        domestic_sales INT NOT NULL,
        international_sales INT NOT NULL

    );

    INSERT INTO Theater(name, location)
        VALUES ('Cinemark', 'São Paulo'),
            ('Brodway theater', 'Nova York'),
            ('Phoenix theater', 'Londres'),
            ('Le Champo', 'Paris'),
            ('TLC Chinese Theater', 'Los Angeles'),
            ('Regal Tikahtnu', 'Alaska');

    INSERT INTO Movies(title, director, year, length_minutes, theater_id)
        VALUES ('Toy Story', 'John Lasseter', 1995, 81, 1),
            ('Vida de inseto', 'Andrew Staton', 1998, 95, 3),
            ('Ratatuille', 'Brad Bird', 2010, 115, NULL),
            ('UP', 'Pete Docter', 2009, 101, 2),
            ('Carros', 'John Lasseter', 2006, 117, NULL),
            ('Toy Story 2', 'John Lasseter', 1999, 93, 5),
            ('Valente', 'Brenda Chapman', 2012, 98, NULL),
            ('Monstros SA', 'Pete Docter', 2001, 92, NULL),
            ('Procurando Nemo', 'Jon Lasseter', 2003, 107, 4),
            ('Os Incríveis', 'Brad Bird', 2004, 116, NULL),
            ('WALL-E', 'Pete Docter', 2008, 104, NULL);

    INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
        VALUES (1, 8.3, 190000000, 170000000),
            (2, 7.2, 160000000, 200600000),
            (3, 7.9, 245000000, 239000000),
            (4, 6.1, 330000000, 540000000),
            (5, 7.8, 140000000, 310000000),
            (6, 5.8, 540000000, 600000000),
            (7, 7.5, 250000000, 190000000),
            (8, 8.5, 300000000, 250000000),
            (10, 7.4, 460000000, 510000000),
            (9, 6.8, 450000000, 370000000),
            (11, 9.9, 290000000, 280000000);
```

**1.** Utilizando o *INNER JOIN* , encontre as vendas nacionais ( *domestic_sales* ) e internacionais ( *international_sales* ) de cada filme.

**2.** Utilizando o *INNER JOIN* , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( *international_sales* ) do que vendas nacionais ( *domestic_sales* ).

**3.** Utilizando o *INNER JOIN* , faça uma busca que retorne os filmes e sua avaliação ( *rating* ) em ordem decrescente.

**4.** Utilizando o *LEFT JOIN* , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.

**5.** Utilizando o *RIGHT JOIN* , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.

**6.** Utilizando o *INNER JOIN* , selecione todas as informações dos filmes com avaliação maior que 8.
