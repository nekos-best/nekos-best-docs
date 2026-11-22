---
outline: [2, 3]
---

# API एंडपॉइंट्स

## बेस URL

```
https://nekos.best/api/:version
```

`:version` की जगह नीचे दिए गए समर्थित वर्ज़न में से किसी एक का उपयोग करें।

## वर्ज़न

<div class="versions-table">
  <div class="versions-row header">
    <div class="version-col">वर्ज़न</div>
    <div class="version-col">स्थिति</div>
  </div>

  <div class="versions-row">
    <div class="version-col"><span class="version-chip current">v2</span></div>
    <div class="version-col">वर्तमान और सक्रिय रूप से मेंटेन किया गया</div>
  </div>
</div>

::: tip
हम सुझाव देते हैं कि रिक्वेस्ट भेजते समय कस्टम `User-Agent` हेडर सेट करें। सुझाए गए फॉर्मेट के लिए [User-Agent डॉक्यूमेंटेशन](/hi/getting-started/api-reference.html#user-agent) देखें।
:::

## एंडपॉइंट्स

### <Badge type="tip" text="GET" class="http-get" /> /endpoints

सभी उपलब्ध API कैटेगरी और उनके संबंधित फाइल फॉर्मेट लौटाता है।

#### उदाहरण

https://nekos.best/api/v2/endpoints
```json
{
  "neko": { "format": "png" },
  "...": {},
  "wink": { "format": "gif" }
}
```

::: tip
समर्थित कैटेगरी को हार्डकोड करने के बजाय डायनामिक रूप से प्राप्त करने के लिए इस एंडपॉइंट का उपयोग करें।
:::

---

### <Badge type="tip" text="GET" class="http-get" /> /:category

निर्दिष्ट कैटेगरी से मेटाडेटा के साथ एक रैंडम इमेज या GIF लौटाता है।

#### क्वेरी पैरामीटर्स

| नाम    | प्रकार | आवश्यक | विवरण                                        |
| ------ | ------ | ------ | -------------------------------------------- |
| amount | number | नहीं   | लौटाए जाने वाले परिणामों की संख्या (`1 ≤ X ≤ 20`) |

यदि निर्दिष्ट न किया जाए, तो डिफ़ॉल्ट मान `1` होता है।

#### उदाहरण (एक परिणाम)

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

#### उदाहरण (कई परिणाम)

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

आर्टिस्ट के नाम या सोर्स टाइटल जैसे मेटाडेटा के आधार पर इमेज या GIF खोजें।

#### क्वेरी पैरामीटर्स

| नाम      | प्रकार | आवश्यक | विवरण                                     |
| -------- | ------ | ------ | ----------------------------------------- |
| query    | string | हां    | खोज शब्द या वाक्यांश                      |
| type     | enum   | हां    | `1` = इमेज, `2` = GIF                     |
| category | string | नहीं   | परिणामों को किसी एक कैटेगरी तक सीमित करें |
| amount   | number | नहीं   | परिणामों की संख्या (`1 ≤ X ≤ 20`)         |

#### उदाहरण (इमेज खोज)

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

#### उदाहरण (कैटेगरी के साथ GIF खोज)

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

किसी विशिष्ट एसेट को सीधे प्राप्त करता है।

#### पाथ पैरामीटर्स

| नाम      | विवरण                       |
| -------- | --------------------------- |
| category | कैटेगरी का नाम              |
| filename | एसेट का फाइल नाम (UUID)     |
| format   | फाइल फॉर्मेट (`png`, `gif`) |

::: info
इस एंडपॉइंट के लिए मेटाडेटा **URL-encoded HTTP रिस्पॉन्स हेडर्स** के ज़रिए लौटाया जाता है।
:::

**उपलब्ध हेडर्स:**

* `anime_name`
* `artist_name`
* `artist_href`
* `source_url`

#### उदाहरण

https://nekos.best/api/v2/hug/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.gif

**रिस्पॉन्स:** बाइनरी इमेज या GIF डेटा
