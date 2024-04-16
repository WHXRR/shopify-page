import { useNode } from '@craftjs/core'
import { memo } from 'react'
import PC from '@/assets/images/svg-pc.svg?react'
import Mobile from '@/assets/images/svg-mobile.svg?react'

export const ToolbarResponsive = memo(() => {
  const {
    actions: { setProp },
    propValue,
  } = useNode((node) => ({ propValue: node.data.props.className }))

  const changeResponsive = (value) => {
    setProp((props) => {
      props.className = props.className.includes(value)
        ? props.className.replace(value, '')
        : `${props.className} ${value}`
    })
  }
  const responsive = [
    {
      value: 'hidden-pc',
      icon: <PC />,
    },
    {
      value: 'hidden-xs',
      icon: <Mobile />,
    },
  ]
  return (
    <div className='flex gap-2'>
      {responsive.map((item, index) => (
        <div
          key={index}
          className={`my-responsive ${propValue.includes(item.value) ? '' : 'text-indigo-600 bg-indigo-100 dark:bg-gray-700 dark:text-gray-100'}`}
          onClick={() => changeResponsive(item.value)}
        >
          {item.icon}
        </div>
      ))}
    </div>
  )
})

ToolbarResponsive.displayName = ToolbarResponsive
