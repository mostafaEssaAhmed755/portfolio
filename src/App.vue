<template>
  <main>
    <div class="settings-bar">
      <ThemeToggle />
      <LangSwitch />
    </div>
    <Header />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </main>
</template>

<script>
import ThemeToggle from './components/ThemeToggle.vue'
import LangSwitch from './components/LangSwitch.vue'
import Header from './components/Header.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'App',
  components: {
    ThemeToggle,
    LangSwitch,
    Header,
    About,
    Skills,
    Projects,
    Contact
  },
  setup() {
    const { locale } = useI18n()
    return { locale }
  },
  watch: {
    locale(newLang) {
      const dir = newLang === 'ar' ? 'rtl' : 'ltr'
      document.documentElement.setAttribute('dir', dir)
    }
  },
  mounted() {
    const dir = this.locale === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.setAttribute('dir', dir)
  }

}
</script>

<style>
/* ممكن تضيف هنا ستايلات عامة أو تتركها لفولدر styles/ */
</style>
