---
outline: [2, 3]
---

# نقاط نهاية API

## العنوان الرئيسي (Base URL)

```
https://nekos.best/api/:version
```

استبدل `:version` بإحدى النسخ المدعومة أدناه.

## الإصدارات

<div class="versions-table">
  <div class="versions-row header">
    <div class="version-col">الإصدار</div>
    <div class="version-col">الحالة</div>
  </div>

  <div class="versions-row">
    <div class="version-col"><span class="version-chip current">v2</span></div>
    <div class="version-col">الحالي والمُدار</div>
  </div>
</div>

::: warning هام
قبل إجراء أي طلبات، يرجى قراءة [توثيق User-Agent](/ar/getting-started/api-reference.html#user-agent). يجب أن تتضمن جميع الطلبات ترويسة `User-Agent` منسقة بشكل صحيح.
:::

## نقاط النهاية

### <Badge type="tip" text="GET" class="http-get" /> /endpoints

ترجع جميع فئات API المتاحة وصيغ الملفات المرتبطة بها.

#### مثال

https://nekos.best/api/v2/endpoints
```json
{
  "neko": { "format": "png" },
  "...": {},
  "wink": { "format": "gif" }
}
```

::: tip
استخدم نقطة النهاية هذه لاكتشاف الفئات المدعومة ديناميكيًا بدلاً من كتابتها بشكل ثابت.
:::

---

### <Badge type="tip" text="GET" class="http-get" /> /:category

ترجع صورة أو GIF عشوائية من الفئة المحددة، بما في ذلك البيانات الوصفية.

#### معلمات الاستعلام

| الاسم   | النوع   | مطلوب | الوصف                                      |
| ------ | ------ | ------ | ------------------------------------------ |
| amount | number | لا     | عدد النتائج المراد إرجاعها (`1 ≤ X ≤ 20`) |

القيمة الافتراضية هي `1` إذا لم يتم تحديدها.

#### مثال (نتيجة واحدة)

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

#### مثال (نتائج متعددة)

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

البحث عن الصور أو صور GIF باستخدام البيانات الوصفية مثل أسماء الفنانين أو عناوين المصادر.

#### معلمات الاستعلام

| الاسم     | النوع   | مطلوب | الوصف                            |
| -------- | ------ | ------ | -------------------------------- |
| query    | string | نعم    | عبارة البحث                      |
| type     | enum   | نعم    | `1` = صور، `2` = صور GIF         |
| category | string | لا     | تقييد النتائج بفئة معينة         |
| amount   | number | لا     | عدد النتائج (`1 ≤ X ≤ 20`)       |

#### مثال (بحث الصور)

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

#### مثال (بحث GIF مع الفئة)

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

يسترجع عنصرًا معينًا مباشرة.

#### معلمات المسار

| الاسم     | الوصف                      |
| -------- | -------------------------- |
| category | اسم الفئة                  |
| filename | اسم ملف العنصر (UUID)      |
| format   | صيغة الملف (`png`, `gif`)  |

::: info
يتم إرجاع البيانات الوصفية لنقطة النهاية هذه عبر **ترويسات استجابة HTTP المرمزة بـ URL**.
:::

**الترويسات المتاحة:**

* `anime_name`
* `artist_name`
* `artist_href`
* `source_url`

#### مثال

https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif

**الاستجابة:** بيانات الصورة الثنائية أو GIF
