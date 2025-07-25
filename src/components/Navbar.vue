<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="nav-container">
      <div class="nav-logo">
        <a href="#home">{{ __('hero.name') }}</a>
      </div>
      
      <div class="nav-menu" :class="{ 'active': isMenuOpen }">
        <a 
          v-for="item in navItems" 
          :key="item.id"
          :href="`#${item.id}`" 
          class="nav-link"
          :class="{ 'active': activeSection === item.id }"
          @click="closeMenu"
        >
          {{ __(`nav.${item.id}`) }}
        </a>
      </div>
      
      <div class="nav-actions">
        <!-- Theme Toggle -->
        <button class="nav-action-btn" @click="toggleTheme" :title="__(`theme.${themeStore.theme}`)">
          <i :class="themeIcon"></i>
        </button>
        
        <!-- Language Toggle -->
        <button class="nav-action-btn" @click="toggleLanguage" :title="__(`language.${localeStore.currentLocale}`)">
          <i class="fas fa-globe"></i>
        </button>
        
        <!-- Mobile Menu Toggle -->
        <button class="nav-toggle" :class="{ 'active': isMenuOpen }" @click="toggleMenu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { useLocaleStore } from '@/stores/locale'
import { useTranslation } from '@/composables/useTranslation'

// Stores
const themeStore = useThemeStore()
const localeStore = useLocaleStore()
const { __ } = useTranslation()

// Reactive data
const isScrolled = ref(false)
const isMenuOpen = ref(false)
const activeSection = ref('home')

// Navigation items
const navItems = [
  { id: 'home' },
  { id: 'about' },
  { id: 'experience' },
  { id: 'projects' },
  { id: 'skills' },
  { id: 'contact' }
]

// Computed properties
const themeIcon = computed(() => {
  const icons = {
    light: 'fas fa-moon',
    dark: 'fas fa-sun',
    system: 'fas fa-desktop'
  }
  return icons[themeStore.theme] || icons.system
})

// Methods
const toggleTheme = () => {
  themeStore.toggleTheme()
}

const toggleLanguage = () => {
  localeStore.toggleLocale()
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100
  
  // Update active section
  const sections = navItems.map(item => item.id)
  const scrollPosition = window.scrollY + 200
  
  for (const sectionId of sections.reverse()) {
    const element = document.getElementById(sectionId)
    if (element && element.offsetTop <= scrollPosition) {
      activeSection.value = sectionId
      break
    }
  }
}

// Lifecycle
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  z-index: 1000;
  transition: all var(--transition-normal);
}

[data-theme="dark"] .navbar {
  background-color: rgba(15, 23, 42, 0.95);
}

.navbar.scrolled {
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: var(--shadow-md);
}

[data-theme="dark"] .navbar.scrolled {
  background-color: rgba(15, 23, 42, 0.98);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-sm);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.nav-logo a {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--text-primary);
}

.nav-menu {
  display: flex;
  gap: var(--spacing-lg);
}

.nav-link {
  color: var(--text-secondary);
  font-weight: 500;
  transition: color var(--transition-fast);
  position: relative;
}

.nav-link:hover,
.nav-link.active {
  color: var(--primary-color);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: width var(--transition-normal);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.nav-action-btn {
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: var(--font-size-lg);
  cursor: pointer;
  padding: var(--spacing-xs);
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}

.nav-action-btn:hover {
  color: var(--primary-color);
  background-color: var(--bg-secondary);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  background: none;
  border: none;
  padding: var(--spacing-xs);
}

.bar {
  width: 25px;
  height: 3px;
  background-color: var(--text-primary);
  margin: 3px 0;
  transition: var(--transition-fast);
}

.nav-toggle.active .bar:nth-child(2) {
  opacity: 0;
}

.nav-toggle.active .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.nav-toggle.active .bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* RTL Support */
[dir="rtl"] .nav-link::after {
  left: auto;
  right: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background-color: var(--bg-primary);
    width: 100%;
    text-align: center;
    transition: 0.3s;
    box-shadow: var(--shadow-md);
    padding: var(--spacing-lg) 0;
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-toggle {
    display: flex;
  }
}

@media (max-width: 480px) {
  .nav-actions {
    gap: var(--spacing-xs);
  }
  
  .nav-action-btn {
    font-size: var(--font-size-base);
  }
}
</style> 