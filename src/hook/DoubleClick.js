import { useState, useRef, useEffect } from 'react'

export const useDoubleClick = () => {
  const [editable, setEditable] = useState(false)
  const editableElementRef = useRef(null)

  const handlerDoubleClick = () => {
    console.log('上机了')
    setEditable(true)
  }

  const setRef = (ref) => {
    editableElementRef.current = ref
  }

  const handlerBlur = () => setEditable(false)

  useEffect(() => {
    if (editable) {
      editableElementRef.current.focus()
      if (window.getSelection) {
        let selection = window.getSelection()
        let range = document.createRange()
        range.selectNodeContents(editableElementRef.current)
        selection.removeAllRanges()
        selection.addRange(range)
      }
    }
  }, [editable])

  return {
    editable,
    handlerBlur,
    setRef,
    handlerDoubleClick,
  }
}
