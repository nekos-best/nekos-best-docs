---
lastUpdated: false
---

# Resmi Olmayan Kütüphaneler Ekleme

## Resmi Olmayan Kütüphaneler İçin Katkı Kuralları

* Gönderiler **İngilizce** yazılmalıdır.
* Kütüphane sahibi [Discord sunucumuza](https://nekos.best/discord?ref=docs) katılmalıdır.
* Kütüphaneler iyi kod kalitesi standartlarına uymalıdır.
* Kütüphaneler zararlı yazılım veya diğer güvenli olmayan davranışlar **içermemelidir**.
* Kütüphane herkese açık olmalı ve aktif olarak sürdürülmelidir.
* Deponuzda net kurulum ve kullanım talimatları sağlayın.

### Şu hakları saklı tutarız:

* İnceleme sonrasında gönderinizi değiştirme.
* Güncelliğini yitirmesi, güvensiz hale gelmesi veya bakımsız kalması durumunda gönderinizi kaldırma.

## Yeni Bir Resmi Olmayan Kütüphane Ekleme

### 1. Bu depoyu çatallayın (fork yapın)

### 2. Çatalınızı klonlayın ve proje dizinine `cd` ile geçin

### 3. VitePress'i kurun

VitePress gereksinimlerini
[resmi dokümantasyonda](https://vitepress.dev/guide/getting-started#prerequisites) bulabilirsiniz.

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

### 4. Resmi Olmayan Kütüphanenizi Kenar Çubuğuna Ekleyin

1. `/docs/.vitepress/config.mts` dosyasını açın.
2. Kenar çubuğundaki **"Resmi Olmayan Kütüphaneler"** bölümünü bulun.
3. Kütüphanenizin deposuna bir bağlantı ekleyin.
4. Listeyi programlama diline göre alfabetik sırada tutun.

---

### 5. Geliştirme Sunucusunu Başlatın

Bir pull request oluşturmadan önce değişikliklerinizin hiçbir şeyi bozmadığını yerel olarak doğrulayın.

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

### 6. Pull Request Oluşturun

Orijinal depoya bir pull request gönderin.
