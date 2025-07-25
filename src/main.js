import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import { useThemeStore } from './stores/theme'
import { useLocaleStore } from './stores/locale'
import translationPlugin from './plugins/translation'

// Import translations
import en from './locales/en.json'
import ar from './locales/ar.json'

// Import global styles
import './assets/styles/main.css'

// Create i18n instance
const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    ar
  }
})

// Create Pinia store
const pinia = createPinia()

// Create Vue app
const app = createApp(App)

// Use plugins
app.use(pinia)
app.use(router)
app.use(i18n)
app.use(translationPlugin, i18n)

// Initialize stores
const themeStore = useThemeStore()
const localeStore = useLocaleStore()

// Initialize theme and locale
themeStore.init()
localeStore.init()

// Set initial i18n locale
i18n.global.locale.value = localeStore.currentLocale



// Make i18n available globally for the store
window.i18n = i18n

// Mount app
console.log('Mounting app...')
app.mount('#app')
console.log('App mounted successfully') 