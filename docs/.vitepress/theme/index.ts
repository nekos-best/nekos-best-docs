// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import "./custom.css";
import "virtual:group-icons.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router }) {
    if (typeof window !== "undefined") {
      const supportedLangs = ["de", "id", "pt", "es", "vi", "fr", "ru", "zh-CN", "ja", "pl", "tr", "uk", "owo", "ko", "zh-TW", "it", "ar"];

      // Track & save language choice when user navigates
      router.onAfterRouteUpdate = (to) => {
        const path = typeof to === "string" ? to : to.path || "";
        const seg = path.split("/")[1];
        if (supportedLangs.includes(seg)) {
          localStorage.setItem("preferred_lang", seg);
        } else if (path === "/" || path === "/index.html") {
          localStorage.setItem("preferred_lang", "en");
        }
      };

      // Auto-redirect first-time visitors on root homepage '/' based on browser language
      const savedLang = localStorage.getItem("preferred_lang");
      const currentPath = window.location.pathname;
      if (!savedLang && (currentPath === "/" || currentPath === "/index.html")) {
        const userLang = (navigator.language || "").toLowerCase();
        const prefix = userLang.split("-")[0];
        const langMap: Record<string, string> = {
          de: "de",
          id: "id",
          pt: "pt",
          es: "es",
          vi: "vi",
          fr: "fr",
          ru: "ru",
          ja: "ja",
          pl: "pl",
          tr: "tr",
          uk: "uk",
          ko: "ko",
          it: "it",
          ar: "ar",
        };
        let matched = langMap[prefix] || null;
        if (!matched && userLang.includes("zh")) {
          matched = (userLang.includes("tw") || userLang.includes("hk") || userLang.includes("hant")) ? "zh-TW" : "zh-CN";
        }
        if (matched && supportedLangs.includes(matched)) {
          window.location.replace(`/${matched}/`);
        }
      }
    }
  },
} satisfies Theme;
