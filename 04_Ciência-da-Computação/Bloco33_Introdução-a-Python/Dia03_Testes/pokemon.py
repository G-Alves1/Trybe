import json


def retrieve_pokemons_by_type(type, reader):
    pokemons = json.load(reader)["results"]
    pokemons_by_type = [
        pokemon for pokemon in pokemons if type in pokemon["type"]
    ]
    return pokemons_by_type
