while True:
    try:
        x = int(input("Please enter a number: "))
        break
    except ValueError:
        print("Oops!  That was no valid number.  Try again...")


try:
    arquivo = open("arquivo.txt", "r")
except OSError:
    print("arquivo inexistente")
else:
    print("arquivo manipulado e fechado com sucesso")
    arquivo.close()
finally:
    print("Tentativa de abrir arquivo")