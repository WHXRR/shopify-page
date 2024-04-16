import React from 'react'
import Arrow from '@/assets/images/arrow.svg?react'
import { memo, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './accordion.scss'

const Accordion = memo(
  ({ title, children, className = '', initOpen, titleClassName = 'font-bold text-sm' }) => {
    const [open, setOpen] = useState(initOpen || false)
    const nodeRef = React.useRef(null)
    return (
      <div>
        <div
          className={`flex items-center justify-between px-4 py-2 cursor-pointer select-none ${className}`}
          onClick={() => setOpen(!open)}
        >
          <div className={titleClassName}>{title}</div>
          <Arrow
            className={`fill-stone-900 dark:fill-stone-100 transition-all duration-300 ${open ? 'rotate-180' : ''}`}
          />
        </div>
        <CSSTransition
          nodeRef={nodeRef}
          in={open}
          timeout={300}
          classNames='accordion'
          unmountOnExit={true}
          appear={true}
        >
          <div ref={nodeRef}>{children}</div>
        </CSSTransition>
      </div>
    )
  },
)
Accordion.displayName = Accordion

const AccordionItem = memo(({ children, onClick }) => {
  return (
    <div className='px-4 text-sm' onClick={onClick}>
      <div className='flex flex-col cursor-pointer rounded-md transition-all hover:bg-gray-100 dark:hover:bg-gray-700'>
        {children}
      </div>
    </div>
  )
})
AccordionItem.displayName = AccordionItem

export { Accordion, AccordionItem }
