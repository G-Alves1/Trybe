## Exercícios - forms-hook

**1.** Crie uma aplicação React e implemente um formulário contendo os dados pessoais de uma pessoa estudante da Trybe. Os seus componentes precisam ser funcionais e, para gerenciamento do estado, precisam utilizar hooks.

O formulário deve conter:
* Input do tipo text contendo o nome completo;
* Input do tipo number contendo a idade;
* Input do tipo text contendo a cidade;
* Quatro inputs do tipo radio button contendo o módulo que está estudando (Fundamentos, Front-end, Back-end ou Ciência da Computação);
* Um botão para submeter as informações. Nesse exercício você não precisa implementar o click, o botão deve apenas existir na aplicação.
Dica: Utilize o hook useState para gerenciar o estado do seu componente!

## Exercícios - trybe-mail
Neste exercício, vamos desenvolver uma aplicação que renderiza uma lista de e-mails. A aplicação deve permitir que seja possível marcar um e-mail como lido ou não lido.

Quando todos os e-mail da lista estiverem lidos, um alert deve ser exibido informando que todas mensagens foram lidas!

Para realizar esse exercício você deve:

* usar somente componentes funcionais;
* gerenciar o estado da aplicação usando o hook useState;
* sua aplicação deve salvar no estado uma lista com os e-mails recebidos;
* cada email recebido deve ter a seguinte estrutura:
```sh
{
  id: 1,
  title: "Título do email",
  status: 0
}
```
* use o status: 0 para e-mails não lidos e status: 1 para e-mails lidos;
* cada e-mail da lista deve ser renderizado junto com dois botões: um para marcar o e-mail como lido e outro para marcá-lo como não lido;
* além da lista de e-mails, também deve haver dois botões de controle: um para marcar todos os e-mails como lidos e outro para marcar todos os e-mails como não lidos;
* usar o hook useEffect para “monitorar” as mudanças que acontecerem na lista de e-mails salva no estado;
* sempre que todos os e-mails da lista forem marcados como “lidos”, exiba um alert com a mensagem: “Parabéns! Você leu todas suas mensagens!”.