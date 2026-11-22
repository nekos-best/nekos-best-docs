---
outline: [2, 3]
---

# คู่มืออ้างอิง API

## Rate Limits

ทุกการตอบกลับจาก API จะแนบ header เหล่านี้มาด้วย เพื่อช่วยให้คุณติดตามและใช้งานให้อยู่ภายใต้ rate limit:

| Header                   | คำอธิบาย                                                    |
| ------------------------ | ----------------------------------------------------------- |
| `x-rate-limit-limit`     | ระยะเวลาของช่วง rate limit ปัจจุบัน (เช่น `1m`)            |
| `x-rate-limit-remaining` | จำนวนคำขอที่เหลืออยู่ในช่วงเวลาปัจจุบัน                     |
| `x-rate-limit-reset`     | เวลาแบบ ISO 8601 ที่ช่วง rate limit ปัจจุบันจะรีเซ็ตใหม่   |

### ขีดจำกัดการใช้งาน

| Endpoint                       | ขีดจำกัด                                                       |
| ------------------------------ | -------------------------------------------------------------- |
| `/search`                      | 7 คำขอต่อ 5 วินาที                                             |
| `/:category`                   | 200 คำขอต่อนาที (แยกตามแต่ละหมวดหมู่)                          |
| `/:category/:filename.:format` | 200 คำขอต่อนาที (ใช้โควตาร่วมกันทั้งไฟล์ `.png` และ `.gif`)    |

## User-Agent

แม้จะไม่ได้บังคับให้ตั้งค่า `User-Agent` header แบบกำหนดเอง แต่เราแนะนำให้ระบุไว้ในทุกคำขอตามรูปแบบ: `APP_NAME (CONTACT_INFO)`\
เช่น `NekoApp (https://example.com)` หรือ `NekoApp (dev@example.com)`

**แนวทางการตั้งชื่อที่แนะนำ:**

* **ระบุให้ชัดเจน:** ใช้ชื่อจริงของแอปพลิเคชัน แทนชื่อทั่วไปอย่าง "Discord Bot", "WhatsApp Bot" หรือ "Telegram Bot"
* **หลีกเลี่ยงค่าสมมติ:** อย่าใช้คำจำลองอย่าง `test`, `bot` หรือคัดลอกค่าตัวอย่างด้านบนไปใช้ตรงๆ
* **หลีกเลี่ยงค่าเริ่มต้นของไลบรารี:** ควรกำหนดค่าเองแทนค่าดีฟอลต์อย่าง `python-requests`, `okhttp`, `axios`, `node` หรือ `Go-http-client`

**ตัวเลือกสำหรับข้อมูลติดต่อ:**\
ข้อมูลติดต่อไม่จำเป็นต้องเป็นเว็บไซต์เสมอไป สามารถใช้สิ่งเหล่านี้แทนได้:

* อีเมลติดต่อโดยตรง
* เว็บไซต์โปรเจกต์ หรือ URL ของ repository แบบ**สาธารณะ** (เช่น GitHub, GitLab)
* ลิงก์เชิญบอท หรือหน้าแนะนำบอท
* ลิงก์หน้ารายการบอท (เช่น top.gg หรือไดเรกทอรีที่คล้ายกัน)

**การปลอมแปลงและแอบอ้าง:**

* **ห้ามปลอมแปลงสตริงของเบราว์เซอร์** รูปแบบ `Mozilla/5.0 ...` สงวนไว้สำหรับเว็บเบราว์เซอร์จริงและบอทที่ผ่านการยืนยันจาก Cloudflare เท่านั้น
* **ห้ามแอบอ้างเป็น crawler ที่รู้จักกันทั่วไป** เช่น `Googlebot` หรือ `Bingbot`

::: info
การไม่ตั้งค่า `User-Agent` header แบบกำหนดเองอาจเพิ่มความเสี่ยงในการถูกตรวจจับหรือแบนโดยระบบป้องกันการใช้งานผิดวัตถุประสงค์อัตโนมัติของเรา (`NB-BCFSD`)
:::

## หมวดหมู่

หมวดหมู่เป็นตัวกำหนดประเภทของเนื้อหาที่ API ส่งคืน โดยแต่ละหมวดหมู่จะผูกกับรูปแบบไฟล์ที่แน่นอน

### รูปภาพ (4)

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

### ฟิลด์ในการตอบกลับ

| ประเภท | ฟิลด์                                       |
| ------ | ------------------------------------------- |
| รูปภาพ | `artist_name`, `artist_href`, `source_url`  |
| GIF    | `anime_name`                                |

ทั้งสองประเภทจะมีฟิลด์ `url` และ `dimensions` รวมอยู่ด้วยเสมอ
