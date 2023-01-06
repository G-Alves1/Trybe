## Exercícios 1 - tests-react

**1.** Não exibir a mensagem caso o email ainda não tenha sido enviado.

**2.** Mudar a cor do texto caso o email seja válido ou inválido.

## Exercícios 2

**exercise-todo-list-1**
**1.** Implemente os testes para verificar os seguintes comportamentos da aplicação:
* Verifique que um botão com o texto "Adicionar" está sendo renderizado
  * Verifique que existe um elemento com o texto "Adicionar".
  * Verifique que o elemento é do tipo button.
* Verifique o comportamento de adicionar uma tarefa
  * Verifique que existe um input com a label "Tarefa:".
  * Verifique que existe um botão com o texto "Adicionar".
  * Verifique que é possível digitar no input.
  * Verifique que o texto digitado só é adicionado à lista de tarefas após clicar no botão.
  * Verifique que, ao clicar no botão "Adicionar", o texto que está digitado no input é adicionado à lista de tarefas renderizada e que o valor do input é limpo.

**exercise-todo-list-2**
**2.**
* Verifique o comportamento de adicionar várias tarefas
  * Dentro do arquivo src/test/exercise-two.test.js já existe um array com diversos itens. Faça com que cada elemento desse array seja um item da lista de tarefas.
  * Após adicionar todos os itens, verifique que todos eles estão sendo renderizados na tela.
* Teste apenas o componente Item
  * Renderize apenas o componente <Item /> no teste.
  * Passe uma string como prop para o componente <Item /> e verifique que esse texto está sendo renderizado na tela.

**exercise-todo-list-3**
**3.** Adicione as seguintes funcionalidades
* O botão "Adicionar" deve estar habilitado apenas quando há algum texto digitado no input.
* Cada item da lista deve ter um botão com o texto "Remover" ao seu lado. Ao clicar nesse botão, a respectiva tarefa deve ser apagada da lista.