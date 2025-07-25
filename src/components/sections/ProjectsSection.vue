<template>
  <section id="projects" class="projects">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ __('projects.title') }}</h2>
        <p class="section-subtitle">{{ __('projects.subtitle') }}</p>
      </div>

      <div class="projects-grid">
        <!-- E-commerce API -->
        <div class="project-card">
          <div class="project-header">
            <h3>{{ __('projects.ecommerceApi.title') }}</h3>
            <div class="project-tech">
              <span class="tech-tag">Express.js</span>
              <span class="tech-tag">Node.js</span>
              <span class="tech-tag">PostgreSQL</span>
            </div>
          </div>
          <p class="project-description">
            {{ __('projects.ecommerceApi.description') }}
          </p>
          <div class="project-links">
            <a href="https://github.com/mostafaEssaAhmed755/Storefront-Backend" target="_blank" class="project-link">
              <i class="fab fa-github"></i>
                              {{ __('projects.ecommerceApi.code') }}
            </a>
            <a href="#" class="project-link disabled">
              <i class="fas fa-external-link-alt"></i>
                              {{ __('projects.ecommerceApi.demo') }}
            </a>
          </div>
        </div>

        <!-- E-commerce Application -->
        <div class="project-card">
          <div class="project-header">
            <h3>{{ __('projects.ecommerceApp.title') }}</h3>
            <div class="project-tech">
              <span class="tech-tag">Laravel</span>
              <span class="tech-tag">Vue.js</span>
              <span class="tech-tag">MySQL</span>
            </div>
          </div>
          <p class="project-description">
            {{ __('projects.ecommerceApp.description') }}
          </p>
          <div class="project-links">
            <a href="https://github.com/mostafaEssaAhmed755/e-commerce_app" target="_blank" class="project-link">
              <i class="fab fa-github"></i>
                              {{ __('projects.ecommerceApp.code') }}
            </a>
            <a href="#" class="project-link disabled">
              <i class="fas fa-external-link-alt"></i>
                              {{ __('projects.ecommerceApp.demo') }}
            </a>
          </div>
        </div>

        <!-- Swimming Pool System -->
        <div class="project-card">
          <div class="project-header">
            <h3>{{ __('projects.swimmingPool.title') }}</h3>
            <div class="project-tech">
              <span class="tech-tag">Laravel</span>
              <span class="tech-tag">MySQL</span>
              <span class="tech-tag">Bootstrap</span>
            </div>
          </div>
          <p class="project-description">
            {{ __('projects.swimmingPool.description') }}
          </p>
          <div class="project-links">
            <a href="https://github.com/mostafaEssaAhmed755/swimming_pool_system" target="_blank" class="project-link">
              <i class="fab fa-github"></i>
                              {{ __('projects.swimmingPool.code') }}
            </a>
            <a href="#" class="project-link disabled">
              <i class="fas fa-external-link-alt"></i>
                              {{ __('projects.swimmingPool.demo') }}
            </a>
          </div>
        </div>

        <!-- Image API -->
        <div class="project-card">
          <div class="project-header">
            <h3>{{ __('projects.imageApi.title') }}</h3>
            <div class="project-tech">
              <span class="tech-tag">Express.js</span>
              <span class="tech-tag">Node.js</span>
              <span class="tech-tag">Sharp</span>
            </div>
          </div>
          <p class="project-description">
            {{ __('projects.imageApi.description') }}
          </p>
          <div class="project-links">
            <a href="https://github.com/mostafaEssaAhmed755/Image_processing_API" target="_blank" class="project-link">
              <i class="fab fa-github"></i>
                              {{ __('projects.imageApi.code') }}
            </a>
            <a href="#" class="project-link disabled">
              <i class="fas fa-external-link-alt"></i>
                              {{ __('projects.imageApi.demo') }}
            </a>
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
.projects {
  background-color: var(--bg-primary);
  padding: var(--spacing-2xl) 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
}

.project-card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  transition: all var(--transition-fast);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--primary-color);
}

.project-header {
  margin-bottom: var(--spacing-md);
}

.project-header h3 {
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-xl);
}

.project-tech {
  display: flex;
  gap: var(--spacing-xs);
  flex-wrap: wrap;
}

.tech-tag {
  background-color: var(--primary-color);
  color: white;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-xs);
  font-weight: 500;
}

.project-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
  flex-grow: 1;
}

.project-links {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
}

.project-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  font-weight: 500;
  transition: all var(--transition-fast);
  text-decoration: none;
}

.project-link:hover {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.project-link.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.project-link.disabled:hover {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border-color: var(--border-color);
  transform: none;
}

/* RTL Support */
[dir="rtl"] .project-links {
  flex-direction: row-reverse;
}

/* Responsive Design */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .project-card {
    padding: var(--spacing-md);
  }

  .project-links {
    flex-direction: column;
  }

  [dir="rtl"] .project-links {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .project-tech {
    justify-content: center;
  }

  .project-links {
    justify-content: center;
  }
}
</style> 