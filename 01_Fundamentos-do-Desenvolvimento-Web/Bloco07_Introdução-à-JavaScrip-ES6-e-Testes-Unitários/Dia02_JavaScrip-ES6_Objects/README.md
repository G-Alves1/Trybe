## Exercícios - script.js

**1.** Crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

**2.** Crie uma função que exiba as habilidades do objeto student . Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade

---

## Exercícios 2 - script2.js

**1.** Complete a função *customerInfo()* para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
- Note que o parâmetro da função já está sendo passado na chamada da função.

**2.** Complete a função *orderModifier()* para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
- Modifique o nome da pessoa compradora.
- Modifique o valor total da compra para R$ 50,00.

---

## Exercícios 3 - script3.js

**1.** Crie uma função para adicionar o turno da noite na *lesson2* . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

**2.** Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

**3.** Crie uma função para mostrar o tamanho de um objeto.

**4.** Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

**5.** Crie um objeto de nome *allLessons* , que deve agrupar todas as aulas através do *Object.assign* . Cada chave desse novo objeto será uma aula, sendo essas chaves: *lesson1* , *lesson2* e *lesson3* . Ao executar o comando *console.log(allLessons)* , a saída deverá ser a seguinte:
```sh
  console.log(allLessons);
  {
    lesson1:
    {
      materia: 'Matemática',
      numeroEstudantes: 20,
      professor: 'Maria Clara',
      turno: 'manhã'
      },
    lesson2:
    {
      materia: 'História',
      numeroEstudantes: 20,
      professor: 'Carlos',
      turno: 'noite'
    },
    lesson3:
    {
      materia: 'Matemática',
      numeroEstudantes: 10,
      professor: 'Maria Clara',
      turno: 'noite'
    }
  };
```

**6.** Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

**7.** Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
```sh
  console.log(getValueByNumber(lesson1, 0));
Retorna: 'Matématica'
```

**8.** Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
```sh
  console.log(verifyPair(lesson3, 'turno', 'noite'));
Retorna: true,
  console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
Retorna: false
```

**9.** Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

**10.** Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
```sh
  console.log(createReport(allLessons, 'Maria Clara'))
Retorna:
  {
    professor: 'Maria Clara',
    aulas: [ 'Matemática', 'Matemática' ],
    estudantes: 30
  }
```