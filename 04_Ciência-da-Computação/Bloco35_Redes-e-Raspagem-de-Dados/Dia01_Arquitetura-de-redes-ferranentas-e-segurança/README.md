## Exercícios

**1**. O primeiro server que vamos utilizar é o nosso velho amigo HTTP, na camada de aplicação. Você pode tanto criar um, quanto utilizar um dos projetos ou exercícios dos módulos anteriores. A ideia é utilizarmos os conhecimentos do conteúdo e a ferramenta cURL para realizarmos uma chamada HTTP para ele. O projeto deve ter rotas GET e POST para que seja possível enviar requisições para os endpoints e receber respostas, assim como já nos acostumamos a receber via browser ou utilizando programas como o Postman.
Caso tenha dificuldades maiores, você pode utilizar o Postman para converter uma requisição em cURL, é só fazer a requisição nele como você já sabe e depois clicar no botão code (que fica embaixo do save) e escolher cURL.
* Faça uma chamada GET, utilizando o cURL.
```sh
Resposta:
    curl -X GET localhost:3000
```

* Faça uma chamada POST, utilizando o cURL, passando um JSON no body da requisição.
```sh
Resposta:
    curl -X POST \
        -H 'Content-Type: application/json' \
        -d '{ "json": "body" }' \
        localhost:3000
```

* Faça uma chamada qualquer, utilizando o cURL, passando um header na requisição.
```sh
Resposta:
    curl -X POST \
        -H 'Content-Type: application/json' \
        -H 'Authorization: token' \
        -d '{ "json": "body" }' \
        localhost:3000
```

**2.** Ainda utilizando o cURL, vamos explorar mais alguns conceitos do HTTP. Relembre que falamos que o HTTP organiza e dá significado aos dados encapsulados nessa camada. Por exemplo: ao vermos um 200 tanto nós quanto um client HTTP sabemos que aquela request foi realizada com sucesso. Vamos explorar isso com o cURL.
* Faça uma chamada GET, utilizando o CURL, para "google.com".
```sh
Resposta:
    curl -X GET google.com
```

```sh
    Perceba que foi retornado um 301. Isso quer dizer que existem diversos redirecionamentos que nos encaminham para o lugar certo. No caso, o caminho certo para a página do google é www.google.com. Ao acessarmos pelo navegador, não percebemos isso porque ele faz o redirecionamento para a página certa ao encontrar o 301, porém se você inspecionar a network vai identificar esse redirecionamento.
```
* Faça uma nova chamada a "google.com", porém agora utilizando o parâmetro *-L* ou *--location*, que serve para "seguir redirecionamentos".
```sh
Resposta:
    curl -L -X GET google.com
```

**3.** Agora utilizando o wget, pegue o conteúdo da página do site da Trybe, depois abra o arquivo HTML baixado em seu navegador. Faça o mesmo processo com outras páginas web.
```sh
    wget betrybe.com
```

**exercise4.py**
**4.** Agora vamos para a camada de transporte. Crie um servidor TCP usando o módulo socketserver que já vem embutido com o Python. Nosso servidor TCP deverá:
* Responder com um "Olá, client", logo quando estabelecer uma conexão.
* Imprimir no console todo dado recebido.
* Responder com os dados recebidos (como um eco).
* Utilizar a porta 8085.

**Dicas:**
* A documentação do módulo traz exemplos de como instanciar seu * servidor TCP;
* Na mesma documentação temos exemplos de classes para responder as requisições;
* Os dados na requisição vem em bytes, não strings! bytes podem ser decodificados em string com a codificação correta;
* Do mesmo jeito, para responder você pode precisar codificar strings em bytes;
* telnet sempre envia ASCII, já o netcat envia no encoding do sistema (em Linux, geralmente utf-8, mas confirme com o comando *locale*).

**5.** Utilizando o comando telnet ou o Netcat (nc):
* Conecte no server do exercício anterior e envie informações. O server deverá imprimir as mensagens enviadas no console.
* Pare o servidor e verifique o que aconteceu com a conexão que estava aberta com o comando telnet ou nc.
```sh
Resposta
    telnet localhost 8085
```

**6.** Reinicie o servidor TCP e agora faça uma requisição utilizando o cURL (HTTP).
```sh
    Perceba o que é exibido no console do server, já que não estamos utilizando o HTTP nele. Perceba também que o comando cURL não recebe uma resposta HTTP com sentido (um status code 200, por exemplo), de modo que ele não sabe que aquela requisição chegou ao fim.
```
```
Resposta:
    curl localhost:8085
```

**exercise7.py**
**7.** Agora vamos explorar o outro protocolo de transporte que aprendemos. Crie um servidor UDP usando o mesmo módulo socketserver. Nosso servidor UDP deverá:
* Imprimir no console toda mensagem recebida (não esqueça de converter também para string).
* Responder com os dados recebidos (como um eco).
* Utilizar a porta 8084.

