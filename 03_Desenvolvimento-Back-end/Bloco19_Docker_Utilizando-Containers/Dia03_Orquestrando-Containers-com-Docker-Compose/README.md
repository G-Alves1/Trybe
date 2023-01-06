## Exercícios 1 - missao_trybe.html

**1.** Crie um arquivo HTML chamado *missao_trybe.html* que tenha a seguinte estrutura:
* Tag <title> com o seguinte texto "Trybe";
* Tag <H1> com o seguinte texto "Missão da Trybe";
* Tag <p> com o seguinte texto "Gerar oportunidade para pessoas";
* Salve o arquivo em qualquer lugar da sua máquina com a extensão *html*

**2.** Crie um container para manter um servidor *httpd:2.4* Apache e vincule sua porta interna com a porta 4545 da sua máquina local.
```sh
Resposta:
    docker run -d --name exercise-1 -p 4545:80 -v "/home/gabrielalves/Development/Trybe/03_Desenvolvimento-Back-end/Bloco19_Docker_Utilizando-Containers/Dia03_Orquestrando-Containers-com-Docker-Compose:/usr/local/apache2/htdocs" httpd:2.4
```

**3.** Após criar o container acesse a página HTML que está rodando no servidor em seu browser.
```sh
Resposta:
    http://localhost:4545/missao_trybe.html
```

**4.** Acesse o arquivo *missao_trybe.html* e acrescente a tag <p> com o seguinte texto "Nosso negócio é GENTE! #VQV";

**5.** Obtenha o id do container *httpd:2.4* ;
```sh
Resposta:
    docker ps
```

**6.** Obtenha o *Mounts* através da propriedade *Source* que deve mostrar o volume desse container no Docker Host ;
```sh
Resposta:
    docker inspect bef27
```

**7.** Agora pare o container *httpd:2.4* ;
```sh
Resposta:
    docker stop
```

**8.** Exclua o seu container;
```sh
Resposta:
    docker rm bef27
```

**9.** Verifique se a pasta onde você salvo o arquivo html permanece no mesmo lugar;
```sh
Resposta:
    ls -a
```

**10.** Obtenha o *IMAGE ID *do servidor;
```sh
Resposta:
    docker images
```

**11.** Depois de obter o *IMAGE ID* , exclua a imagem.
```sh
Resposta:
    docker rmi -f a8
```

---

## Exercícios 2 - exercise2

Crie o arquivo Compose para subir um [ghost blog](https://ghost.org/). Para esse exercício, utilizaremos apenas sua página de exemplo:

**1.** Utilize a versão "3" no arquivo;

**2.** Crie um *service* para subir a plataforma, utilize a imagem *ghost:1-alpine* ;

**3.** Publique a porta *2368* , fazendo bind também para a *2368* ;

**4.** Suba a aplicação utilizando o *docker-compose* e então acesse a porta publicada para validar se deu tudo certo.

Por padrão o *ghost* utiliza um *sqlite* interno para salvar as informações, porém, vamos alterar esse comportamento.

**5.** Crie um novo serviço para o nosso banco de dados, podemos utilizar um mysql, utilize a imagem *mysql:5.7* ;

**6.** Precisamos definir uma senha *root* para o nosso bd , para isso utilize a variável *MYSQL_ROOT_PASSWORD* , lembre-se que é possível utilizar a sintaxe *${}* para passar uma env do host , para a *env* do container ;

**7.** Agora precisamos configurar nosso service com o ghost para utilizar o MySQL, para isso defina a variável *database__client* para *mysql* ;

**8.** Defina o nome *ghost* para o nome do database utilizando a variável *database__connection__database* ;

**9.** E então, indique a conexão para o nosso MySQL na env *database__connection__host* ;

**10.** Para definir a pessoa usuária ( root ) e senha (a mesma que definimos no nosso MySQL), utilize respectivamente as envs *database__connection__user* e *database__connection__password* .

**11.** Utilize a opção *depends_on* para criar relações de dependências entre os serviços.

**12.** Suba o ambiente com o novo arquivo usando o docker-compose e então acesse a porta.
```sh
Resposta:
    docker-compose up -d
```

**13.** Configure o nosso serviço mysql para utilizar um volume, conforme vimos no conteúdo, utilize o caminho target */var/lib/mysql* .

**14.** Ao invés de utilizar a rede padrão criada pelo Compose , defina uma rede chamada *my-network* para a comunicação dos dois serviços.

**15.** Suba o ambiente com o novo arquivo usando o *docker-compose* e então acesse-o.
```sh
Resposta:
    docker-compose up -d
```

---

## Exercícios 3 - exercise3

**1.** Inicie uma novo projeto *ReactJS* utilizando o create-react-app ;

**2.** Crie o *Dockerfile*;

**3.** Crie um novo arquivo Compose utilizando a versão *3* ;

**4.** Defina um serviço no arquivo para nosso app , para isso utilize a opção *build* para apontar para o *Dockerfile* ;

**5.** Publique a porta exposta no *Dockerfile* fazendo bind para a porta *8080* do localhost ;

**6.** Para simularmos o processo de desenvolvimento, faça a alteração em alguma parte do código do app react , e então execute o comando para subir o serviço novamente, "rebuildando" a imagem para aplicar as alterações.
```sh
Resposta:
    docker-compose up --build -d
```

---

## Exercícios 4 - exercise4

Crie um arquivo Compose para subir o Wordpress com MySQL :

**1.** Utilize a imagem *wordpress:latest* e *mysql:5.7* ;

**2.** Faça bind da porta *80* do container do wordpress para *8080* do host ;

**3.** Defina as seguintes variáveis para o wordpress :
* WORDPRESS_DB_HOST: db:3306
* WORDPRESS_DB_USER: wordpress
* WORDPRESS_DB_PASSWORD: wordpress
* WORDPRESS_DB_NAME: wordpress

**4.** Defina as seguintes variáveis para o mysql :
* MYSQL_ROOT_PASSWORD: somewordpress
* MYSQL_DATABASE: wordpress
* MYSQL_USER: wordpress
* MYSQL_PASSWORD: wordpress


**5.** Defina o volume *db_data* para o mysql;

**6.** Utilize o parâmetro *depends_on* para criar dependência entre os serviços;

**7.** Adicione a política de *restart* com o valor *always* aos serviços;

**8.** Suba os serviços utilizando *docker-compose* e abra no terminal para validar o funcionamento.