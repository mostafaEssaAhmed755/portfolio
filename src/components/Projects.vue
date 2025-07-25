<template>
  <section class="section projects-section" style="animation-delay: 0.8s;">
    <h2>{{ t("Projects") }}</h2>
    <div class="project-cards">
      <div class="card" v-for="project in projects" :key="project.title">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          title: 'مشروع 1',
          description: 'وصف تجريبي للمشروع الأول'
        },
        {
          title: 'مشروع 2',
          description: 'وصف تجريبي للمشروع الثاني'
        },
        {
          title: 'مشروع 3',
          description: 'وصف تجريبي للمشروع الثالث'
        }
      ]
    }
  }
}
</script>
