import { useNode } from '@craftjs/core'
import PropTypes from 'prop-types'
import { memo } from 'react'

export const ToolbarSelect = memo(
  ({ propKey, label, labelWidth, labelPosition = 'top', options, textAlign = 'center' }) => {
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
          className='text-slate-500 text-xs font-medium py-1 dark:text-slate-100 flex-shrink-0'
          style={{ width: labelWidth }}
        >
          {label}
        </div>
        <select
          className='my-input bg-gray-50 dark:bg-gray-700'
          onChange={(e) => {
            setProp((props) => (props[propKey] = e.target.value))
          }}
          defaultValue={propValue}
          style={{ textAlign }}
        >
          {options.map((option, index) => {
            return (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            )
          })}
        </select>
      </div>
    )
  },
)

ToolbarSelect.displayName = ToolbarSelect
ToolbarSelect.propTypes = {
  label: PropTypes.string,
  labelWidth: PropTypes.string,
  labelPosition: PropTypes.string,
  textAlign: PropTypes.string,
  propKey: PropTypes.string.isRequired,
}
