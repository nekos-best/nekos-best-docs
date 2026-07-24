---
lastUpdated: false
---

# Adicionar bibliotecas não oficiais

## Diretrizes para envio de bibliotecas não oficiais

* Os envios **devem** ser escritos em inglês.
* O proprietário da biblioteca deve entrar em nosso [servidor do Discord](https://nekos.best/discord?ref=docs).
* As bibliotecas devem manter bons padrões de qualidade de código.
* As bibliotecas **não devem** conter malware ou qualquer outro comportamento inseguro.
* A biblioteca deve ser publicamente acessível e mantida ativamente.
* Forneça instruções claras de instalação e uso em seu repositório.

### Reservamo-nos o direito de:

* Ajustar seu envio após a revisão.
* Remover seu envio se ele se tornar desatualizado, inseguro ou não mantido.

## Adicionando uma nova biblioteca não oficial

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

### 4. Adicione sua biblioteca não oficial à barra lateral

1. Abra `/docs/.vitepress/config.mts`.
2. Procure a seção **"Bibliotecas não oficiais"** na barra lateral.
3. Adicione um link para o repositório da sua biblioteca.
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
