import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { usePreferredDark } from '@vueuse/core'

export const useThemeStore = defineStore('theme', () => {
  // State
  const theme = ref(localStorage.getItem('theme') || 'system')
  const preferredDark = usePreferredDark()

  // Computed
  const currentTheme = computed(() => {
    if (theme.value === 'system') {
      return preferredDark.value ? 'dark' : 'light'
    }
    return theme.value
  })

  // Actions
  const setTheme = (newTheme) => {
    theme.value = newTheme
    localStorage.setItem('theme', newTheme)
    applyTheme()
  }

  const toggleTheme = () => {
    const themes = ['light', 'dark', 'system']
    const currentIndex = themes.indexOf(theme.value)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }

  const applyTheme = () => {
    const activeTheme = currentTheme.value
    document.documentElement.setAttribute('data-theme', activeTheme)
    
    // Update meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]')
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', activeTheme === 'dark' ? '#0f172a' : '#ffffff')
    }
  }

  const init = () => {
    applyTheme()
    
    // Watch for system theme changes
    watch(preferredDark, () => {
      if (theme.value === 'system') {
        applyTheme()
      }
    })
  }

  return {
    theme,
    currentTheme,
    setTheme,
    toggleTheme,
    applyTheme,
    init
  }
}) 