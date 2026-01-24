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
