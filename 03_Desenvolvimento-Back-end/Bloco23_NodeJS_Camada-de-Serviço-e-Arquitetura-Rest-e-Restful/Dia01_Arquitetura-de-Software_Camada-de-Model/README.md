## Exercícios - model_example

```sh
    CREATE DATABASE IF NOT EXISTS model_example;

    USE model_example;

    CREATE TABLE authors
    (
        id INT NOT NULL AUTO_INCREMENT,
        first_name VARCHAR(30) NOT NULL,
        middle_name VARCHAR(30),
        last_name VARCHAR(30) NOT NULL,
        birthday DATE,
        nationality VARCHAR(100),
        PRIMARY KEY(id)
    );

    INSERT INTO authors (first_name,middle_name,last_name,birthday,nationality)

    VALUES ('George','R. R.','Martin','1948-09-20','norte-americano'),
        ('J.','R. R.','Tolkien','1892-01-03','britânico'),
        ('Isaac',NULL,'Asimov','1920-01-20','russo-americano'),
        ('Frank',NULL,'Herbert','1920-02-11','norte-americano'),
        ('Júlio',NULL,'Verne','1905-03-24','francês');
```

```sh
    CREATE TABLE books (
        id INT NOT NULL AUTO_INCREMENT,
        title VARCHAR(90) NOT NULL,
        author_id INT(11) NOT NULL,
        PRIMARY KEY(id),
        FOREIGN KEY (author_id) REFERENCES authors (id)
    );

    INSERT INTO books (title, author_id)
    VALUES
        ('A Game of Thrones', 1),
        ('A Clash of Kings', 1),
        ('A Storm of Swords', 1),
        ('The Lord of The Rings - The Fellowship of the Ring', 2),
        ('The Lord of The Rings - The Two Towers', 2),
        ('The Lord of The Rings - The Return of The King', 2),
        ('Foundation', 3);
```

Depois de criar a tabela no banco de dados, faça as seguintes implementações.

**1.** Crie um modelo Book e defina o método getAll para retornar a lista de todos os livros.

**2.** Crie uma rota /books para trazer a lista de todos os livros.

**3.** Crie um método getByAuthorId no modelo Book , para retornar apenas livros associados com um determinado author_id . E altere o middleware da rota books criado no passo 2 para receber uma query string com a chave author_id , e retornar apenas os livros associados.

**4.** Crie uma rota /books/:id e retorne o livro de acordo com o id passado por parâmetro. Se não existir, retorne um json no seguinte formato { message: 'Not found' } .

**5.** Ainda usando a tabela books como referência crie uma rota books do tipo POST . Faça as seguintes validações:
* Título não pode ser vazio;
* Título precisa ter pelo menos três caracteres;
* O campo author_id não pode ser vazio;
* O campo author_id só é válido se existir uma pessoa autora com esse id;

Se algum dos requisitos anteriores não for atendido, retornar um json no seguinte formato { message: 'Dados inválidos' } com status 400 . Caso contrário, insira o livro na tabela books e retorne o json { message: 'Livro criado com sucesso! '} com o status 201 .

---

## Exercícios 2 - msc-architecture-trybecar-model

**1.** Crie testes unitários da camada de model responsável por listar todas as pessoas motoristas cadastradas no banco de dados.
* A função retorna uma estrutura de array;
* Retorna a lista de pessoas motoristas com o seguinte formato:
```sh
    const expected = [
        {
        id: 1,
        name: 'Liana Cisneiros',
        }, 
        {
        id: 2,
        name: 'Fábio Frazão',
        },
    ];
```

**2.** Crie a camada de model responsável por listar todas as pessoas motoristas.

**3.** Crie testes unitários da camada de model responsável por cadastrar um carro no banco de dados.
* Retorna o id do carro cadastrado com o seguinte formato:
```sh
    const expected = 1;
```

**4.** Crie a camada de model responsável por cadastrar um carro.

**5.** Crie testes unitários da camada de model responsável por encontrar um carro por meio do id.
* Retorna o carro solicitado pelo id com o seguinte formato:
```sh
    const expected = {
        id: 2,
        model: 'Volkswagen Gol',
        color: 'Vermelho',
        licensePlate: 'DZG-4376',
    };
```

**6.** Crie a camada de model responsável por encontrar um carro por meio do id.

**7.** Crie testes unitários da camada de model responsável por encontrar uma pessoa motorista por meio do id.
* Retorna a pessoa motorista solicitado pelo id com o seguinte formato:
```sh
    const expected = {
        id: 1,
        name: 'Liana Cisneiros',
    };
```

**8.** Crie a camada de model responsável por encontrar uma pessoas motorista por meio do id.

**9.** Crie testes unitários da camada de model responsável por cadastrar uma pessoa motorista.
* Retorna a pessoa motorista cadastrada com o seguinte formato:
```sh
    const expected = 1;
```

**10.** Crie a camada de model responsável por cadastrar uma pessoa motorista.

**11.** Crie testes unitários da camada de model responsável criar o relacionamento N:N entre as pessoas motoristas e os carros.
* Retorna o relacionamento entre motorista e carro cadastrado com o seguinte formato:
```sh
    const expected = 1;
```

**12.** Crie a camada de model responsável por cadastrar as pessoas motoristas com o relacionamento N:N com os carros cadastrados.