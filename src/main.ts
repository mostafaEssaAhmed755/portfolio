import { createApp } from "vue";
import App from "./App.vue";
import "./styles/style.css";
import "./styles/theme.css";

import { createI18n } from "vue-i18n";
import ar from "./locales/ar.json";

const i18n = createI18n({
  legacy: false,
  locale: "ar",
  fallbackLocale: "en",
  messages: {
    ar,
  },
  missing: (_locale, key) => key, // يُرجع المفتاح نفسه إذا لم توجد ترجمة
});

const app = createApp(App);

// 👇 تسجيل دالة الترجمة كخاصية عالمية
app.config.globalProperties.t = i18n.global.t;

app.use(i18n);
app.mount("#app");
