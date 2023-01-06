import random
import json
import csv


# Exercício 1
NAME = input("Insira seu nome: ")

for removed_letters in range(len(NAME)):
    for index in range(len(NAME) - removed_letters):
        print(NAME[index], end="")
    print()
print()


# Exercício 2 e 3
file = open("words.txt")

words = [word.strip() for word in file]

word = random.choice(words)
scrambled_word = "".join(random.sample(word, len(word)))

print(f"Scrambled word is {scrambled_word}")

attempts = []
for attempt in range(1, 4):
    question = input(f"Attempt {attempt}: ")
    attempts.append(question)

if word in attempts:
    print(f"You win! Word: {word}")
else:
    print(f"You lose! Word: {word}")

print()


# Exercício 4
file_json = open("exercise2.json")

books = json.load(file_json)

categories = {}
for book in books:
    for category in book["categories"]:
        if not categories.get(category):
            categories[category] = 0
        categories[category] += 1

header = ["categoria", "percentagem"]
file_csv = open("report.csv", "w")

writer = csv.writer(file_csv)
writer.writerow(header)
writer.writerows(
    [category, num_books / len(books)]
    for category, num_books in categories.items()
)

print()


# Exercício 5
file = open("pokemons.json")
pokemons = json.load(file)["results"]
pokemon = random.choice(pokemons)
pokemon_name = pokemon["name"]

wrong_shot = True
num_of_shots = 0
while (wrong_shot):
    num_of_shots += 1
    shot = input("Quem é esse pokemon? ")
    if (shot == pokemon_name):
        print("Você acertou! Parabéns!")
        break
    elif num_of_shots == len(pokemon_name):
        print("Você errou!")
        break
    else:
        print("Dica: ", end="")
        for i in range(0, num_of_shots):
            print(pokemon_name[i], end="")
        print("")