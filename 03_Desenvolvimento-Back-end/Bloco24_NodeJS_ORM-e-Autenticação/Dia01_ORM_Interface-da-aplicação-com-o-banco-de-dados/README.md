## Exercicio - db: orm_exercicios

**1.** Crie os controllers do seu projeto com as seguintes rotas:
* GET /books - lista todos os livros;
* GET /book/:id - pega o livro com o id especificado;
* POST /book - cria um novo livro;
* POST /book/:id - sobrescreve o livro com ID selecionado;
* DELETE /book/:id - deleta um livro;
* Em caso de erro, os endpoints devem retornar status code 500 com a mensagem: 'Algo deu errado'.

**2.** Crie um seeder usando o Sequelize-CLI , populando a sua base com pelo menos um livro;

**3.** Crie um endpoint para buscar o livro por author (pode adaptar algum que já exista);

**4.** Crie uma ordenação no endpoint GET /books para ordenar por ordem alfabética e por data de criação;

**5.** Adicione, também, uma data de update nos atributos do livro que se altera sempre que o livro for atualizado.

**6.** Escreva um teste unitário para o model criado;

**7.** Escreva testes para o controller do seu projeto isolando a camada de models .