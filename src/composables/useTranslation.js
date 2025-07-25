import { inject } from 'vue'

export function useTranslation() {
  const translate = inject('__', (key) => key)
  
  return {
    __: translate
  }
} 