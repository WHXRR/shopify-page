import { useState, useEffect } from 'react'

export function useTheme() {
  const [mode, setMode] = useState('')

  useEffect(() => {
    const theme = window.localStorage.getItem('theme') || 'light'
    setTheme(theme)
  }, [])
  function setTheme(mode) {
    if (mode === 'light') {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
    setMode(mode)
    window.localStorage.setItem('theme', mode)
  }
  return [mode, setTheme]
}
