<template>
  <transition name="fade">
    <button v-if="showButton" @click="scrollToTop" class="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-accent text-gray-900 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all z-40 glow-hover" aria-label="Scroll to top">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>