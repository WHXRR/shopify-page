import React, { memo, useState, forwardRef, useImperativeHandle } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useClipboardCopy } from '@/hook'
import TrueSVG from '@/assets/images/true.svg?react'
import './copy.scss'

export const Copy = memo(
  forwardRef(({ copyIcon, value, title = 'copy' }, ref) => {
    const nodeRef = React.useRef(null)
    const nodeRef2 = React.useRef(null)
    const [isCopy, setIsCopy] = useState(false)
    const clipboardCopy = useClipboardCopy()

    const copy = (content = value) => {
      clipboardCopy(content)
        .then(() => {
          setIsCopy(true)
          setTimeout(() => {
            setIsCopy(false)
          }, 1000)
        })
        .catch((err) => {
          console.log(err)
        })
    }

    useImperativeHandle(ref, () => ({ copy }))

    return (
      <div className='relative w-4 h-4 fill-slate-500 dark:fill-slate-300'>
        <CSSTransition
          nodeRef={nodeRef}
          in={isCopy}
          timeout={300}
          classNames='copy'
          unmountOnExit={true}
          appear={true}
        >
          <div
            className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
            ref={nodeRef}
          >
            <TrueSVG />
          </div>
        </CSSTransition>
        <CSSTransition
          nodeRef={nodeRef2}
          in={!isCopy}
          timeout={300}
          classNames='copy'
          unmountOnExit={true}
          appear={true}
        >
          <div
            title={title}
            className='cursor-pointer flex items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
            ref={nodeRef2}
            onClick={() => copy()}
          >
            {copyIcon}
          </div>
        </CSSTransition>
      </div>
    )
  }),
)

Copy.displayName = Copy
