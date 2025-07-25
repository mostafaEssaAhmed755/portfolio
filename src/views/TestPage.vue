<template>
  <div class="test-page">
    <h1>Test Page</h1>
    <p>If you can see this, the basic setup is working!</p>
    <p>Translation test: {{ __('hero.title') }}</p>
    <button @click="testClick">Test Button</button>
  </div>
</template>

<script setup>
import { useTranslation } from '@/composables/useTranslation'

const { __ } = useTranslation()

const testClick = () => {
  alert('Button works!')
}
</script>

<style scoped>
.test-page {
  padding: 2rem;
  text-align: center;
  min-height: 100vh;
  background: var(--bg-primary);
  color: var(--text-primary);
}

h1 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

button {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: 1rem;
}
</style> 