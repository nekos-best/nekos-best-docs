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

| نقطة النهاية  | الحد                                        |
| ------------- | ------------------------------------------- |
| `/search`     | 7 طلبات كل 5 ثوانٍ                          |
| `/:category`  | 200 طلب في الدقيقة (لكل فئة)                |

## User-Agent

يجب أن تتضمن جميع الطلبات ترويسة `User-Agent`. يرجى استخدام التنسيق التالي: `APP_NAME (CONTACT_INFO)`.\
على سبيل المثال: `NekoApp (https://example.com)` أو `NekoApp (dev@example.com)`

**إرشادات التسمية:**

* **كن محددًا:** لا تستخدم أسماء عامة مثل "Discord Bot" أو "WhatsApp Bot" أو "Telegram Bot". يجب أن يكون لتطبيقك اسم فريد.
* **تجنب العناصر الناقصة (Placeholders):** لا تستخدم نصوصًا مثل `test` أو `bot` أو قيمة المثال الموضحة أعلاه.
* **تجنب الافتراضيات للمكتبات:** تجنب استخدام نصوص المكتبات الافتراضية مثل `python-requests` أو `okhttp` أو `axios` أو `node` أو `Go-http-client`.

**خيارات معلومات الاتصال:**\
لا يلزم أن تكون معلومات الاتصال موقعًا إلكترونيًا تقليديًا. أي مما يلي يعد وسيلة مقبولة لتوفير الهوية:

* عنوان بريد إلكتروني للتواصل المباشر.
* موقع المشروع أو رابط مستودع **عام** (مثل GitHub، GitLab).
* رابط دعوة للبوت أو صفحة اكتشاف.
* رابط دليل (مثل top.gg أو أدلة مماثلة).

**التزوير والانتحال:**

* **لا تقم بتزوير نصوص المتصفح.** التنسيق `Mozilla/5.0 ...` محجوز حصريًا لمتصفحات الويب الحقيقية والبوتات المعتمدة من Cloudflare.
* **لا تنتحل شخصية زواحف الشبكة المعروفة** مثل `Googlebot` أو `Bingbot`.

*سيؤدي عدم اتباع هذه الإرشادات واستخدام قيم عامة أو افتراضية أو مزيفة في الغالب إلى حظر طلباتك.*

## الفئات

تحدد الفئات نوع المحتوى المرجّع بواسطة API. ترتبط كل فئة بصيغة ملف ثابتة.

### الصور

<div class="category-grid">
  <span class="category-chip">husbando</span>
  <span class="category-chip">kitsune</span>
  <span class="category-chip">neko</span>
  <span class="category-chip">waifu</span>
</div>

### صور GIF

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

| النوع   | الحقول                                      |
| ------- | ------------------------------------------- |
| الصور   | `artist_name`, `artist_href`, `source_url`  |
| صور GIF | `anime_name`                                |

يتم تضمين `url` و `dimensions` في كليهما.
