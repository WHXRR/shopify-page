import SelectorItem from '../selectorItem'
import UIComponents from '../ui'
import { componentList } from '../selectorItem/getSelectorsComponents'
import { useEditor } from '@craftjs/core'

const { Accordion, AccordionItem } = UIComponents
const SelectorContainer = () => {
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }))
  return (
    <aside
      className={`transition-all ${
        enabled
          ? 'bg-white text-black dark:bg-slate-900 dark:text-slate-100 w-64 flex flex-col relative z-20 opacity-100'
          : 'w-0 opacity-0 overflow-hidden'
      }`}
    >
      <div className='py-4 text-gray-700 text-4xl font-semibold text-center border-b border-bg-gray dark:text-slate-100 dark:border-b-gray-700'>
        <span>App</span>
        <span className='text-indigo-500'>Carft</span>
      </div>
      <div className='py-2 flex-1 overflow-y-auto'>
        {componentList.map((item) => (
          <Accordion title={item.name} key={item.name}>
            {item.name === 'Icon' ? (
              <div className='grid grid-cols-6 justify-items-center px-4'>
                {item.children.map((child) => (
                  <SelectorItem
                    key={child.name}
                    name={child.displayComponent}
                    component={child.component}
                    className='hover:bg-gray-100 rounded-md transition-all'
                  />
                ))}
              </div>
            ) : (
              item.children.map((child) => (
                <AccordionItem key={child.name}>
                  <SelectorItem name={child.name} component={child.component} />
                </AccordionItem>
              ))
            )}
          </Accordion>
        ))}
      </div>
    </aside>
  )
}

export default SelectorContainer
