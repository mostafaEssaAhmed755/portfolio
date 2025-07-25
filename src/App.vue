<template>
  <div id="app" :class="appClasses">
    <!-- Loading Screen -->
    <LoadingScreen />
    
    <!-- Navigation -->
    <Navbar />
    
    <!-- Main Content -->
    <main>
      <router-view />
    </main>
    
    <!-- Footer -->
    <Footer />
    
    <!-- Theme and Language Switcher -->
    <ThemeSwitcher />
    <LanguageSwitcher />
    
    <!-- Scroll Progress -->
    <ScrollProgress />
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { useLocaleStore } from '@/stores/locale'
import { useAnimations } from '@/composables/useAnimations'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import LoadingScreen from '@/components/LoadingScreen.vue'
import ScrollProgress from '@/components/ScrollProgress.vue'

// Stores
const themeStore = useThemeStore()
const localeStore = useLocaleStore()

// Initialize animations
const { initAnimations } = useAnimations()

// Computed properties
const appClasses = computed(() => [
  `theme-${themeStore.currentTheme}`,
  `lang-${localeStore.currentLocale}`,
  { 'rtl': localeStore.currentLocale === 'ar' }
])

onMounted(() => {
  console.log('App mounted, initializing...')
  
  // Initialize animations after a short delay to ensure DOM is ready
  setTimeout(async () => {
    try {
      console.log('Starting animations...')
      await initAnimations()
      console.log('Animations initialized successfully')
    } catch (error) {
      console.error('Animation initialization error:', error)
      // Force show all elements
      document.querySelectorAll('.hero-title, .hero-subtitle, .hero-description, .hero-buttons .btn, .profile-card, .navbar, .theme-switcher, .language-switcher, .section-title, .section-subtitle, .about-description, .highlight-item, .timeline-item, .project-card, .skill-category, .contact-item, .contact-form .form-group').forEach(el => {
        if (el) {
          el.style.opacity = '1'
          el.style.transform = 'none'
        }
      })
    }
  }, 500)
})
</script>

<style scoped>
#app {
  min-height: 100vh;
  transition: all 0.3s ease;
}

main {
  flex: 1;
}

/* RTL Support */
.rtl {
  direction: rtl;
  text-align: right;
}

/* Theme Transitions */
.theme-light {
  color-scheme: light;
}

.theme-dark {
  color-scheme: dark;
}

.theme-system {
  color-scheme: light dark;
}
</style> 