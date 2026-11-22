---
outline: [2, 3]
---

# Endpointy API

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

::: tip
Zalecamy ustawienie własnego nagłówka `User-Agent` przy wysyłaniu zapytań. Sprawdź [dokumentację User-Agent](/pl/getting-started/api-reference.html#user-agent), aby poznać sugerowany format.
:::

## Endpointy

### <Badge type="tip" text="GET" class="http-get" /> /endpoints

Zwraca wszystkie dostępne kategorie API oraz przypisane im formaty plików.

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
Używaj tego endpointu do dynamicznego pobierania obsługiwanych kategorii zamiast wpisywać je na sztywno w kodzie.
:::

---

### <Badge type="tip" text="GET" class="http-get" /> /:category

Zwraca losowy obraz lub GIF z podanej kategorii wraz z metadanymi.

#### Parametry zapytania

| Nazwa  | Typ    | Wymagane | Opis                                       |
| ------ | ------ | -------- | ------------------------------------------ |
| amount | number | Nie      | Liczba wyników do zwrócenia (`1 ≤ X ≤ 20`) |

Domyślnie `1`, jeśli nie podano.

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

Wyszukuje obrazy lub GIF-y na podstawie metadanych, takich jak nazwy artystów czy tytuły źródeł.

#### Parametry zapytania

| Nazwa    | Typ    | Wymagane | Opis                                  |
| -------- | ------ | -------- | ------------------------------------- |
| query    | string | Tak      | Wyszukiwana fraza                     |
| type     | enum   | Tak      | `1` = obrazy, `2` = GIF-y             |
| category | string | Nie      | Ogranicza wyniki do wybranej kategorii |
| amount   | number | Nie      | Liczba wyników (`1 ≤ X ≤ 20`)         |

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

Pobiera wskazany plik bezpośrednio.

#### Parametry ścieżki

| Nazwa    | Opis                        |
| -------- | --------------------------- |
| category | Nazwa kategorii             |
| filename | Nazwa pliku zasobu (UUID)   |
| format   | Format pliku (`png`, `gif`) |

::: info
Metadane dla tego endpointu są zwracane w **nagłówkach odpowiedzi HTTP zakodowanych jako URL**.
:::

**Dostępne nagłówki:**

* `anime_name`
* `artist_name`
* `artist_href`
* `source_url`

#### Przykład

https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif

**Odpowiedź:** Dane binarne obrazu lub pliku GIF
