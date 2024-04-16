import React, { Fragment, memo } from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import './modal.scss'

const Modal = memo(({ open, onClose, children, className = 'w-3/4 max-w-5xl' }) => {
  const nodeRef1 = React.useRef(null)
  const nodeRef2 = React.useRef(null)
  const dom = document.querySelector('#root')

  return (
    <Fragment>
      {dom &&
        createPortal(
          <CSSTransition
            nodeRef={nodeRef1}
            in={open}
            timeout={300}
            classNames='modal'
            unmountOnExit={true}
            appear={true}
          >
            <div
              ref={nodeRef1}
              className='fixed left-0 right-0 top-0 bottom-0 bg-gray-900 bg-opacity-50 z-30 flex items-center justify-center'
              onClick={onClose}
            >
              <div
                ref={nodeRef2}
                className={`flex items-center justify-center ${className}`}
                onClick={(e) => {
                  e.stopPropagation()
                }}
              >
                {children}
              </div>
            </div>
          </CSSTransition>,
          dom,
        )}
    </Fragment>
  )
})
Modal.displayName = Modal

export { Modal }
