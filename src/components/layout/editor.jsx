import { Element, Frame, useEditor } from '@craftjs/core'
import { useState } from 'react'
import { Container } from '../selectors/base/container'
import PC from '@/assets/images/svg-pc.svg?react'
import Pad from '@/assets/images/svg-pad.svg?react'
import Mobile from '@/assets/images/svg-mobile.svg?react'
import Framer from 'react-frame-component'
import Topbar from './topbar'

export default function EditorContainer() {
  const { connectors } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
  }))

  const [screenType, setScreenType] = useState('pc')

  const screenTypes = [
    {
      name: 'pc',
      icon: <PC />,
      width: '100%',
    },
    {
      name: 'pad',
      icon: <Pad />,
      width: '768px',
    },
    {
      name: 'mobile',
      icon: <Mobile />,
      width: '480px',
    },
  ]

  const changeScreen = (screen) => {
    setScreenType(screen.name)
    const selector = document.getElementById('selectorContainer')
    selector.style.width = screen.width
  }

  const initialContent = `<!DOCTYPE html>
  <html>
    <head>
      <style>
        html,
        body,
        .iframe-container,
        .frame-content {
          width: 100%;
          height: 100%;
        }
        html,
        body {
          padding: 0;
          margin: 0;
          color: #333;
          font-family: Basier circle, -apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
            "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol,
            "Noto Color Emoji";
        }
        .component-selected {
          position: relative;
        }
        .component-selected::after {
          position: absolute;
          left: 0;
          top: 0;
          content: "";
          border-color: #6366f1;
          border-width: 1px;
          border-style: dashed;
          width: 100%;
          height: 100%;
          pointer-events: none;
          display: block;
          box-sizing: border-box;
        }
        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        ::-webkit-scrollbar-track-piece {
          background-color: transparent;
          -webkit-border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:vertical {
          height: 6px;
          background-color: #e5e7eb;
          -webkit-border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:horizontal {
          width: 6px;
          background-color: #e5e7eb;
          -webkit-border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:vertical:hover,
        ::-webkit-scrollbar-thumb:horizontal:hover {
          background-color: #e5e7eb;
        }
        @media (min-width: 768px) {
          .hidden-pc {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .hidden-xs {
            display: none !important;
          }
        }
      </style>     
    </head>
    <body>
      <div class="iframe-container"></div>
    </body>
  </html>`

  return (
    <main className='flex flex-col flex-1 page-container bg-layout dark:bg-gray-800 transition-all'>
      <Topbar />
      <div
        id='selectorContainer'
        className='flex-1 px-8 py-4 flex flex-col m-auto w-full transition-all'
        ref={(ref) => connectors.select(connectors.hover(ref, null), null)}
      >
        <div className='bg-gray-200 px-3 py-4 rounded-t-xl flex justify-between items-center dark:bg-gray-700 transition-all'>
          <div className='flex'>
            <div className='rounded-full w-2 h-2 bg-red-500 mr-3'></div>
            <div className='rounded-full w-2 h-2 bg-yellow-500 mr-3'></div>
            <div className='rounded-full w-2 h-2 bg-green-500'></div>
          </div>
          <div className='flex'>
            {screenTypes.map((screen) => (
              <button
                className={`mr-3 w-5 h-5 hover:text-indigo-500 dark:hover:text-slate-100 ${screenType == screen.name ? 'text-indigo-500 dark:text-slate-100' : 'text-gray-400 dark:text-gray-500'}`}
                key={screen.name}
                onClick={() => changeScreen(screen)}
              >
                {screen.icon}
              </button>
            ))}
          </div>
        </div>
        <div className='flex-1 rounded-b-xl flex justify-center flex-col overflow-y-auto'>
          <Framer
            className='bg-white craftjs-renderer w-full h-full'
            initialContent={initialContent}
          >
            <Frame>
              <Element
                is={Container}
                canvas
                className='selector'
                backgroundColor='#ffffff'
                flexDirection='column'
                style={{ minHeight: '100%' }}
                custom={{ displayName: 'App' }}
              ></Element>
            </Frame>
          </Framer>
        </div>
      </div>
    </main>
  )
}
