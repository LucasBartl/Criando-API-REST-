💸 API REST – Controle de Gastos

API REST desenvolvida para controle de gastos pessoais, utilizando Node.js, TypeScript e Fastify, com foco em boas práticas, validação de dados e testes automatizados.

🛠️ Tecnologias

Fastify – Micro framework web para Node.js

TypeScript – Tipagem estática para JavaScript

TSX – Execução de arquivos TypeScript sem build

ESLint – Padronização e qualidade de código

Zod – Validação de dados

Migrations – Versionamento do banco de dados

Vitest – Testes automatizados

Supertest – Testes de rotas HTTP

TSUP – Build da aplicação

📦 Instalação

Clone o repositório e instale as dependências:

npm install

⚙️ Configuração do TypeScript

Instalação do TypeScript:

npm install -D typescript


Criação do arquivo de configuração:

npx tsc --init


Instalação dos tipos do Node.js:

npm install -D @types/node

▶️ Executando o projeto

Execução em ambiente de desenvolvimento:

npx tsx src/server.ts

🧪 Testes Automatizados
Testes e2e (End-to-End)

Os testes e2e validam todo o fluxo da aplicação, simulando o comportamento real de um usuário e garantindo o funcionamento completo da API.

Pirâmide de Testes

Neste projeto, o foco inicial está nos testes e2e, pois:

Não dependem de arquitetura específica

Não dependem de tecnologias específicas

Validam o sistema como um todo

📁 Estrutura do Projeto:
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

📌 Objetivo do Projeto

Este projeto tem como objetivo praticar:

Criação de APIs REST

Uso de TypeScript no backend

Validação de dados

Testes automatizados

Boas práticas de organização e padronização de código
