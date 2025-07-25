<template>
  <section class="section header-section" style="animation-delay: 0.2s">
    <div class="header-content">
      <div class="text-area">
        <h1>{{ t("Mostafa Essa") }}</h1>
        <h2>
          <span class="dynamic-title">{{ displayedTitle }}</span>
          <span class="cursor">|</span>
        </h2>
        <p class="intro">
          {{
            t(
              "I build digital solutions that combine performance and appearance, and I love expandable and maintenance systems."
            )
          }}
        </p>
      </div>
      <div class="image-area">
        <img src="/profile.png" alt="مصطفى محمد" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      displayedTitle: "",
      titleIndex: 0,
      charIndex: 0,
      typing: true,
      titleKeys: [
        "System Architect",
        "Laravel/Vue Developer",
        "Redis & Docker Expert",
        "Admin Interface Designer",
      ],
    };
  },
  methods: {
    startTypingCycle() {
      setTimeout(() => {
        const currentTitle = this.t(this.titleKeys[this.titleIndex]);

        if (this.typing) {
          if (this.charIndex < currentTitle.length) {
            this.displayedTitle += currentTitle[this.charIndex];
            this.charIndex++;
            this.startTypingCycle();
          } else {
            this.typing = false;
            setTimeout(this.startTypingCycle, 1500);
          }
        } else {
          if (this.charIndex > 0) {
            this.displayedTitle = this.displayedTitle.slice(0, -1);
            this.charIndex--;
            this.startTypingCycle();
          } else {
            this.typing = true;
            this.titleIndex = (this.titleIndex + 1) % this.titleKeys.length;
            this.startTypingCycle();
          }
        }
      }, 100);
    },
  },
  mounted() {
    this.startTypingCycle();
  },
};
</script>
