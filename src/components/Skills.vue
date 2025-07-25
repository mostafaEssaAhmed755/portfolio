<template>
  <section class="section skills-section" style="animation-delay: 0.6s">
    <h2>{{ t("Skills") }}</h2>
    <p>{{ t("A list of the technical skills I mastered.") }}</p>
    <ul class="skills-list">
      <li v-for="skill in skills" :key="skill">{{ skill }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skills: ["Vue.js", "Laravel", "Docker", "Redis"],
    };
  },
};
</script>
