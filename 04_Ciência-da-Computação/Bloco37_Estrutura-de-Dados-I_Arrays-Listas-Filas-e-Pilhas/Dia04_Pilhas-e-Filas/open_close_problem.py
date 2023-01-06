""""
Problema - Fechamento válido
O exercício consiste em criar uma função chamada is_valid() 
que receberá um argumento contendo uma string com 
os caracteres (, ), [, ], { e }. A função deve verificar se os
 "parênteses, colchetes e chaves", são válidos seguindo as regras:
- Os caracteres de abertura devem possuir os caracteres de fechamento correspondentes;
- Os caracteres de abertura devem ser fechados na ordem correta;
- A string não irá conter nenhum outro carácter fora os caracteres citados acima.
"""

from stack import Stack

def is_valid(string):
    if len(string) % 2 != 0:
        return False

    stack = Stack()

    for char in string:

        if char not in '({[]})':
            return False

        if char in '([{':
            stack.push(char)
        elif char == ")" and not stack.is_empty() and stack.peek() == "(":
            stack.pop()
        elif char == "]" and not stack.is_empty() and stack.peek() == "[":
            stack.pop()
        elif char == "}" and not stack.is_empty() and stack.peek() == "{":
            stack.pop()
        else:
            return False
    
    return stack.is_empty()

string = "()" # saída: True
print(is_valid(string))

string = "))((" # saída: False
print(is_valid(string))

string = "()[]{}" # saída: True
print(is_valid(string))

string = "((])" # saída: False
print(is_valid(string))