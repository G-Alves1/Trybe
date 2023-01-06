## Exercícios

**1.** : Descubra como fazer uma pesquisa em qualquer tabela sem utilizar uma linha de código usando o *MySql Workbench* .

**2.** : Descubra como é possível criar uma tabela sem usar código SQL usando o *MySql Workbench* .

**3.** : Feito isso, crie uma tabela com as seguintes restrições:
Nome da tabela: *Filme*
Colunas:
* **FilmeId** - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;
* **Descricao** - não permite nulos, tipo texto (varchar(100));
* **AnoLancamento** - não permite nulos, tipo int;
* **Nota** - permite nulos, tipo int;

**4.** : Analise a tabela *city* e encontre a tabela à qual a coluna *country_id* faz referência.
```sh
Resposta:
    tabela country
```

**5.** : Qual tipo de relacionamento a tabela *city* faz com a tabela *country* ?
```sh
Resposta:
    N:1
```

**6.** : Qual tipo de relacionamento a tabela *country* faz com a tabela *city* ?
```sh
Resposta:
    1:N
```

**7.** : Abra tabela por tabela do banco *sakila* e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1.