# Exercício 1
def sum(n):
    if (n == 1):
        return 1
    else:
        return n + sum(n - 1)

print(sum(4))


# Exercício 2
def even(n):
    quant = 0
    for i in range(1, n + 1):
        if (i % 2 == 0):
            quant += 1
    
    return quant

print(even(10))


# Exercício 3
def even_recursive(n):
    if (n <= 1):
        return 0
    # even
    elif n % 2 == 0:
        return 1 + even_recursive(n - 1)
    # odd
    else:
        return even_recursive(n - 1)

print(even_recursive(10))


# Exercício 4
def biggest_number(list):
    length = len(list)
    return bigger_number_aux(list, length)

def bigger_number_aux(list, length):
    if length == 1:
        return list[0]
    else:
        biggest = bigger_number_aux(list, length-1)
        if biggest > list[length-1]:
            return biggest
        else:
            return list[length-1]

print(biggest_number([1, 2, 4, 3, 6, 5]))


# Exercício 5
def mdc(num1, num2):
    if num2 == 0:
        return num1
    return mdc(num2, num1 % num2)

print(mdc(12, 18))


# Exercício 6
def isPrime(n, i = 2):
    if (n == 1):
        return False
    if (n == 2):
        return True
    if (n % i == 0):
        return False
    if (i * i > n):
        return True
 
    return isPrime(n, i + 1)

print(isPrime(11))


# Exercício 7
def reverse(array):
    reversed_array = []
    for item in array:
        reversed_array.insert(0, item)
    return reversed_array
    
print(reverse([1, 2, 3]))


def reverse2(array):
    if len(array) < 2:
        return array
    return reverse(array[1:]) + [array[0]]

print(reverse2([1, 2, 3]))


def reverse3(array):
    if len(array) < 2:
        return array
    return [array[-1]] + reverse(array[:len(array)-1])
    
print(reverse2([1, 2, 3]))


# Exercício 8
def torres_hanoi(numero_de_discos, a, b, c):
    if numero_de_discos == 1:
        print("Move disco %d de %s para %s" % (numero_de_discos, a, c))
    else:
        torres_hanoi(numero_de_discos - 1,a ,c ,b)
        print("Move disco %d de %s para %s" % (numero_de_discos, a, c))
        torres_hanoi(numero_de_discos - 1, b, a, c)

print(torres_hanoi(3, a='primeiro', b='meio', c='fim'))
