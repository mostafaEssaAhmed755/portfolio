<template>
  <button class="theme-toggle" @click="toggleTheme">
    {{ currentTheme === 'light' ? '🌙' : '☀️' }}
  </button>
</template>

<script>
export default {
  name: 'ThemeToggle',
  data() {
    return {
      currentTheme: localStorage.getItem('theme') || 'light'
    }
  },
  mounted() {
    document.documentElement.setAttribute('data-theme', this.currentTheme)
  },
  methods: {
    toggleTheme() {
      this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light'
      document.documentElement.setAttribute('data-theme', this.currentTheme)
      localStorage.setItem('theme', this.currentTheme)
    }
  }
}
</script>
