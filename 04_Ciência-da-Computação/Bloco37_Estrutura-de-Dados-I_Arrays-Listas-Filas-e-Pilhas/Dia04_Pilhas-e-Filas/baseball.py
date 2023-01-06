""""
Problema 2- Baseball Game
Criar uma função que receba uma lista de strings e calcule o somatório do total 
da partida de baseball. Cada item da lista consiste em uma rodada da partida para determinado time.
As regras para se calcular os pontos são as seguintes:
     Inteiro (pontos de uma rodada): Representa os pontos para a rodada;
     + (pontos de uma rodada): Os pontos do time para a rodada será o somatório dos pontos das duas últimas rodadas válidas;
     D (pontos de uma rodada): Os pontos do time para a rodada será igual ao dobro de pontos da ultima rodada válida;
     C (Operação que não é necessáriamente pontos de uma rodada): Representa que os pontos da última rodada válida são inválidos e devem ser removidos;
"""

from stack import Stack

def calculate_points(rounds):

     stack = Stack()

     for round in rounds:
          if round == '+':
               last_round = stack.pop()
               penultimate_round = stack.pop()

               current_round = last_round + penultimate_round

               stack.push(penultimate_round)
               stack.push(last_round)
               stack.push(current_round)

          elif round == 'D':
               last_round = stack.peek()
               current_round = last_round*2
               stack.push(current_round)
          
          elif round == 'C':
               stack.pop()
          
          else:
               stack.push(int(round))
     
     total = 0

     while not stack.is_empty():
          total += stack.pop()
     
     return total
#                  1   2   3   6  -6  = 6
print(calculate_points(["1","2","+","D","C"]))
#                  5           10  15  = 30
print(calculate_points(["5","2","C","D","+"]))
#                        5    -2             -4    9    5   14
print(calculate_points(["5", "-2", "4", "C", "D", "9", "+", "+"]))