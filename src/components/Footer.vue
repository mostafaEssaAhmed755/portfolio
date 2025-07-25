<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-text">
          <p>{{ __('footer.copyright') }}</p>
          <p class="footer-built-with">{{ __('footer.builtWith') }}</p>
        </div>
        <div class="footer-social">
          <a href="https://github.com/mostafaEssaAhmed755" target="_blank" class="social-link">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/mostafa-essa-a540bb1ab/" target="_blank" class="social-link">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="mailto:mostafa.essa.ahmed755@gmail.com" class="social-link">
            <i class="fas fa-envelope"></i>
          </a>
          <a href="Mostafa_Essa_CV.pdf" download class="social-link cv-download">
            <i class="fas fa-file-pdf"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useTranslation } from '@/composables/useTranslation'

const { __ } = useTranslation()
</script>

<style scoped>
.footer {
  background-color: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  padding: var(--spacing-xl) 0;
  margin-top: auto;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.footer-text p {
  color: var(--text-secondary);
  margin: 0;
  font-size: var(--font-size-sm);
}

.footer-built-with {
  color: var(--text-light) !important;
  font-size: var(--font-size-xs) !important;
  margin-top: var(--spacing-xs) !important;
}

.footer-social {
  display: flex;
  gap: var(--spacing-sm);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--bg-primary);
  color: var(--text-secondary);
  border-radius: 50%;
  transition: all var(--transition-fast);
  border: 1px solid var(--border-color);
}

.social-link:hover {
  color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.cv-download {
  background-color: var(--accent-color);
  color: white;
}

.cv-download:hover {
  background-color: #d97706;
  transform: translateY(-2px);
}

/* RTL Support */
[dir="rtl"] .footer-content {
  flex-direction: row-reverse;
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
  }

  .footer-social {
    justify-content: center;
  }
}
</style> 