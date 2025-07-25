// Translation plugin for Vue
export default {
  install(app, i18nInstance) {
    // Create translation function
    const translate = (key, replacements = {}) => {
      const locale = i18nInstance.global.locale.value
      const messages = i18nInstance.global.messages.value[locale] || i18nInstance.global.messages.value['en']
      
      // Get nested value using dot notation
      const keys = key.split('.')
      let value = messages
      
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k]
        } else {
          // Fallback to English if translation not found
          const enMessages = i18nInstance.global.messages.value['en']
          let enValue = enMessages
          for (const enKey of keys) {
            if (enValue && typeof enValue === 'object' && enKey in enValue) {
              enValue = enValue[enKey]
            } else {
              return key // Return key if not found
            }
          }
          value = enValue
          break
        }
      }
      
      // Handle replacements
      if (typeof value === 'string' && Object.keys(replacements).length > 0) {
        Object.keys(replacements).forEach(key => {
          value = value.replace(`:${key}`, replacements[key])
        })
      }
      
      return value || key
    }

    // Make available globally
    app.config.globalProperties.__ = translate
    window.__ = translate

    // Provide to components
    app.provide('__', translate)
    
    console.log('Translation plugin initialized')
    console.log('Sample translation:', translate('hero.title'))
  }
} 