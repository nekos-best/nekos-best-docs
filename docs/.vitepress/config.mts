import { defineConfig } from "vitepress";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons";

export default defineConfig({
  title: "NEKOSBEST",
  description: "nekos.best's official documentation.",

  rewrites: {
    "locales/:lang/:rest*": ":lang/:rest*",
  },

  locales: {
    root: {
      label: "English",
      lang: "en",
    },
    de: {
      label: "Deutsch",
      lang: "de",
      title: "NEKOSBEST",
      description: "Die offizielle Entwicklerdokumentation von nekos.best.",
      themeConfig: {
        nav: [
          { text: "Startseite", link: "/de/" },
          { text: "Statusseite", link: "https://status.nekos.best" },
        ],
        sidebar: [
          {
            text: "Erste Schritte",
            items: [
              { text: "Einführung", link: "/de/getting-started/introduction" },
              { text: "API-Endpunkte", link: "/de/getting-started/api-endpoints" },
              { text: "API-Referenz", link: "/de/getting-started/api-reference" },
              { text: "Häufig gestellte Fragen", link: "/de/getting-started/faq" },
            ],
          },
          {
            text: "Mitwirken",
            link: "/de/contribute/contribute",
            items: [
              { text: "Bilder & GIFs", link: "/de/contribute/images-gifs" },
              { text: "Code-Beispiele", link: "/de/contribute/code-examples" },
              { text: "Inoffizielle Bibliotheken", link: "/de/contribute/unofficial-libraries" },
            ],
          },
          {
            text: "Code-Beispiele",
            items: [
              { text: "BDFD", link: "/de/examples/bdfd" },
              { text: "JavaScript", link: "/de/examples/javascript" },
              { text: "Python", link: "/de/examples/python" },
            ],
          },
          {
            text: "Offizielle Bibliotheken",
            items: [
              { text: "JavaScript", link: "https://github.com/nekos-best/nekos-best.js" },
              { text: "Python", link: "https://github.com/nekos-best/nekos-best.py" },
              { text: "Rust", link: "https://github.com/nekos-best/nekos-best.rs" },
            ],
          },
          {
            text: "Inoffizielle Bibliotheken",
            items: [
              {
                text: "Über inoffizielle Bibliotheken",
                link: "/de/unofficial/unofficial",
                items: [
                  { text: "C#", link: "https://github.com/Sylveon76/Nekos.Best-API" },
                  { text: "Dart", link: "https://github.com/Yakiyo/nekos_best_dart" },
                  { text: "Go", link: "https://github.com/Yakiyo/nekos_best.go" },
                  { text: "Haskell", link: "https://github.com/xquantxz/nekos-best.hs" },
                ],
              },
            ],
          },
          {
            text: "Rechtliches",
            items: [
              { text: "Nutzungsbedingungen", link: "/legal/tos" },
              { text: "Datenschutzrichtlinie", link: "/legal/privacy" },
              { text: "DMCA-Takedown", link: "/legal/dmca" },
            ],
          },
        ],
        lastUpdated: {
          text: "Zuletzt aktualisiert am",
          formatOptions: { dateStyle: "long" },
        },
      },
    },
    id: {
      label: "Bahasa Indonesia",
      lang: "id",
      title: "NEKOSBEST",
      description: "Dokumentasi pengembang resmi nekos.best.",
      themeConfig: {
        nav: [
          { text: "Beranda", link: "/id/" },
          { text: "Halaman Status", link: "https://status.nekos.best" },
        ],
        sidebar: [
          {
            text: "Memulai",
            items: [
              { text: "Pengenalan", link: "/id/getting-started/introduction" },
              { text: "Endpoint API", link: "/id/getting-started/api-endpoints" },
              { text: "Referensi API", link: "/id/getting-started/api-reference" },
              { text: "Pertanyaan Umum", link: "/id/getting-started/faq" },
            ],
          },
          {
            text: "Berkontribusi",
            link: "/id/contribute/contribute",
            items: [
              { text: "Gambar & GIF", link: "/id/contribute/images-gifs" },
              { text: "Contoh Kode", link: "/id/contribute/code-examples" },
              { text: "Pustaka Tidak Resmi", link: "/id/contribute/unofficial-libraries" },
            ],
          },
          {
            text: "Contoh Kode",
            items: [
              { text: "BDFD", link: "/id/examples/bdfd" },
              { text: "JavaScript", link: "/id/examples/javascript" },
              { text: "Python", link: "/id/examples/python" },
            ],
          },
          {
            text: "Pustaka Resmi",
            items: [
              { text: "JavaScript", link: "https://github.com/nekos-best/nekos-best.js" },
              { text: "Python", link: "https://github.com/nekos-best/nekos-best.py" },
              { text: "Rust", link: "https://github.com/nekos-best/nekos-best.rs" },
            ],
          },
          {
            text: "Pustaka Tidak Resmi",
            items: [
              {
                text: "Tentang Pustaka Tidak Resmi",
                link: "/id/unofficial/unofficial",
                items: [
                  { text: "C#", link: "https://github.com/Sylveon76/Nekos.Best-API" },
                  { text: "Dart", link: "https://github.com/Yakiyo/nekos_best_dart" },
                  { text: "Go", link: "https://github.com/Yakiyo/nekos_best.go" },
                  { text: "Haskell", link: "https://github.com/xquantxz/nekos-best.hs" },
                ],
              },
            ],
          },
          {
            text: "Hukum",
            items: [
              { text: "Syarat Layanan", link: "/legal/tos" },
              { text: "Kebijakan Privasi", link: "/legal/privacy" },
              { text: "Penurunan DMCA", link: "/legal/dmca" },
            ],
          },
        ],
        lastUpdated: {
          text: "Terakhir diperbarui pada",
          formatOptions: { dateStyle: "long" },
        },
      },
    },
    pt: {
      label: "Português",
      lang: "pt",
      title: "NEKOSBEST",
      description: "Documentação oficial para desenvolvedores da nekos.best.",
      themeConfig: {
        nav: [
          { text: "Início", link: "/pt/" },
          { text: "Status", link: "https://status.nekos.best" },
        ],
        sidebar: [
          {
            text: "Primeiros Passos",
            items: [
              { text: "Introdução", link: "/pt/getting-started/introduction" },
              { text: "Endpoints da API", link: "/pt/getting-started/api-endpoints" },
              { text: "Referência da API", link: "/pt/getting-started/api-reference" },
              { text: "Perguntas Frequentes", link: "/pt/getting-started/faq" },
            ],
          },
          {
            text: "Contribuir",
            link: "/pt/contribute/contribute",
            items: [
              { text: "Imagens & GIFs", link: "/pt/contribute/images-gifs" },
              { text: "Exemplos de Código", link: "/pt/contribute/code-examples" },
              { text: "Bibliotecas Não Oficiais", link: "/pt/contribute/unofficial-libraries" },
            ],
          },
          {
            text: "Exemplos de Código",
            items: [
              { text: "BDFD", link: "/pt/examples/bdfd" },
              { text: "JavaScript", link: "/pt/examples/javascript" },
              { text: "Python", link: "/pt/examples/python" },
            ],
          },
          {
            text: "Bibliotecas Oficiais",
            items: [
              { text: "JavaScript", link: "https://github.com/nekos-best/nekos-best.js" },
              { text: "Python", link: "https://github.com/nekos-best/nekos-best.py" },
              { text: "Rust", link: "https://github.com/nekos-best/nekos-best.rs" },
            ],
          },
          {
            text: "Bibliotecas Não Oficiais",
            items: [
              {
                text: "Sobre Bibliotecas Não Oficiais",
                link: "/pt/unofficial/unofficial",
                items: [
                  { text: "C#", link: "https://github.com/Sylveon76/Nekos.Best-API" },
                  { text: "Dart", link: "https://github.com/Yakiyo/nekos_best_dart" },
                  { text: "Go", link: "https://github.com/Yakiyo/nekos_best.go" },
                  { text: "Haskell", link: "https://github.com/xquantxz/nekos-best.hs" },
                ],
              },
            ],
          },
          {
            text: "Legal",
            items: [
              { text: "Termos de Serviço", link: "/legal/tos" },
              { text: "Política de Privacidade", link: "/legal/privacy" },
              { text: "Remoção DMCA", link: "/legal/dmca" },
            ],
          },
        ],
        lastUpdated: {
          text: "Última atualização em",
          formatOptions: { dateStyle: "long" },
        },
      },
    },
    es: {
      label: "Español",
      lang: "es",
      title: "NEKOSBEST",
      description: "Documentación oficial para desarrolladores de nekos.best.",
      themeConfig: {
        nav: [
          { text: "Inicio", link: "/es/" },
          { text: "Página de Estado", link: "https://status.nekos.best" },
        ],
        sidebar: [
          {
            text: "Primeros Pasos",
            items: [
              { text: "Introducción", link: "/es/getting-started/introduction" },
              { text: "Endpoints de la API", link: "/es/getting-started/api-endpoints" },
              { text: "Referencia de la API", link: "/es/getting-started/api-reference" },
              { text: "Preguntas Frecuentes", link: "/es/getting-started/faq" },
            ],
          },
          {
            text: "Contribuir",
            link: "/es/contribute/contribute",
            items: [
              { text: "Imágenes y GIFs", link: "/es/contribute/images-gifs" },
              { text: "Ejemplos de Código", link: "/es/contribute/code-examples" },
              { text: "Librerías No Oficiales", link: "/es/contribute/unofficial-libraries" },
            ],
          },
          {
            text: "Ejemplos de Código",
            items: [
              { text: "BDFD", link: "/es/examples/bdfd" },
              { text: "JavaScript", link: "/es/examples/javascript" },
              { text: "Python", link: "/es/examples/python" },
            ],
          },
          {
            text: "Librerías Oficiales",
            items: [
              { text: "JavaScript", link: "https://github.com/nekos-best/nekos-best.js" },
              { text: "Python", link: "https://github.com/nekos-best/nekos-best.py" },
              { text: "Rust", link: "https://github.com/nekos-best/nekos-best.rs" },
            ],
          },
          {
            text: "Librerías No Oficiales",
            items: [
              {
                text: "Sobre Librerías No Oficiales",
                link: "/es/unofficial/unofficial",
                items: [
                  { text: "C#", link: "https://github.com/Sylveon76/Nekos.Best-API" },
                  { text: "Dart", link: "https://github.com/Yakiyo/nekos_best_dart" },
                  { text: "Go", link: "https://github.com/Yakiyo/nekos_best.go" },
                  { text: "Haskell", link: "https://github.com/xquantxz/nekos-best.hs" },
                ],
              },
            ],
          },
          {
            text: "Legal",
            items: [
              { text: "Términos de Servicio", link: "/legal/tos" },
              { text: "Política de Privacidad", link: "/legal/privacy" },
              { text: "Aviso DMCA", link: "/legal/dmca" },
            ],
          },
        ],
        lastUpdated: {
          text: "Última actualización el",
          formatOptions: { dateStyle: "long" },
        },
      },
    },
    vi: {
      label: "Tiếng Việt",
      lang: "vi",
      title: "NEKOSBEST",
      description: "Tài liệu nhà phát triển chính thức của nekos.best.",
      themeConfig: {
        nav: [
          { text: "Trang chủ", link: "/vi/" },
          { text: "Trạng thái", link: "https://status.nekos.best" },
        ],
        sidebar: [
          {
            text: "Bắt đầu",
            items: [
              { text: "Giới thiệu", link: "/vi/getting-started/introduction" },
              { text: "Endpoint API", link: "/vi/getting-started/api-endpoints" },
              { text: "Tham chiếu API", link: "/vi/getting-started/api-reference" },
              { text: "Câu hỏi thường gặp", link: "/vi/getting-started/faq" },
            ],
          },
          {
            text: "Đóng góp",
            link: "/vi/contribute/contribute",
            items: [
              { text: "Hình ảnh & GIF", link: "/vi/contribute/images-gifs" },
              { text: "Ví dụ mã", link: "/vi/contribute/code-examples" },
              { text: "Thư viện không chính thức", link: "/vi/contribute/unofficial-libraries" },
            ],
          },
          {
            text: "Ví dụ mã",
            items: [
              { text: "BDFD", link: "/vi/examples/bdfd" },
              { text: "JavaScript", link: "/vi/examples/javascript" },
              { text: "Python", link: "/vi/examples/python" },
            ],
          },
          {
            text: "Thư viện chính thức",
            items: [
              { text: "JavaScript", link: "https://github.com/nekos-best/nekos-best.js" },
              { text: "Python", link: "https://github.com/nekos-best/nekos-best.py" },
              { text: "Rust", link: "https://github.com/nekos-best/nekos-best.rs" },
            ],
          },
          {
            text: "Thư viện không chính thức",
            items: [
              {
                text: "Giới thiệu thư viện",
                link: "/vi/unofficial/unofficial",
                items: [
                  { text: "C#", link: "https://github.com/Sylveon76/Nekos.Best-API" },
                  { text: "Dart", link: "https://github.com/Yakiyo/nekos_best_dart" },
                  { text: "Go", link: "https://github.com/Yakiyo/nekos_best.go" },
                  { text: "Haskell", link: "https://github.com/xquantxz/nekos-best.hs" },
                ],
              },
            ],
          },
          {
            text: "Pháp lý",
            items: [
              { text: "Điều khoản dịch vụ", link: "/legal/tos" },
              { text: "Chính sách bảo mật", link: "/legal/privacy" },
              { text: "Gỡ bỏ DMCA", link: "/legal/dmca" },
            ],
          },
        ],
        lastUpdated: {
          text: "Cập nhật lần cuối vào",
          formatOptions: { dateStyle: "long" },
        },
      },
    },
    fr: {
      label: "Français",
      lang: "fr",
      title: "NEKOSBEST",
      description: "Documentation officielle pour développeurs de nekos.best.",
      themeConfig: {
        nav: [
          { text: "Accueil", link: "/fr/" },
          { text: "Statut", link: "https://status.nekos.best" },
        ],
        sidebar: [
          {
            text: "Prise en main",
            items: [
              { text: "Introduction", link: "/fr/getting-started/introduction" },
              { text: "Endpoints API", link: "/fr/getting-started/api-endpoints" },
              { text: "Référence API", link: "/fr/getting-started/api-reference" },
              { text: "Foire Aux Questions", link: "/fr/getting-started/faq" },
            ],
          },
          {
            text: "Contribuer",
            link: "/fr/contribute/contribute",
            items: [
              { text: "Images & GIFs", link: "/fr/contribute/images-gifs" },
              { text: "Exemples de code", link: "/fr/contribute/code-examples" },
              { text: "Bibliothèques non officielles", link: "/fr/contribute/unofficial-libraries" },
            ],
          },
          {
            text: "Exemples de code",
            items: [
              { text: "BDFD", link: "/fr/examples/bdfd" },
              { text: "JavaScript", link: "/fr/examples/javascript" },
              { text: "Python", link: "/fr/examples/python" },
            ],
          },
          {
            text: "Bibliothèques officielles",
            items: [
              { text: "JavaScript", link: "https://github.com/nekos-best/nekos-best.js" },
              { text: "Python", link: "https://github.com/nekos-best/nekos-best.py" },
              { text: "Rust", link: "https://github.com/nekos-best/nekos-best.rs" },
            ],
          },
          {
            text: "Bibliothèques non officielles",
            items: [
              {
                text: "À propos des bibliothèques",
                link: "/fr/unofficial/unofficial",
                items: [
                  { text: "C#", link: "https://github.com/Sylveon76/Nekos.Best-API" },
                  { text: "Dart", link: "https://github.com/Yakiyo/nekos_best_dart" },
                  { text: "Go", link: "https://github.com/Yakiyo/nekos_best.go" },
                  { text: "Haskell", link: "https://github.com/xquantxz/nekos-best.hs" },
                ],
              },
            ],
          },
          {
            text: "Mentions légales",
            items: [
              { text: "Conditions d'utilisation", link: "/legal/tos" },
              { text: "Politique de confidentialité", link: "/legal/privacy" },
              { text: "Retrait DMCA", link: "/legal/dmca" },
            ],
          },
        ],
        lastUpdated: {
          text: "Dernière mise à jour le",
          formatOptions: { dateStyle: "long" },
        },
      },
    },
    ru: {
      label: "Русский",
      lang: "ru",
      title: "NEKOSBEST",
      description: "Официальная документация для разработчиков nekos.best.",
      themeConfig: {
        nav: [
          { text: "Главная", link: "/ru/" },
          { text: "Состояние API", link: "https://status.nekos.best" },
        ],
        sidebar: [
          {
            text: "Начало работы",
            items: [
              { text: "Введение", link: "/ru/getting-started/introduction" },
              { text: "Эндпоинты API", link: "/ru/getting-started/api-endpoints" },
              { text: "Справочник API", link: "/ru/getting-started/api-reference" },
              { text: "Частые вопросы", link: "/ru/getting-started/faq" },
            ],
          },
          {
            text: "Вклад в проект",
            link: "/ru/contribute/contribute",
            items: [
              { text: "Изображения и GIF", link: "/ru/contribute/images-gifs" },
              { text: "Примеры кода", link: "/ru/contribute/code-examples" },
              { text: "Неофициальные библиотеки", link: "/ru/contribute/unofficial-libraries" },
            ],
          },
          {
            text: "Примеры кода",
            items: [
              { text: "BDFD", link: "/ru/examples/bdfd" },
              { text: "JavaScript", link: "/ru/examples/javascript" },
              { text: "Python", link: "/ru/examples/python" },
            ],
          },
          {
            text: "Официальные библиотеки",
            items: [
              { text: "JavaScript", link: "https://github.com/nekos-best/nekos-best.js" },
              { text: "Python", link: "https://github.com/nekos-best/nekos-best.py" },
              { text: "Rust", link: "https://github.com/nekos-best/nekos-best.rs" },
            ],
          },
          {
            text: "Неофициальные библиотеки",
            items: [
              {
                text: "О неофициальных библиотеках",
                link: "/ru/unofficial/unofficial",
                items: [
                  { text: "C#", link: "https://github.com/Sylveon76/Nekos.Best-API" },
                  { text: "Dart", link: "https://github.com/Yakiyo/nekos_best_dart" },
                  { text: "Go", link: "https://github.com/Yakiyo/nekos_best.go" },
                  { text: "Haskell", link: "https://github.com/xquantxz/nekos-best.hs" },
                ],
              },
            ],
          },
          {
            text: "Правовая информация",
            items: [
              { text: "Условия использования", link: "/legal/tos" },
              { text: "Политика конфиденциальности", link: "/legal/privacy" },
              { text: "DMCA", link: "/legal/dmca" },
            ],
          },
        ],
        lastUpdated: {
          text: "Последнее обновление",
          formatOptions: { dateStyle: "long" },
        },
      },
    },
    "zh-CN": {
      label: "简体中文",
      lang: "zh-CN",
      title: "NEKOSBEST",
      description: "nekos.best 官方开发者文档。",
      themeConfig: {
        nav: [
          { text: "首页", link: "/zh-CN/" },
          { text: "服务状态", link: "https://status.nekos.best" },
        ],
        sidebar: [
          {
            text: "快速入门",
            items: [
              { text: "介绍", link: "/zh-CN/getting-started/introduction" },
              { text: "API 端点", link: "/zh-CN/getting-started/api-endpoints" },
              { text: "API 参考", link: "/zh-CN/getting-started/api-reference" },
              { text: "常见问题", link: "/zh-CN/getting-started/faq" },
            ],
          },
          {
            text: "参与贡献",
            link: "/zh-CN/contribute/contribute",
            items: [
              { text: "图片与 GIF", link: "/zh-CN/contribute/images-gifs" },
              { text: "代码示例", link: "/zh-CN/contribute/code-examples" },
              { text: "非官方 SDK", link: "/zh-CN/contribute/unofficial-libraries" },
            ],
          },
          {
            text: "代码示例",
            items: [
              { text: "BDFD", link: "/zh-CN/examples/bdfd" },
              { text: "JavaScript", link: "/zh-CN/examples/javascript" },
              { text: "Python", link: "/zh-CN/examples/python" },
            ],
          },
          {
            text: "官方 SDK 库",
            items: [
              { text: "JavaScript", link: "https://github.com/nekos-best/nekos-best.js" },
              { text: "Python", link: "https://github.com/nekos-best/nekos-best.py" },
              { text: "Rust", link: "https://github.com/nekos-best/nekos-best.rs" },
            ],
          },
          {
            text: "非官方 SDK 库",
            items: [
              {
                text: "关于非官方 SDK",
                link: "/zh-CN/unofficial/unofficial",
                items: [
                  { text: "C#", link: "https://github.com/Sylveon76/Nekos.Best-API" },
                  { text: "Dart", link: "https://github.com/Yakiyo/nekos_best_dart" },
                  { text: "Go", link: "https://github.com/Yakiyo/nekos_best.go" },
                  { text: "Haskell", link: "https://github.com/xquantxz/nekos-best.hs" },
                ],
              },
            ],
          },
          {
            text: "法律条款",
            items: [
              { text: "服务条款", link: "/legal/tos" },
              { text: "隐私政策", link: "/legal/privacy" },
              { text: "DMCA 版权声明", link: "/legal/dmca" },
            ],
          },
        ],
        lastUpdated: {
          text: "最后更新于",
          formatOptions: { dateStyle: "long" },
        },
      },
    },
    ja: {
      label: "日本語",
      lang: "ja",
      title: "NEKOSBEST",
      description: "nekos.best 公式開発者ドキュメント。",
      themeConfig: {
        nav: [
          { text: "ホーム", link: "/ja/" },
          { text: "ステータス", link: "https://status.nekos.best" },
        ],
        sidebar: [
          {
            text: "はじめに",
            items: [
              { text: "概要", link: "/ja/getting-started/introduction" },
              { text: "API エンドポイント", link: "/ja/getting-started/api-endpoints" },
              { text: "API リファレンス", link: "/ja/getting-started/api-reference" },
              { text: "よくある質問", link: "/ja/getting-started/faq" },
            ],
          },
          {
            text: "貢献する",
            link: "/ja/contribute/contribute",
            items: [
              { text: "画像 & GIF", link: "/ja/contribute/images-gifs" },
              { text: "コード例", link: "/ja/contribute/code-examples" },
              { text: "非公式ライブラリ", link: "/ja/contribute/unofficial-libraries" },
            ],
          },
          {
            text: "コード例",
            items: [
              { text: "BDFD", link: "/ja/examples/bdfd" },
              { text: "JavaScript", link: "/ja/examples/javascript" },
              { text: "Python", link: "/ja/examples/python" },
            ],
          },
          {
            text: "公式ライブラリ",
            items: [
              { text: "JavaScript", link: "https://github.com/nekos-best/nekos-best.js" },
              { text: "Python", link: "https://github.com/nekos-best/nekos-best.py" },
              { text: "Rust", link: "https://github.com/nekos-best/nekos-best.rs" },
            ],
          },
          {
            text: "非公式ライブラリ",
            items: [
              {
                text: "非公式ライブラリについて",
                link: "/ja/unofficial/unofficial",
                items: [
                  { text: "C#", link: "https://github.com/Sylveon76/Nekos.Best-API" },
                  { text: "Dart", link: "https://github.com/Yakiyo/nekos_best_dart" },
                  { text: "Go", link: "https://github.com/Yakiyo/nekos_best.go" },
                  { text: "Haskell", link: "https://github.com/xquantxz/nekos-best.hs" },
                ],
              },
            ],
          },
          {
            text: "法的情報",
            items: [
              { text: "利用規約", link: "/legal/tos" },
              { text: "プライバシーポリシー", link: "/legal/privacy" },
              { text: "DMCA 削除請求", link: "/legal/dmca" },
            ],
          },
        ],
        lastUpdated: {
          text: "最終更新日:",
          formatOptions: { dateStyle: "long" },
        },
      },
    },
    pl: {
      label: "Polski",
      lang: "pl",
      title: "NEKOSBEST",
      description: "Oficjalna dokumentacja dla deweloperów nekos.best.",
      themeConfig: {
        nav: [
          { text: "Strona główna", link: "/pl/" },
          { text: "Status", link: "https://status.nekos.best" },
        ],
        sidebar: [
          {
            text: "Pierwsze kroki",
            items: [
              { text: "Wprowadzenie", link: "/pl/getting-started/introduction" },
              { text: "Punkty końcowe API", link: "/pl/getting-started/api-endpoints" },
              { text: "Referencja API", link: "/pl/getting-started/api-reference" },
              { text: "Często zadawane pytania", link: "/pl/getting-started/faq" },
            ],
          },
          {
            text: "Współpraca",
            link: "/pl/contribute/contribute",
            items: [
              { text: "Obrazy i GIF-y", link: "/pl/contribute/images-gifs" },
              { text: "Przykłady kodu", link: "/pl/contribute/code-examples" },
              { text: "Nieoficjalne biblioteki", link: "/pl/contribute/unofficial-libraries" },
            ],
          },
          {
            text: "Przykłady kodu",
            items: [
              { text: "BDFD", link: "/pl/examples/bdfd" },
              { text: "JavaScript", link: "/pl/examples/javascript" },
              { text: "Python", link: "/pl/examples/python" },
            ],
          },
          {
            text: "Oficjalne biblioteki",
            items: [
              { text: "JavaScript", link: "https://github.com/nekos-best/nekos-best.js" },
              { text: "Python", link: "https://github.com/nekos-best/nekos-best.py" },
              { text: "Rust", link: "https://github.com/nekos-best/nekos-best.rs" },
            ],
          },
          {
            text: "Nieoficjalne biblioteki",
            items: [
              {
                text: "O nieoficjalnych bibliotekach",
                link: "/pl/unofficial/unofficial",
                items: [
                  { text: "C#", link: "https://github.com/Sylveon76/Nekos.Best-API" },
                  { text: "Dart", link: "https://github.com/Yakiyo/nekos_best_dart" },
                  { text: "Go", link: "https://github.com/Yakiyo/nekos_best.go" },
                  { text: "Haskell", link: "https://github.com/xquantxz/nekos-best.hs" },
                ],
              },
            ],
          },
          {
            text: "Informacje prawne",
            items: [
              { text: "Regulamin", link: "/legal/tos" },
              { text: "Polityka prywatności", link: "/legal/privacy" },
              { text: "Zgłoszenie DMCA", link: "/legal/dmca" },
            ],
          },
        ],
        lastUpdated: {
          text: "Ostatnia aktualizacja",
          formatOptions: { dateStyle: "long" },
        },
      },
    },
    tr: {
      label: "Türkçe",
      lang: "tr",
      title: "NEKOSBEST",
      description: "nekos.best resmi geliştirici dokümantasyonu.",
      themeConfig: {
        nav: [
          { text: "Ana Sayfa", link: "/tr/" },
          { text: "Durum Sayfası", link: "https://status.nekos.best" },
        ],
        sidebar: [
          {
            text: "Başlangıç",
            items: [
              { text: "Giriş", link: "/tr/getting-started/introduction" },
              { text: "API Uç Noktaları", link: "/tr/getting-started/api-endpoints" },
              { text: "API Referansı", link: "/tr/getting-started/api-reference" },
              { text: "Sıkça Sorulan Sorular", link: "/tr/getting-started/faq" },
            ],
          },
          {
            text: "Katkıda Bulun",
            link: "/tr/contribute/contribute",
            items: [
              { text: "Görseller & GIF'ler", link: "/tr/contribute/images-gifs" },
              { text: "Kod Örnekleri", link: "/tr/contribute/code-examples" },
              { text: "Resmi Olmayan Kütüphaneler", link: "/tr/contribute/unofficial-libraries" },
            ],
          },
          {
            text: "Kod Örnekleri",
            items: [
              { text: "BDFD", link: "/tr/examples/bdfd" },
              { text: "JavaScript", link: "/tr/examples/javascript" },
              { text: "Python", link: "/tr/examples/python" },
            ],
          },
          {
            text: "Resmi Kütüphaneler",
            items: [
              { text: "JavaScript", link: "https://github.com/nekos-best/nekos-best.js" },
              { text: "Python", link: "https://github.com/nekos-best/nekos-best.py" },
              { text: "Rust", link: "https://github.com/nekos-best/nekos-best.rs" },
            ],
          },
          {
            text: "Resmi Olmayan Kütüphaneler",
            items: [
              {
                text: "Resmi Olmayan Kütüphaneler Hakkında",
                link: "/tr/unofficial/unofficial",
                items: [
                  { text: "C#", link: "https://github.com/Sylveon76/Nekos.Best-API" },
                  { text: "Dart", link: "https://github.com/Yakiyo/nekos_best_dart" },
                  { text: "Go", link: "https://github.com/Yakiyo/nekos_best.go" },
                  { text: "Haskell", link: "https://github.com/xquantxz/nekos-best.hs" },
                ],
              },
            ],
          },
          {
            text: "Yasal",
            items: [
              { text: "Hizmet Şartları", link: "/legal/tos" },
              { text: "Gizlilik Politikası", link: "/legal/privacy" },
              { text: "DMCA Kaldırma", link: "/legal/dmca" },
            ],
          },
        ],
        lastUpdated: {
          text: "Son güncelleme",
          formatOptions: { dateStyle: "long" },
        },
      },
    },
    uk: {
      label: "Українська",
      lang: "uk",
      title: "NEKOSBEST",
      description: "Офіційна документація розробника nekos.best.",
      themeConfig: {
        nav: [
          { text: "Головна", link: "/uk/" },
          { text: "Статус", link: "https://status.nekos.best" },
        ],
        sidebar: [
          {
            text: "Початок роботи",
            items: [
              { text: "Вступ", link: "/uk/getting-started/introduction" },
              { text: "Ендпоінти API", link: "/uk/getting-started/api-endpoints" },
              { text: "Довідник API", link: "/uk/getting-started/api-reference" },
              { text: "Часті запитання", link: "/uk/getting-started/faq" },
            ],
          },
          {
            text: "Зробити внесок",
            link: "/uk/contribute/contribute",
            items: [
              { text: "Зображення та GIF", link: "/uk/contribute/images-gifs" },
              { text: "Приклади коду", link: "/uk/contribute/code-examples" },
              { text: "Неофіційні бібліотеки", link: "/uk/contribute/unofficial-libraries" },
            ],
          },
          {
            text: "Приклади коду",
            items: [
              { text: "BDFD", link: "/uk/examples/bdfd" },
              { text: "JavaScript", link: "/uk/examples/javascript" },
              { text: "Python", link: "/uk/examples/python" },
            ],
          },
          {
            text: "Офіційні бібліотеки",
            items: [
              { text: "JavaScript", link: "https://github.com/nekos-best/nekos-best.js" },
              { text: "Python", link: "https://github.com/nekos-best/nekos-best.py" },
              { text: "Rust", link: "https://github.com/nekos-best/nekos-best.rs" },
            ],
          },
          {
            text: "Неофіційні бібліотеки",
            items: [
              {
                text: "Про неофіційні бібліотеки",
                link: "/uk/unofficial/unofficial",
                items: [
                  { text: "C#", link: "https://github.com/Sylveon76/Nekos.Best-API" },
                  { text: "Dart", link: "https://github.com/Yakiyo/nekos_best_dart" },
                  { text: "Go", link: "https://github.com/Yakiyo/nekos_best.go" },
                  { text: "Haskell", link: "https://github.com/xquantxz/nekos-best.hs" },
                ],
              },
            ],
          },
          {
            text: "Правова інформація",
            items: [
              { text: "Умови використання", link: "/legal/tos" },
              { text: "Політика конфіденційності", link: "/legal/privacy" },
              { text: "DMCA", link: "/legal/dmca" },
            ],
          },
        ],
        lastUpdated: {
          text: "Останнє оновлення",
          formatOptions: { dateStyle: "long" },
        },
      },
    },
    owo: {
      label: "OwO (Nya~)",
      lang: "owo",
      title: "NEKOSBEST",
      description: "Officiaw nekos.best devewopew doku-nyaaa! >w<",
      themeConfig: {
        nav: [
          { text: "Home-nyan", link: "/owo/" },
          { text: "Stawtus-nyan", link: "https://status.nekos.best" },
        ],
        sidebar: [
          {
            text: "Getting Stawted nya~",
            items: [
              { text: "Intwoduction (owo)", link: "/owo/getting-started/introduction" },
              { text: "API Endpoints >w<", link: "/owo/getting-started/api-endpoints" },
              { text: "API Wefewence nya~", link: "/owo/getting-started/api-reference" },
              { text: "FWEQUENTWY ASKED QUESTIONS (FAQ)", link: "/owo/getting-started/faq" },
            ],
          },
          {
            text: "Contwibute >w<",
            link: "/owo/contribute/contribute",
            items: [
              { text: "Images & GIFs nya~", link: "/owo/contribute/images-gifs" },
              { text: "Code Exampwes (owo)", link: "/owo/contribute/code-examples" },
              { text: "Unofficiaw Wibwawies", link: "/owo/contribute/unofficial-libraries" },
            ],
          },
          {
            text: "Code Exampwes nya~",
            items: [
              { text: "BDFD", link: "/owo/examples/bdfd" },
              { text: "JavaScript", link: "/owo/examples/javascript" },
              { text: "Python", link: "/owo/examples/python" },
            ],
          },
          {
            text: "Officiaw Wibwawies",
            items: [
              { text: "JavaScript", link: "https://github.com/nekos-best/nekos-best.js" },
              { text: "Python", link: "https://github.com/nekos-best/nekos-best.py" },
              { text: "Rust", link: "https://github.com/nekos-best/nekos-best.rs" },
            ],
          },
          {
            text: "Unofficiaw Wibwawies",
            items: [
              {
                text: "About Unofficiaw Wibwawies",
                link: "/owo/unofficial/unofficial",
                items: [
                  { text: "C#", link: "https://github.com/Sylveon76/Nekos.Best-API" },
                  { text: "Dart", link: "https://github.com/Yakiyo/nekos_best_dart" },
                  { text: "Go", link: "https://github.com/Yakiyo/nekos_best.go" },
                  { text: "Haskell", link: "https://github.com/xquantxz/nekos-best.hs" },
                ],
              },
            ],
          },
          {
            text: "Wegaw Powicy nya~",
            items: [
              { text: "Tewms and Conditions", link: "/legal/tos" },
              { text: "Pwivacy Powicy", link: "/legal/privacy" },
              { text: "DMCA Takedown", link: "/legal/dmca" },
            ],
          },
        ],
        lastUpdated: {
          text: "Wast updated at nya~",
          formatOptions: { dateStyle: "long" },
        },
      },
    },
    ko: {
      label: "한국어",
      lang: "ko",
      title: "NEKOSBEST",
      description: "nekos.best의 공식 개발자 문서.",
      themeConfig: {
        nav: [
          { text: "홈", link: "/ko/" },
          { text: "상태 페이지", link: "https://status.nekos.best" },
        ],
        sidebar: [
          {
            text: "시작하기",
            items: [
              { text: "소개", link: "/ko/getting-started/introduction" },
              { text: "API 엔드포인트", link: "/ko/getting-started/api-endpoints" },
              { text: "API 레퍼런스", link: "/ko/getting-started/api-reference" },
              { text: "자주 묻는 질문", link: "/ko/getting-started/faq" },
            ],
          },
          {
            text: "기여하기",
            link: "/ko/contribute/contribute",
            items: [
              { text: "이미지 & GIF", link: "/ko/contribute/images-gifs" },
              { text: "코드 예제", link: "/ko/contribute/code-examples" },
              { text: "비공식 라이브러리", link: "/ko/contribute/unofficial-libraries" },
            ],
          },
          {
            text: "코드 예제",
            items: [
              { text: "BDFD", link: "/ko/examples/bdfd" },
              { text: "JavaScript", link: "/ko/examples/javascript" },
              { text: "Python", link: "/ko/examples/python" },
            ],
          },
          {
            text: "공식 라이브러리",
            items: [
              { text: "JavaScript", link: "https://github.com/nekos-best/nekos-best.js" },
              { text: "Python", link: "https://github.com/nekos-best/nekos-best.py" },
              { text: "Rust", link: "https://github.com/nekos-best/nekos-best.rs" },
            ],
          },
          {
            text: "비공식 라이브러리",
            items: [
              {
                text: "비공식 라이브러리 정보",
                link: "/ko/unofficial/unofficial",
                items: [
                  { text: "C#", link: "https://github.com/Sylveon76/Nekos.Best-API" },
                  { text: "Dart", link: "https://github.com/Yakiyo/nekos_best_dart" },
                  { text: "Go", link: "https://github.com/Yakiyo/nekos_best.go" },
                  { text: "Haskell", link: "https://github.com/xquantxz/nekos-best.hs" },
                ],
              },
            ],
          },
          {
            text: "법적 고지",
            items: [
              { text: "이용약관", link: "/legal/tos" },
              { text: "개인정보 처리방침", link: "/legal/privacy" },
              { text: "DMCA 게시 중단 요청", link: "/legal/dmca" },
            ],
          },
        ],
        lastUpdated: {
          text: "최근 업데이트: ",
          formatOptions: { dateStyle: "long" },
        },
      },
    },
    "zh-TW": {
      label: "繁體中文",
      lang: "zh-TW",
      title: "NEKOSBEST",
      description: "nekos.best 的官方開發者文件。",
      themeConfig: {
        nav: [
          { text: "首頁", link: "/zh-TW/" },
          { text: "服務狀態", link: "https://status.nekos.best" },
        ],
        sidebar: [
          {
            text: "快速入門",
            items: [
              { text: "簡介", link: "/zh-TW/getting-started/introduction" },
              { text: "API 端點", link: "/zh-TW/getting-started/api-endpoints" },
              { text: "API 參考", link: "/zh-TW/getting-started/api-reference" },
              { text: "常見問題", link: "/zh-TW/getting-started/faq" },
            ],
          },
          {
            text: "參與貢獻",
            link: "/zh-TW/contribute/contribute",
            items: [
              { text: "圖片與 GIF", link: "/zh-TW/contribute/images-gifs" },
              { text: "程式碼範例", link: "/zh-TW/contribute/code-examples" },
              { text: "非官方函式庫", link: "/zh-TW/contribute/unofficial-libraries" },
            ],
          },
          {
            text: "程式碼範例",
            items: [
              { text: "BDFD", link: "/zh-TW/examples/bdfd" },
              { text: "JavaScript", link: "/zh-TW/examples/javascript" },
              { text: "Python", link: "/zh-TW/examples/python" },
            ],
          },
          {
            text: "官方函式庫",
            items: [
              { text: "JavaScript", link: "https://github.com/nekos-best/nekos-best.js" },
              { text: "Python", link: "https://github.com/nekos-best/nekos-best.py" },
              { text: "Rust", link: "https://github.com/nekos-best/nekos-best.rs" },
            ],
          },
          {
            text: "非官方函式庫",
            items: [
              {
                text: "關於非官方函式庫",
                link: "/zh-TW/unofficial/unofficial",
                items: [
                  { text: "C#", link: "https://github.com/Sylveon76/Nekos.Best-API" },
                  { text: "Dart", link: "https://github.com/Yakiyo/nekos_best_dart" },
                  { text: "Go", link: "https://github.com/Yakiyo/nekos_best.go" },
                  { text: "Haskell", link: "https://github.com/xquantxz/nekos-best.hs" },
                ],
              },
            ],
          },
          {
            text: "法律條款",
            items: [
              { text: "服務條款", link: "/legal/tos" },
              { text: "隱私權政策", link: "/legal/privacy" },
              { text: "DMCA 撤下通知", link: "/legal/dmca" },
            ],
          },
        ],
        lastUpdated: {
          text: "最後更新於",
          formatOptions: { dateStyle: "long" },
        },
      },
    },
    it: {
      label: "Italiano",
      lang: "it",
      title: "NEKOSBEST",
      description: "Documentazione ufficiale per sviluppatori di nekos.best.",
      themeConfig: {
        nav: [
          { text: "Home", link: "/it/" },
          { text: "Stato del servizio", link: "https://status.nekos.best" },
        ],
        sidebar: [
          {
            text: "Guida introduttiva",
            items: [
              { text: "Introduzione", link: "/it/getting-started/introduction" },
              { text: "Endpoint API", link: "/it/getting-started/api-endpoints" },
              { text: "Riferimento API", link: "/it/getting-started/api-reference" },
              { text: "Domande frequenti", link: "/it/getting-started/faq" },
            ],
          },
          {
            text: "Contribuisci",
            link: "/it/contribute/contribute",
            items: [
              { text: "Immagini e GIF", link: "/it/contribute/images-gifs" },
              { text: "Esempi di codice", link: "/it/contribute/code-examples" },
              { text: "Librerie non ufficiali", link: "/it/contribute/unofficial-libraries" },
            ],
          },
          {
            text: "Esempi di codice",
            items: [
              { text: "BDFD", link: "/it/examples/bdfd" },
              { text: "JavaScript", link: "/it/examples/javascript" },
              { text: "Python", link: "/it/examples/python" },
            ],
          },
          {
            text: "Librerie ufficiali",
            items: [
              { text: "JavaScript", link: "https://github.com/nekos-best/nekos-best.js" },
              { text: "Python", link: "https://github.com/nekos-best/nekos-best.py" },
              { text: "Rust", link: "https://github.com/nekos-best/nekos-best.rs" },
            ],
          },
          {
            text: "Librerie non ufficiali",
            items: [
              {
                text: "Informazioni sulle librerie non ufficiali",
                link: "/it/unofficial/unofficial",
                items: [
                  { text: "C#", link: "https://github.com/Sylveon76/Nekos.Best-API" },
                  { text: "Dart", link: "https://github.com/Yakiyo/nekos_best_dart" },
                  { text: "Go", link: "https://github.com/Yakiyo/nekos_best.go" },
                  { text: "Haskell", link: "https://github.com/xquantxz/nekos-best.hs" },
                ],
              },
            ],
          },
          {
            text: "Note legali",
            items: [
              { text: "Termini di servizio", link: "/legal/tos" },
              { text: "Informativa sulla privacy", link: "/legal/privacy" },
              { text: "Notifica DMCA", link: "/legal/dmca" },
            ],
          },
        ],
        lastUpdated: {
          text: "Ultimo aggiornamento il",
          formatOptions: { dateStyle: "long" },
        },
      },
    },
    ar: {
      label: "العربية",
      lang: "ar",
      dir: "rtl",
      title: "NEKOSBEST",
      description: "توثيق المطورين الرسمي لـ nekos.best.",
      themeConfig: {
        nav: [
          { text: "الرئيسية", link: "/ar/" },
          { text: "صفحة الحالة", link: "https://status.nekos.best" },
        ],
        sidebar: [
          {
            text: "البداية",
            items: [
              { text: "مقدمة", link: "/ar/getting-started/introduction" },
              { text: "نقاط نهاية API", link: "/ar/getting-started/api-endpoints" },
              { text: "مرجع API", link: "/ar/getting-started/api-reference" },
              { text: "الأسئلة الشائعة", link: "/ar/getting-started/faq" },
            ],
          },
          {
            text: "المساهمة",
            link: "/ar/contribute/contribute",
            items: [
              { text: "الصور والصور المتحركة", link: "/ar/contribute/images-gifs" },
              { text: "أمثلة البرمجة", link: "/ar/contribute/code-examples" },
              { text: "المكتبات غير الرسمية", link: "/ar/contribute/unofficial-libraries" },
            ],
          },
          {
            text: "أمثلة البرمجة",
            items: [
              { text: "BDFD", link: "/ar/examples/bdfd" },
              { text: "JavaScript", link: "/ar/examples/javascript" },
              { text: "Python", link: "/ar/examples/python" },
            ],
          },
          {
            text: "المكتبات الرسمية",
            items: [
              { text: "JavaScript", link: "https://github.com/nekos-best/nekos-best.js" },
              { text: "Python", link: "https://github.com/nekos-best/nekos-best.py" },
              { text: "Rust", link: "https://github.com/nekos-best/nekos-best.rs" },
            ],
          },
          {
            text: "المكتبات غير الرسمية",
            items: [
              {
                text: "حول المكتبات غير الرسمية",
                link: "/ar/unofficial/unofficial",
                items: [
                  { text: "C#", link: "https://github.com/Sylveon76/Nekos.Best-API" },
                  { text: "Dart", link: "https://github.com/Yakiyo/nekos_best_dart" },
                  { text: "Go", link: "https://github.com/Yakiyo/nekos_best.go" },
                  { text: "Haskell", link: "https://github.com/xquantxz/nekos-best.hs" },
                ],
              },
            ],
          },
          {
            text: "الشروط القانونية",
            items: [
              { text: "شروط الخدمة", link: "/legal/tos" },
              { text: "سياسة الخصوصية", link: "/legal/privacy" },
              { text: "إشعار DMCA", link: "/legal/dmca" },
            ],
          },
        ],
        lastUpdated: {
          text: "آخر تحديث في",
          formatOptions: { dateStyle: "long" },
        },
      },
    },
  },

  themeConfig: {
    search: { provider: "local" },

    nav: [
      { text: "Home", link: "/" },
      { text: "Status Page", link: "https://status.nekos.best" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Introduction", link: "/getting-started/introduction" },
          { text: "API Endpoints", link: "/getting-started/api-endpoints" },
          { text: "API Reference", link: "/getting-started/api-reference" },
          { text: "Frequently Asked Questions", link: "/getting-started/faq" },
        ],
      },
      {
        text: "Contribute",
        link: "/contribute/contribute",
        items: [
          { text: "Images & GIFs", link: "/contribute/images-gifs" },
          { text: "Code Examples", link: "/contribute/code-examples" },
          { text: "Unofficial Libraries", link: "/contribute/unofficial-libraries" },
        ],
      },
      {
        text: "Code Examples",
        items: [
          { text: "BDFD", link: "/examples/bdfd" },
          { text: "JavaScript", link: "/examples/javascript" },
          { text: "Python", link: "/examples/python" },
        ],
      },
      {
        text: "Official Libraries",
        items: [
          { text: "JavaScript", link: "https://github.com/nekos-best/nekos-best.js" },
          { text: "Python", link: "https://github.com/nekos-best/nekos-best.py" },
          { text: "Rust", link: "https://github.com/nekos-best/nekos-best.rs" },
        ],
      },
      {
        text: "Unofficial Libraries",
        items: [
          {
            text: "About Unofficial Libraries",
            link: "/unofficial/unofficial",
            items: [
              { text: "C#", link: "https://github.com/Sylveon76/Nekos.Best-API" },
              { text: "Dart", link: "https://github.com/Yakiyo/nekos_best_dart" },
              { text: "Go", link: "https://github.com/Yakiyo/nekos_best.go" },
              { text: "Haskell", link: "https://github.com/xquantxz/nekos-best.hs" },
            ],
          },
        ],
      },
      {
        text: "Legal",
        items: [
          { text: "Terms and Conditions", link: "/legal/tos" },
          { text: "Privacy Policy", link: "/legal/privacy" },
          { text: "DMCA Takedown", link: "/legal/dmca" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/nekos-best/nekos-best-docs" },
      { icon: "discord", link: "https://nekos.best/discord?ref=docs" },
    ],

    lastUpdated: {
      text: "Last updated at",
      formatOptions: { dateStyle: "long" },
    },
  },

  head: [
    [
      "script",
      {
        async: "",
        defer: "",
        "data-website-id": "3e079cfa-6704-4cea-bf37-8c092faf18d3",
        src: "https://alycs.nekos.best/script.js",
      },
    ],
    ["link", { rel: "icon", href: "/logos/favicon.ico" }],
  ],

  sitemap: {
    hostname: "https://docs.nekos.best",
  },

  lastUpdated: true,

  markdown: {
    config(md) {
      md.use(groupIconMdPlugin);
    },
  },

  vite: {
    plugins: [groupIconVitePlugin()],
  },
});
