## Exercícios - exercises.py

Para medir o tempo de execução de um algoritmo (em segundos) implemente a seguinte classe:
```sh
    from time import perf_counter


    class Cronometro:
        def __init__(self, name="Seu algoritmo"):
            self.name = name
        def __enter__(self):
            self.start = perf_counter()
        def __exit__(self, *exc):
            elapsed = perf_counter() - self.start
            print(f"{self.name} demorou {elapsed} segundos")
```

Para utilizar o *Cronometro*, basta usá-lo dentro de um *with* e em seguida chamar a função:
```
    from Cronometro import Cronometro


    with Cronometro("algoritmo"):
        algoritmo(...)
```

**1.** Dado um array com os seguintes elementos *["zebra", "macaco", "elefante", "arara", "javali"]*, após duas iterações utilizando bubble sort, como estaria este array?
```sh
Resposta:
    ["elefante", "arara", "javali" ,"macaco","zebra"]
```

**2.** Demonstre o passo a passo do processo de mistura de um array, sendo ordenado utilizando merge sort. Comece o passo a passo a partir da linha abaixo:
```sh
    7 3    5 4    6 8    2 1
```
```sh
Resposta:
    7 3    5 4    6 8    2 1

    7   3   5   4   6   8   2   1

    3 7     4 5     6 8     1 2

    3 7 4 5     1 2 6 8

    1 2 3 4 5 6 7 8
```


**3.** Execute os algoritmos de ordenação por seleção e inserção, para as entradas de dados ordenadas, inversamente ordenadas e aleatórias. Em seguida, compare-os. Faça testes para entradas de tamanho 10.000, 100.000, 1.000.000.
A entrada de dados pode ser gerada da seguinte maneira:
```sh
    from random import shuffle


    ordenados = list(range(100))
    inversamente_ordenados = list(reversed(range(100)))
    aleatorios = ordenados[:] # copia dos ordenados
    shuffle(aleatorios) # embaralha eles
```

**4.** Compare o tempo de execução do algoritmo *merge_sort* e *bubble_sort* para uma entrada de 10.000 valores aleatórios. Explique através de análise de complexidade o que ocorre.
```sh
Respostas:
    buuble_sort: O(n²)
    merge_sort: O(n log n)
```

**5.** Converta o algoritmo recursivo de busca binária em iterativo.

**6.** Para descobrirmos qual commit introduziu um erro no sistema, precisamos voltar no tempo verificando os commits antigos, de modo a descobrir um commit em que os testes falham. Supondo que isto será representado como um **array de booleanos**, descubra o indíce onde o erro ocorreu pela primeira vez.
Como os testes demoram a rodar, resolva o problema rodando o mínimo de testes possíveis.
```sh
    entrada: [True, True, True, True, False, False, False]
    saída: 4


    entrada: [True, True, False, False, False, False, False]
    saída: 2
```
Curiosidade: O comando *git bisect* executa de maneira similar a este exercício se implementado de forma eficiente 😂.