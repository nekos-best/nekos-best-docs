---
outline: [2, 3]
---

# API रेफरेंस

## रेट लिमिट

रेट लिमिट को ट्रैक करने और उसका पालन करने में आपकी मदद के लिए हर रिस्पॉन्स में निम्नलिखित हेडर्स शामिल होते हैं:

| हेडर                      | विवरण                                                          |
| ------------------------- | -------------------------------------------------------------- |
| `x-rate-limit-limit`      | वर्तमान रेट लिमिट विंडो की अवधि (उदाहरण के लिए `1m`)          |
| `x-rate-limit-remaining`  | वर्तमान विंडो में शेष रिक्वेस्ट की संख्या                     |
| `x-rate-limit-reset`      | वर्तमान विंडो रीसेट होने का ISO 8601 टाइमस्टैम्प               |

### सीमाएं

| एंडपॉइंट                        | सीमा                                                                  |
| ------------------------------ | --------------------------------------------------------------------- |
| `/search`                      | प्रति 5 सेकंड 7 रिक्वेस्ट                                              |
| `/:category`                   | प्रति मिनट 200 रिक्वेस्ट (प्रति कैटेगरी)                              |
| `/:category/:filename.:format` | प्रति मिनट 200 रिक्वेस्ट (`.png` और `.gif` एसेट्स के बीच साझा)        |

## User-Agent

हालांकि कस्टम `User-Agent` हेडर अनिवार्य नहीं है, फिर भी हम सलाह देते हैं कि आप अपनी रिक्वेस्ट में इस फॉर्मेट का उपयोग करें: `APP_NAME (CONTACT_INFO)`।\
उदाहरण के लिए: `NekoApp (https://example.com)` या `NekoApp (dev@example.com)`

**नाम रखने के सुझाए गए दिशानिर्देश:**

* **स्पष्ट नाम रखें:** "Discord Bot", "WhatsApp Bot", या "Telegram Bot" जैसे सामान्य नामों के बजाय अपने एप्लिकेशन का वास्तविक नाम उपयोग करें।
* **प्लेसहोल्डर से बचें:** `test`, `bot`, या ऊपर दिए गए उदाहरण जैसे प्लेसहोल्डर शब्दों का उपयोग न करें।
* **लाइब्रेरी डिफ़ॉल्ट से बचें:** `python-requests`, `okhttp`, `axios`, `node`, या `Go-http-client` जैसी डिफ़ॉल्ट लाइब्रेरी स्ट्रिंग्स की जगह कस्टम वैल्यू का उपयोग करें।

**संपर्क जानकारी (Contact Info) के विकल्प:**\
संपर्क जानकारी के लिए पारंपरिक वेबसाइट होना ज़रूरी नहीं है। इनमें से कोई भी विकल्प उपयुक्त है:

* एक सीधा संपर्क ईमेल पता।
* प्रोजेक्ट की वेबसाइट या **पब्लिक** रिपॉजिटरी का URL (जैसे GitHub, GitLab)।
* बॉट इनवाइट लिंक या डिस्कवरी पेज।
* कोई लिस्टिंग URL (जैसे top.gg या मिलती-जुलती डायरेक्टरी)।

**स्पूफिंग और नकल (Impersonation):**

* **ब्राउज़र स्ट्रिंग्स को स्पूफ न करें।** `Mozilla/5.0 ...` फॉर्मेट केवल असली वेब ब्राउज़र और Cloudflare-सत्यापित बॉट्स के लिए आरक्षित है।
* **जाने-माने क्रॉलर्स की नकल न करें**, जैसे `Googlebot` या `Bingbot`।

::: info
कस्टम `User-Agent` हेडर सेट न करने पर हमारे ऑटोमेटेड अब्यूज़ डिटेक्शन (`NB-BCFSD`) द्वारा फ्लैग या बैन किए जाने की संभावना बढ़ जाती है।
:::

## कैटेगरी

कैटेगरी यह तय करती हैं कि API किस प्रकार का कंटेंट लौटाएगा। हर कैटेगरी एक निश्चित फाइल फॉर्मेट से जुड़ी होती है।

### इमेज (4)

<div class="category-grid">
  <span class="category-chip">husbando</span>
  <span class="category-chip">kitsune</span>
  <span class="category-chip">neko</span>
  <span class="category-chip">waifu</span>
</div>

### GIF (59)

<div class="category-grid">
  <span class="category-chip">angry</span>
  <span class="category-chip">baka</span>
  <span class="category-chip">bite</span>
  <span class="category-chip">bleh</span>
  <span class="category-chip">blowkiss</span>
  <span class="category-chip">blush</span>
  <span class="category-chip">bonk</span>
  <span class="category-chip">bored</span>
  <span class="category-chip">carry</span>
  <span class="category-chip">clap</span>
  <span class="category-chip">confused</span>
  <span class="category-chip">cry</span>
  <span class="category-chip">cuddle</span>
  <span class="category-chip">dance</span>
  <span class="category-chip">facepalm</span>
  <span class="category-chip">feed</span>
  <span class="category-chip">handhold</span>
  <span class="category-chip">handshake</span>
  <span class="category-chip">happy</span>
  <span class="category-chip">highfive</span>
  <span class="category-chip">hug</span>
  <span class="category-chip">kabedon</span>
  <span class="category-chip">kick</span>
  <span class="category-chip">kiss</span>
  <span class="category-chip">lappillow</span>
  <span class="category-chip">laugh</span>
  <span class="category-chip">lurk</span>
  <span class="category-chip">nod</span>
  <span class="category-chip">nom</span>
  <span class="category-chip">nope</span>
  <span class="category-chip">nya</span>
  <span class="category-chip">pat</span>
  <span class="category-chip">peck</span>
  <span class="category-chip">poke</span>
  <span class="category-chip">pout</span>
  <span class="category-chip">punch</span>
  <span class="category-chip">run</span>
  <span class="category-chip">salute</span>
  <span class="category-chip">shake</span>
  <span class="category-chip">shoot</span>
  <span class="category-chip">shocked</span>
  <span class="category-chip">shrug</span>
  <span class="category-chip">sip</span>
  <span class="category-chip">slap</span>
  <span class="category-chip">sleep</span>
  <span class="category-chip">smile</span>
  <span class="category-chip">smug</span>
  <span class="category-chip">spin</span>
  <span class="category-chip">stare</span>
  <span class="category-chip">tableflip</span>
  <span class="category-chip">teehee</span>
  <span class="category-chip">think</span>
  <span class="category-chip">thumbsup</span>
  <span class="category-chip">tickle</span>
  <span class="category-chip">wag</span>
  <span class="category-chip">wave</span>
  <span class="category-chip">wink</span>
  <span class="category-chip">yawn</span>
  <span class="category-chip">yeet</span>
</div>

### रिस्पॉन्स फ़ील्ड्स

| प्रकार | फ़ील्ड्स                                     |
| ------ | -------------------------------------------- |
| इमेज   | `artist_name`, `artist_href`, `source_url`   |
| GIF    | `anime_name`                                 |

`url` और `dimensions` दोनों में शामिल होते हैं।
