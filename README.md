# test-sps-react

Frontend React para o teste SPS-Group (consome o backend `test-sps-server`).

Este README descreve como instalar, rodar e configurar o projeto localmente, além de um pequeno guia de uso e notas de desenvolvimento.

## Requisitos

- Node.js >= 16
- npm (ou yarn)

## Instalação

1. Instale dependências:

```bash
cd test-sps-react
npm install
```

2. Crie um arquivo `.env` na raiz do projeto com a URL do backend (exemplo):

```
REACT_APP_SERVER_URL=http://localhost:4000
```

## Scripts úteis

- `npm start` ou `npm run dev` — inicia o servidor de desenvolvimento (React Scripts).
- `npm run build` — gera build de produção na pasta `build`.
- `npm test` — executa testes.

Exemplo para rodar em dev:

```bash
npm start
```

## Estrutura do projeto (resumo)

- `src/`
	- `pages/` — páginas principais (Home, Login)
	- `components/` — componentes reutilizáveis (Button, Modal, Table, Alert)
	- `data/` — camada de serviços/queries/axios
	- `shared/` — utilitários e configuração compartilhada

## API (endpoints consumidos)

O frontend consome as rotas do backend `test-sps-server`:

- POST /auth/login — autenticação (body: `{ email, password }`)
- GET /auth/user — obter usuário autenticado (header Authorization)
- GET /users — lista de usuários
- GET /users/:id — obter usuário
- POST /users — criar usuário
- PUT /users/:id — atualizar usuário
- DELETE /users/:id — deletar usuário

## Testes rápidos

1. Rode o backend (`test-sps-server`) em `http://localhost:4000`.
2. Rode o frontend (`npm start`).
3. Acesse `http://localhost:3000` (ou porta fornecida pelo create-react-app).
4. Faça login com o usuário admin do backend:

```
email: admin@sps.com.br
password: admin123
```
