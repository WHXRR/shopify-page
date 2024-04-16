import { useNode } from '@craftjs/core'
import PropTypes from 'prop-types'
import { memo } from 'react'

export const ToolbarRadio = memo(({ propKey, label, value, className }) => {
  const {
    actions: { setProp },
    propValue,
  } = useNode((node) => ({
    propValue: node.data.props[propKey],
  }))
  return (
    <label className={'flex items-center ' + className}>
      <input
        type='radio'
        name={propKey}
        value={value}
        checked={propValue === value}
        onChange={(e) => {
          setProp((props) => (props[propKey] = e.target.value))
        }}
      />
      <div className='text-xs ml-1.5'>{label}</div>
    </label>
  )
})

ToolbarRadio.displayName = ToolbarRadio
ToolbarRadio.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  propKey: PropTypes.string.isRequired,
}
