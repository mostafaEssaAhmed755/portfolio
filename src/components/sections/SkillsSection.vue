<template>
  <section id="skills" class="skills">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ __('skills.title') }}</h2>
        <p class="section-subtitle">{{ __('skills.subtitle') }}</p>
      </div>

      <div class="skills-grid">
        <!-- Backend Development -->
        <div class="skill-category">
          <h3 class="category-title">{{ __('skills.categories.backend') }}</h3>
          <div class="skill-items">
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">PHP</span>
                <span class="skill-percentage">95%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" data-progress="95%">
                  <div class="progress-line" style="left: 95%"></div>
                </div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">Laravel</span>
                <span class="skill-percentage">90%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" data-progress="90%">
                  <div class="progress-line" style="left: 90%"></div>
                </div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">Node.js</span>
                <span class="skill-percentage">85%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" data-progress="85%">
                  <div class="progress-line" style="left: 85%"></div>
                </div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">Express.js</span>
                <span class="skill-percentage">80%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" data-progress="80%">
                  <div class="progress-line" style="left: 80%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Databases -->
        <div class="skill-category">
          <h3 class="category-title">{{ __('skills.categories.databases') }}</h3>
          <div class="skill-items">
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">MySQL</span>
                <span class="skill-percentage">90%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" data-progress="90%">
                  <div class="progress-line" style="left: 90%"></div>
                </div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">PostgreSQL</span>
                <span class="skill-percentage">85%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" data-progress="85%">
                  <div class="progress-line" style="left: 85%"></div>
                </div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">Redis</span>
                <span class="skill-percentage">75%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" data-progress="75%">
                  <div class="progress-line" style="left: 75%"></div>
                </div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">Database Design</span>
                <span class="skill-percentage">88%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" data-progress="88%">
                  <div class="progress-line" style="left: 88%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Frontend Integration -->
        <div class="skill-category">
          <h3 class="category-title">{{ __('skills.categories.frontend') }}</h3>
          <div class="skill-items">
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">Vue.js</span>
                <span class="skill-percentage">85%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" data-progress="85%">
                  <div class="progress-line" style="left: 85%"></div>
                </div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">Inertia.js</span>
                <span class="skill-percentage">80%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" data-progress="80%">
                  <div class="progress-line" style="left: 80%"></div>
                </div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">JavaScript</span>
                <span class="skill-percentage">90%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" data-progress="90%">
                  <div class="progress-line" style="left: 90%"></div>
                </div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">TypeScript</span>
                <span class="skill-percentage">75%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" data-progress="75%">
                  <div class="progress-line" style="left: 75%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- DevOps & Tools -->
        <div class="skill-category">
          <h3 class="category-title">{{ __('skills.categories.devops') }}</h3>
          <div class="skill-items">
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">Docker</span>
                <span class="skill-percentage">80%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" data-progress="80%">
                  <div class="progress-line" style="left: 80%"></div>
                </div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">AWS</span>
                <span class="skill-percentage">75%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" data-progress="75%">
                  <div class="progress-line" style="left: 75%"></div>
                </div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">Git</span>
                <span class="skill-percentage">90%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" data-progress="90%">
                  <div class="progress-line" style="left: 90%"></div>
                </div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">CI/CD</span>
                <span class="skill-percentage">70%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" data-progress="70%">
                  <div class="progress-line" style="left: 70%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Testing & Quality -->
        <div class="skill-category">
          <h3 class="category-title">{{ __('skills.categories.testing') }}</h3>
          <div class="skill-items">
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">Unit Testing</span>
                <span class="skill-percentage">85%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" data-progress="85%">
                  <div class="progress-line" style="left: 85%"></div>
                </div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">API Testing</span>
                <span class="skill-percentage">80%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" data-progress="80%">
                  <div class="progress-line" style="left: 80%"></div>
                </div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">Code Review</span>
                <span class="skill-percentage">90%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" data-progress="90%">
                  <div class="progress-line" style="left: 90%"></div>
                </div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">Jasmine</span>
                <span class="skill-percentage">75%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" data-progress="75%">
                  <div class="progress-line" style="left: 75%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Architecture -->
        <div class="skill-category">
          <h3 class="category-title">{{ __('skills.categories.architecture') }}</h3>
          <div class="skill-items">
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">MVC</span>
                <span class="skill-percentage">95%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" data-progress="95%">
                  <div class="progress-line" style="left: 95%"></div>
                </div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">OOP</span>
                <span class="skill-percentage">90%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" data-progress="90%">
                  <div class="progress-line" style="left: 90%"></div>
                </div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">RESTful APIs</span>
                <span class="skill-percentage">88%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" data-progress="88%">
                  <div class="progress-line" style="left: 88%"></div>
                </div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">Microservices</span>
                <span class="skill-percentage">70%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" data-progress="70%">
                  <div class="progress-line" style="left: 70%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useTranslation } from '@/composables/useTranslation'
