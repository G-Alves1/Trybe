## Exercícios - pc

**1.** Crie um projeto que simulará a arquitetura que vimos em aula. Ele deverá ter um arquivo principal para a execução do programa que representará nosso Sistema Operacional e duas classes, que representarão a Memória Principal e a Secundária.
Cada tipo de memória vai armazenar os dados na memória que ela representa, sendo a Principal aquela que armazena tudo em memória RAM e a secundária no disco. Através do Python estaremos fazendo chamadas ao Sistema Operacional para realizar essas tarefas para nós, pois ele melhor do que ninguém saberá utilizar as memórias. **O objetivo do nosso script será realizar a soma de uma lista de números aleatórios utilizando as duas implementações de memória. Os dados serão sempre armazenados como strings!**
* Crie um novo diretório na sua máquina para os exercícios (pode chamar ele de *computador* ou *pc*).
    * Os próximos arquivos deverão ser criados dentro dele.
* Vamos começar a nossa memória principal, ou memória RAM: para isso crie um arquivo *main_memory.py* e adicione o conteúdo abaixo nela. Implemente os métodos *get* e *load*.
    * No load você adicionará (*append*) o elemento passado (*value*) à lista *loaded_memor*y.
    * No get você retornará o valor presente na posição dada (*index*) na lista *loaded_memory*. Se o valor não existir ou não for numérico, retorne *0*.
```sh
    class MainMemory:
        def __init__(self):
            self.clean()

        def load(self, value):
            # Sua implementação

        def get(self, index):
            # Sua implementação

        def clean(self):
            self.loaded_memory = []

# Perceba que estamos armazenando os valores na memória RAM através das variáveis que definimos!
```

* Crie um arquivo *secondary_memory.py* para ser a nossa memória secundária e adicione o conteúdo abaixo. Mais uma vez, você será responsável pela implementação dos métodos *get* e *load* porém agora você deverá utilizar a função *open*, para persistir esses dados em disco.
    * No *load*, utilizando o método *open*, escreva um código que crie um novo arquivo utilizando *next_file_name* como *path* e salve o *value* no conteúdo deste novo arquivo.
    * No *get*, também utilizando o método *open*, retorne o conteúdo do arquivo *file_name*. Não esqueça de converter o valor para numérico (float ou int).
```sh
    from os import mkdir, listdir
    from os.path import join
    from shutil import rmtree

    DISK_PATH = "./disk"


    class SecondaryMemory:
        def __init__(self, disk_path=DISK_PATH):
            self.disk_path = disk_path
            try:
                mkdir(self.disk_path)
            except FileExistsError:
                pass

        def load(self, value):
            value = str(value)
            next_index = str(len(listdir(self.disk_path)))
            next_file_name = join(self.disk_path, next_index)
            # Sua implementação

        def get(self, index):
            index = str(index)
            file_name = join(self.disk_path, index)
            # Sua implementação

        def clean(self):
            rmtree(self.disk_path)
            mkdir(self.disk_path)
```

* Vamos criar nosso arquivo principal para gerenciar as "memórias" que criamos. Para isso, crie um novo arquivo *operating_system.py* e coloque o seguinte conteúdo:
```sh
    from time import perf_counter

    from main_memory import MainMemory
    from secondary_memory import SecondaryMemory

    main = MainMemory()
    secondary = SecondaryMemory()

    # Números aleatórios a serem somados
    RANDOM_NUMBERS = ["36912", "84300"] * 100

    def timer(string, initial_time):
        """Função auxiliar para print temporizado"""
        print(string)
        print(f"Tempo para a tarefa terminar: {perf_counter() - initial_time:6f}\n")


    # Desempenho da memória primária
    main_load_init_time = perf_counter()
    for number in RANDOM_NUMBERS:
        main.load(number)
    timer("Números carregados na memória principal", main_load_init_time)

    main_get_init_time = perf_counter()
    main_sum = sum([main.get(i) for i in range(len(RANDOM_NUMBERS))])
    timer(f"Soma na memória principal: {main_sum}", main_get_init_time)

    main_clean_init_time = perf_counter()
    main.clean()
    timer("Clean na memória principal", main_clean_init_time)


    # Desempenho da memória secundária
    secondary_load_initial_time = perf_counter()
    for number in RANDOM_NUMBERS:
        secondary.load(number)
    timer("Números carregados na memória secundária", secondary_load_initial_time)

    secondary_get_init_time = perf_counter()
    secondary_sum = sum([secondary.get(i) for i in range(len(RANDOM_NUMBERS))])
    timer(f"Soma na memória secundária: {secondary_sum}", secondary_get_init_time)

    secondary_clean_init_time = perf_counter()
    secondary.clean()
    timer("Clean na memória secundária", secondary_clean_init_time)
```

