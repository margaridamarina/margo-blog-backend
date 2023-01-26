### Criando arquivo de configuração
```
$ npm init -y
```
### Instalando framework para ajudar no desenvolvimento rapido, minimalista e nao opinativo da api
```
$ npm install express 
```
### Instalando biblioteca para converter dados
```
$ npm install body-parser
```
### Instalando biblioteca que atualiza automaticamente o servidor
```
$ npm install --save-dev nodemon
```
### Instalando banco
```
$ npm install mysql2
```
### Instalando orm e cli
```
$ npm install sequelize sequelize-cli path
```
### Estruturando arquivos iniciais
```
$ npx sequelize-cli init
```
### Rodar programa
```
$ npm run start
```
### Rodando imagem
```
$ docker-compose up
```
### Acessando imagem
```
$ mysql -h 127.0.0.1 -P 3306 -u root
```
### Mostrando bancos
```
show databases;
```
### Criando banco
```
create database blog;
```
### Criando tabela Categorias
#### Obs: a ordem é importante - criar a partir da que não tem ligação com nenhuma tabela
```
$ npx sequelize-cli model:create --name Categorias --attributes title:string
```
### Criando tabela Subcategorias
```
$ npx sequelize-cli model:create --name Subcategorias --attributes title:string
```
### Criando tabela Posts
```
$ npx sequelize-cli model:create --name Posts --attributes title:string,image:string,description:string,text:string
```
### Criando tabela Lojas
```
$ npx sequelize-cli model:create --name Lojas --attributes title:string,image:string,description:string,text:string
```
### Criando tabela Receitas
```
$ npx sequelize-cli model:create --name Receitas --attributes title:string,image:string,description:string,text:string
```
### Fazendo migrações após fazer a associação entre tabelas 
```
$ npx sequelize-cli db:migrate
```
### Criando seeder categoria
```
$ npx sequelize-cli seed:generate --name demo-categoria
```
### Criando seeder subcategoria
```
$ npx sequelize-cli seed:generate --name demo-subcategoria
```
### Criando seeder post
```
$ npx sequelize-cli seed:generate --name demo-post
```
### Criando seeder loja
```
$ npx sequelize-cli seed:generate --name demo-loja
```
### Criando seeder receita
```
$ npx sequelize-cli seed:generate --name demo-receita
```
### Enviando dados para o banco após incluir os dados nos seeders com foreing keys
```
$ npx sequelize-cli db:seed:all
``` 
### Entrando na tabela
```
use blog;
```
### Mostrando tabelas
```
show tables;
```
### Mostrando tabela Posts
```
describe Posts;
```
### Mostrando tudo na tabela Posts
```
select * from Posts;
```
### Criando linha na tabela Posts
```
insert into Posts (title, image, description, text, createdAt, updatedAt) values ("Sustentabilidade é vida", "image.com.br", "Cuidar do mundo é tudo", "Era uma vez uma árvore", NOW(), NOW());
```