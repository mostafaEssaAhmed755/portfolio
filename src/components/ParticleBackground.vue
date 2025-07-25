<template>
  <div class="particle-background">
    <div 
      v-for="particle in particles" 
      :key="particle.id"
      class="particle"
      :style="{
        left: particle.x + '%',
        top: particle.y + '%',
        animationDelay: particle.delay + 's',
        animationDuration: particle.duration + 's'
      }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const particles = ref([])

onMounted(async () => {
  // Generate random particles
  for (let i = 0; i < 30; i++) {
    particles.value.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10
    })
  }

  // Initialize anime.js for enhanced particle animations
  let anime = null
  try {
    const animeModule = await import('animejs')
    anime = animeModule.default
    
    if (anime) {
      // Enhanced particle animations
      anime({
        targets: '.particle',
        translateX: () => anime.random(-200, 200),
        translateY: () => anime.random(-200, 200),
        scale: () => anime.random(0.5, 2),
        opacity: () => anime.random(0.1, 0.6),
        rotate: () => anime.random(0, 360),
        duration: () => anime.random(4000, 8000),
        delay: anime.stagger(100),
        easing: 'easeInOutSine',
        loop: true,
        direction: 'alternate'
      })

      // Add pulse effect to some particles
      anime({
        targets: '.particle:nth-child(3n)',
        scale: [1, 1.5, 1],
        opacity: [0.3, 0.8, 0.3],
        duration: 3000,
        delay: anime.stagger(200),
        easing: 'easeInOutSine',
        loop: true
      })

      // Add rotation to even particles
      anime({
        targets: '.particle:nth-child(even)',
        rotate: [0, 360],
        duration: 6000,
        delay: anime.stagger(300),
        easing: 'linear',
        loop: true
      })
    }
  } catch (error) {
    console.warn('Could not load anime.js for particle animations:', error)
  }
})
</script>

<style scoped>
.particle-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--primary-color);
  border-radius: 50%;
  opacity: 0.3;
  animation: float linear infinite;
}

.particle:nth-child(even) {
  width: 6px;
  height: 6px;
  background: var(--accent-color);
  opacity: 0.2;
}

.particle:nth-child(3n) {
  width: 3px;
  height: 3px;
  background: var(--secondary-color);
  opacity: 0.4;
}

@keyframes float {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.3;
  }
  90% {
    opacity: 0.3;
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
}

/* Dark theme adjustments */
[data-theme="dark"] .particle {
  opacity: 0.2;
}

[data-theme="dark"] .particle:nth-child(even) {
  opacity: 0.15;
}

[data-theme="dark"] .particle:nth-child(3n) {
  opacity: 0.25;
}
</style> 