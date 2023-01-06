class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name

class HashMap:
    def __init__(self):
        self._buckets = [None] * 10
        # Colisão
        # self._buckets = [[] for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address] = employee
        # Colisão
        # self._buckets[address].append(employee)

    def get_value(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address].name

    # Colisão
    # def get_value(self, id_num):
    #    address = self.get_address(id_num)
    #    for item in self._buckets[address]:
    #        if item.id_num == id_num:
    #            return item.name
    #    return None
  
    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None

    # Exercício 2
    def update_value(self, id_num, new_value):
        address = self.get_address(id_num)
        employee = self._buckets[address]
        employee.name = new_value


if __name__ == "__main__":
    # Instanciando a classe Dict
    employee_registry = {}

    # Inserindo dados
    # objeto[chave] = valor
    employee_registry[14] = 'name1'
    employee_registry[23] = 'name2'
    employee_registry[10] = 'name3'
    employee_registry[9] = 'name4'
    print(employee_registry)

    # Alterando o nome do id 10
    # objeto[chave] = novo_valor
    employee_registry[10] = 'name30'
    print(f"Novo valor do id 10, após a atualização: {employee_registry[10]}")


    # Instanciação do objeto vazio
    dict1 = {}
    dict2 = dict()

    # Instanciação com preenchimento inicial de dados
    dict3 = {1: 'name1', 2: 'name2'}
    print(f"Dicionário 1: {dict1}")
    print(f"Dicionário 2: {dict2}")
    print(f"Dicionário 3: {dict3}")

    # Inserção e Alteração
    # Se a chave não existir no dict, uma nova entrada será criada
    # Se já existir, o valor será sobreposto
    dict1[14] = 'name1'
    print(f"Novo dicionário 1, pós inserção/alteração: {dict1}")

    # Consulta e Remoção
    # Se a chave não existir no dict, causa erro
    name = dict1[14]
    del dict1[14]
    print(f"Dicionário 1 pós consulta e deleção: {dict1}")

    
    # Exercício 1
    employees = [(14, 'name1'), (23, 'name2'), (10, 'name3'), (9, 'name4')]
    registry = HashMap()

    for id_num, name in employees:
        employee = Employee(id_num, name)
        registry.insert(employee)

    print(registry.get_value(23))

    # Exercício 2
    print(registry.get_value(10))
    registry.update_value(10, "name30")
    print(registry.get_value(10))

    # Exercícios 3
    double = {i: i*2 for i in range(3, 21)}
    print(double)

    # Exercício 4
    count_chars = {}
    string = "bbbbaaaacccaaaaaaddddddddccccccc"

    for char in string:
        if char not in count_chars:
            count_chars[char] = 1
        else:
            count_chars[char] += 1

    print(count_chars)

    # Exercício 5
    for key in double.keys():
        if key % 2 is not 0:
            double[key] = key * 3
    print(double)
