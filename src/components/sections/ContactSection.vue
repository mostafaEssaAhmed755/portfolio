<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ __('contact.title') }}</h2>
        <p class="section-subtitle">{{ __('contact.subtitle') }}</p>
      </div>

      <div class="contact-content">
        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="contact-details">
              <h3>{{ __('contact.email') }}</h3>
              <a href="mailto:mostafa.essa.ahmed755@gmail.com">mostafa.essa.ahmed755@gmail.com</a>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-phone"></i>
            </div>
            <div class="contact-details">
              <h3>{{ __('contact.phone') }}</h3>
              <a href="tel:+201030124613">+201030124613</a>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="contact-details">
              <h3>{{ __('contact.location') }}</h3>
              <p>Cairo, Egypt</p>
            </div>
          </div>

          <div class="contact-social">
            <a href="https://github.com/mostafaEssaAhmed755" target="_blank" class="social-link">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/mostafa-essa-a540bb1ab/" target="_blank" class="social-link">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/mostafa_essa" target="_blank" class="social-link">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="Mostafa_Essa_CV.pdf" download class="social-link cv-download">
              <i class="fas fa-file-pdf"></i>
            </a>
          </div>
        </div>

        <div class="contact-form">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">{{ __('contact.name') }}</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                :class="{ 'error': errors.name }"
                required
              />
              <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
            </div>

            <div class="form-group">
              <label for="email">{{ __('contact.email') }}</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                :class="{ 'error': errors.email }"
                required
              />
              <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
            </div>

            <div class="form-group">
              <label for="subject">{{ __('contact.subject') }}</label>
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                :class="{ 'error': errors.subject }"
                required
              />
              <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
            </div>

            <div class="form-group">
              <label for="message">{{ __('contact.message') }}</label>
              <textarea
                id="message"
                v-model="form.message"
                :class="{ 'error': errors.message }"
                rows="5"
                required
              ></textarea>
              <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
            </div>

            <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
              <i v-if="isSubmitting" class="fas fa-spinner fa-spin"></i>
              <span v-else>{{ __('contact.sendMessage') }}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useTranslation } from '@/composables/useTranslation'

const { __ } = useTranslation()

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const validateForm = () => {
  let isValid = true
  
  // Reset errors
  Object.keys(errors).forEach(key => {
    errors[key] = ''
  })

  // Validate name
  if (!form.name.trim()) {
    errors.name = 'Name is required'
    isValid = false
  }

  // Validate email
  if (!form.email.trim()) {
    errors.email = 'Email is required'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address'
    isValid = false
  }

  // Validate subject
  if (!form.subject.trim()) {
    errors.subject = 'Subject is required'
    isValid = false
  }

  // Validate message
  if (!form.message.trim()) {
    errors.message = 'Message is required'
    isValid = false
  }

  return isValid
}

const submitForm = async () => {
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true

  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Show success message
    alert('Message sent successfully! I will get back to you soon.')
    
    // Reset form
    Object.keys(form).forEach(key => {
      form[key] = ''
    })
    
  } catch (error) {
    alert('Error sending message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact {
  background-color: var(--bg-primary);
  padding: var(--spacing-2xl) 0;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  max-width: 1000px;
  margin: 0 auto;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background-color: var(--bg-secondary);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  transition: all var(--transition-fast);
}

.contact-item:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-color);
}

.contact-icon {
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

.contact-details h3 {
  color: var(--text-primary);
  margin-bottom: var(--spacing-xs);
  font-size: var(--font-size-lg);
}

.contact-details a,
.contact-details p {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.contact-details a:hover {
  color: var(--primary-color);
}

.contact-social {
  display: flex;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-md);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background-color: var(--bg-primary);
  color: var(--text-secondary);
  border-radius: 50%;
  transition: all var(--transition-fast);
  border: 1px solid var(--border-color);
  text-decoration: none;
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

.contact-form {
  background-color: var(--bg-secondary);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
}

.form-group {
  margin-bottom: var(--spacing-lg);
}

.form-group label {
  display: block;
  color: var(--text-primary);
  margin-bottom: var(--spacing-xs);
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: var(--spacing-sm);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-size: var(--font-size-base);
  transition: all var(--transition-fast);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.form-group input.error,
.form-group textarea.error {
  border-color: #ef4444;
}

.error-message {
  color: #ef4444;
  font-size: var(--font-size-sm);
  margin-top: var(--spacing-xs);
  display: block;
}

.btn {
  width: 100%;
  padding: var(--spacing-md);
  font-size: var(--font-size-base);
  font-weight: 500;
}

.btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* RTL Support */
[dir="rtl"] .contact-item {
  flex-direction: row-reverse;
}

[dir="rtl"] .contact-social {
  flex-direction: row-reverse;
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }

  .contact-form {
    padding: var(--spacing-lg);
  }

  .contact-item {
    padding: var(--spacing-md);
  }

  .contact-icon {
    width: 40px;
    height: 40px;
    font-size: var(--font-size-lg);
  }
}

@media (max-width: 480px) {
  .contact-item {
    flex-direction: column;
    text-align: center;
  }

  [dir="rtl"] .contact-item {
    flex-direction: column;
  }

  .contact-social {
    justify-content: center;
  }

  [dir="rtl"] .contact-social {
    justify-content: center;
  }
}
</style> 