## Exercícios 1 - exercises.py

**1.** Faça um programa que solicite o nome de uma pessoa usuária e imprima-o na vertical. Exemplo:
```sh
  F
  U
  L
  A
  N
  O
```

**2.** Escreva um programa que receba vários números **naturais** e calcule a soma desses valores. Caso algum valor da entrada seja inválido (por exemplo uma letra), uma mensagem deve ser exibida na saída de erros no seguinte formato: "Erro ao somar valores, {valor} é um valor inválido". Ao final, você deve imprimir a soma dos valores válidos.

Receba os valores em um mesmo *input*, solicitando à pessoa usuária que separe-os com um espaço. Receba os valores no formato *str* e utilize o método *split* para pegar cada valor separado. O método *isdigit*, embutido no tipo *str*, pode ser utilizado para verificar se a string corresponde a um número natural.

**3.** Dado um arquivo contendo estudantes e suas respectivas notas, escreva um programa que:
* lê todas essas informações;
* aplique um filtro, mantendo somente as pessoas que estão reprovadas;
* escreva seus nomes em outro arquivo.

Considere que a nota miníma para aprovação é 6.
Arquivo:
```sh
  Marcos 10
  Felipe 4
  José 6
  Ana 10
  Maria 9
  Miguel 5
```

Exemplo saída:
```sh
  Felipe
  Miguel
```

---

## Exercícios 2 - exercises2.py

**1.** Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida. Exemplo:
Entrada:
```sh
  PEDRO
```
Saída:
```sh
  PEDRO
  PEDR
  PED
  PE
  P
```

**2.** Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas. O programa terá uma lista de palavras e escolherá uma aleatoriamente. O jogador terá três tentativas para adivinhar a palavra. Ao final, a palavra deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.
* Para embaralhar uma palavra faça: *scrambled_word = "".join(random.sample(word, len(word)))*
* O sorteio de uma palavra aleatória pode ser feito utilizando o método choice: *random.choice(["word1", "word2", "word3"]) -> "word2"*.

**3.** Modifique o exercício anterior para que as palavras sejam lidas de um arquivo. Considere que o arquivo terá cada palavra em uma linha.

**4.** Dado o seguinte arquivo(exercise4.json) no formato JSON, leia seu conteúdo e calcule a porcentagem de livros em cada categoria em relação ao número total de livros. O resultado deve ser escrito em um arquivo no formato CSV como o exemplo abaixo.
Saída:
```sh
  categoria,porcentagem
  Python,0.23201856148491878
  Java,0.23201856148491878
  PHP,0.23201856148491878
```

**5.** Utilizando o arquivo *pokemons.json*, vamos escrever um programa que sorteie um pokemon aleatoriamente. O programa deve perguntar à pessoa usuária "Quem é esse pokemon?" até que ela o acerte. A cada erro, apresente um número de letras do nome daquele pokemon igual ao número de erros.
Exemplo: O pokemon sorteado pelo programa é *butterfree*; a pessoa usuária chuta *charizard*; o programa deve exibir *b*. Em seguida, a pessoa chuta *blastoise*; o programa deve exibir *bu*; e assim por diante até a pessoa acertar.
* Você pode utilizar o método *choice* do modulo *random* para sortear aleatoriamente um pokemon. Ex: *random.choice(pokemon) -> {"name": "Pikachu" }*.