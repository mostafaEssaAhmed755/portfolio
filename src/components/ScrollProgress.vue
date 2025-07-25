<template>
  <div class="scroll-progress">
    <div class="progress-bar" :style="{ width: scrollProgress + '%' }"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrollProgress = ref(0)

const updateScrollProgress = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = (scrollTop / scrollHeight) * 100
}

onMounted(async () => {
  window.addEventListener('scroll', updateScrollProgress)

  // Initialize anime.js for enhanced scroll progress animations
  let anime = null
  try {
    const animeModule = await import('animejs')
    anime = animeModule.default
    
    if (anime) {
      // Animate progress bar appearance
      anime({
        targets: '.progress-bar',
        scaleX: [0, 1],
        duration: 1000,
        easing: 'easeOutQuart'
      })

      // Add continuous pulse effect
      anime({
        targets: '.progress-bar',
        opacity: [0.8, 1, 0.8],
        duration: 2000,
        easing: 'easeInOutSine',
        loop: true
      })
    }
  } catch (error) {
    console.warn('Could not load anime.js for scroll progress animations:', error)
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress)
})
</script>

<style scoped>
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: transparent;
  z-index: 10000;
  pointer-events: none;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  transition: width 0.1s ease;
  box-shadow: 0 0 10px rgba(37, 99, 235, 0.5);
}

/* RTL Support */
[dir="rtl"] .progress-bar {
  background: linear-gradient(90deg, var(--accent-color), var(--primary-color));
}
</style> 