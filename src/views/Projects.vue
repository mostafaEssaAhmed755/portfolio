<template>
  <div class="projects">
    <h1 class="text-3xl font-bold">My Projects</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      <div v-for="project in projects" :key="project.title" class="p-4 border rounded shadow">
        <img :src="project.image" alt="Project Image" class="w-full h-40 object-cover">
        <h2 class="text-xl font-semibold mt-2">{{ project.title }}</h2>
        <p class="text-sm mt-1">{{ project.description }}</p>
        <a :href="project.link" target="_blank" class="text-blue-500 underline mt-2 block">View Project</a>
      </div>
    </div>
  </div>
</template>

<script>
import projects from "@/data/projects.json";

export default {
  data() {
    return {
      projects,
    };
  },
};
</script>
