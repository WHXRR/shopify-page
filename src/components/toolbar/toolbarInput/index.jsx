import { useNode } from '@craftjs/core'
import PropTypes from 'prop-types'
import { memo } from 'react'

export const ToolbarInput = memo(
  ({
    propKey,
    label,
    labelWidth,
    labelPosition = 'top',
    type = 'text',
    textAlign = 'center',
    showColorText = true,
  }) => {
    const {
      actions: { setProp },
      propValue,
    } = useNode((node) => ({
      propValue: node.data.props[propKey],
    }))
    return (
      <div
        className={`flex ${labelPosition === 'left' ? 'items-center justify-between gap-x-1' : 'flex-col gap-y-1'}`}
      >
        <div
          className='text-slate-500 text-xs font-medium py-1 dark:text-slate-100'
          style={{ width: labelWidth }}
        >
          {label}
        </div>
        <div className='flex flex-1 items-center justify-between'>
          {type === 'color' && <div className='text-xs'>{showColorText ? propValue : ''}</div>}
          <input
            type={type}
            className={`${type === 'color' ? 'w-5 h-5 bg-transparent' : 'my-input flex-1 px-2 bg-gray-50 dark:bg-gray-700'}`}
            style={{ textAlign }}
            value={propValue}
            onChange={(e) => {
              setProp((props) => (props[propKey] = e.target.value))
            }}
          />
        </div>
      </div>
    )
  },
)

ToolbarInput.displayName = ToolbarInput
ToolbarInput.propTypes = {
  label: PropTypes.string,
  labelWidth: PropTypes.string,
  labelPosition: PropTypes.string,
  type: PropTypes.string,
  textAlign: PropTypes.string,
  showColorText: PropTypes.bool,
  propKey: PropTypes.string.isRequired,
}
