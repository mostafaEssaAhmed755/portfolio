import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useLocaleStore = defineStore('locale', () => {
  // State
  const locale = ref(localStorage.getItem('lang') || 'en')

  // Computed
  const currentLocale = computed(() => locale.value)
  const isRTL = computed(() => locale.value === 'ar')

  // Actions
  const setLocale = (newLocale) => {
    locale.value = newLocale
    localStorage.setItem('lang', newLocale)

    // Update document attributes
    document.documentElement.setAttribute('data-lang', newLocale)
    document.documentElement.setAttribute('dir', newLocale === 'ar' ? 'rtl' : 'ltr')
    document.documentElement.setAttribute('lang', newLocale)

    // Update i18n locale if available
    if (window.i18n) {
      window.i18n.global.locale.value = newLocale
    }
    
    // Trigger a custom event for components to react to locale changes
    window.dispatchEvent(new CustomEvent('locale-changed', { detail: newLocale }))
  }

  const toggleLocale = () => {
    const newLocale = locale.value === 'en' ? 'ar' : 'en'
    setLocale(newLocale)
  }

  const init = () => {
    setLocale(locale.value)
  }

  return {
    locale,
    currentLocale,
    isRTL,
    setLocale,
    toggleLocale,
    init
  }
}) 