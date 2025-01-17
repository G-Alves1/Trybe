## Exercícios - index.html script.js
*Usando apenas o script*

**1.** Acesse o elemento *elementoOndeVoceEsta* .

**2.** Acesse *pai* a partir de *elementoOndeVoceEsta* e adicione uma color a ele.

**3.** Acesse o *primeiroFilhoDoFilho* e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

**4.** Acesse o *primeiroFilho* a partir de *pai* .

**5.** Agora acesse o *primeiroFilho* a partir de *elementoOndeVoceEsta* .

**6.** Agora acesse o texto *Atenção!* a partir de *elementoOndeVoceEsta* .

**7.** Agora acesse o *terceiroFilho* a partir de *elementoOndeVoceEsta* .

**8.** Agora acesse o *terceiroFilho* a partir de pai .

**9.** Crie um irmão para *elementoOndeVoceEsta* .

**10.** Crie um filho para *elementoOndeVoceEsta* .

**11.** Crie um filho para *primeiroFilhoDoFilho* .

**12.** A partir desse filho criado, acesse *terceiroFilho* .

**13.** Remova todos os elementos filhos de *paiDoPai* exceto *pai* , *elementoOndeVoceEsta* e *primeiroFilhoDoFilho* .

---

## Exercícios 2 - index2.html

**1.** Adicione a tag *h1* com o texto *Exercício 5.2 - JavaScript DOM* como filho da tag *body* ;

**2.** Adicione a tag *main* com a classe *main-content* como filho da tag *body* ;

**3.** Adicione a tag *section* com a classe *center-content* como filho da tag *main* criada no passo 2;

**4.** Adicione a tag *p* como filho do *section* criado no passo 3 e coloque algum texto;

**5.** Adicione a tag *section* com a classe *left-content* como filho da tag *main* criada no passo 2;

**6.** Adicione a tag *section* com a classe *right-content* como filho da tag *main* criada no passo 2;

**7.** Adicione uma imagem com *src* configurado para o valor *https://picsum.photos/200* e classe *small-image* . Esse elemento deve ser filho do *section* criado no passo 5;

**8.** Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, *um* , *dois* , *três* , ... como valores da lista. Essa lista deve ser filha do *section* criado no passo 6;

**9.** Adicione 3 tags *h3* , todas sendo filhas do *main* criado no passo 2.

*Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:*

**10.** Adicione a classe *title* na tag *h1* criada;

**11.** Adicione a classe *description* nas 3 tags *h3* criadas;

**12.** Remova a *section* criado no passo 5 (aquele que possui a classe *left-content*). Utilize a função *.removeChild()* ;

**13.** Centralize a *section* criado no passo 6 (aquele que possui a classe *right-content*). Dica: para centralizar, basta configurar o *margin-right: auto* da *section* ;

**14.** Troque a cor de fundo do elemento pai da *section* criada no passo 3 (aquela que possui a classe *center-content* ) para a cor verde;

**15.** Remova os dois últimos elementos (*nove* e *dez*) da lista criada no passo 8.