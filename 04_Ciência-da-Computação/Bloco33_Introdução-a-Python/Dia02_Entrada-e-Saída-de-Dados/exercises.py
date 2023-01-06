# Exercício 1
NAME = input("Insira seu nome: ")

for letter in NAME:
    print(letter)

print()


# Exercício 2
nums = input("Insira valores aqui, separados por espaço: ")

numsArr = nums.split(" ")

sum = 0
for num in numsArr:
    if not num.isdigit():
        print(f"Erro ao somar valores, {num} não é um dígito.")
    else:
        sum += int(num)

print(f"A soma dos valores válidos é: {sum}")
print()


# Exercício 3
students = []
with open("file.txt") as gradesFile:
    for line in gradesFile:
        if int(line.split(" ")[1]) < 6:
            students.append(line.split(" ")[0] + "\n")

with open("students.txt", mode="w") as studentsFile:
    print(students)
    studentsFile.writelines(students)
