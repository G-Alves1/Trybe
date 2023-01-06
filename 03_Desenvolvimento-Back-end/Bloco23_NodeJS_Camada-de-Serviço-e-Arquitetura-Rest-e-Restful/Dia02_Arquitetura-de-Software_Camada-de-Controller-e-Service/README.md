## Exercícios - msc-architecture-trybecar-service

**1.** Crie uma função na camada Service que lista as pessoas motoristas em nosso app.
A função deve:
* Se chamar getDrivers;
* Usar a camada Model para receber a lista de motoristas;
* Retornar um objeto no mesmo padrão que as outras funções da nossa camada Service.
```sh
    {
        type: null,
        message: [
            { id: 1, name: 'Liana Cisneiros' },
            { id: 2, name: 'Fábio Frazão' },
            { id: 3, name: 'Anastacia Bicalho' },
            { id: 4, name: 'Samara Granjeiro' },
            { id: 5, name: 'Levi Teixeira' },
        ],
    }
```

**2.** Crie testes unitários para a função getDrivers
* Listando as pessoas motoristas
    * a lista de motoristas é um array
    * retorna a lista de motoristas com sucesso

**3.** Implemente a função getDrivers na camada Service
* Chame as funções da camada Model conforme a necessidade
* Confirme que a função passa nos testes

**4.** Crie stubs para isolar os testes
* Use stubs da função da camada Model para isolar seus testes
* Confirme que mesmo sem um banco de dados rodando os testes funcionam corretamente

**5.** Crie uma função na camada Service que cadastra um carro em nosso app.
A função deve:
* Se chamar createCar;
* Receber o modelo, cor e placa do novo carro;
* Retornar um objeto de erro caso algum dado não seja recebido ou seja inválido;
* Usar a camada Model para cadastrar um novo carro no banco de dados;
* Retornar um objeto no mesmo padrão que as outras funções da nossa camada Service;
Parâmetros a serem recebidos:
* model: string com pelo menos 3 caracteres ex: "Ford Ka"
* color: string com pelo menos 2 caracteres ex.: "Azul"
* licensePlate: string com exatamente 7 caracteres ex.: "ABC1D2E"
```sh
    {
        type: null,
        message: {
            id: 1,
            model: 'Chevrolet Monza',
            color: 'Branco',
            licensePlate: 'ABC1A2B',
        },
    }
```
```sh
    {
        type: 'INVALID_VALUE',
        message: '"model" length must be at least 3 characters long',
    }
```

**6.** Crie testes unitários para a função createCar
* Tentando cadastrar um novo carro com erros semânticos
    * retorna um erro ao receber um modelo inválido
    * retorna um erro ao receber uma cor inválida
    * retorna um erro ao receber uma placa inválida
* Cadastrando um novo carro com sucesso
    * não retorna erros
    * retorna o carro cadastrado

**7.** Implemente a função createCar na camada Service
* Crie um schema do Joi e uma função de validação para validar os dados de um novo carro
* Chame as funções da camada Model conforme a necessidade
* Confirme que a função passa nos testes

**8.** Crie stubs para isolar os testes
* Use stubs da função da camada Model para isolar seus testes
* Confirme que mesmo sem um banco de dados rodando os testes funcionam corretamente

**9.** Crie uma função na camada Service que cadastra uma pessoa motorista em nosso app.
A função deve:
* Se chamar createDriver;
* Receber o nome da pessoa motorista;
* Receber opcionalmente um array de ids de carros já cadastrados em nossa base de dados;
* Retornar um objeto de erro caso o nome não seja recebido ou seja inválido;
* Retornar um objeto de erro caso o array de carros seja inválido ex.: algum carro não exista;
* Usar a camada Model para cadastrar a pessoa motorista no banco de dados;
* Vincular os carros do array de ids (caso seja passada) à pessoa motorista;
* Retornar um objeto no mesmo padrão que as outras funções da nossa camada Service,
* A lista de carros vinculados à pessoa motorista deve ser retornada junto com as outras informações da pessoa motorista.
Parâmetros a serem recebidos
* name: string com pelo menos 3 caracteres ex: "Gena"
* carIds: array com os ids dos carros a serem vinculados com a pessoa motorista (opcional)
```sh
    {
        type: null,
        message: {
            id: 1,
            name: 'Gus',
            cars: [
            {
                color: 'Branco',
                id: 1,
                licensePlate: 'NCA-0956',
                model: 'Renault Sandero',
            },
            {
                color: 'Vermelho',
                id: 2,
                licensePlate: 'DZG-4376',
                model: 'Volkswagen Gol',
            },
            ],
        }
    }
```
```sh
    {
        type: 'CAR_NOT_FOUND',
        message: 'Some car is not found',
    }
```

