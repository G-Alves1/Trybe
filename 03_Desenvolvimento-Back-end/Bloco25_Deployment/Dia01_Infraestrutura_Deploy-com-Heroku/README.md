## Exercícios - exercises

**1.** Crie uma API simples no node utilizando express. No arquivo index.js, crie uma rota do tipo get com o endereço raiz / que entregue como resposta o texto "Está vivo!!!". Faça o deploy no Heroku utilizando o CLI.
```sh
Resposta:
  heroku create

  git add .

  git commit -m 'exercise 1'

  git push heroku master
```

**2.** Agora, modifique a API para responder a uma nova mensagem:
* Crie uma nova variável de ambiente com um texto qualquer;
* Modifique o código da sua API para que ela responda na rota get / com o mesmo texto contido na variável criada no passo anterior.
```sh
Resposta:
  heroku config:set MESSAGE='Variáveis funcionam!!!' --app exercise-h456166746

  git add .

  git commit -m 'exercise 2'

  git push heroku master
```

**3.** Simule o deploy em multi-ambientes (produção e homologação). Para isso:
* Renomeie o remote do deploy dos exercícios anteriores para homolog;
* Crie um novo remote a partir do mesmo projeto. Dessa vez, o remote deverá se chamar prod;
* Em seguida, configure as variáveis de ambiente para terem valores diferentes por ambiente.
```sh
Resposta:
  git remote rename heroku homolog

  heroku create --remote prod

  heroku config:set MESSAGE="HOMOLOG: Variáveis de ambiente funcionam" --app exercise-h456166746-HOMOLOG

  heroku config:set MESSAGE="PROD: Variáveis de ambiente funcionam" --app exercise-h456166746-PROD

  git push prod master
```

**my-app**
**4.** Faça deploy de uma aplicação React.
* Crie uma aplicação React utilizando create-react-app;
* Crie um novo app utilizando o buildpack mars/create-react-app;
* Altere a stack atual do heroku para a versão 20
* Então, faça o deploy do app no Heroku.
```sh
Resposta:
  git add .
  
  git commit -m 'exercise 4'
  
  heroku create -b https://github.com/mars/create-react-app-buildpack.git

  heroku stack:set heroku-20

  git push heroku master
```