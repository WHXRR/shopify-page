import React from 'react'
import SettingSVG from '@/assets/images/setting.svg?react'
import { useEditor } from '@craftjs/core'

export default function SettingContainer() {
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }))
  const { selected } = useEditor((state) => {
    const [currentNodeId] = state.events.selected
    let selected
    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.settings,
      }
    }
    return {
      selected,
    }
  })
  return (
    <div
      className={`transition-all ${
        enabled
          ? 'bg-white text-black dark:bg-slate-900 dark:text-slate-100 w-60 overflow-y-auto  opacity-100'
          : 'w-0 opacity-0 overflow-hidden'
      }`}
    >
      {selected ? (
        <div>{selected.settings && React.createElement(selected.settings)}</div>
      ) : (
        <div className='transition-all text-xs text-center text-gray-400 flex flex-col items-center justify-center h-full p-5 bg-gray-50 dark:bg-gray-900'>
          <div className='rounded-full p-2 mb-3 bg-indigo-100 text-indigo-500'>
            <SettingSVG />
          </div>
          Click on a component to start editing. You could also double click on the layers below to
          edit their names, like in Photoshop
        </div>
      )}
    </div>
  )
}
