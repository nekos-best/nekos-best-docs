---
lastUpdated: false
---

# Új kódpéldák hozzáadása

## Közreműködési irányelvek kódpéldákhoz

* A beküldött anyagoknak **kötelezően** angol nyelven kell készülniük.
* Dokumentáld a példádat a lehető legalaposabban.
* Győződj meg róla, hogy a kódod működik és megfelelően le van tesztelve.

### Fenntartjuk a jogot, hogy:

* A beküldés után módosítsuk az anyagodat.
* Szükség esetén eltávolítsuk a beküldésedet.

## Új kódpélda létrehozása

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

### 4. Add hozzá a kódpéldádat

#### 4.1 Hozd létre a példafájlt

1. Hozz létre egy új fájlt a `/docs/examples` mappában a programozási nyelv nevével.
2. A fájlnévnek `.md` kiterjesztéssel kell végződnie.
3. Mutass be legalább **két különböző módot** az API-hívások elvégzésére.

#### 4.2 Add hozzá a példát az oldalsávhoz

1. Nyisd meg a `/docs/.vitepress/config.mts` fájlt.
2. Keresd meg a **"Code Examples"** szakaszt az oldalsávban.
3. Add hozzá az új fájlodat a listához.
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
