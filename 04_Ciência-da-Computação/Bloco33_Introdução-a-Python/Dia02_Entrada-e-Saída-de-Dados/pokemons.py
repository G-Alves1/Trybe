import json


with open("pokemons.json") as file:
    content = file.read()
    pokemons = json.loads(content)["results"]

print()
print(pokemons[0])


with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]

print()
print(pokemons[1])


with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]


# Somente tipo grama
grass_type_pokemons = [
    pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]

with open("grass_pokemons.json", "w") as file:
    json_to_write = json.dumps(
        grass_type_pokemons
    )
    file.write(json_to_write)


with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]


# Somente tipo grama
grass_type_pokemons = [
    pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]

with open("grass_pokemons.json", "w") as file:
    json.dump(grass_type_pokemons, file)
    