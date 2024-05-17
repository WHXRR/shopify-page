import ArrowUp from '@/assets/images/move-up.svg?react'
import Delete from '@/assets/images/delete.svg?react'
import Move from '@/assets/images/move.svg?react'
import { ROOT_NODE } from '@craftjs/utils'
import { useRef, useEffect, useCallback } from 'react'
import { useNode, useEditor } from '@craftjs/core'
import { createPortal } from 'react-dom'

export const RenderNode = ({ render }) => {
  const { id } = useNode()
  const { actions, query, isActive } = useEditor((_, query) => {
    return {
      isActive: query.getEvent('selected').contains(id),
    }
  })

  const {
    isHover,
    dom,
    name,
    moveable,
    deletable,
    connectors: { drag },
    parent,
  } = useNode((node) => ({
    isHover: node.events.hovered,
    dom: node.dom,
    name: node.data.custom.displayName || node.data.displayName,
    moveable: query.node(node.id).isDraggable(),
    deletable: query.node(node.id).isDeletable(),
    parent: node.data.parent,
    className: node.data.props.className,
  }))

  const currentRef = useRef(null)

  useEffect(() => {
    if (dom) {
      if (isActive || isHover) {
        dom.classList.add('component-selected')
      } else dom.classList.remove('component-selected')
      if (isActive && id != ROOT_NODE) {
        dom.classList.add('component-selected-bg')
      } else dom.classList.remove('component-selected-bg')
    }
  }, [dom, id, isActive, isHover])

  const getPos = useCallback((dom) => {
    const { top, left } = dom ? dom.getBoundingClientRect() : { top: 0, left: 0, bottom: 0 }
    return {
      top: `${top + 52}px`,
      left: `${left}px`,
    }
  }, [])

  const getNowPos = useCallback(() => {
    const { current: currentDOM } = currentRef
    if (!currentDOM) return
    const { top, left } = getPos(dom)
    currentDOM.style.top = top
    currentDOM.style.left = left
  }, [dom, getPos])

  useEffect(() => {
    document.querySelector('.craftjs-renderer').contentWindow.addEventListener('scroll', getNowPos)

    return () => {
      document
        .querySelector('.craftjs-renderer')
        .contentWindow.removeEventListener('scroll', getNowPos)
    }
  }, [getNowPos])

  return (
    <>
      {isActive
        ? createPortal(
            <div
              ref={currentRef}
              className='h-8 leading-8 -mt-8 text-xs px-2 py-2 text-white bg-indigo-500 flex items-center select-none absolute'
              style={{
                left: getPos(dom).left,
                top: getPos(dom).top,
                zIndex: 9,
              }}
            >
              <h2 className='flex-1 mr-4'>{name}</h2>
              {moveable ? (
                <a className='mr-2 cursor-move' ref={drag}>
                  <Move className='w-4 h-4 fill-white' />
                </a>
              ) : null}
              {id !== ROOT_NODE && (
                <a
                  className='mr-2 cursor-pointer'
                  onClick={() => {
                    actions.selectNode(parent)
                  }}
                >
                  <ArrowUp className='w-4 h-4 fill-white' />
                </a>
              )}
              {deletable ? (
                <a
                  className='cursor-pointer'
                  onMouseDown={(e) => {
                    e.stopPropagation()
                    actions.delete(id)
                  }}
                >
                  <Delete className='w-4 h-4 fill-white' />
                </a>
              ) : null}
            </div>,
            document.querySelector('.page-container'),
          )
        : null}
      {render}
    </>
  )
}
