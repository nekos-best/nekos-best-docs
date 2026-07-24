---
lastUpdated: false
---

# Dodawanie nieoficjalnych bibliotek

## Wytyczne dotyczące zgłaszania nieoficjalnych bibliotek

* Zgłoszenia **muszą** być napisane w języku angielskim.
* Właściciel biblioteki musi dołączyć do naszego [serwera Discord](https://nekos.best/discord?ref=docs)
* Biblioteki muszą odpowiadać dobrym praktykom jakości kodu.
* Biblioteki **nie mogą** zawierać złośliwego oprogramowania ani innych niebezpiecznych zachowań.
* Biblioteka musi być publicznie dostępna i aktywnie utrzymywana.
* Zapewnij jasne instrukcje instalacji i użycia w swoim repozytorium.

### Zastrzegamy sobie prawo do:

* Modyfikowania Twojego zgłoszenia po przeglądzie.
* Usunięcia Twojego zgłoszenia, jeśli stanie się nieaktualne, niebezpieczne lub przestało być utrzymywane.

## Dodawanie nowej nieoficjalnej biblioteki

### 1. Sforkuj to repozytorium

### 2. Sklonuj swój fork i przejdź (`cd`) do katalogu projektu

### 3. Zainstaluj VitePress

Wymagania wstępne VitePress znajdziesz w
[oficjalnej dokumentacji](https://vitepress.dev/guide/getting-started#prerequisites).

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

### 4. Dodaj swoją nieoficjalną bibliotekę do paska bocznego

1. Otwórz `/docs/.vitepress/config.mts`.
2. Znajdź sekcję **"Nieoficjalne biblioteki"** w pasku bocznym.
3. Dodaj link do repozytorium Twojej biblioteki.
4. Zachowaj kolejność alfabetyczną listy według nazw języków programowania.

---

### 5. Uruchom serwer deweloperski

Przed utworzeniem pull requesta zweryfikuj lokalnie, czy Twoje zmiany niczego nie zepsuły.

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

### 6. Utwórz Pull Request

Prześlij pull request do oryginalnego repozytorium.
