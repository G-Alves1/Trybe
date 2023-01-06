# Dado um array de números inteiros que representam uma avaliação a 
# respeito de um ponto turístico. E a distância entre seus 
# índices representam a distância entre os pontos turísticos. 
# Calcule a máxima pontuação obtida a partir de um par de pontos
# turísticos. Para calcular a pontuação some as avaliações dos 
# dois pontos e em seguida subtraia a distância entre eles.
     #   0, 1, 2, 3, 4]
spots = [8, 1, 5, 2, 6] # R: 11
spots = [4, 1, 5, 2, 6] # R: 9

def max_score(array):
    answer = -1
    previous = -1

    for j in range(1, len(array)):
        i = j - 1
        previous = max(previous, array[i] + i)
        answer = max(answer, previous + array[j] - j)
    return answer
        
print(max_score([4, 1, 5, 2, 6]))