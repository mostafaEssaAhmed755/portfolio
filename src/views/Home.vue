<template>
  <div class="home">
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- About Section -->
    <AboutSection />
    
    <!-- Experience Section -->
    <ExperienceSection />
    
    <!-- Projects Section -->
    <ProjectsSection />
    
    <!-- Skills Section -->
    <SkillsSection />
    
    <!-- Contact Section -->
    <ContactSection />
  </div>
</template>

<script setup>
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>

<style scoped>
.home {
  min-height: 100vh;
}
</style> 