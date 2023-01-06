## Exercícios

**1.** Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu: crie um diretório chamado *unix_tests* e navegue até ele.
```sh
Resposta:
	mkdir unix_tests
	cd unix_tests
```

**2.** Crie um arquivo de texto com o nome *trybe.txt*.
```sh
Resposta:
	touch trybe.txt
```

**3.** Crie uma cópia do arquivo *trybe.txt* com nome *trybe_backup.txt*.
```sh
Resposta:
	cp trybe.txt trybe_backup.txt
```

**4.** Renomeie o arquivo *trybe.txt*.
```sh
Resposta:
	mv trybe.txt newTrybe.txt
```

**5.** Dentro de *unix_tests* , crie um novo diretório chamado *backup*.
```sh
Resposta:
	pwd
	mkdir backup
```

**6.** Mova o arquivo *trybe_backup.txt* para o diretório *backup*.
```sh
Resposta:
	mv trybe_backup.txt backup
```

**7.** Dentro de *unix_tests*, crie um novo diretório chamado *backup2*.
```sh
Resposta:
	mkdir backup2
```

**8.** Mova o arquivo *trybe_backup.txt* da pasta *backup* para a pasta *backup2*.
```sh
Resposta:
	mv backup/trybe_backup.txt backup2
```

**9.** Apague a pasta *backup*.
```sh
Resposta:
	ls backup
	rmdir backup
```

**10.** Renomeie a pasta *backup2* para *backup*.
```sh
Resposta:
	mv backup2 backup
```

**11.** Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.
```sh
Resposta:
	pwd
	ls -a
```

**12.** Apague o diretório *backup*.
```sh
Resposta:
	ls backup
	rm -rf backup
```

**13.** Limpe o terminal.
```sh
Resposta:
	clear
```

Para os exercícios, **14** e **15**, crie, de forma manual na parte gráfica do seu sistema operacional, um arquivo de texto com o conteúdo abaixo, chamado *skills.txt*:
```sh
	Internet
	Unix
	Bash
	HTML
	CSS
	JavaScript
	React
	SQL
```

**14.** Mostre na tela as 5 primeiras skills do arquivo *skills.txt*.
```sh
Resposta:
	head -5 skills.txt
```

**15.** Mostre na tela as 4 últimas skills do arquivo *skills.txt*.
```sh
Resposta:
	tail -4 skills.txt
```

**16.** Apague todos os arquivos que terminem em *.txt*.
```sh
Resposta:
	rm *.txt
```

---

## Exercícios 2

**1.** Na pasta *unix_tests*, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:
```sh
	curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
```

**2.** Mostre todo o conteúdo do arquivo *countries.txt* na tela.
```sh
Resposta:
	cat countries.txt
```

**3.** Mostre o conteúdo de *countries.txt*, página por página, até encontra a *Zambia*.
```sh
Resposta:
	less countries.txt
```

**4.** Mostre novamente o conteúdo de *countries.txt* página por página, mas agora utilize um comando para buscar por *Zambia*.
```sh
Resposta:
	less countries.txt
	/Zambia
```

**5.** Busque por *Brazil* no *countries.txt*.
```sh
Resposta:
	grep Brazil countries.txt
```

**6.** Busque novamente por *brazil*, mas agora utilizando o lower case.
```sh
Resposta:
	grep -i brazil countries.txt
```

Para os próximos exercícios, crie um novo arquivo chamado *phrases.txt* e adicione algumas frases a sua escolha. Não precisa criar o arquivo pelo terminal.
```sh
	cat > phrases.txt
	A arte de programar consiste em organizar e dominar a complexidade
```

**7.** Busque pelas frases que não contenham a palavra *fox*.
```sh
Resposta:
	grep -iv 'fox' phrases.txt
```

**8.** Conte o número de palavras do arquivo *phrases.txt*.
```sh
Resposta:
	wc -w phrases.txt
```

**9.** Conte o número de linhas do arquivo *phrases.txt*.
```sh
Resposta:
	wc -l phrases.txt
```

**10.** Crie os arquivos *empty.tbt* e *empty.pdf*.
```sh
Resposta:
	touch empty.tbt empty.pdf
```

**11.** Liste todos os arquivos do diretório *unix_tests*.
```sh
Resposta:
	ls -a
```

**12.** Liste todos os arquivos que terminem com *txt*.
```sh
Resposta:
	ls *.txt
```

**13.** Liste todos os arquivos que terminem com *tbt* ou *txt*.
```sh
Resposta:
	ls *.tbt *.txt
```

**14.** Acesse o manual do comando *ls*.
```sh
Resposta:
	man ls
```