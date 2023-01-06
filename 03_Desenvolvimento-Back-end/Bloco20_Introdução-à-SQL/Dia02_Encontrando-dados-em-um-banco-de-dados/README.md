## Exercícios 1 - Exercise1

**1.** Monte uma query que exiba seu nome na tela;

**2.** Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;

**3.** Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS, que é chamado de alias na linguagem SQL;

**4.** Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT;

**5.** Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "data_atual".

**6.** Escreva uma query que selecione todas as colunas da tabela city;

**7.** Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer;

**8.** Escreva uma query que exiba todas as colunas da tabela rental;

**9.** Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film;

**10.** Utilize o SELECT para explorar todas as tabelas do banco de dados.

**11.** Na tabela sakila.film, monte uma query que exiba o título e o ano de lançamento dos filmes em uma coluna e dê a ela o nome lançamento_do_filme.

**12.** Na tabela sakila.film, crie uma query que exiba o título do filme e sua classificação indicativa (PG, G, NC-17) em apenas uma coluna. Dê a ela o nome classificação. Não se esqueça de deixar um espaço entre as palavras para que fiquem legíveis.

**13.** Na tabela sakila.address, monte uma query que exiba a rua e o distrito de cada registro em uma coluna apenas, e dê a essa coluna o nome endereço.

*Para realizar os exercícios do 14 ao 19, restaure o banco de dados seguinte.*
```sh
    CREATE DATABASE `Escola`;
    CREATE TABLE IF NOT EXISTS Escola.Estudantes (
        `nome` VARCHAR(7) CHARACTER SET utf8,
        `idade` INT
    );
    INSERT INTO Escola.Estudantes VALUES
        ('Rafael', 25),
        ('Amanda', 30),
        ('Roberto', 45),
        ('Carol', 19),
        ('Amanda', 25);
```

**14.** Monte uma query para encontrar pares únicos de nomes e idades.

**15.** Monte uma query para encontrar somente os nomes únicos.

**16.** Monte uma query para encontrar somente as idades únicas.

**17.** Quantas senhas temos cadastradas nessa tabela?

**18.** Quantas pessoas temos no total trabalhando para nossa empresa?

**19.** Quantos emails temos cadastrados nessa tabela?

*Banco de dados sakila*

**20.** Escreva uma query que exiba todos os filmes cadastrados no banco de dados 

**21.** Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação.

**22.** Quantos filmes temos cadastrados?

**23.** Escreva uma query que exiba apenas os sobrenomes únicos cadastrados.

**24.** Quantos sobrenomes únicos temos na tabela?

**25.** Ordene os valores na tabela em ordem crescente de sobrenomes e em ordem decrescente de nome.

**26.** Crie uma pesquisa que mostre os 5 idiomas cadastrados, mas não mostre o idioma english.

**27.** Selecione todos os dados da tabela

**28.** Crie uma query para encontrar os 20 primeiros filmes, incluindo o título, o ano de lançamento, a duração, a classificação indicativa e o custo de substituição. Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.

---

