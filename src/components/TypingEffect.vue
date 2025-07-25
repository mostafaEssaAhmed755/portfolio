<template>
  <div class="typing-container">
    <span class="typing-text">{{ displayText }}</span>
    <span class="typing-cursor" :class="{ 'blink': isTyping }">|</span>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  texts: {
    type: Array,
    default: () => [
      'Software Engineer',
      'Back-end Developer',
      'Full-stack Developer',
      'Laravel Developer',
      'Vue.js Developer',
      'API Developer',
      'Database Designer',
      'DevOps Engineer'
    ]
  },
  speed: {
    type: Number,
    default: 100
  },
  pauseTime: {
    type: Number,
    default: 2000
  }
})

const displayText = ref('')
const currentTextIndex = ref(0)
const currentCharIndex = ref(0)
const isTyping = ref(true)
const isDeleting = ref(false)
let typingInterval = null

const typeText = () => {
  const currentText = props.texts[currentTextIndex.value]
  
  if (isDeleting.value) {
    // Deleting text
    displayText.value = currentText.substring(0, currentCharIndex.value - 1)
    currentCharIndex.value--
    
    if (currentCharIndex.value === 0) {
      isDeleting.value = false
      currentTextIndex.value = (currentTextIndex.value + 1) % props.texts.length
      setTimeout(() => {
        isTyping.value = true
        typeText()
      }, 500)
      return
    }
  } else {
    // Typing text
    displayText.value = currentText.substring(0, currentCharIndex.value + 1)
    currentCharIndex.value++
    
    if (currentCharIndex.value === currentText.length) {
      // Finished typing, pause then start deleting
      setTimeout(() => {
        isDeleting.value = true
        typeText()
      }, props.pauseTime)
      return
    }
  }
  
  typingInterval = setTimeout(typeText, isDeleting.value ? props.speed / 2 : props.speed)
}

onMounted(() => {
  typeText()
})

onUnmounted(() => {
  if (typingInterval) {
    clearTimeout(typingInterval)
  }
})
</script>

<style scoped>
.typing-container {
  display: inline-block;
  position: relative;
}

.typing-text {
  color: var(--primary-color);
  font-weight: 600;
}

.typing-cursor {
  color: var(--primary-color);
  font-weight: bold;
  animation: blink 1s infinite;
  margin-left: 2px;
}

.typing-cursor.blink {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* RTL Support */
[dir="rtl"] .typing-cursor {
  margin-left: 0;
  margin-right: 2px;
}
</style> 