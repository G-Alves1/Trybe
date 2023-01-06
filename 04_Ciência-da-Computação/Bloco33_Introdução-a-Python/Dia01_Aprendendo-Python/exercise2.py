import math


# Exercício 1
def biggest_number(num1, num2):
    if num1 < num2: return num2
    if num2 < num1: return num1
    return 'números iguais'

print(biggest_number(3,3))
print()


# Exercício 2
def average(numbers):
    total = 0
    for number in numbers:
        total += number
    return total / len(numbers)

print(average([1, 2, 3, 4, 5]))
print()


# Exercício 3
def asterisks_square(n):
    counter = 1
    while counter <= n:
        counter += 1
        print(n * '*')
        
print(asterisks_square(5))
print()


# Exercício 4
def biggest_name(names):
    biggest = names[0]
    for name in names:
        if len(name) > len(biggest):
            biggest = name
    return biggest

print(biggest_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
print()


# Exercício 5
def paint_costs(area):
    liters = area / 3
    cans = math.ceil(liters / 18)
    return cans, cans * 80

print(paint_costs(54))
print()


# Exercício 6
def triangle(sidaA, sideB, sideC):
    is_triangle = (
            sidaA + sideB > sideC and
            sideB + sideC > sidaA and
            sidaA + sideC > sideB
    )
    if not is_triangle:
        return "não é triângulo"
    elif sidaA == sideB == sideC:
        return "equilátero"
    elif sidaA == sideB or sideB == sideC or sidaA == sideC:
        return "isósceles"
    else:
        return "escaleno"

print(triangle(5, 5, 1))
print()


# Exercício 7
def smaller_number(numbers):
    smaller = numbers[0]
    for number in numbers:
        if number < smaller:
            smaller = number
    return smaller

print(smaller_number([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))
print()

# ou

def smaller(numbers): return min(numbers)

print(smaller([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))
print()


# Exercício 8
def asterisks_square2(n):
    counter = 0
    while counter < n:
        counter += 1
        print(counter * '*')

print(asterisks_square2(5))
print()


# Exercício 9
def summation(n):
    total = 0
    number = 0
    while number < n:
        number += 1
        total += number
    return total

print(summation(5))
print()

# ou

def summation2(number):
    return sum(range(1, number + 1))

print(summation2(5))
print()


# Exercício 10
def fuel_price(liters, type):
    if type == "A":
        price = 1.90
        discount = 0.03
        if liters > 20:
            discount = 0.05
    elif type == "G":
        price = 2.50
        discount = 0.04
        if liters > 20:
            discount = 0.06
    total = price * liters
    total -= total * discount
    return total