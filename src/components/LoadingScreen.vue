<template>
  <div v-if="isLoading" class="loading-screen">
    <div class="loading-content">
      <div class="loading-logo">
        <i class="fas fa-code"></i>
      </div>
      <div class="loading-text">
        <h2>{{ __('hero.name') }}</h2>
        <p>{{ __('hero.title') }}</p>
      </div>
      <div class="loading-spinner">
        <div class="spinner"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useTranslation } from '@/composables/useTranslation'

const { __ } = useTranslation()
const isLoading = ref(true)

onMounted(async () => {
  // Initialize anime.js for loading animations
  let anime = null
  try {
    const animeModule = await import('animejs')
    anime = animeModule.default
    
    // Animate loading elements
    if (anime) {
      // Animate logo with bounce effect
      anime({
        targets: '.loading-logo',
        scale: [0, 1],
        rotate: [180, 0],
        duration: 1000,
        easing: 'easeOutBack'
      })

      // Animate text with typewriter effect
      const title = document.querySelector('.loading-text h2')
      const subtitle = document.querySelector('.loading-text p')
      
      if (title) {
        const titleText = title.textContent
        title.textContent = ''
        title.style.opacity = '1'
        
        let i = 0
        const typeTitle = () => {
          if (i < titleText.length) {
            title.textContent += titleText.charAt(i)
            i++
            setTimeout(typeTitle, 100)
          } else {
            // Start subtitle animation
            if (subtitle) {
              const subtitleText = subtitle.textContent
              subtitle.textContent = ''
              subtitle.style.opacity = '1'
              
              let j = 0
              const typeSubtitle = () => {
                if (j < subtitleText.length) {
                  subtitle.textContent += subtitleText.charAt(j)
                  j++
                  setTimeout(typeSubtitle, 50)
                }
              }
              typeSubtitle()
            }
          }
        }
        typeTitle()
      }

      // Animate spinner with enhanced effects
      anime({
        targets: '.spinner',
        scale: [0, 1],
        rotate: [0, 360],
        duration: 1000,
        easing: 'easeOutQuart'
      })

      // Add continuous pulse to logo
      anime({
        targets: '.loading-logo',
        scale: [1, 1.1, 1],
        duration: 2000,
        easing: 'easeInOutSine',
        loop: true
      })
    }
  } catch (error) {
    console.warn('Could not load anime.js for loading animations:', error)
  }

  // Simulate loading time and hide loading screen
  setTimeout(() => {
    if (anime) {
      // Fade out animation
      anime({
        targets: '.loading-screen',
        opacity: [1, 0],
        scale: [1, 1.1],
        duration: 500,
        easing: 'easeOutQuad',
        complete: () => {
          isLoading.value = false
        }
      })
    } else {
      isLoading.value = false
    }
  }, 2500)
  
  // Fallback: hide loading screen after 4 seconds maximum
  setTimeout(() => {
    isLoading.value = false
  }, 4000)
})
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: opacity 0.5s ease, visibility 0.5s ease;
}

.loading-content {
  text-align: center;
  animation: fadeInUp 1s ease;
}

.loading-logo {
  font-size: 4rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  animation: pulse 2s infinite;
}

.loading-text h2 {
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-size: 2rem;
}

.loading-text p {
  color: var(--text-secondary);
  font-size: 1.1rem;
}

.loading-spinner {
  margin-top: 2rem;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--border-color);
  border-top: 3px solid var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* RTL Support */
[dir="rtl"] .loading-content {
  text-align: center;
}
</style> 