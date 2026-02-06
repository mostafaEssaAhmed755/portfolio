import { onMounted, onUnmounted } from "vue";

export function useScrollAnimation() {
  let observer = null;

  const observeElements = () => {
    const elements = document.querySelectorAll(".reveal");

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));
  };

  onMounted(() => {
    observeElements();
  });

  onUnmounted(() => {
    if (observer) {
      observer.disconnect();
    }
  });

  return {
    observeElements,
  };
}
