---
lastUpdated: false
---

# Aggiunta di Librerie Non Ufficiali

## Linee Guida per il Contributo per le Librerie Non Ufficiali

* Le sottomissioni **devono** essere scritte in inglese.
* Il proprietario della libreria deve unirsi al nostro [server Discord](https://nekos.best/discord?ref=docs)
* Le librerie devono seguire buone pratiche di qualità del codice.
* Le librerie **non devono** contenere malware o altri comportamenti non sicuri.
* La libreria deve essere accessibile pubblicamente e mantenuta attivamente.
* Fornisci istruzioni chiare di installazione e utilizzo nel tuo repository.

### Ci riserviamo il diritto di:

* Modificare la tua sottomissione dopo la revisione.
* Rimuovere la tua sottomissione se diventa obsoleta, non sicura o non mantenuta.

## Aggiunta di una Nuova Libreria Non Ufficiale

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

### 4. Aggiungi la Tua Libreria Non Ufficiale alla Barra Laterale

1. Apri `/docs/.vitepress/config.mts`.
2. Individua la sezione **"Librerie Non Ufficiali"** nella barra laterale.
3. Aggiungi un link al repository della tua libreria.
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
