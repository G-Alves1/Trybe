## Exercícios

**1.** Navegue até a raiz do projeto com o arquivo .txt;
```sh
Resposta:
    cd ~/Trybe/
```

**2.** Verifique se não existe nada sem "commitar" utilizando *git status*
Caso exista algo, verifique se é necessário e faça o *commit* , ou remova-o.
```sh
Resposta:
    git status
```

**3.** Crie uma nova *branch* com o nome *trybe-skills-changes* e faça checkout nela;
```sh
Resposta:
    git checkout -b trybe-skills-changes
```

**4.** No arquivo *.txt* , ao final da lista de habilidades , adicione mais duas habilidades que serão desenvolvidas na Trybe:
```sh
Resposta:
    cat >> trybe-skills.txt
    - Python
    - SoftSkills
```

* Faça um *git add nome-do-arquivo.extensao* ;
  ```sh
  Resposta:
      git add trybe-skills.txt
  ```

* Agora um *git commit -m "Mensagem que você gostaria"* ;
  ```sh
  Resposta:
      git commit -m "Adiciona nova skill"
  ```

* E por último um *git push -u origin trybe-skills-changes* ;
  ```sh
  Resposta:
      git push -u origin trybe-skills-changes
  ```

**5.** Abra um Pull Request com uma descrição detalhada;

**6.** Retorne para a branch principal, *master* , com o comando: *git checkout master* ;
```sh
Resposta:
    git checkout master
```

**7.** Verifique que você está na branch *master* , com o comando: *git branch* (esta branch deve estar com o formato original, sem as habilidades recém adicionadas);
```sh
Resposta:
    git branch
```

**8.** Crie uma nova *branch trybe-skills-updates* a partir da *master* e faça checkout nela;
```sh
Resposta:
    git checkout -b trybe-skills-updates
```

**9.** No mesmo arquivo *.txt* que você criou no passo 4 , ao final da sua lista de habilidades, adicione mais um aprendizado que você terá nos próximos blocos:
```sh
Resposta:
    cat >> trybe-skills.txt
    - JavaScript
```
Aqui o arquivo não terá as alterações feitas anteriormente na outra branch;

* Faça um *git add nome-do-arquivo.extensao* ;
  ```sh
  Resposta:
      git add trybe-skills.txt
  ```

* Agora um *git commit -m "Mensagem que você gostaria"*;
  ```sh
  Resposta:
      git commit -m "Mais uma skills adicionada"
  ```

* E por último um *git push -u origin trybe-skills-updates*;
  ```sh
  Resposta:
      git push -u origin trybe-skills-updates
  ```

* Abra um Pull Request com uma descrição detalhada;

**10.** Agora, faça o *merge* das branches *trybe-skills-changes* e *trybe-skills-updates* na *branch master* , através do Pull Request.