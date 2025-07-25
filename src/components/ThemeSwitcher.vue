<template>
  <div class="theme-switcher">
    <div class="theme-menu" :class="{ 'open': isOpen }">
      <button 
        v-for="theme in themes" 
        :key="theme.value"
        class="theme-option"
        :class="{ 'active': themeStore.theme === theme.value }"
        @click="setTheme(theme.value)"
      >
        <i :class="theme.icon"></i>
        <span>{{ __(`theme.${theme.value}`) }}</span>
      </button>
    </div>
    
    <button class="theme-toggle" @click="toggleMenu" :title="__(`theme.${themeStore.theme}`)">
      <i :class="currentThemeIcon"></i>
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { useTranslation } from '@/composables/useTranslation'

const { __ } = useTranslation()

const themeStore = useThemeStore()
const isOpen = ref(false)

const themes = [
  { value: 'light', icon: 'fas fa-sun' },
  { value: 'dark', icon: 'fas fa-moon' },
  { value: 'system', icon: 'fas fa-desktop' }
]

const currentThemeIcon = computed(() => {
  const icons = {
    light: 'fas fa-sun',
    dark: 'fas fa-moon',
    system: 'fas fa-desktop'
  }
  return icons[themeStore.theme] || icons.system
})

const setTheme = async (theme) => {
  // Add animation before changing theme
  let anime = null
  try {
    const animeModule = await import('animejs')
    anime = animeModule.default
    
    if (anime) {
      // Animate theme change
      anime({
        targets: '.theme-toggle',
        rotate: [0, 360],
        scale: [1, 1.2, 1],
        duration: 500,
        easing: 'easeOutBack'
      })
    }
  } catch (error) {
    console.warn('Could not load anime.js for theme change animations:', error)
  }
  
  themeStore.setTheme(theme)
  isOpen.value = false
}

const toggleMenu = async () => {
  isOpen.value = !isOpen.value
  
  // Add anime.js animations
  let anime = null
  try {
    const animeModule = await import('animejs')
    anime = animeModule.default
    
    if (anime && isOpen.value) {
      // Animate menu opening
      anime({
        targets: '.theme-option',
        opacity: [0, 1],
        translateX: [20, 0],
        scale: [0.8, 1],
        duration: 300,
        delay: anime.stagger(50),
        easing: 'easeOutBack'
      })
    }
  } catch (error) {
    console.warn('Could not load anime.js for theme switcher animations:', error)
  }
}
</script>

<style scoped>
.theme-switcher {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.theme-toggle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--primary-color);
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

.theme-toggle:hover {
  transform: scale(1.1);
  box-shadow: var(--shadow-xl);
}

.theme-menu {
  position: absolute;
  bottom: 60px;
  right: 0;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  padding: var(--spacing-sm);
  min-width: 150px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all var(--transition-fast);
}

.theme-menu.open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.theme-option {
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

.theme-option:hover {
  background: var(--bg-secondary);
}

.theme-option.active {
  background: var(--primary-color);
  color: white;
}

.theme-option i {
  width: 16px;
  text-align: center;
}

/* RTL Support */
[dir="rtl"] .theme-switcher {
  right: auto;
  left: 20px;
}

[dir="rtl"] .theme-menu {
  right: auto;
  left: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .theme-switcher {
    bottom: 10px;
    right: 10px;
  }
  
  [dir="rtl"] .theme-switcher {
    right: auto;
    left: 10px;
  }
}
</style> 