class Eletrodomestico:
    def __init__(self, cor, potencia, voltagem, preco):
        self.preco = preco
        self.__cor = cor
        self.__potencia = potencia
        self.__voltagem = voltagem
        self.__ligado = False
        self.__amperagem_atual_no_motor = 0

    def ligar(self, velocidade):
        self.__velocidade = velocidade
        self.__amperagem_atual_no_motor = (
            (self.__potencia / self.__voltagem) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

    @property
    def cor(self):
        return self.__cor

    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor


class Microondas(Eletrodomestico):
    def __init__(self, cor, potencia, voltagem, preco):
        super().__init__(cor, potencia, voltagem, preco)


class Batedeira(Eletrodomestico):
    def __init__(self, cor, potencia, voltagem, preco):
        super().__init__(cor, potencia, voltagem, preco)


class Fogao(Eletrodomestico):
    def __init__(self, cor, potencia, voltagem, preco):
        super().__init__(cor, potencia, voltagem, preco)


microondas = Microondas("Branco", "450", "127", "400")
batedeira = Batedeira("Prata", "200", "127", "290")
fogao = Fogao("Preto", "6000", "127", "1300")

print(f"O microondas {microondas.cor} custa {microondas.preco}.")
print(f"A batedeira {batedeira.cor} custa {batedeira.preco}.")
print(f"O fogão {fogao.cor} custa {fogao.preco}.")