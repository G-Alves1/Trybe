# Exercício 1
a = 10
b = 5

print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a // b)
print(a ** b)
print(a % b)
print()


# Exercício 2
hours = 6

minutes = hours * 60
seconds = minutes * 60

print('minutes:', minutes, 'seconds:', seconds)
print()


# Exercício 4
bookPrice = 24.20
books = 60
discount = 0.4 * bookPrice
transport = 3 + (books - 1) * 0.75
total = books * discount + transport

print(total)
print()


#
trybe_course = ["Introdução", "Front-end", "Back-end"]


# Exercício 5
trybe_course.append("Ciência da Computação")

print(trybe_course)
print()


# Exercício 6
trybe_course[0] = "Fundamentos"

print(trybe_course)
print()


# Exercício 7
var = set()
var.add("Gabriel")

print(var)
print()


#
info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}


# Exercício 8
info["recorrente"] = "Sim"

print(info)
print()


# Exercício 9
del info["origem"]

print(info)
print()


# Exercício 11
sequence = [1, 2, 2, 3, 3, 3]

count = {
  1: 1,
  2: 2,
  3: 3,
}


# Exercício 12
number = 5
counter = 1
result = 1

while counter <= number:
    result *= counter
    counter += 1

print(result)
print()

# ou

result = 1

for factor in range(1, number+1):
    result *= factor

print(result)
print()


# Exercício 13
ratings = [6, 8, 5, 9, 10]
new_ratings = []

for rating in ratings:
    new_ratings.append(rating * 10)

print(new_ratings)
print()

# ou

ratings = [6, 8, 5, 9, 10]
new_ratings = [10 * rating for rating in ratings]

print(new_ratings)
print()


# Exercício 14
ratings = [6, 8, 5, 9, 10]

for rating in ratings:
    if (rating % 3) == 0:
        print(f'{rating} é múltiplo de 3')