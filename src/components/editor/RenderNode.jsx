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
    className,
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
      // if (isActive && id != ROOT_NODE) {
      //   dom.className = `bg-indigo-50 ${dom.classList.toString()}`
      // } else dom.classList.remove('bg-indigo-50')
    }
  }, [dom, isActive, isHover])

  const getSelectorRect = useCallback(() => {
    const selectorDom = document.querySelector('.craftjs-renderer')
    const {
      top: selectorDomTop,
      left: selectorDomLeft,
      bottom: selectorDomottom,
    } = selectorDom ? selectorDom.getBoundingClientRect() : { top: 0, left: 0, bottom: 0 }
    return {
      selectorDomTop,
      selectorDomLeft,
      selectorDomottom,
    }
  }, [])

  const getPos = useCallback(
    (dom) => {
      const { selectorDomTop, selectorDomLeft, selectorDomottom } = getSelectorRect()
      const { top, left, bottom } = dom
        ? dom.getBoundingClientRect()
        : { top: 0, left: 0, bottom: 0 }
      return {
        top: `${top >= 0 ? top + selectorDomTop + 1 : bottom + selectorDomottom - 1}px`,
        left: `${left + selectorDomLeft}px`,
      }
    },
    [getSelectorRect],
  )

  const getNowPos = useCallback(() => {
    const { current: currentDOM } = currentRef
    if (!currentDOM) return
    const { top, left } = getPos(dom)
    currentDOM.style.top = top
    currentDOM.style.left = left
  }, [dom, getPos])

  useEffect(() => {
    document.querySelector('.craftjs-renderer').addEventListener('scroll', getNowPos)

    return () => {
      document.querySelector('.craftjs-renderer').removeEventListener('scroll', getNowPos)
    }
  }, [getNowPos])

  useEffect(() => {
    setTimeout(() => {
      getNowPos()
    }, 0)
  }, [className, getNowPos])

  return (
    <>
      {isHover || isActive
        ? createPortal(
            <div
              ref={currentRef}
              className='h-8 leading-8 -mt-8 text-xs px-2 py-2 text-white bg-indigo-500 fixed flex items-center select-none'
              style={{
                left: getPos(dom).left,
                top: getPos(dom).top,
                zIndex: 9999,
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
