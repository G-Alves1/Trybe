class Geladeira:
    def __init__(self, cor, potencia, voltagem, preco):
        self.preco = preco
        self.__cor = cor
        self.__potencia = potencia
        self.__voltagem = voltagem
        self.__ligado = False

    def cor(self):
        return self.__cor


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.geladeira = None

    def comprar_geladeira(self, geladeira: Geladeira):
        if geladeira.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= geladeira.preco
            self.geladeira = geladeira

    def __str__(self):
        if (self.geladeira):
            return f"{self.nome} - possui uma geladeira e {self.saldo_na_conta} reais em sua conta."
        return f"{self.nome} - não possui uma geladeira  e {self.saldo_na_conta} reais em sua conta."


geladeira_branca = Geladeira("branca", 250, 220, 100)
geladeira_preta = Geladeira("preta", 400, 220, 500)

pessoa_cozinheira = Pessoa("Jacquin", 1000)
pessoa_cozinheira_2 = Pessoa("Paola", 1000)

pessoa_cozinheira.comprar_geladeira(geladeira_branca)
pessoa_cozinheira_2.comprar_geladeira(geladeira_preta)

print(pessoa_cozinheira)
print(pessoa_cozinheira_2)