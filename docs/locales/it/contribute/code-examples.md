---
lastUpdated: false
---

# Aggiunta di Nuovi Esempi di Codice

## Linee Guida per il Contributo agli Esempi di Codice

* Le sottomissioni **devono** essere scritte in inglese.
* Documenta il tuo esempio il più accuratamente possibile.
* Assicurati che il tuo codice funzioni e sia stato adeguatamente testato.

### Ci riserviamo il diritto di:

* Modificare la tua sottomissione dopo l'invio.
* Rimuovere la tua sottomissione se necessario.

## Creazione di un Nuovo Esempio di Codice

### 1. Fai il fork di questo repository

### 2. Clona il tuo fork ed entra nella directory del progetto con `cd`

### 3. Installa VitePress

Puoi trovare i prerequisiti di VitePress nella [documentazione ufficiale](https://vitepress.dev/guide/getting-started#prerequisites).

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

### 4. Aggiungi il Tuo Esempio di Codice

#### 4.1 Crea il file di esempio

1. Crea un nuovo file in `/docs/examples` chiamato con il nome del linguaggio di programmazione.
2. Il nome del file deve terminare con `.md`.
3. Includi almeno **due modi diversi** per effettuare chiamate API.

#### 4.2 Aggiungi l'esempio alla barra laterale

1. Apri `/docs/.vitepress/config.mts`.
2. Individua la sezione **"Esempi di Codice"** nella barra laterale.
3. Aggiungi il tuo nuovo file all'elenco.
4. Mantieni l'elenco in ordine alfabetico per linguaggio di programmazione.

---

### 5. Avvia il Server di Sviluppo

Prima di creare una pull request, verifica localmente che le tue modifiche non abbiano interrotto nulla.

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

### 6. Crea una Pull Request

Invia una pull request al repository originale.
