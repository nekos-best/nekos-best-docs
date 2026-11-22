---
outline: [2, 3]
---

# API Endpoints

## Base URL

```
https://nekos.best/api/:version
```

แทนที่ `:version` ด้วยเวอร์ชันที่รองรับด้านล่าง

## เวอร์ชัน

<div class="versions-table">
  <div class="versions-row header">
    <div class="version-col">เวอร์ชัน</div>
    <div class="version-col">สถานะ</div>
  </div>

  <div class="versions-row">
    <div class="version-col"><span class="version-chip current">v2</span></div>
    <div class="version-col">ปัจจุบันและดูแลต่อเนื่อง</div>
  </div>
</div>

::: tip
แนะนำให้ตั้งค่า `User-Agent` header แบบกำหนดเองทุกครั้งที่ส่งคำขอ ดูรูปแบบที่แนะนำได้ที่ [เอกสาร User-Agent](/th/getting-started/api-reference.html#user-agent)
:::

## Endpoints

### <Badge type="tip" text="GET" class="http-get" /> /endpoints

ส่งคืนหมวดหมู่ทั้งหมดที่มีใน API พร้อมรูปแบบไฟล์ของแต่ละหมวด

#### ตัวอย่าง

https://nekos.best/api/v2/endpoints
```json
{
  "neko": { "format": "png" },
  "...": {},
  "wink": { "format": "gif" }
}
```

::: tip
ควรใช้ endpoint นี้เพื่อดึงรายชื่อหมวดหมู่ที่รองรับแบบไดนามิก แทนการ hardcode ไว้ในโค้ด
:::

---

### <Badge type="tip" text="GET" class="http-get" /> /:category

ส่งคืนรูปภาพหรือ GIF แบบสุ่มจากหมวดหมู่ที่ระบุ พร้อม metadata

#### Query Parameters

| ชื่อ   | ชนิดข้อมูล | จำเป็น | คำอธิบาย                               |
| ------ | ---------- | ------ | -------------------------------------- |
| amount | number     | ไม่    | จำนวนผลลัพธ์ที่ต้องการ (`1 ≤ X ≤ 20`) |

หากไม่ระบุ ค่าเริ่มต้นคือ `1`

#### ตัวอย่าง (ผลลัพธ์เดียว)

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

#### ตัวอย่าง (หลายผลลัพธ์)

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

ค้นหารูปภาพหรือ GIF โดยใช้ metadata เช่น ชื่อนักวาด หรือชื่อเรื่องต้นฉบับ

#### Query Parameters

| ชื่อ     | ชนิดข้อมูล | จำเป็น | คำอธิบาย                         |
| -------- | ---------- | ------ | -------------------------------- |
| query    | string     | ใช่    | คำค้นหา                          |
| type     | enum       | ใช่    | `1` = รูปภาพ, `2` = GIF          |
| category | string     | ไม่    | จำกัดผลการค้นหาเฉพาะหมวดหมู่     |
| amount   | number     | ไม่    | จำนวนผลลัพธ์ (`1 ≤ X ≤ 20`)      |

#### ตัวอย่าง (ค้นหารูปภาพ)

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

#### ตัวอย่าง (ค้นหา GIF พร้อมระบุหมวดหมู่)

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

ดึงไฟล์รูปภาพหรือ GIF ที่ระบุโดยตรง

#### Path Parameters

| ชื่อ     | คำอธิบาย                   |
| -------- | -------------------------- |
| category | ชื่อหมวดหมู่               |
| filename | ชื่อไฟล์ (UUID)            |
| format   | รูปแบบไฟล์ (`png`, `gif`)  |

::: info
metadata ของ endpoint นี้จะถูกส่งกลับมาในรูปแบบ **HTTP response headers ที่เข้ารหัส URL (URL-encoded)**
:::

**header ที่มีให้ใช้งาน:**

* `anime_name`
* `artist_name`
* `artist_href`
* `source_url`

#### ตัวอย่าง

https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif

**การตอบกลับ:** ข้อมูลไบนารีของรูปภาพหรือ GIF
