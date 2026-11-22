---
outline: [2, 3]
---

# API 엔드포인트

## 기본 URL

```
https://nekos.best/api/:version
```

`:version`을 아래에서 지원하는 버전 중 하나로 바꿔 사용하세요.

## 버전

<div class="versions-table">
  <div class="versions-row header">
    <div class="version-col">버전</div>
    <div class="version-col">상태</div>
  </div>

  <div class="versions-row">
    <div class="version-col"><span class="version-chip current">v2</span></div>
    <div class="version-col">현재 버전 · 유지보수 중</div>
  </div>
</div>

::: tip
요청을 보낼 때 커스텀 `User-Agent` 헤더를 설정하는 것을 권장합니다. 권장 형식은 [User-Agent 문서](/ko/getting-started/api-reference.html#user-agent)에서 확인하세요.
:::

## 엔드포인트

### <Badge type="tip" text="GET" class="http-get" /> /endpoints

사용 가능한 모든 API 카테고리와 각 카테고리의 파일 형식을 반환합니다.

#### 예시

https://nekos.best/api/v2/endpoints
```json
{
  "neko": { "format": "png" },
  "...": {},
  "wink": { "format": "gif" }
}
```

::: tip
지원되는 카테고리를 코드에 하드코딩하지 말고, 이 엔드포인트를 통해 동적으로 조회하는 것을 권장합니다.
:::

---

### <Badge type="tip" text="GET" class="http-get" /> /:category

지정한 카테고리에서 무작위 이미지 또는 GIF와 메타데이터를 반환합니다.

#### 쿼리 파라미터

| 이름   | 타입   | 필수 여부 | 설명                               |
| ------ | ------ | --------- | ---------------------------------- |
| amount | number | 아니요    | 반환할 결과 개수 (`1 ≤ X ≤ 20`)    |

지정하지 않으면 기본값은 `1`입니다.

#### 예시 (단일 결과)

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

#### 예시 (복수 결과)

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

아티스트 이름이나 작품 제목 등의 메타데이터를 기준으로 이미지 또는 GIF를 검색합니다.

#### 쿼리 파라미터

| 이름     | 타입   | 필수 여부 | 설명                              |
| -------- | ------ | --------- | --------------------------------- |
| query    | string | 예        | 검색어                            |
| type     | enum   | 예        | `1` = 이미지, `2` = GIF           |
| category | string | 아니요    | 특정 카테고리로 결과 제한         |
| amount   | number | 아니요    | 반환할 결과 개수 (`1 ≤ X ≤ 20`)   |

#### 예시 (이미지 검색)

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

#### 예시 (카테고리 지정 GIF 검색)

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

특정 에셋을 직접 가져옵니다.

#### 경로 파라미터

| 이름     | 설명                       |
| -------- | -------------------------- |
| category | 카테고리 이름              |
| filename | 에셋 파일명 (UUID)         |
| format   | 파일 형식 (`png`, `gif`)   |

::: info
이 엔드포인트의 메타데이터는 **URL 인코딩된 HTTP 응답 헤더**를 통해 반환됩니다.
:::

**제공되는 헤더:**

* `anime_name`
* `artist_name`
* `artist_href`
* `source_url`

#### 예시

https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif

**응답:** 바이너리 이미지 또는 GIF 데이터
