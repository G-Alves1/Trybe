## Exercícios - example.py

**1.** Use a entrada abaixo para criar objetos Employee:
```sh
employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]
```
* Instancie a sua classe HashMap e use os objetos Employee para povoá-la. Imprima na tela o nome da pessoa de id_num = 23, acessando a informação a partir da HashMap.

**2.** A pessoa de id_num = 10 está com o nome errado, deveria ser name30. Implemente um método com a assinatura abaixo, onde id_num é a chave para localizar o registro que queremos alterar e new_name é o nome a ser colocado. Verifique se o seu código está realmente alterando o nome, imprimindo o nome antes e depois da alteração:
```sh
def update_value(self, id_num, new_name):
    # ...
```

**3.** Consulte a forma de se criar um dicionário chamado de dict comprehension e crie um dicionário que mapeia inteiros de 3 a 20 para o seu dobro.

Exemplo:
```sh
- 3 deve ser mapeado para 6;

- 10 deve ser mapeado para 20.
```

**4.** Dada uma string, construa um dicionário com a contagem de cada caractere da palavra. Utilize o pseudocódigo e o exemplo abaixo para se nortear.
```sh
Para cada char na string:
	- Se o char não estiver no dicionário, inclua com o valor 1;

	- Se estiver, incremente o valor.


# Exemplo:

str = "bbbbaaaacccaaaaaaddddddddccccccc"
# saída: {'b': 4, 'a': 10, 'c': 10, 'd': 8}

str = "coxinha"
# saída: {'c': 1, 'o': 1, 'x': 1, 'i': 1, 'n': 1, 'h': 1, 'a': 1}
# Explicação: Nenhuma letra repete em coxinha :)
```

**5.** Utilize o dicionário criado no exercício 5. Para as chaves ímpares, não queremos mais mapear para o seu dobro, mas sim para o seu triplo. Consulte o método keys() e atualize o seu dicionário para a nova regra.

## Exercícios

**exercise1.py**
**1.** Você receberá uma lista de palavras e uma string. Escreva uma função que decida quais palavras podem ser formadas com os caracteres da string (cada caractere só pode ser utilizado uma vez). Retorne a soma do comprimento das palavras escolhidas.

Exemplo 1:
```sh
words = ["cat", "bt", "hat", "tree"], chars = "atach"
# saída: 6
"""Explicação: As palavras que podem ser formadas com os caracteres da string
               são "cat" (tamanho 3) e "hat" (tamanho 3)."""
```
Exemplo 2:
```sh
words = ["hello", "world", "students"], chars = "welldonehoneyr"
# saída: 10
"""Explicação: As palavras que podem ser formadas com os caracteres da string
               são "hello" (tamanho 5) e "world" (tamanho 5)."""
```
Faça a análise de complexidade da sua solução.

**exercise2.py**
**2.** Uma certa empresa tem uma estrutura hierarquizada onde cada pessoa reporta a uma única outra pessoa. Cada pessoa tem um score que é o total de pessoas que estão abaixo dela, incluindo subordinados de seus subordinados, além dela própria. Isso significa que uma pessoa que não tem nenhuma equipe tem score 1. Uma pessoa com apenas um subordinado e esse subordinado não tem equipe, tem score 2.

Escreva um método que calcule o score de uma determinada pessoa.

Dica: para saber o score de uma pessoa, você precisa saber o score das pessoas da equipe dela, correto? Qual estratégia utiliza a mesma função dentro dela própria?

Exemplo de subordinados:
```sh
- 1 => 2, 3

- 2 => 4

- 3 => sem subordinados

- 4 => 5, 6

- 5 => 7

- 6 => sem subordinados

- 7 => sem subordinados
```
Neste exemplo, o score de cada pessoa é:
```sh
- 1 => 5 (score 2) + 1 (score 3) + 1 (score dele próprio) = 7

- 2 => 4 (score 4) + 1 (score dele próprio) = 5

- 3 => 1 (score dele próprio)

- 4 => 2 (score 5) + 1 (score 6) + 1 (score dele próprio) = 4

- 5 => 1 (score 7) + 1 (score dele próprio) = 2

- 6 => 1 (score dele próprio)

- 7 => 1 (score dele próprio)
```
Faça a análise de complexidade da sua solução.

Bônus: É muito comum em entrevistas que, quando a pessoa resolve o problema dentro do tempo, façam-se perguntas "follow-up", que dificultam a questão. Os follow-ups abaixo são opcionais.

Follow-ups:

**follow-up1.py**
* Caso a empresa precise fazer essa consulta frequentemente, como você pode tornar essas consultas mais eficientes? Como você pode guardar o resultado de consultas anteriores?

**follow-up2.py**
* Escreva um método para incluir uma nova pessoa na equipe de uma outra pessoa. Seu método deve considerar que cada pessoa pode ter no máximo k pessoas em seu time. Se o time estiver cheio, a nova contratada pode ser alocada na equipe de qualquer pessoa abaixo dela, não precisando ser na equipe imediatamente abaixo.

**follow-up3.py**
* Se você adicionar uma nova contratação à lista de subordinadas, a estrutura que você fez no follow-up 1 está desatualizada. Modifique suas funções para que essa estrutura seja atualizada junto com a adição de uma nova contratação. Faça isso sem rodar de novo a função score() e lembre-se de atualizar todos os scores desde a pessoa da presidência até a equipe que a nova contratação entrou.