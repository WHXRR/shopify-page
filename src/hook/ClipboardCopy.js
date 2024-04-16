import { useCallback } from 'react'
export function useClipboardCopy() {
  const copyToClipboard = useCallback((text) => {
    if (navigator.clipboard) {
      return navigator.clipboard.writeText(text)
    } else {
      window.alert('Clipboard API not available')
    }
  }, [])
  return copyToClipboard
}