## Exercícios 2 - Scientists.sql
Para realizar os exercícios do 1 ao 15, restaure o banco de dados seguinte.
```sh
    DROP SCHEMA IF EXISTS Scientists;
    CREATE SCHEMA Scientists;
    USE Scientists;

    CREATE TABLE Scientists (
        SSN INT,
        Name CHAR(30) NOT NULL,
        PRIMARY KEY (SSN)
    );

    CREATE TABLE Projects (
        Code CHAR(4),
        Name CHAR(50) NOT NULL,
        Hours INT,
        PRIMARY KEY (Code)
    );

    CREATE TABLE AssignedTo (
        Scientist INT NOT NULL,
        Project CHAR(4) NOT NULL,
        PRIMARY KEY (Scientist, Project),
        FOREIGN KEY (Scientist) REFERENCES Scientists (SSN),
        FOREIGN KEY (Project) REFERENCES Projects (Code)
    );

    INSERT INTO Scientists(SSN,Name)
        VALUES(123234877, 'Michael Rogers'),
            (152934485, 'Anand Manikutty'),
            (222364883, 'Carol Smith'),
            (326587417, 'Joe Stevens'),
            (332154719, 'Mary-Anne Foster'),
            (332569843, 'George ODonnell'),
            (546523478, 'John Doe'),
            (631231482, 'David Smith'),
            (654873219, 'Zacary Efron'),
            (745685214, 'Eric Goldsmith'),
            (845657245, 'Elizabeth Doe'),
            (845657246, 'Kumar Swamy');

    INSERT INTO Projects (Code, Name, Hours)
        VALUES ('AeH1' ,'Winds: Studying Bernoullis Principle', 156),
            ('AeH2', 'Aerodynamics and Bridge Design', 189),
            ('AeH3', 'Aerodynamics and Gas Mileage', 256),
            ('AeH4', 'Aerodynamics and Ice Hockey', 789),
            ('AeH5', 'Aerodynamics of a Football', 98),
            ('AeH6', 'Aerodynamics of Air Hockey', 89),
            ('Ast1', 'A Matter of Time', 112),
            ('Ast2', 'A Puzzling Parallax', 299),
            ('Ast3', 'Build Your Own Telescope', 6546),
            ('Bte1', 'Juicy: Extracting Apple Juice with Pectinase', 321),
            ('Bte2', 'A Magnetic Primer Designer', 9684),
            ('Bte3', 'Bacterial Transformation Efficiency', 321),
            ('Che1', 'A Silver-Cleaning Battery', 545),
            ('Che2', 'A Soluble Separation Solution', 778);

    INSERT INTO AssignedTo (Scientist, Project)
        VALUES (123234877, 'AeH1'),
            (152934485, 'AeH3'),
            (222364883, 'Ast3'),
            (326587417, 'Ast3'),
            (332154719, 'Bte1'),
            (546523478, 'Che1'),
            (631231482, 'Ast3'),
            (654873219, 'Che1'),
            (745685214, 'AeH3'),
            (845657245, 'Ast1'),
            (845657246, 'Ast2'),
            (332569843, 'AeH4');
```
Esse banco de dados é de uso livre, sendo licenciado de acordo com os termos deste [link](https://creativecommons.org/licenses/by-sa/3.0/) .

**1.** Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".

**2.** Escreva uma query para exibir três números em três colunas.

**3.** Escreva uma query para exibir a soma dos números 10 e 15.

**4.** Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.

**5.** Escreva uma query para exibir todas as informações de todos os cientistas.

**6.** Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.

**7.** Escreva uma query para exibir o nome dos cientistas em ordem alfabética.

**8.** Escreva uma query para exibir o nome dos Projetos em ordem alfabética descendente.

**9.** Escreva uma query que exiba a string "O projeto *Name* precisou de *Hours* horas para ser concluído." para cada projeto.

**10.** Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.

**11.** Escreva uma query para exibir o código de todos os projetos da tabela *AssignedTo* sem que haja repetições.

**12.** Escreva uma query para exibir o nome do projeto com maior quantidade de horas.

**13.** Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.

**14.** Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.

**15.** Escreva uma query que exiba a string "Existem *Number* cientistas na tabela Scientists.", em que *Number* se refira a quantidade de cientistas.

---

## Exercício 3 - PiecesProviders.sql
Para realizar as tarefas do 1 ao 4, restaure o seguinte banco de dados:
```sh
    DROP SCHEMA IF EXISTS PiecesProviders;
    CREATE SCHEMA PiecesProviders;
    USE PiecesProviders;

    CREATE TABLE Pieces (
        Code INTEGER PRIMARY KEY NOT NULL,
        Name TEXT NOT NULL
    );

    CREATE TABLE Providers (
        Code VARCHAR(40) PRIMARY KEY NOT NULL,
        Name TEXT NOT NULL
    );

    CREATE TABLE Provides (
        Piece INTEGER,
        FOREIGN KEY (Piece) REFERENCES Pieces (Code),
        Provider VARCHAR(40),
        FOREIGN KEY (Provider) REFERENCES Providers (Code),
        Price INTEGER NOT NULL,
        PRIMARY KEY (Piece , Provider)
    );

    INSERT INTO Providers(Code, Name)
        VALUES ('HAL', 'Clarke Enterprises'),
            ('RBT', 'Susan Calvin Corp.'),
            ('TNBC', 'Skellington Supplies');

    INSERT INTO Pieces(Code, Name)
        VALUES (1, 'Sprocket'),
            (2, 'Screw'),
            (3, 'Nut'),
            (4, 'Bolt');

    INSERT INTO Provides(Piece, Provider, Price)
        VALUES (1, 'HAL', 10),
            (1, 'RBT', 15),
            (2, 'HAL', 20),
            (2, 'RBT', 25),
            (2, 'TNBC', 14),
            (3, 'RBT', 50),
            (3, 'TNBC', 45),
            (4, 'HAL', 5),
            (4, 'RBT', 7);
```
Esse banco de dados é de uso livre, sendo licenciado de acordo com os termos deste [link](https://creativecommons.org/licenses/by-sa/3.0/).

**1.** Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa *RBT* .

**2.** Escreve uma query para exibir todas as informações das cinco peças com os maiores preços.

**3.** Escreva uma query para exibir o nome das empresas e preço das peças com os quatro maiores preços, começando a lista a partir do 3º item.

**4.** Escreva uma query para exibir todas as informações das peças que são providas pela empresa *HAL* . Ordene o resultado pelos preços das peças de forma decrescente.

**5.** Escreva uma query para exibir por quantas empresas a peça 1 é provida.

---

## Exercício 4

**1.** Usando WHERE , faça os exercícios deste [link](https://www.w3schools.com/sql/exercise.asp?filename=exercise_where1).

**2.** Aplicando Restrições, faça os exercícios deste [link](https://sqlbolt.com/lesson/select_queries_with_constraints) .

**3.** Exercícios das páginas 1 a 3 deste [link](https://www.sqlcourse.com/beginner-course/what-is-sql/) .

**4.** Exercícios de comparação de valores. Faça os exercícios deste [link](https://sqlzoo.net/wiki/SELECT_from_WORLD_Tutorial) .
