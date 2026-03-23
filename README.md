# jwt

## Configuracao de ambiente

Este projeto usa variaveis de ambiente para configuracoes sensiveis, como o segredo de autenticacao.

### Arquivos

- `.env`: arquivo local com os valores reais usados na sua maquina.
- `.env-example`: modelo com as chaves esperadas para facilitar configuracao.

Exemplo atual de variavel usada:

```env
AUTH_SECRET=HASH-MD5
```

## Como rodar em desenvolvimento

1. Copie o arquivo de exemplo para o arquivo local:
   - `cp .env-example .env`
2. Ajuste os valores no `.env` conforme necessario.
3. Rode o projeto:
   - `npm run dev`

O script `dev` ja esta configurado para carregar automaticamente o arquivo `.env`:

```json
"dev": "tsx watch --env-file=.env src/server.ts"
```

## Progresso do estudo de JWT

Depois da configuracao inicial, foram feitos os seguintes passos:

- Adicao do pacote `jsonwebtoken` e tipagens relacionadas.
- Geracao de token JWT na rota de criacao de sessao (`create`).
- Leitura de variaveis de ambiente com `.env` e `.env-example`.
- Ajuste do script de desenvolvimento para carregar variaveis do `.env`.
- Extracao do token da requisicao (header `Authorization`).
- Estrutura preparada para middleware de autenticacao e autorizacao.

### Commits sugeridos para esse progresso

- `feat: add jsonwebtoken package and return token from create route`
- `feat: extract token from request`
