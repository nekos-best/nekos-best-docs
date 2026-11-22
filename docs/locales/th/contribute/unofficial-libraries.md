---
lastUpdated: false
---

# การเพิ่มไลบรารีที่ไม่เป็นทางการ

## แนวทางการส่งไลบรารีที่ไม่เป็นทางการ

* เนื้อหาที่ส่งเข้ามา**ต้อง**เขียนเป็นภาษาอังกฤษ
* เจ้าของไลบรารีต้องเข้าร่วม [เซิร์ฟเวอร์ Discord](https://nekos.best/discord?ref=docs) ของเรา
* ไลบรารีต้องเขียนตามแนวทางคุณภาพโค้ดที่ดี
* ไลบรารีต้อง**ไม่มี**มัลแวร์หรือพฤติกรรมอื่นที่ไม่ปลอดภัย
* ไลบรารีต้องเข้าถึงได้แบบสาธารณะและมีการดูแลอัปเดตอย่างต่อเนื่อง
* ต้องมีคำแนะนำการติดตั้งและการใช้งานที่ชัดเจนใน repository ของคุณ

### เราขอสงวนสิทธิ์ในการ:

* ปรับแก้ไขรายการของคุณหลังจากตรวจสอบแล้ว
* ลบรายการของคุณออกหากล้าสมัย ไม่ปลอดภัย หรือหยุดพัฒนาแล้ว

## การเพิ่มไลบรารีที่ไม่เป็นทางการใหม่

### 1. Fork repository นี้

### 2. Clone fork ของคุณ แล้ว `cd` เข้าไปยังโฟลเดอร์โปรเจกต์

### 3. ติดตั้ง VitePress

ดูข้อกำหนดเบื้องต้นของ VitePress ได้ที่
[เอกสารอย่างเป็นทางการ](https://vitepress.dev/guide/getting-started#prerequisites)

::: code-group

```sh [npm]
npm add -D vitepress@next
```

```sh [pnpm]
pnpm add -D vitepress@next
```

```sh [yarn]
yarn add -D vitepress@next vue
```

```sh [bun]
bun add -D vitepress@next
```

:::

---

### 4. เพิ่มไลบรารีของคุณลงในแถบด้านข้าง (Sidebar)

1. เปิดไฟล์ `/docs/.vitepress/config.mts`
2. ค้นหาส่วน **"Unofficial Libraries"** ใน sidebar
3. เพิ่มลิงก์ไปยัง repository ของไลบรารีคุณ
4. จัดเรียงรายการตามลำดับตัวอักษรของชื่อภาษาโปรแกรม

---

### 5. รันเซิร์ฟเวอร์สำหรับพัฒนา (Development Server)

ก่อนสร้าง pull request ให้ทดสอบในเครื่องก่อนเพื่อให้แน่ใจว่าการแก้ไขไม่ได้ทำให้ส่วนอื่นเสียหาย

::: code-group

```sh [npm]
npm run dev
```

```sh [pnpm]
pnpm run dev
```

```sh [yarn]
yarn dev
```

```sh [bun]
bun run dev
```

:::

---

### 6. สร้าง Pull Request

ส่ง pull request มายัง repository ต้นฉบับ
