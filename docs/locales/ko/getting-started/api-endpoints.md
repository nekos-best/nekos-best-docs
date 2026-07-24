---
outline: [2, 3]
---

# API 엔드포인트

사용 가능한 모든 API 엔드포인트, 매개변수 및 응답 예시입니다.

## /endpoints <Badge type="tip" text="GET" class="http-get" />

모든 지원되는 이미지 및 GIF 엔드포인트 목록을 반환합니다.

### Query Parameters

| 매개변수 | 유형 | 설명 | 필수 여부 |
| :--- | :--- | :--- | :--- |
| N/A | N/A | N/A | N/A |

### Example Request

```http
GET /api/v2/endpoints HTTP/1.1
Host: nekos.best
User-Agent: NekosBest (https://example.com)
```

### 응답 예시

```json
{
  "husbando": {
    "min": "0001",
    "max": "0040",
    "format": "png"
  },
  "neko": {
    "min": "0001",
    "max": "1000",
    "format": "png"
  },
  "hug": {
    "min": "0001",
    "max": "0080",
    "format": "gif"
  }
}
```

## /:category <Badge type="tip" text="GET" class="http-get" />

지정된 카테고리의 무작위 이미지 또는 GIF를 반환합니다.

### Query Parameters

| 매개변수 | 유형 | 설명 | 필수 여부 |
| :--- | :--- | :--- | :--- |
| `amount` | Integer | Number of items to return (1-20). | No (Default: 1) |

### Example Request (Single)

```http
GET /api/v2/neko HTTP/1.1
Host: nekos.best
User-Agent: NekosBest (https://example.com)
```

### 응답 예시

```json
{
  "results": [
    {
      "artist_href": "https://www.pixiv.net/en/users/12345",
      "artist_name": "Artist Name",
      "source_url": "https://www.pixiv.net/en/artworks/67890",
      "url": "https://nekos.best/api/v2/neko/0001.png"
    }
  ]
}
```

### Example Request (Multiple)

```http
GET /api/v2/hug?amount=2 HTTP/1.1
Host: nekos.best
User-Agent: NekosBest (https://example.com)
```

### 응답 예시

```json
{
  "results": [
    {
      "anime_name": "Anime Title 1",
      "url": "https://nekos.best/api/v2/hug/0001.gif"
    },
    {
      "anime_name": "Anime Title 2",
      "url": "https://nekos.best/api/v2/hug/0002.gif"
    }
  ]
}
```

## /search <Badge type="tip" text="GET" class="http-get" />

텍스트 쿼리를 기반으로 이미지 또는 GIF를 검색합니다.

### Query Parameters

| 매개변수 | 유형 | 설명 | 필수 여부 |
| :--- | :--- | :--- | :--- |
| `query` | String | Search query text | Yes |
| `type` | Integer | Search type (1 for Image, 2 for GIF) | No (Default: 1) |
| `category` | String | Category filter | No |
| `amount` | Integer | Number of items to return (1-20) | No (Default: 1) |

### Example Request (Search)

```http
GET /api/v2/search?query=cat&type=1&amount=1 HTTP/1.1
Host: nekos.best
User-Agent: NekosBest (https://example.com)
```

### 응답 예시

```json
{
  "results": [
    {
      "artist_href": "https://www.pixiv.net/en/users/12345",
      "artist_name": "Artist Name",
      "source_url": "https://www.pixiv.net/en/artworks/67890",
      "url": "https://nekos.best/api/v2/neko/0001.png"
    }
  ]
}
```
