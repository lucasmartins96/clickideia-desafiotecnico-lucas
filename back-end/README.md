# Clickideia Desafio Técnico Fullstack - Backend

Api de gerenciamento de Todo Cards

# Sumário

<!--ts-->

- [Features](#features)
- [Como executar o projeto](#como-executar-o-projeto)
  - [Pré Requisitos](#pré-requisitos)
  - [Configurando variáveis de ambiente](#configurando-variáveis-de-ambiente)
  - [Rodando o back-end](#rodando-o-back-end-servidor-)
- [Tecnologias](#tecnologias)
- [Autor](#%EF%B8%8Fautor)
<!--te-->

## Features

- [x] endpoint para o login
- [x] endpoint para listar todos os cards
- [x] endpoint para cadastrar card
- [x] endpoint para atualizar um card
- [x] endpoint para deletar um card

## 🚀Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina o [Docker](https://docs.docker.com/get-docker/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Configurando variáveis de ambiente

Na pasta back-end no arquivo `.env.example` contém um modelo das variáveis de ambiente.

As variáveis LOGIN e PASSWORD dizem respeito as informações que o endpoint de login espera como correto.

A variável SECRET está relacionado ao JWT.

As variáveis DB_USER e MONGODB_USER, DB_PASSWORD e MONGODB_PASSWORD, DB_NAME e MONGODB_DATABASE devem possuir os mesmos valores.

A variável DB_PORT pode ser configurada com o valor 27017

### Rodando o Back End (servidor) 🎲

```bash
# Informe os seguintes comandos no terminal, caso o SO seja Windows, informe os comandos no GitBash
# Clone este repositório
git clone git@github.com:lucasmartins96/store-manager.git

# Acesse a pasta do projeto no terminal/cmd
cd back-end

# Suba o ambiente no docker (remova o sudo caso o seu usuário tenha privilégios)
sudo docker compose up -d

# Execute o bash na aplicação back-end do docker
sudo docker exec -it appbackend bash

# Instale as dependências
npm install

# Execute a aplicação
npm run dev

# O servidor inciará na porta:5000
```
