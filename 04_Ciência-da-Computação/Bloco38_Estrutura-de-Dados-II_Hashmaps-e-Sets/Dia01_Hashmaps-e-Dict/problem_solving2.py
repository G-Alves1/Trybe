# Separe as palavras de acordo com a sua leta inicial.
# text = ['Ana', 'ama', 'Joao', 'que','ama', 'Jose', 'mais', 'Jose', 'nao', 'ama' 'Ana']
# resposta:
# a: [ 'Ana', 'ama', 'ama', 'ama', 'Ana' ]
# j: [ 'Joao', 'Jose', 'Jose' ]
# q: [ 'que' ]
# m: [ 'mas' ]
# n: [ 'nao' ]

def screening(text):
    screen = {}

    for word in text:
        first_char = word[0]
        if first_char not in screen:
            screen[first_char] = [word]
        else:
            screen[first_char].append(word)

    return screen


if __name__ == '__main__':
    text = ['Ana', 'ama', 'Joao', 'que','ama', 'Jose', 'mais', 'Jose', 'nao', 'ama', 'Ana']

    print(screening(text))
  