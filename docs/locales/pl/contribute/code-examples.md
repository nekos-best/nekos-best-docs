---
lastUpdated: false
---

# Dodawanie nowych przykładów kodu

## Wytyczne dotyczące zgłaszania przykładów kodu

* Zgłoszenia **muszą** być napisane w języku angielskim.
* Udokumentuj swój przykład tak szczegółowo, jak to możliwe.
* Upewnij się, że Twój kod działa i został dokładnie przetestowany.

### Zastrzegamy sobie prawo do:

* Modyfikowania Twojego zgłoszenia po jego przesłaniu.
* Usunięcia Twojego zgłoszenia, jeśli okaże się to konieczne.

## Tworzenie nowego przykładu kodu

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

### 4. Dodaj swój przykład kodu

#### 4.1 Utwórz plik przykładu

1. Utwórz nowy plik w `/docs/examples` o nazwie pochodzącej od języka programowania.
2. Nazwa pliku musi kończyć się rozszerzeniem `.md`.
3. Dołącz co najmniej **dwa różne sposoby** wykonywania zapytań do API.

#### 4.2 Dodaj przykład do paska bocznego

1. Otwórz `/docs/.vitepress/config.mts`.
2. Znajdź sekcję **"Przykłady kodu"** w pasku bocznym.
3. Dodaj swój nowy plik do listy.
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
