import { useState } from '#app'

export interface Toast {
  id: number
  message: string
  type: 'success' | 'error'
}

let idCounter = 0

export const useToast = () => {
  const toasts = useState<Toast[]>('toasts', () => [])

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    const id = idCounter++
    toasts.value.push({ id, message, type })
    setTimeout(() => {
      toasts.value = toasts.value.filter(t => t.id !== id)
    }, 3000)
  }

  return { toasts, showToast }
}