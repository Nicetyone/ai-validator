// composables/useDark.ts
import { useState } from '#app'
import { watchEffect } from 'vue'

export function useDark() {
  // Check for system preference first, then fallback to localStorage
  const getInitialMode = () => {
    if (!process.client) return false
    
    // Check if user has a stored preference
    const storedMode = localStorage.getItem('dark')
    if (storedMode !== null) {
      return storedMode === 'true'
    }
    
    // If no stored preference, check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  
  const isDark = useState<boolean>('dark', () => getInitialMode())
  
  watchEffect(() => {
    if (process.client) {
      // Update the class on the html element
      if (isDark.value) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }

      // Store the preference
      localStorage.setItem('dark', String(isDark.value))
    }
  })

  return { isDark }
}
