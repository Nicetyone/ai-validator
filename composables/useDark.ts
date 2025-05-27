// composables/useDark.ts
import { useState }    from '#app'
import { watchEffect } from 'vue'

export function useDark () {
    const initial = process.client && localStorage.getItem('dark') === 'true'
    const isDark = useState<boolean>('dark', () => initial)
    
    watchEffect(() => {
    if (process.client) {
        if (isDark.value)
        document.documentElement.classList.add('dark')
        else
        document.documentElement.classList.remove('dark')

        localStorage.setItem('dark', String(isDark.value))
        localStorage.setItem(
        'nuxt-devtools-color-mode',
        isDark.value ? 'dark' : 'light'
        )
    }
    })

  return { isDark }
}
