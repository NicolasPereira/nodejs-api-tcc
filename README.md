# NodeJS API
API feita em NodeJS para cadastrar e gerenciar lista de compras no fluxo de um trabalho de conclusão de curso!

Arquitetura Macro do Projeto: 
<img src='./docs/macro.jpg'>


O Projeto de Conclusão de Curso tem como ideia facilitar a criação de lista de compras através do reconhecimento de imagem, dessa forma o usuário scanneia sua compra e armazenamos todos os itens de sua compra, na sua próxima compra o usuário deve apenas scannear os produtos que restaram, deste modo a aplicação deve gerar a lista de compras baseada nos itens da última compra e nos itens que o usuário já possui. 


Está API tem a responsabilidade de se comunicar com a aplicação mobile, realizar a validação de regra de negócio e persistir os dados no banco de dados. 



## Tecnologias

1 - NodeJS
2 - Express
3 - Prisma (ORM)
4 - PostgreeSQL 
5 - Docker

## Como Rodar o projeto

1 - Clone este repositório
```shell
git clone git@github.com:NicolasPereira/nodejs-api-tcc.git
```

2 - Build a imagem
```shell
docker-compose build image -d
```

3 - O serviço estara rodando na porta `3000`

4 - Para parar a aplicação

```shell
docker-compose down
```

5 - Para iniciar a aplicação após a imagem já estar buildada
```shell 
docker-compose up
```