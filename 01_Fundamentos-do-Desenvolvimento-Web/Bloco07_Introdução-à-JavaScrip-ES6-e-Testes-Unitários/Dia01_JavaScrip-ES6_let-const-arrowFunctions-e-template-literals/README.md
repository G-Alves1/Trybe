## Execícios 1 - script.js

**1.** Altere as variáveis para respeitarem o escopo em que foram declaradas.
- Modifique a estrutura da função para que ela seja uma arrow function.
- Modifique as variáveis para que respeitem o escopo onde estão declaradas
- Modifique as concatenações para template literals .
```sh
  function testingScope(escopo) {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }
  testingScope(true);
```

**2.** Crie uma função que retorne um array em ordem crescente.
- *Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".*
- **Bônus (opcional)**: *tente fazer o mesmo exercício utilizando o método array.sort().*
```sh
  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  // Seu código aqui.

  console.log(oddsAndEvens); // será necessário alterar essa linha
```

---

## Exercícios 2 - script.js
Use let , const , arrow functions , template literals e ternary operator .

**1.** Crie uma função que receba um número e retorne seu fatorial.
- *Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.*
- **Bônus (opcional)**: *tente fazer o mesmo exercício de forma recursiva.*

**2.** Crie uma função que receba uma frase e retorne qual a maior palavra.
```sh
Exemplo:
  longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")
Retorna: 'aconteceu'
```

---

## Exercícios 3 - index3.html script3.js

**1.** Crie uma página que contenha
- Um botão ao qual será associado um event listener ;
- Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
- Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

**2.** Crie um código JavaScript com a seguinte especificação:

- **Função 1** : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
```sh
Exemplo:
  String determinada: "Tryber x aqui!"
  Parâmetro: "Bebeto"
  Retorno: "Tryber Bebeto aqui!"
```

- **Função 2** : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
**Exemplo**: "Tryber x aqui! Minhas cinco principais habilidades são:
```sh
  JavaScript;
  HTML; ... #goTrybe".
```