---
lastUpdated: false
---

# Nem hivatalos könyvtárak hozzáadása

## Közreműködési irányelvek nem hivatalos könyvtárakhoz

* A beküldött anyagoknak **kötelezően** angol nyelven kell készülniük.
* A könyvtár tulajdonosának csatlakoznia kell a [Discord szerverünkhöz](https://nekos.best/discord?ref=docs).
* A könyvtáraknak meg kell felelniük a jó kódminőségi gyakorlatoknak.
* A könyvtárak **nem** tartalmazhatnak kártékony kódot vagy más nem biztonságos működést.
* A könyvtárnak nyilvánosan elérhetőnek és aktívan karbantartottnak kell lennie.
* Biztosíts egyértelmű telepítési és használati útmutatót a repositorydban.

### Fenntartjuk a jogot, hogy:

* Az ellenőrzés után módosítsuk a beküldésedet.
* Eltávolítsuk a beküldésedet, ha elavulttá, nem biztonságossá vagy elhanyagolttá válik.

## Új nem hivatalos könyvtár hozzáadása

### 1. Forkold ezt a repositoryt

### 2. Klónozd a forkodat, és lépj be `cd`-vel a projekt könyvtárába

### 3. Telepítsd a VitePresst

A VitePress előfeltételeit megtalálod
[a hivatalos dokumentációban](https://vitepress.dev/guide/getting-started#prerequisites).

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

### 4. Add hozzá a nem hivatalos könyvtáradat az oldalsávhoz

1. Nyisd meg a `/docs/.vitepress/config.mts` fájlt.
2. Keresd meg az **"Unofficial Libraries"** szakaszt az oldalsávban.
3. Adj hozzá egy linket a könyvtárad repositoryjához.
4. Tartsd a listát ábécésorrendben a programozási nyelvek neve szerint.

---

### 5. Indítsd el a fejlesztői szervert

Mielőtt pull requestet nyitnál, ellenőrizd helyben, hogy a változtatásaid nem rontottak el semmit.

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

### 6. Hozz létre egy Pull Requestet

Nyiss egy pull requestet az eredeti repositoryba.
