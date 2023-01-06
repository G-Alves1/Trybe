## Exercícios - exercises.py

**1.** Qual é a Ordem de Complexidade (complexidade de tempo) do algoritmo abaixo? E a complexidade de espaço?
```sh
    def multiply_array(numbers):
        result = 1
        for number in numbers:
            result *= number

        return result
```
```sh
Resposta:
   Tempo: O(n)
   Espaço: O(1)
```

**2.** Meça o tempo de execução do algoritmo e, mudando o tamanho das entradas, veja como, se você aumenta a entrada em *n* vezes, o tempo de execução aumenta em *n²* vezes!
```sh
    def multiply_arrays(array1, array2):
        result = []
        number_of_iterations = 0

        for number1 in array1:
            print(f'Array 1: {number1}')
            for number2 in array2:
                print(f'Array 2: {number2}')
                result.append(number1 * number2)
                number_of_iterations += 1

        print(f'{number_of_iterations} iterações!')
        return result


    meu_array = [1, 2, 3, 4, 5]

    multiply_arrays(meu_array, meu_array)
```

**3.** Faça um algoritmo qualquer com três loops aninhados um dentro do outro. Entenda como ele terá uma complexidade de *O(n³)*!

**4.** Imagine que você recebe dois arrays de tamanho igual, *array1* e *array2*. Para cada elemento do *array1*, realize uma busca binária no *array2*. Mostre que a ordem de complexidade do algoritmo resultante é *O(n * log n)*, ou *O(n log n)*.

**5.** Dado um array de números de tamanho *n*, escreva um algoritmo que retorna *true* se há no array um número duplicado e *false* caso contrário. Analise a solução abaixo e diga qual é a ordem de complexidade desse algoritmo para o melhor caso, pior caso e caso médio.
```sh
    def contains_duplicate(numbers):
        numbers.sort()
        previous_number = 'not a number';
        for number in numbers:
            if(previous_number == number): return True
            previous_number = number

        return False
```
```sh
Resposta:
    O(n log n)
```

**6.** Suponha que se está escrevendo uma função para um jogo de batalha naval. Dado um array bidimensional com *n* linhas e *m* colunas, e um par de coordenadas *x* para linhas e *y* para colunas, o algoritmo verifica se há um navio na coordenada alvo. Por exemplo:
```
    entrada = [ 0 0 0 0 1
                0 0 0 0 1
                1 1 1 1 1
                0 0 0 1 0 ]

    resultado para (0, 4) = True
    resultado para (1, 1) = False
```
Qual seria a ordem de complexidade da solução para este problema? E a complexidade de espaço?
```sh
Resposta:
    Tempo: O(1)
    Espaço: O(1)
```

**7.** Utilize o módulo *random* da linguagem Python para gerar um array com 100 números. Cada um desses números deve ser a média de *n* números gerados aleatoriamente. Qual é a ordem de complexidade de tempo e de espaço deste programa?
```sh
Resposta:
    Tempo: O(n)
    Espaço: O(1)
```

**8.** Dado um array de doces candies e um valor inteiro extra_candies, onde o candies[i] representa o número de doces que a enésima criança possui. Para cada criança, verifique se há uma maneira de distribuir doces extras entre as crianças de forma que ela possa ter o maior número de doces entre elas. Observe que várias crianças podem ter o maior número de doces. Analise o código abaixo para o melhor, pior caso e caso médio. Faça a análise de complexidade de espaço também.
```
    def kids_with_candies(candies, extra_candies):
        # parece que a solução percorre o array somente uma vez,
        # porém isto é feito duas vezes, uma no `max` e outra para
        # preencher a resposta
        max_candies = max(candies)
        return [candy + extra_candies >= max_candies for candy in candies]


    # saída: [True, True, True, False, True]
    print(kids_with_candies([2, 3, 5, 1, 3], 3))
```
```sh
Resposta:
    Tempo: O(n)
    Espaço: O(n)
```
