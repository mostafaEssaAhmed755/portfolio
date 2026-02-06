<template>
  <nav :class="['fixed top-0 left-0 right-0 z-50 transition-all duration-300', scrolled ? 'glass shadow-lg py-3' : 'bg-transparent py-5']">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <router-link to="/" class="text-2xl font-bold font-display">
          <span class="gradient-text">Mostafa</span>
          <span class="text-gray-900 dark:text-white">.</span>
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          <a v-for="item in navItems" :key="item.id" :href="item.href" class="nav-link" @click.prevent="scrollToSection(item.href)">
            {{ t.nav[item.id] }}
          </a>
        </div>

        <!-- Controls -->
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <!-- Language Toggle -->
          <button @click="toggleLanguage" class="p-2 rounded-lg glass hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all" :title="currentLang === 'en' ? 'العربية' : 'English'">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
          </button>

          <!-- Dark Mode Toggle -->
          <button @click="toggleDarkMode" class="p-2 rounded-lg glass hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all" :title="darkMode ? 'Light Mode' : 'Dark Mode'">
            <svg v-if="darkMode" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>

          <!-- Mobile Menu Button -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 rounded-lg glass hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all">
            <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition name="slide-down">
        <div v-if="mobileMenuOpen" class="md:hidden mt-4 glass rounded-2xl p-6 space-y-4">
          <a v-for="item in navItems" :key="item.id" :href="item.href" class="block py-2 text-lg font-medium hover:text-accent transition-colors" @click.prevent="scrollToSection(item.href); mobileMenuOpen = false">
            {{ t.nav[item.id] }}
          </a>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t, currentLang, darkMode, toggleLanguage, toggleDarkMode } = useLanguage()

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const navItems = [
  { id: 'about', href: '#about' },
  { id: 'skills', href: '#skills' },
  { id: 'experience', href: '#experience' },
  { id: 'projects', href: '#projects' },
  { id: 'services', href: '#services' },
  { id: 'contact', href: '#contact' }
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const scrollToSection = (href) => {
  const element = document.querySelector(href)
  if (element) {
    const offset = 80
    const top = element.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.nav-link {
  @apply text-gray-600 dark:text-gray-300 hover:text-accent transition-colors relative;
}

.nav-link::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300;
}

.nav-link:hover::after {
  @apply w-full;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>