<template>
  <div class="language-switcher">
    <div class="language-menu" :class="{ 'open': isOpen }">
      <button 
        v-for="lang in languages" 
        :key="lang.value"
        class="language-option"
        :class="{ 'active': localeStore.currentLocale === lang.value }"
        @click="setLanguage(lang.value)"
      >
        <span class="flag">{{ lang.flag }}</span>
        <span>{{ __(`language.${lang.value}`) }}</span>
      </button>
    </div>
    
    <button class="language-toggle" @click="toggleMenu" :title="__(`language.${localeStore.currentLocale}`)">
      <span class="flag">{{ currentLanguageFlag }}</span>
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLocaleStore } from '@/stores/locale'
import { useTranslation } from '@/composables/useTranslation'

const { __ } = useTranslation()

const localeStore = useLocaleStore()
const isOpen = ref(false)

const languages = [
  { value: 'en', flag: '🇺🇸' },
  { value: 'ar', flag: '🇪🇬' }
]

const currentLanguageFlag = computed(() => {
  const lang = languages.find(l => l.value === localeStore.currentLocale)
  return lang ? lang.flag : '🌐'
})

const setLanguage = (lang) => {
  localeStore.setLocale(lang)
  isOpen.value = false
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.language-switcher {
  position: fixed;
  bottom: 20px;
  right: 80px;
  z-index: 1000;
}

.language-toggle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--accent-color);
  color: white;
  border: none;
  cursor: pointer;
  font-size: var(--font-size-lg);
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
}

.language-toggle:hover {
  transform: scale(1.1);
  box-shadow: var(--shadow-xl);
}

.language-menu {
  position: absolute;
  bottom: 60px;
  right: 0;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  padding: var(--spacing-sm);
  min-width: 120px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all var(--transition-fast);
}

.language-menu.open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.language-option {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  width: 100%;
  padding: var(--spacing-sm);
  border: none;
  background: none;
  color: var(--text-primary);
  cursor: pointer;
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
  font-size: var(--font-size-sm);
}

.language-option:hover {
  background: var(--bg-secondary);
}

.language-option.active {
  background: var(--accent-color);
  color: white;
}

.flag {
  font-size: var(--font-size-lg);
  width: 20px;
  text-align: center;
}

/* RTL Support */
[dir="rtl"] .language-switcher {
  right: auto;
  left: 80px;
}

[dir="rtl"] .language-menu {
  right: auto;
  left: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .language-switcher {
    bottom: 10px;
    right: 70px;
  }
  
  [dir="rtl"] .language-switcher {
    right: auto;
    left: 70px;
  }
}
</style> 