**10.** Crie testes unitários para a função createDriver
* Tentando cadastrar uma nova pessoa motorista com erros semânticos
    * retorna um erro ao receber um nome inválido
    * retorna um erro ao receber uma lista de carros inválida
* Tentando cadastrar uma nova pessoa motorista com erros de id
    * retorna o erro “CAR_NOT_FOUND”
    * retorna a mensagem “Some car is not found”
* Cadastrando uma nova pessoa motorista com sucesso sem carros
    * retorna a pessoa motorista cadastrada
    * não retorna erro
* Cadastrando uma nova pessoa motorista com sucesso com carros
    * retorna os carros vinculados à pessoa motorista
    * não retorna erro

**11.** Implemente a função createDriver na camada Service
* Confirme que a função passa nos testes

**12.** Crie stubs para isolar os testes
* Use stubs da função da camada Model para isolar seus testes
* Confirme que mesmo sem um banco de dados rodando os testes funcionam corretamente

---

## Exercícios 2 - msc-architecture-trybecar-controller

* Crie os arquivos:
    * tests/unit/controllers/mocks/driver-exercises.controller.mock.js;
    * tests/unit/controllers/driver-exercises.controller.test.js;
    * src/controllers/index.js;
    * src/controllers/driver.controller.js;
    * src/routers/driver.router.js;
    * src/routers/index.js;

**1.** Desenvolva os testes da função driverController.getDrivers(), que é responsável por buscar todos os motoristas cadastrados. A função driverController.getDrivers() deve utilizar a camada de controller.

**2.** Desenvolva a função getDrivers de maneira que ela passe em nossos testes.

**3.** Crie a rota GET /drivers

* Crie o arquivo:
    * src/utils/errorMap.js
```sh
    const errorMap = {
        TRAVEL_NOT_FOUND: 404,
        DRIVER_NOT_FOUND: 404,
        CAR_NOT_FOUND: 404,
        INVALID_VALUE: 422,
        TRAVEL_CONFLICT: 409,
    };

    const mapError = (type) => errorMap[type] || 500;

    module.exports = {
        errorMap,
        mapError,
    };
```

**4.** Desenvolva os testes da função driverController.createDriver(), que é responsável por cadastrar um novo motorista.

**5.** Desenvolva a função createDriver de maneira que ela passe em nossos testes.

**6.** Crie a rota POST /drivers

* (Opcional) Crie os arquivos:
    * tests/unit/middlewares/validateDriverNameField.middleware.js;
    * src/middlewares/validateDriverNameField.js;

**7.** (Opcional) Crie os testes para um middleware que valida se a chave name é obrigatória.

**8.** (Opcional) Crie o middleware e utilize na rota POST /drivers.

* Crie os arquivos:
    * tests/unit/controllers/mocks/car-exercises.controller.mock.js;
    * tests/unit/controllers/car-exercises.controller.test.js;
    * src/controllers/car.controllers.js;
    * src/routers/car.router.js;

**9.** Desenvolva os testes da função carController.createCar(), que é responsável por cadastrar um novo carro.

**10.** Desenvolva a função createCar de maneira que ela passe em nossos testes.

**11.** Crie a rota POST /cars

**12.** (Opcional) Crie os testes para um middleware que valida se as chaves model, color e licensePlate são obrigatórias.

**13.** (Opcional) Crie o middleware e utilize na rota POST /cars.

* (Opcional) Crie os arquivos:
    * tests/unit/middlewares/validateCarFields.middleware.js;
    * src/middlewares/validateCarFields.middleware.js;

Dica: Toda a aplicação já está praticamente “pronta”. O que fará com que os testes falhem vai ser a ausência da rota POST /cars.