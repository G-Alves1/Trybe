## Exercícios 1 - exercises.py

**1.** Inicializando a classe e adicionando elementos
* Crie uma classe chamada Conjunto;
* Escreva um construtor que defina uma lista do tamanho necessário. Inicialize todos os valores com False, uma vez que ainda não temos valores adicionados;
* Crie um método add(item) que recebe um valor até 1000 e adiciona no conjunto;
* Na main (dentro de: if __name__ == "__main__":), instancie um objeto do tipo Conjunto e adicione os valores.
```sh
[0, 10, 100, 1000]
```

**2.** Imprimir
Caso tenhamos que imprimir na tela o nosso objeto, o comando print(conjunto) não irá funcionar. O que será impresso é o endereço de memória onde o objeto está guardado, e não é isso que queremos. Para que o comando print funcione, precisamos que a nossa classe tenha um método chamado __str__ e é o que faremos agora:

* Crie um método com a assinatura abaixo:
```sh
def __str__(self):
    # retorno: uma string que representa o seu objeto
```
Exemplos de entrada e saída:
```sh
A = {1, 2, 3}
# saída: '{1, 2, 3}'

B = {7, 2, 10}
# saída: '{2, 7, 10}'

C = {}
# saída: '{}'
```
A saída não precisa ser ordenada, até mesmo porque um conjunto não leva a ordem em consideração. A saída pode ser em qualquer ordem, mas provavelmente será mais fácil retornar em ordem. Teste seu método imprimindo os objetos que você criou.

**3.** is_in
Caso queiramos saber se um elemento faz parte ou não do conjunto usando o operador in precisamos que a nossa classe tenha um método chamado __contains__ e é o que faremos agora:

* Crie um método com a assinatura abaixo:
```sh
def __contains__(self, item):
    # retorno: True, caso o elemento faça parte. False, caso o elemento não faça parte.
```
Exemplos de entrada e saída:
```sh
A = {1, 2, 3}

# entrada: 1
# saída: True

# entrada: 0
# saída: False
```

**4.** União
União: Todos os elementos que estão em A OU em B

* Crie um método com a assinatura abaixo, que recebe como parâmetro outro objeto da classe Conjunto:
```sh
def union(self, conjuntoB):
    # retorno: outro objeto Conjunto com união do próprio objeto com o conjuntoB
```
* Na main, instancie dois objetos do tipo Conjunto. Preencha o primeiro com os valores de 1 a 10, e o segundo, com valores de 10 a 20;
* Imprima na tela a união dos dois conjuntos.

**5.** Intersecção
Intersecção: Todos os elementos que estão em A E em B

* Crie um método com a assinatura abaixo, que recebe como parâmetro outro objeto da classe Conjunto:
```sh
def intersection(self, conjuntoB):
    # retorno: outro objeto Conjunto com intersecção do próprio objeto com o conjuntoB
```
Exemplos de entrada e saída:
```sh
A = {1, 2, 3}
B = {3, 4, 5}
# saída: {3}

C = {0, 3, 6, 9}
B = {12, 15, 18}
# saída: {}
```

**6.** Termine de implementar as operações de conjuntos:
* difference;
* issubset;
* issuperset.

**7.** Sua trajetória no curso foi um sucesso e agora você está trabalhando para a Trybe! Em um determinado módulo, os estudantes precisam entregar dois trabalhos para seguir adiante. Cada vez que um dos trabalhos é entregue, o nome da pessoa fica registrado. Precisamos saber como está o andamento da entrega das listas. Para isso, você tem acesso aos nomes das pessoas da turma, bem como ao log de quem já entregou qual lista. A partir das listas abaixo, utilize a classe já criada e imprima os resultados das perguntas abaixo:
```sh
estudantes = [1, 2, 3, 4, 5, 6, 7]
lista1_entregues = [1, 4, 7, 3]
lista2_entregues = [3, 1, 6]
```
* Quem ainda não entregou a lista1?
* Quem já entregou as duas listas?
* Quem já entregou qualquer uma das duas listas?
* Quem ainda não entregou nenhuma das listas?

## Exercícios 2 

**exercise1.py**
**1.** Blefe é um jogo de duas pessoas onde cada uma tenta adivinhar os número que a outra irá escolher. Cada jogador escolhe 5 números de 0 a 10, inclusive. A pontuação final é calculada da seguinte forma:
* A nota de partida de cada pessoa é o maior número que a outra pessoa não escolheu;
* O redutor é o menor numero que a outra pessoa não escolheu;
* A pontuação final é a nota de partida - redutor.
Exemplo:
```sh
clara = [0, 1, 5, 9, 10]
# nota de partida: 5
# redutor: 1
# pt: 4

marco = [0, 2, 8, 9, 10]
# nota de partida: 8
# redutor: 2
# pt individual: 6

# Quem ganhou: Marco
```
Implemente uma função que receba um dicionário com os nomes e números chutados e retorne o nome de quem ganhou.
```sh
entrada = {
    'Clara': [0, 1, 5, 9, 10],
    'Marco': [0, 2, 8, 9, 10]
}

# saída: 'Marco'
```
Faça a análise de complexidade da sua solução.

**exercise2.py**
**2.** Dada uma string, ache o tamanho da maior substring que não tenha caracteres repetidos. Complexidade de tempo limite aceitável: O(n²).
```sh
string = "serdevemuitolegalmasehprecisoestudarbastante"
```
Faça a análise de complexidade da sua solução.

**Bônus:** Otimize o algoritmo do exercício 2 para ter uma complexidade de tempo limite de O(n).