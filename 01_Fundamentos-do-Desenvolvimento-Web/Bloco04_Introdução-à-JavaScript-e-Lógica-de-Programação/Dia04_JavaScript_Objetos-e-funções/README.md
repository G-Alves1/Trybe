## Exercícios - scripts.js

**1.** Crie um objeto *player* contendo as variáveis listadas abaixo.
```sh
  let name = 'Marta';
  let lastName = 'Silva';
  let age = 34;
  let medals = { golden: 2, silver: 3 };
```

**2.** Acesse as chaves *name*, *lastName* e *age* e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

**3.** Adicione ao objeto a chave *bestInTheWorld* e atribua a esta chave um *array* contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
```sh
  [2006, 2007, 2008, 2009, 2010, 2018]
```

**4.** Acesse a chave *bestInTheWorld* e faça um *console.log* no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

**5.** Acesse a chave *medals* e faça um *console.log* no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

---

## Exercícios 1 - scripts1.js

**1.** Usando o objeto abaixo, utilize *For/in* e imprima no console a mensagem *'Olá xxxxx'* para cada nome, substituindo o *xxxxx* pelo nome em questão.
```sh
  let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };
```

**2.** Usando o objeto abaixo, utilize *For/in* e imprima um *console.log* com as chaves e valores desse objeto.
```sh
  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
```

---

## Exercícios 2 - scripts2.js

_Pegue cada um dos exercícios de 1 a 5 do final do 4.1 e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções. Por exemplo:_

```sh
  let a = 5;
  let b = 2;
  a + b;
```
_... se transforma em:_
```sh
  function sum(a, b) {
    return a + b;
```

---

## Exercícios 3 - scripts3.js

```sh
  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
```

**1.** Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
```sh
  Bem-vinda, Margarida
```

**2.** Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
```sh
  {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  }
```

**3.** Faça um *for/in* que mostre todas as chaves do objeto. Valor esperado no console:
```sh
  personagem
  origem
  nota
  recorrente
```

**4.** Faça um novo *for/in* , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
```sh
  Margarida
  Pato Donald
  Namorada do personagem principal nos quadrinhos do Pato Donald
  Sim
```

**5.** Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
```sh
  Margarida e Tio Patinhas
  Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
  Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
  Ambos recorrentes
```

*Use o objeto abaixo para os exercícios 6, 7 e 8*
```sh
  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
```

**6.** Acesse as chaves *nome*, *sobrenome* e *titulo*, que está dentro da chave *livrosFavoritos*, e faça um *console.log* no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

**7.** Adicione um novo livro favorito na chave *livrosFavoritos*, que é um *array*. Atribua a esta chave um objeto contendo as seguintes informações:
```sh
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }
```

**8.** Acesse as chaves *nome* e *livrosFavoritos* e faça um *console.log* no seguinte formato: "Julia tem 2 livros favoritos".

---

## Exercícios 4 - scripts4.js

**1.** Crie uma função que receba uma *string* e retorne *true* se for um palíndromo , ou *false* , se não for.
- *verificaPalindrome('arara');*
  Retorno esperado: *true*
- *verificaPalindrome('desenvolvimento');*
  Retorno esperado: *false*

**2.** Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
- Array de teste: *[2, 3, 6, 7, 10, 1]*;
  Valor esperado no retorno da função: *4*.

**3.** Crie uma função que receba um *array* de inteiros e retorne o índice do menor valor.
- Array de teste: *[2, 4, 6, 7, 10, 0, -3]*;
  Valor esperado no retorno da função: *6*.

**4.** Crie uma função que receba um *array* de nomes e retorne o nome com a maior quantidade de caracteres.
- Array de teste: *['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']*;
  Valor esperado no retorno da função: *Fernanda* 

**5.** Crie uma função que receba um *array* de inteiros e retorne o inteiro que mais se repete.
- Array de teste: *[2, 3, 2, 5, 8, 2, 3]*;
  Valor esperado no retorno da função: *2*.

**6.** Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
- Valor de teste: *N = 5*.
  Valor esperado no retorno da função: *1+2+3+4+5 = 15*.

**7.** Crie uma função que receba uma *string word* e outra *string ending*. Verifique se a *string ending* é o final da *string word*. Considere que a *string ending* sempre será menor que a *string word*.
- Valor de teste: *'trybe'* e *'be'*
  Valor esperado no retorno da função: *true*
- *verificaFimPalavra('trybe', 'be') ;*
  Retorno esperado: *true*
- *verificaFimPalavra('joaofernando', 'fernan') ;*
  Retorno esperado: *false*

---

## Bônus - bonus.js

**1.** Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

**2.** Crie uma função chamada *arrayOfNumbers* que receberá a variável *vector* como parâmetro. Através de um loop *for*, percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.
```sh
  let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
```

**3.** A partir do array de frutas *basket*, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.
Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: *Sua cesta possui: x Melancias, x Abacates...*

```
  const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];
```

Use o objeto abaixo
```
  let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };
```

**4.** Acesse as chaves *nome*, *sobrenome*, *andar* e *apartamento* do último morador do *blocoDois* e faça um *console.log* no seguinte formato: "O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101".

**5.** Utilize o *for* para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves *nome* e *sobrenome*, depois faça o mesmo para os moradores do bloco 2.