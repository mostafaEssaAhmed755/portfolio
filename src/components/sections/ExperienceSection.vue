<template>
  <section id="experience" class="experience">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ __('experience.title') }}</h2>
        <p class="section-subtitle">{{ __('experience.subtitle') }}</p>
      </div>

      <div class="experience-timeline">
        <!-- Gravity -->
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="experience-header">
              <h3>{{ __('experience.gravity.title') }}</h3>
              <div class="experience-meta">
                <span class="company">{{ __('experience.gravity.company') }}</span>
                <span class="period">{{ __('experience.gravity.period') }}</span>
              </div>
            </div>
            <ul class="experience-achievements">
              <li v-for="(achievement, index) in gravityAchievements" :key="index">
                {{ achievement }}
              </li>
            </ul>
          </div>
        </div>

        <!-- InCode Hub -->
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="experience-header">
              <h3>{{ __('experience.incode.title') }}</h3>
              <div class="experience-meta">
                <span class="company">{{ __('experience.incode.company') }}</span>
                <span class="period">{{ __('experience.incode.period') }}</span>
              </div>
            </div>
            <ul class="experience-achievements">
              <li v-for="(achievement, index) in incodeAchievements" :key="index">
                {{ achievement }}
              </li>
            </ul>
          </div>
        </div>

        <!-- YallaWeb -->
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="experience-header">
              <h3>{{ __('experience.yallaweb.title') }}</h3>
              <div class="experience-meta">
                <span class="company">{{ __('experience.yallaweb.company') }}</span>
                <span class="period">{{ __('experience.yallaweb.period') }}</span>
              </div>
            </div>
            <ul class="experience-achievements">
              <li v-for="(achievement, index) in yallawebAchievements" :key="index">
                {{ achievement }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTranslation } from '@/composables/useTranslation'

const { __ } = useTranslation()

// Reactive data for achievements
const gravityAchievements = ref([])
const incodeAchievements = ref([])
const yallawebAchievements = ref([])

// Function to update achievements
const updateAchievements = () => {
  gravityAchievements.value = __('experience.gravity.achievements') || []
  incodeAchievements.value = __('experience.incode.achievements') || []
  yallawebAchievements.value = __('experience.yallaweb.achievements') || []
}

// Handle locale changes
const handleLocaleChange = () => {
  updateAchievements()
}

onMounted(() => {
  updateAchievements()
  window.addEventListener('locale-changed', handleLocaleChange)
})

onUnmounted(() => {
  window.removeEventListener('locale-changed', handleLocaleChange)
})
</script>

<style scoped>
.experience {
  background-color: var(--bg-secondary);
  padding: var(--spacing-2xl) 0;
}

.experience-timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.experience-timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: var(--border-color);
}

[dir="rtl"] .experience-timeline::before {
  left: auto;
  right: 20px;
}

.timeline-item {
  position: relative;
  margin-bottom: var(--spacing-2xl);
  padding-left: 60px;
}

[dir="rtl"] .timeline-item {
  padding-left: 0;
  padding-right: 60px;
}

.timeline-marker {
  position: absolute;
  left: 11px;
  top: 0;
  width: 20px;
  height: 20px;
  background-color: var(--primary-color);
  border: 4px solid var(--bg-secondary);
  border-radius: 50%;
  z-index: 1;
}

[dir="rtl"] .timeline-marker {
  left: auto;
  right: 11px;
}

.timeline-content {
  background-color: var(--bg-primary);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-fast);
}

.timeline-content:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-color);
}

.experience-header {
  margin-bottom: var(--spacing-md);
}

.experience-header h3 {
  color: var(--text-primary);
  margin-bottom: var(--spacing-xs);
  font-size: var(--font-size-xl);
}

.experience-meta {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.company {
  color: var(--primary-color);
  font-weight: 600;
  font-size: var(--font-size-base);
}

.period {
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
}

.experience-achievements {
  list-style: none;
  padding: 0;
  margin: 0;
}

.experience-achievements li {
  position: relative;
  padding-left: var(--spacing-lg);
  margin-bottom: var(--spacing-sm);
  color: var(--text-secondary);
  line-height: 1.6;
}

[dir="rtl"] .experience-achievements li {
  padding-left: 0;
  padding-right: var(--spacing-lg);
}

.experience-achievements li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
}

[dir="rtl"] .experience-achievements li::before {
  left: auto;
  right: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .experience-timeline::before {
    left: 15px;
  }

  [dir="rtl"] .experience-timeline::before {
    left: auto;
    right: 15px;
  }

  .timeline-item {
    padding-left: 50px;
  }

  [dir="rtl"] .timeline-item {
    padding-left: 0;
    padding-right: 50px;
  }

  .timeline-marker {
    left: 6px;
    width: 18px;
    height: 18px;
  }

  [dir="rtl"] .timeline-marker {
    left: auto;
    right: 6px;
  }

  .timeline-content {
    padding: var(--spacing-md);
  }

  .experience-meta {
    flex-direction: column;
    gap: var(--spacing-xs);
  }
}

@media (max-width: 480px) {
  .experience-timeline::before {
    left: 10px;
  }

  [dir="rtl"] .experience-timeline::before {
    left: auto;
    right: 10px;
  }

  .timeline-item {
    padding-left: 40px;
  }

  [dir="rtl"] .timeline-item {
    padding-left: 0;
    padding-right: 40px;
  }

  .timeline-marker {
    left: 1px;
    width: 16px;
    height: 16px;
  }

  [dir="rtl"] .timeline-marker {
    left: auto;
    right: 1px;
  }
}
</style> 