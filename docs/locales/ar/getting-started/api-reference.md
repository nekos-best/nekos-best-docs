---
outline: [2, 3]
---

# مرجع API

## حدود المعدل (Rate Limits)

تتضمن كل استجابة الترويسات التالية لمساعدتك في تتبع حدود المعدل واحترامها:

| الترويسة                | الوصف                                                    |
| ----------------------- | -------------------------------------------------------- |
| `x-rate-limit-limit`    | مدة نافذة حد المعدل الحالية (مثل `1m`)                   |
| `x-rate-limit-remaining`| الطلبات المتبقية في النافذة الحالية                       |
| `x-rate-limit-reset`    | طابع زمني بتنسيق ISO 8601 لإعادة ضبط النافذة الحالية      |

### الحدود

| نقطة النهاية                    | الحد                                                   |
| ------------------------------ | ------------------------------------------------------ |
| `/search`                      | 7 طلبات كل 5 ثوانٍ                                     |
| `/:category`                   | 200 طلب في الدقيقة (لكل فئة)                           |
| `/:category/:filename.:format` | 200 طلب في الدقيقة (مشتركة بين ملفات `.png` و`.gif`)   |

## User-Agent

رغم أن ترويسة `User-Agent` المخصصة ليست إلزامية، فإننا نوصي بتعيينها في طلباتك وفق التنسيق التالي: `APP_NAME (CONTACT_INFO)`.\
على سبيل المثال: `NekoApp (https://example.com)` أو `NekoApp (dev@example.com)`

**إرشادات التسمية المقترحة:**

* **كن محددًا:** استخدم الاسم الفعلي لتطبيقك بدلًا من تسميات عامة مثل "Discord Bot" أو "WhatsApp Bot" أو "Telegram Bot".
* **تجنب القيم المؤقتة (Placeholders):** تجنب استخدام نصوص مؤقتة مثل `test` أو `bot` أو قيم الأمثلة الموضحة أعلاه.
* **تجنب القيم الافتراضية للمكتبات:** يُفضَّل استخدام قيمة مخصصة بدلًا من النصوص الافتراضية للمكتبات مثل `python-requests` أو `okhttp` أو `axios` أو `node` أو `Go-http-client`.

**خيارات معلومات الاتصال:**\
لا يلزم أن تكون معلومات الاتصال موقعًا إلكترونيًا تقليديًا؛ فأيٌّ مما يلي يفي بالغرض:

* عنوان بريد إلكتروني للتواصل المباشر.
* موقع المشروع أو رابط مستودع **عام** (مثل GitHub أو GitLab).
* رابط دعوة للبوت أو صفحة استكشاف (Discovery).
* رابط إدراج في دليل (مثل top.gg أو أدلة مشابهة).

**التزوير والانتحال:**

* **لا تقم بتزوير نصوص المتصفحات.** التنسيق `Mozilla/5.0 ...` محجوز لمتصفحات الويب الحقيقية والبوتات المعتمدة من Cloudflare.
* **لا تنتحل شخصية الزواحف المعروفة** مثل `Googlebot` أو `Bingbot`.

::: info
عدم تعيين ترويسة `User-Agent` مخصصة يزيد من احتمالية رصد طلباتك أو حظرها بواسطة نظام الكشف التلقائي عن إساءة الاستخدام (`NB-BCFSD`).
:::

## الفئات

تحدد الفئات نوع المحتوى الذي تُرجعه واجهة البرمجة (API). ترتبط كل فئة بصيغة ملف ثابتة.

### الصور (4)

<div class="category-grid">
  <span class="category-chip">husbando</span>
  <span class="category-chip">kitsune</span>
  <span class="category-chip">neko</span>
  <span class="category-chip">waifu</span>
</div>

### ملفات GIF (59)

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

### حقول الاستجابة

| النوع     | الحقول                                      |
| --------- | ------------------------------------------- |
| الصور     | `artist_name`, `artist_href`, `source_url`  |
| ملفات GIF | `anime_name`                                |

يُضمَّن كلٌّ من `url` و`dimensions` في كليهما.
