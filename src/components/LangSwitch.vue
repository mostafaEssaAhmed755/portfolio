<template>
  <button class="lang-switch" @click="toggleLocale">
    {{ currentLocale === 'ar' ? 'English' : 'العربية' }}
  </button>
</template>

<script>
export default {
  name: 'LangSwitch',
  data() {
    return {
      currentLocale: localStorage.getItem('locale') || 'ar'
    }
  },
  mounted() {
    this.applyLocale(this.currentLocale)
  },
  methods: {
    toggleLocale() {
      this.currentLocale = this.currentLocale === 'ar' ? 'en' : 'ar'
      localStorage.setItem('locale', this.currentLocale)
      this.applyLocale(this.currentLocale)
    },
    applyLocale(locale) {
      this.$i18n.locale = locale
      const dir = locale === 'ar' ? 'rtl' : 'ltr'
      document.documentElement.setAttribute('dir', dir)
    }
  }
}
</script>
