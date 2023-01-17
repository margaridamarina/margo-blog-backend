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
### Criando tabela Posts
```
$ npx sequelize-cli model:create --name Posts --attributes title:string,image:string,description:string,text:string
```
### Criando migração
```
$ npx sequelize-cli db:migrate
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
### Criando linha na tabela Posts
```
insert into Posts (title, image, description, text, createdAt, updatedAt) values ("Sustentabilidade é vida", "image.com.br", "Cuidar do mundo é tudo", "Era uma vez uma árvore", NOW(), NOW());
```
### Mostrando tudo na tabela Posts
```
select * from Posts;
```
### Criando seeder post
```
$ npx sequelize-cli seed:generate --name demo-post
```
### Enviando dados para o banco
```
$ npx sequelize-cli db:seed:all
```
<!-- ### Criando tabela Níveis
```
$ npx sequelize-cli model:create --name Niveis --attributes descr_nivel:string
```
### Criando tabela Turmas
```
$ npx sequelize-cli model:create --name Turmas --attributes data_inicio:dateonly
```
### Criando tabela Matrículas
```
$ npx sequelize-cli model:create --name Matriculas --attributes status:string
```
### Fazendo migrações após associação entre tabelas
```
$ npx sequelize-cli db:migrate
```
### Criando seeder nivel
```
$ npx sequelize-cli seed:generate --name demo-nivel
```
### Criando seeder turma
```
$ npx sequelize-cli seed:generate --name demo-turma
```
### Criando seeder matricula
```
$ npx sequelize-cli seed:generate --name demo-matricula
```
### Enviando dados para o banco
```
$ npx sequelize-cli db:seed:all
``` -->