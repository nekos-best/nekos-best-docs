---
outline: [2, 3]
---

# Punkty końcowe API

## Adres bazowy (Base URL)

```
https://nekos.best/api/:version
```

Zastąp `:version` jedną z obsługiwanych wersji poniżej.

## Wersje

<div class="versions-table">
  <div class="versions-row header">
    <div class="version-col">Wersja</div>
    <div class="version-col">Status</div>
  </div>

  <div class="versions-row">
    <div class="version-col"><span class="version-chip current">v2</span></div>
    <div class="version-col">Aktualna i utrzymywana</div>
  </div>
</div>

::: warning Ważne
Przed wykonaniem jakichkolwiek zapytań zapoznaj się z [dokumentacją User-Agent](/pl/getting-started/api-reference.html#user-agent). Wszystkie zapytania muszą zawierać poprawnie sformatowany nagłówek `User-Agent`.
:::

## Punkty końcowe

### <Badge type="tip" text="GET" class="http-get" /> /endpoints

Zwraca wszystkie dostępne kategorie API oraz powiązane z nimi formaty plików.

#### Przykład

https://nekos.best/api/v2/endpoints
```json
{
  "neko": { "format": "png" },
  "...": {},
  "wink": { "format": "gif" }
}
```

::: tip
Używaj tego punktu końcowego do dynamicznego wykrywania obsługiwanych kategorii zamiast wpisywania ich na stałe w kodzie.
:::

---

### <Badge type="tip" text="GET" class="http-get" /> /:category

Zwraca losowy obraz lub GIF z określonej kategorii wraz z metadanymi.

#### Parametry zapytania (Query Parameters)

| Nazwa  | Typ    | Wymagane | Opis                                       |
| ------ | ------ | -------- | ------------------------------------------ |
| amount | number | Nie      | Liczba wyników do zwrócenia (`1 ≤ X ≤ 20`) |

Domyślnie `1`, jeśli nie określono inaczej.

#### Przykład (pojedynczy wynik)

https://nekos.best/api/v2/neko

```json
{
  "results": [
    {
      "artist_name": "John Doe",
      "artist_href": "https://www.example.com/en/users/1234567",
      "source_url": "https://www.example.com/en/artworks/1234567",
      "url": "https://nekos.best/api/v2/neko/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.png",
      "dimensions": {
        "width": 420,
        "height": 690
      }
    }
  ]
}
```

#### Przykład (wiele wyników)

https://nekos.best/api/v2/hug?amount=2

```json
{
  "results": [
    {
      "anime_name": "Generic Anime Name",
      "url": "https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif",
      "dimensions": {
        "width": 420,
        "height": 690
      }
    },
    {
      "anime_name": "Generic Anime Name",
      "url": "https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif",
      "dimensions": {
        "width": 420,
        "height": 690
      }
    }
  ]
}
```

---

### <Badge type="tip" text="GET" class="http-get" /> /search

Wyszukuj obrazy lub GIF-y na podstawie metadanych, takich jak nazwy artystów lub tytuły źródeł.

#### Parametry zapytania (Query Parameters)

| Nazwa    | Typ    | Wymagane | Opis                                |
| -------- | ------ | -------- | ----------------------------------- |
| query    | string | Tak      | Wyszukiwana fraza                   |
| type     | enum   | Tak      | `1` = obrazy, `2` = GIF-y           |
| category | string | Nie      | Ogranicz wyniki do wybranej kategorii |
| amount   | number | Nie      | Liczba wyników (`1 ≤ X ≤ 20`)       |

#### Przykład (wyszukiwanie obrazów)

https://nekos.best/api/v2/search?query=John&type=1

```json
{
  "results": [
    {
      "artist_name": "John Doe",
      "artist_href": "https://www.example.com/en/users/1234567",
      "source_url": "https://www.example.com/en/artworks/1234567",
      "url": "https://nekos.best/api/v2/neko/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.png",
      "dimensions": {
        "width": 420,
        "height": 690
      }
    }
  ]
}
```

#### Przykład (wyszukiwanie GIF-ów z kategorią)

https://nekos.best/api/v2/search?query=Generic&type=2&category=pat&amount=2

```json
{
  "results": [
    {
      "anime_name": "Generic Anime Name",
      "url": "https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif",
      "dimensions": {
        "width": 420,
        "height": 690
      }
    },
    {
      "anime_name": "Generic Anime Name",
      "url": "https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif",
      "dimensions": {
        "width": 420,
        "height": 690
      }
    }
  ]
}
```

---

### <Badge type="tip" text="GET" class="http-get" /> /:category/:filename.:format

Pobiera bezpośrednio określony plik.

#### Parametry ścieżki (Path Parameters)

| Nazwa    | Opis                         |
| -------- | ---------------------------- |
| category | Nazwa kategorii              |
| filename | Nazwa pliku zasobu (UUID)    |
| format   | Format pliku (`png`, `gif`)  |

::: info
Metadane dla tego punktu końcowego są zwracane w **nagłówkach odpowiedzi HTTP zakodowanych w URL**.
:::

**Dostępne nagłówki:**

* `anime_name`
* `artist_name`
* `artist_href`
* `source_url`

#### Przykład

https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif

**Odpowiedź:** Binarne dane obrazu lub pliku GIF
