## Exercícios - exercises

**1.** Crie uma classe chamada Tv, com os atributos:
* brand: marca da TV;
* size: tamanho em polegadas;
* resolution: resolução da tela;
* connections: conexões disponíveis(HDMI, Ethernet, etc.);
* connectedTo: conexão atual Este atributo não precisa ser inicializado no construtor.

**2.** Dentro da classe Tv, crie o método turnOn, que imprimirá os atributos inicializados no construtor.

**3.** Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos.

**4.** Altere a visibilidade dos atributos definidos na classe Tv para private.

**5.** Crie um método getter e um setter para o atributo _connectedTo, da classe Tv.
* O setter deverá verificar se o valor definido está entre as conexões disponíveis (_connections) e:
  * Em caso positivo, definir este valor para o atributo _connectedTo;
  * Em caso negativo, imprimir no console a mensagem “Sorry, connection unavailable!”

**6.** Defina um valor para o atributo _connectedTo por meio do método setter criado e imprima seu valor.

## Exercícios 2 - exercises2

**1.** Vamos modelar algumas partes de um software de uma escola. Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina. Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.

**2.** Agora vamos adicionar à nossa classe de pessoa estudante os comportamentos. Para isso adicione dois métodos: um que calcula a soma das notas da pessoa estudante e outro que calcula a média das notas da pessoa estudante.

**3.** Vamos mudar um pouco nosso contexto para um sistema de vendas de uma lanchonete. Crie uma classe que represente uma pessoa cliente da lanchonete, uma classe que represente um pedido e uma que represente um item do pedido.
* A pessoa cliente deverá conter o nome;
* O item do pedido deve conter o nome do pedido (ex. “Batatas fritas”; “Açaí”) e o preço;
* O pedido deve conter o cliente, os itens consumidos, a forma de pagamento (ex: “cartão”, “dinheiro”) e o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%), o pedido pode ou não possuir desconto.

**4.** Agora vamos adicionar às nossas classes do exercício anterior os comportamentos. A classe que representa o pedido deverá ter dois métodos: um que calcula o total do pedido e outro que calcula o total aplicando o valor de desconto.

**5.** Escreva uma classe Data cuja instância represente uma data. Esta classe deverá conter três atributos: o dia, o mês e o ano.

**6.** Vamos adicionar à nossa classe de Data do exercício anterior os comportamentos. Essa classe deverá conter os seguintes métodos:
* constructor: deverá verificar se a data passada por parâmetro é uma data válida, caso não esteja deverá criar uma data com valor “01/01/1900”;
* getMonthName: retorna o mês da data por extenso;
* isLeapYear: retorna verdadeiro se o ano é bissexto e falso caso não seja;
* compare: recebe como parâmetro um outro objeto da classe Data, compara com a data corrente e retorna:
  * 0 se as datas forem iguais;
  * 1 se a data corrente for posterior à data do parâmetro;
  * -1 se a data do parâmetro for posterior à data corrente.
* format: recebe como parâmetro um formato de dia mês e ano e retorna a data formatada.
  * Legenda:
  * aaaa = ano com quatro dígitos
  * aa = ano com dois dígitos
  * mm = mês com 2 dígitos
  * M = mês por extenso
  * dd = dia com 2 dígitos
  * Exemplos:
  * “dd/mm/aaaa” = 01/01/1900
  * “aaaa-mm-dd” = 1900-01-01
  * “dd de M de aa” = 01 de janeiro de 90
  * “dd, M de aaaa” = 01, janeiro de 1990