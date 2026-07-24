---
lastUpdated: false
---

# Adicionar novos exemplos de código

## Diretrizes para envio de exemplos de código

* Os envios **devem** ser escritos em inglês.
* Documente seu exemplo o mais minuciosamente possível.
* Certifique-se de que seu código funciona e foi devidamente testado.

### Reservamo-nos o direito de:

* Ajustar seu envio após o envio.
* Remover seu envio se necessário.

## Criando um novo exemplo de código

### 1. Faça um Fork deste repositório

### 2. Clone seu Fork e entre no diretório do projeto com `cd`

### 3. Instale o VitePress

Você pode encontrar os pré-requisitos do VitePress na [documentação oficial](https://vitepress.dev/guide/getting-started#prerequisites).

::: code-group

```sh [npm]
npm add -D vitepress@next
```

```sh [pnpm]
pnpm add -D vitepress@next
```

```sh [yarn]
yarn add -D vitepress@next vue
```

```sh [bun]
bun add -D vitepress@next
```

:::

---

### 4. Adicione seu exemplo de código

#### 4.1 Crie o arquivo de exemplo

1. Crie um novo arquivo em `/docs/examples`, nomeado com a linguagem de programação.
2. O nome do arquivo deve terminar em `.md`.
3. Adicione pelo menos **duas maneiras diferentes** de realizar chamadas de API.

#### 4.2 Adicione o exemplo à barra lateral

1. Abra `/docs/.vitepress/config.mts`.
2. Procure a seção **"Exemplos de código"** na barra lateral.
3. Adicione seu novo arquivo à lista.
4. Mantenha a lista em ordem alfabética pela linguagem de programação.

---

### 5. Inicie o servidor de desenvolvimento

Antes de criar um Pull Request, verifique localmente se suas alterações não quebraram nada.

::: code-group

```sh [npm]
npm run dev
```

```sh [pnpm]
pnpm run dev
```

```sh [yarn]
yarn dev
```

```sh [bun]
bun run dev
```

:::

---

### 6. Crie um Pull Request

Envie um Pull Request para o repositório original.
