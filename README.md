# 🚀 API REST com Node.js, Fastify, Knex e SQLite

Este projeto é uma **API REST** desenvolvida em **Node.js** utilizando **TypeScript**, **Fastify** e **Knex.js**, com banco de dados **SQLite**.  
O objetivo é estudar e aplicar boas práticas de backend, organização de projeto e uso de migrations.

---

## 🧱 Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Fastify**
- **Knex.js**
- **SQLite**
- **TSX** (execução de TypeScript em desenvolvimento)
- **ESLint**

---

## 📁 Estrutura do Projeto

```txt
API REST
├─ .vscode/
├─ database/
│  ├─ migrations/
│  └─ database.sqlite
│
├─ dist/
├─ node_modules/
│
├─ src/
│  ├─ @types/
│  ├─ anotacoes/
│  ├─ env/
│  ├─ middlewares/
│  ├─ routes/
│  ├─ test/
│  ├─ app.ts
│  ├─ database.ts
│  └─ server.ts
│
├─ .env
├─ .env.example
├─ .env.test
├─ .env.test.example
│
├─ eslintignore
├─ eslintrc.json
├─ gitignore
├─ knexfile.ts
├─ package.json
├─ package-lock.json
├─ transactions
└─ tsconfig.json
🗄️ Banco de Dados
Banco: SQLite

Arquivo: database/database.sqlite

Gerenciamento de migrations: Knex.js

O SQLite foi escolhido por ser leve e ideal para estudos e desenvolvimento local.

⚙️ Configuração do Ambiente
1️⃣ Clonar o repositório
git clone (https://github.com/LucasBartl/Criando-API-REST)
cd api-rest
2️⃣ Instalar as dependências
npm install
3️⃣ Configurar variáveis de ambiente
Crie um arquivo .env baseado no .env.example:

DATABASE_URL=./database/database.sqlite
PORT=3333
▶️ Executando o Projeto
🟢 Modo Desenvolvimento
Executa a aplicação diretamente em TypeScript:

npm run dev
🔵 Build
Compila o projeto para JavaScript:

npm run build
Depois execute:

node dist/server.js
🧬 Migrations
Para rodar as migrations do banco de dados:

npx knex migrate:latest
Para desfazer a última migration:

npx knex migrate:rollback
📌 Objetivo do Projeto
Aprender a estruturar uma API REST

Utilizar Fastify com TypeScript

Trabalhar com banco de dados usando Knex

Aplicar migrations e boas práticas de organização

Servir como base para projetos futuros e portfólio