Perceba que o script do nosso Sistema Operacional faz a medição do tempo que cada uma das três operações (load, get e clean) leva para acontecer tanto na memória principal quanto na secundária. Além disso, as operações são testadas com uma lista de valores (*RANDOM_NUMBERS*).

* Vamos testar nosso script! Execute o comando *python operating_system.py* e veja a saída no console. Deu certo?! Como foram os tempos de saída?!
* Para deixar nosso script ainda mais legal, vamos aumentar a quantidade de números para serem somados. Adicione uma grande quantidade de números no array de números aleatórios. Para isso, basta adicionar ** 200* ao final da linha que declara a lista *RANDOM_NUMBERS*, para multiplicar a quantidade de elementos na lista. Rode o script novamente. Como foi o tempo de resposta agora? Deu diferença, né? Qual foi mais rápido?!
* Agora, vamos reforçar mais um conteúdo aprendido:
* Comente os trechos de código que fazem a operação de limpeza (*clean*) da memória.
* Execute o comando novamente
* Comente os trechos de código que fazem a operação de carregamento (*load*) da memória e execute novamente.
* Compare os resultados das somas. O que aconteceu?

**2.** Agora vamos explorar o sistema que estamos utilizando. Crie um script chamado *my_platform.py* e utilize-o para exibir no console as informações solicitadas abaixo. Para isso, utilize o módulo *platform* do Python.
* A plataforma que está sendo utilizada (*linux*, *win32*, *darwin*, etc);
* A versão (*release*);
* A arquitetura (*x32* ou *x64*);

**3.** Agora vamos tanto explorar o hardware que estamos utilizando quanto aprender algo interessante: enviar programaticamente comandos para o shell. Crie um script chamado *resources.py* e utilize-o para exibir no console as informações solicitadas abaixo. Para isso, utilize o método *check_output* do módulo *subprocess* do Python.
* Informações sobre a sua CPU (no Linux você pode usar comando *lscpu*, e no OSX você pode usar o comando *sysctl -n machdep.cpu.brand_string*):
* O modelo;
* A quantidade de cores;
* A velocidade em **Megahertz** - **MHz**;
* A quantidade de cache (L1, L2, L3).
* Informações sobre a memória RAM (no Linux você pode usar comando *free*, e no OSX você pode usar o comando *top -l 1 | head -n 10 | grep PhysMem*):
* A quantidade total de memória RAM disponível em sua máquina em **megabytes** - **MB** (faça a conversão também).
* A quantidade total de memória RAM que está sendo utilizada em **megabytes** - **MB**.

**Dica**:
* O método *decode("UTF-8")* vai ser útil para ler os dados oriundos da *check_output*;
* Os métodos *split* e *strip* vão ser úteis para limpar e separar as informações obtidas com os comandos;
* O método *startswith* vai ser útil para selecionar informações específicas.
* Se estiver muito difícil fazer a filtragem e limpeza dos dados, se contente com a exibição de informações a mais 😉

**4.** Faça um script que, a cada intervalo de segundo, mostre no console a memória utilizada do sistema operacional vs a memória total (ambos em **megabytes** - **MB**). Lembre-se que você pode se basear no script do exercício anterior.

**5.** Faça um script que exibe o seu respectivo *process id* utilizando o módulo os do Python e então fique em execução por um determinado tempo. Agora utilizando os comandos de monitoramento visto no conteúdo, exiba os processos em execução e então identifique o seu processo.
```sh
    ps aux | grep <PROCESS ID>
```