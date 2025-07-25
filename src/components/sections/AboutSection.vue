<template>
  <section id="about" class="about">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ __('about.title') }}</h2>
        <p class="section-subtitle">{{ __('about.subtitle') }}</p>
      </div>

      <div class="about-content">
        <div class="about-text">
          <p class="about-description">
            {{ __('about.description1') }}
          </p>
          <p class="about-description">
            {{ __('about.description2') }}
          </p>
        </div>

        <div class="about-highlights">
          <div class="highlight-item">
            <div class="highlight-icon">
              <i class="fas fa-rocket"></i>
            </div>
            <div class="highlight-content">
              <h3>{{ __('about.highlights.fast') }}</h3>
              <p>{{ __('about.highlights.fast') }}</p>
            </div>
          </div>

          <div class="highlight-item">
            <div class="highlight-icon">
              <i class="fas fa-shield-alt"></i>
            </div>
            <div class="highlight-content">
              <h3>{{ __('about.highlights.secure') }}</h3>
              <p>{{ __('about.highlights.secure') }}</p>
            </div>
          </div>

          <div class="highlight-item">
            <div class="highlight-icon">
              <i class="fas fa-code"></i>
            </div>
            <div class="highlight-content">
              <h3>{{ __('about.highlights.clean') }}</h3>
              <p>{{ __('about.highlights.clean') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useTranslation } from '@/composables/useTranslation'

const { __ } = useTranslation()
</script>

<style scoped>
.about {
  background-color: var(--bg-primary);
  padding: var(--spacing-2xl) 0;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  align-items: start;
}

.about-description {
  font-size: var(--font-size-lg);
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
}

.about-highlights {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.highlight-item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background-color: var(--bg-secondary);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  transition: all var(--transition-fast);
}

.highlight-item:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-color);
}

.highlight-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: var(--primary-color);
  color: white;
  border-radius: var(--radius-md);
  font-size: var(--font-size-xl);
  flex-shrink: 0;
}

.highlight-content h3 {
  color: var(--text-primary);
  margin-bottom: var(--spacing-xs);
  font-size: var(--font-size-lg);
}

.highlight-content p {
  color: var(--text-secondary);
  margin: 0;
  font-size: var(--font-size-sm);
}

/* RTL Support */
[dir="rtl"] .highlight-item {
  flex-direction: row-reverse;
}

/* Responsive Design */
@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }

  .highlight-item {
    padding: var(--spacing-md);
  }

  .highlight-icon {
    width: 40px;
    height: 40px;
    font-size: var(--font-size-lg);
  }
}

@media (max-width: 480px) {
  .about-description {
    font-size: var(--font-size-base);
  }

  .highlight-item {
    flex-direction: column;
    text-align: center;
  }

  [dir="rtl"] .highlight-item {
    flex-direction: column;
  }
}
</style> 