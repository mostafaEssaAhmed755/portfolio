<template>
  <div id="app" class="min-h-screen">
    <Navbar />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer />
    <ScrollToTop />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useLanguage } from './composables/useLanguage'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import ScrollToTop from './components/ScrollToTop.vue'

const { init } = useLanguage()

onMounted(() => {
  init()
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>