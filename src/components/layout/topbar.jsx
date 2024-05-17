import BackSVG from '@/assets/images/back.svg?react'
import ForwardSVG from '@/assets/images/forward.svg?react'
import HTMLFileSVG from '@/assets/images/html-file.svg?react'
import JSONSVG from '@/assets/images/json.svg?react'
import ImportSVG from '@/assets/images/import.svg?react'
import LockSVG from '@/assets/images/lock.svg?react'
import UnLockSVG from '@/assets/images/un-lock.svg?react'
import SunSvg from '@/assets/images/sun.svg?react'
import MoonSvg from '@/assets/images/moon.svg?react'
import SaveSvg from '@/assets/images/save.svg?react'
import UIComponents from '@/components/ui'
import lz from 'lzutf8'
import { useEffect, useRef, useState } from 'react'
import { useEditor } from '@craftjs/core'
import { useTheme } from '@/hook/Theme.js'
import styleCss from '@/assets/js/style'

const { Copy, Modal } = UIComponents
const Topbar = () => {
  const { enabled, canUndo, canRedo, actions, query } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
  }))
  const downLoadHTML = () => {
    const iframe = document.querySelector('.craftjs-renderer')
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document
    const element = iframeDoc.querySelector('.selector')
    const removeAttrs = ['contenteditable', 'draggable']
    if (!iframeDoc || !element) return
    const clonedElement = element.cloneNode(true)
    clonedElement.querySelectorAll('*').forEach((el) => {
      removeAttrs.forEach((attr) => el.removeAttribute(attr))
      if (!el.classList.length) el.removeAttribute('class')
    })
    const htmlString = clonedElement.outerHTML
    const string = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
        ${styleCss}
        </style>
      </head>
      <body>
        ${htmlString}
      </body>
    </html>`
    const blob = new Blob([string], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'file.html'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const copyRef = useRef(null)
  const copyJSON = () => {
    const json = query.serialize()
    const str = lz.encodeBase64(lz.compress(json))
    copyRef.current.copy(str)
  }

  const [open, setOpen] = useState(false)
  const [jsonValue, setJSONValue] = useState('')
  const inputRef = useRef(null)
  useEffect(() => {
    if (open) {
      inputRef.current.focus()
    }
  })

  const save = () => {
    const json = query.serialize()
    const str = lz.encodeBase64(lz.compress(json))
    window.localStorage.setItem('json', str)
  }

  const [theme, setTheme] = useTheme()
  return (
    <div className='flex items-center mb-4 bg-white p-1 rounded-md justify-between dark:bg-slate-900 transition-all'>
      {enabled ? (
        <div className='flex'>
          <div
            className={`p-2 rounded-md transition-all ${
              canUndo
                ? 'hover:bg-gray-100  cursor-pointer text-indigo-500 dark:hover:bg-gray-700 dark:text-slate-100'
                : 'p-2 rounded-md transition-all cursor-not-allowed text-gray-300 dark:text-gray-500'
            }`}
            onClick={() => actions.history.undo()}
          >
            <BackSVG />
          </div>
          <div
            className={`p-2 rounded-md transition-all ${
              canRedo
                ? 'hover:bg-gray-100  cursor-pointer text-indigo-500 dark:hover:bg-gray-700 dark:text-slate-100'
                : 'p-2 rounded-md transition-all cursor-not-allowed text-gray-300 dark:text-gray-500'
            }`}
            onClick={() => actions.history.redo()}
          >
            <ForwardSVG />
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div className='flex space-x-1'>
        <button
          className={`text-indigo-500 p-2.5 rounded-md flex items-center hover:bg-gray-100 transition-all dark:hover:bg-gray-700 dark:text-slate-100 ${theme === 'light' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
          onClick={() => setTheme('light')}
        >
          <SunSvg />
          <div className='text-xs ml-2'>Light Mode</div>
        </button>
        <button
          className={`text-indigo-500 p-2.5 rounded-md flex items-center hover:bg-gray-100 transition-all dark:hover:bg-gray-700 dark:text-slate-100 ${theme === 'dark' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
          onClick={() => setTheme('dark')}
        >
          <MoonSvg />
          <div className='text-xs ml-2'>Dark Mode</div>
        </button>
        <div className='bg-gray-100 flex items-center justify-center p-1 rounded-md dark:bg-gray-700'>
          <button
            className='bg-white text-indigo-500 p-1.5 rounded-md dark:bg-slate-500 dark:text-slate-100'
            onClick={downLoadHTML}
            title='Switch export to HTML format'
          >
            <HTMLFileSVG />
          </button>
        </div>
        <div className='bg-gray-100 flex items-center justify-center p-1 rounded-md dark:bg-gray-700'>
          <button
            className='bg-white text-indigo-500 rounded-md dark:bg-slate-500 dark:text-slate-100 p-1.5'
            onClick={copyJSON}
            title='Copy current state'
          >
            <Copy copyIcon={<JSONSVG />} ref={copyRef} title='Copy current state' />
          </button>
        </div>
        <div className='bg-gray-100 flex items-center justify-center p-1 rounded-md dark:bg-gray-700'>
          <button
            className='bg-white text-indigo-500 p-1.5 rounded-md dark:bg-slate-500 dark:text-slate-100'
            title='Load'
            onClick={() => {
              setOpen(true)
            }}
          >
            <ImportSVG />
          </button>
        </div>
        <div className='bg-gray-100 flex items-center justify-center p-1 rounded-md dark:bg-gray-700'>
          <button
            className='bg-white text-indigo-500 p-1.5 rounded-md dark:bg-slate-500 dark:text-slate-100'
            onClick={() => {
              actions.setOptions((options) => (options.enabled = !enabled))
            }}
          >
            {enabled ? <LockSVG /> : <UnLockSVG />}
          </button>
        </div>
        <div className='bg-gray-100 flex items-center justify-center p-1 rounded-md dark:bg-gray-700'>
          <button
            className='bg-white text-indigo-500 p-1.5 rounded-md dark:bg-slate-500 dark:text-slate-100'
            onClick={save}
            title='Save'
          >
            <SaveSvg />
          </button>
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className='bg-slate-50 p-3 px-6 rounded-md w-full dark:bg-slate-700'>
          <div className='font-semibold text-xl text-black dark:text-slate-100'>Load State</div>
          <input
            type='text'
            ref={inputRef}
            value={jsonValue}
            onChange={(e) => setJSONValue(e.target.value)}
            className='border-b border-slate-500 w-full bg-transparent mt-3 py-2 outline-none text-sm text-black dark:text-slate-100'
            placeholder='Paste the contents that was copied from the "Copy Current State" button'
          />
          <div className='flex justify-end pt-6'>
            <button
              className='font-semibold text-indigo-500 mr-8 dark:text-slate-100'
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button
              className='font-semibold text-indigo-500 dark:text-slate-100'
              onClick={() => {
                const json = lz.decompress(lz.decodeBase64(jsonValue))
                actions.deserialize(json)
                setOpen(false)
              }}
            >
              Load
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Topbar
