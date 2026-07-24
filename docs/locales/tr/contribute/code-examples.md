---
lastUpdated: false
---

# Yeni Kod Örnekleri Ekleme

## Kod Örnekleri İçin Katkı Kuralları

* Gönderiler **İngilizce** yazılmalıdır.
* Örneğinizi mümkün olduğunca ayrıntılı bir şekilde belgeleyin.
* Kodunuzun çalıştığından ve düzgün bir şekilde test edildiğinden emin olun.

### Şu hakları saklı tutarız:

* Gönderildikten sonra gönderinizi değiştirme.
* Gerekirse gönderinizi kaldırma.

## Yeni Bir Kod Örneği Oluşturma

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

### 4. Kod Örneğinizi Ekleyin

#### 4.1 Örnek dosyasını oluşturun

1. `/docs/examples` içinde programlama dilinin adını taşıyan yeni bir dosya oluşturun.
2. Dosya adı `.md` ile bitmelidir.
3. API çağrıları yapmak için en az **iki farklı yöntem** ekleyin.

#### 4.2 Örneği kenar çubuğuna ekleyin

1. `/docs/.vitepress/config.mts` dosyasını açın.
2. Kenar çubuğundaki **"Kod Örnekleri"** bölümünü bulun.
3. Yeni dosyanızı listeye ekleyin.
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