import { onMounted } from 'vue'

const { __ } = useTranslation()

onMounted(() => {
  // Test animation after a short delay
  setTimeout(() => {
    const progressBars = document.querySelectorAll('.skill-progress')
    const progressLines = document.querySelectorAll('.progress-line')
    
    console.log('Found progress bars:', progressBars.length)
    console.log('Found progress lines:', progressLines.length)
    
    progressBars.forEach((bar, index) => {
      const progress = bar.getAttribute('data-progress') || '100%'
      console.log(`Setting progress bar ${index} to ${progress}`)
      setTimeout(() => {
        bar.style.width = progress
      }, index * 200)
    })
    
    progressLines.forEach((line, index) => {
      setTimeout(() => {
        line.style.opacity = '1'
        line.style.scale = '1'
      }, index * 200 + 1000)
    })
  }, 1000)
  
  // Fallback: ensure progress bars are visible after 5 seconds
  setTimeout(() => {
    const progressBars = document.querySelectorAll('.skill-progress')
    const progressLines = document.querySelectorAll('.progress-line')
    
    progressBars.forEach(bar => {
      const progress = bar.getAttribute('data-progress') || '100%'
      bar.style.width = progress
    })
    
    progressLines.forEach(line => {
      line.style.opacity = '1'
      line.style.scale = '1'
    })
  }, 5000)
})
</script>

<style scoped>
.skills {
  background-color: var(--bg-secondary);
  padding: var(--spacing-2xl) 0;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-xl);
}

.skill-category {
  background-color: var(--bg-primary);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  transition: all var(--transition-fast);
}

.skill-category:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-color);
}

.category-title {
  color: var(--text-primary);
  margin-bottom: var(--spacing-lg);
  font-size: var(--font-size-xl);
  text-align: center;
}

.skill-items {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skill-name {
  color: var(--text-primary);
  font-weight: 500;
  font-size: var(--font-size-sm);
}

.skill-percentage {
  color: var(--primary-color);
  font-weight: 600;
  font-size: var(--font-size-xs);
  background: var(--bg-secondary);
  padding: 2px 8px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-color);
}

.skill-bar {
  width: 100%;
  height: 8px;
  background-color: var(--bg-secondary);
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  border-radius: var(--radius-sm);
  transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  width: 0; /* Start at 0, will be animated */
  box-shadow: 0 0 10px rgba(var(--primary-color-rgb), 0.3);
  min-width: 0;
  overflow: hidden;
}

.skill-progress::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  animation: shimmer 2s infinite;
  border-radius: var(--radius-sm);
}

.skill-progress::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  border-radius: var(--radius-sm);
  z-index: -1;
  opacity: 0.3;
  filter: blur(4px);
}

/* Progress Line Indicator */
.progress-line {
  position: absolute;
  top: -4px;
  width: 2px;
  height: calc(100% + 8px);
  background: linear-gradient(to bottom, transparent, var(--accent-color), transparent);
  border-radius: 1px;
  box-shadow: 0 0 8px rgba(var(--accent-color-rgb), 0.8);
  z-index: 2;
  transform: translateX(-50%);
  opacity: 0;
  scale: 0.8;
}

.progress-line::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  width: 6px;
  height: 6px;
  background: var(--accent-color);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(var(--accent-color-rgb), 0.8);
  border: 2px solid var(--bg-primary);
}

.progress-line::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: -2px;
  width: 6px;
  height: 6px;
  background: var(--accent-color);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(var(--accent-color-rgb), 0.8);
  border: 2px solid var(--bg-primary);
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* RTL Support */
[dir="rtl"] .skill-progress::after {
  animation-direction: reverse;
}

/* Responsive Design */
@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .skill-category {
    padding: var(--spacing-md);
  }
}

@media (max-width: 480px) {
  .category-title {
    font-size: var(--font-size-lg);
  }

  .skill-name {
    font-size: var(--font-size-xs);
  }

  .skill-bar {
    height: 6px;
  }
}
</style> 