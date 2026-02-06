import { ref, computed, watch } from "vue";
import { translations } from "../data/translations";

const currentLang = ref(localStorage.getItem("language") || "en");
const darkMode = ref(localStorage.getItem("darkMode") === "true");

export function useLanguage() {
  const t = computed(() => translations[currentLang.value]);

  const isRTL = computed(() => currentLang.value === "ar");

  const toggleLanguage = () => {
    currentLang.value = currentLang.value === "en" ? "ar" : "en";
    localStorage.setItem("language", currentLang.value);
    document.documentElement.setAttribute("dir", isRTL.value ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", currentLang.value);
  };

  const toggleDarkMode = () => {
    darkMode.value = !darkMode.value;
    localStorage.setItem("darkMode", darkMode.value.toString());
    updateDarkMode();
  };

  const updateDarkMode = () => {
    if (darkMode.value) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Initialize on mount
  const init = () => {
    document.documentElement.setAttribute("dir", isRTL.value ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", currentLang.value);
    updateDarkMode();
  };

  // Watch for changes
  watch(currentLang, () => {
    document.documentElement.setAttribute("dir", isRTL.value ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", currentLang.value);
  });

  watch(darkMode, updateDarkMode);

  return {
    t,
    currentLang,
    darkMode,
    isRTL,
    toggleLanguage,
    toggleDarkMode,
    init,
  };
}