**8.** Envie pacotes para o servidor UDP utilizando o Netcat (nc). Em seguida pare o servidor e perceba que como não há conexão nada é sentido pelo client.
```sh
Resposta;
    nc -u localhost 8084
```

**9.** Faça uma chamada ao server utilizando o cURL. Lembre que, além do HTTP, o comando utiliza o protocolo TCP e não o UDP. Repare o que acontece.
```sh
Resposta:
    curl localhost:8084
```

**exercise10**
**10.** Agora, vamos utilizar um tipo de proxy que pode ser bastante útil no nosso cotidiano como pessoas desenvolvedoras: o NGROK. Com ele conseguimos criar um túnel para o nosso *localhost*.
* Crie um servidor HTTP em sua máquina executando na porta *80* (pode ser um front-end ou um back-end criado em aulas anteriores).
* Baixe o ngrok e extraia o arquivo baixado em uma pasta de sua preferência, conforme instruções do site oficial.
* Conforme instruções do site, crie um túnel para a porta *80* de sua máquina.
* Acesse o o link disponibilizado em seu navegador. Utilize ele para acessar de outros dispositivos, como seu smartphone ou outro computador.

**11.** Identifique o IP interno e externo da sua máquina.

**12.** Identifique as interfaces de redes utilizadas por sua máquina e identifique qual está em uso agora.

**some-dir**
**13.** No conteúdo vimos o que são os protocolos SSL e TLS. Vamos subir nosso próprio servidor HTTPS, utilizando nosso próprio certificado!
* Vamos utilizar a ferramenta OpenSSL para gerar nossos certificados. Ela já vem instalada na maioria das distros Linux. No Docker, no entanto, você vai precisar executar:
```sh
    apt-get update && apt-get install python3 openssl
```

* Para gerar nosso próprio certificado auto-assinado, utilize os comandos abaixo. Lembrando que, como nós estamos gerando o certificado, ele não será reconhecido por nenhuma entidade certificadora, de modo que ele só nos servirá para utilizar o protocolo TLS com o HTTPS, não sendo capaz de ser aceito pelo navegador por não ter sido aprovado por nenhuma entidade reconhecida por ele.
```sh
    openssl genrsa -out key.pem
    openssl req -new -key key.pem -out csr.pem
    openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
    rm csr.pem
```

* Acabamos de gerar dois arquivos, o *cert.pem* (o certificado) e o *key.pem* (chave privada). Copie os dois arquivos para um diretório onde vamos criar nosso servidor HTTPS.
* Agora vamos escrever um servidor https usando os módulos nativos do python ssl e http.server. Embora esses módulos tenham muitos muitos recursos (muitos mesmo), nós vamos usar apenas alguns. Tente seguir as instruções a seguir:
    * Crie um contexto SSL com a classe *SSLContext*, usando o protocolo de versão mais alta disponível para servidores. (dica: as opções estão listadas na documentação).
    * Carregue no contexto SSL a cadeia de certificação, passando tanto a o arquivo de certificação quanto a sua chave. (dica: existe um método para isso).
    * Crie uma instância de *HTTPServer*. O endereço deve ser uma tupla *('localhost', 8000)* e para responder as requisições, use *SimpleHTTPRequestHandler*. (dica: apesar do exemplo na documentação, não use *with*).
    * Crie um socket server-side usando o método wrap_socket do seu contexto SSL. Passe como parâmetro o socket do servidor *(server.socket)*.
    * Substitua o socket do servidor pelo socket que você acabou de criar.
    * Execute o servidor com o método *serve_forever*.
* Acesse o servidor no endereço *https://localhost:8000/* utilizando o Firefox (precisa ser o Firefox). Perceba que ele vai informar que o certificado não é reconhecido por ele, pois não foi assinado por nenhuma autoridade da confiança dele.
    * Chrome e Safari se recusam a acessar um site cujo certificado não está assinado por NENHUMA autoridade certificadora. Existem instruções para agir como uma autoridade certificadora, mas não precisa seguir por esse caminho.
* Acesse o servidor novamente, porém desta vez utilizando cURL (de fora do Docker, se você estiver usando).
```
Resposta:
    curl https://localhost:8000
```

* Por último, vamos utilizar um recurso do cURL, somente para testes (somente utilize, caso realmente você esteja esperando por aquilo), que é o parâmetro *-k* ou *--insecure*. Com ele, falamos para o nosso cURL prosseguir a request mesmo sabendo que a conexão não é "confiável".
```sh
Resposta:
    curl -k https://localhost:8000
```

**14.** Crie uma conta no Ngrok e explore o dashboard disponibilizado por ele para monitorar seus túneis. Aproveite e explore outros recursos dessa poderosa ferramenta.
