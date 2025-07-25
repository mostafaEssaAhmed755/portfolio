<template>
  <section class="section contact-section" style="animation-delay: 1s">
    <h2>{{ t("Contact Me") }}</h2>
    <p>{{ email }}</p>
    <p>{{ github }}</p>
  </section>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      email: "📧 email@example.com",
      github: "💼 github.com/yourprofile",
    };
  },
};
</script>
