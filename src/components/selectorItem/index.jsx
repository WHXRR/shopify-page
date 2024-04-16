import { useEditor } from '@craftjs/core'
import PropTypes from 'prop-types'

export default function SelectorItem({ name, component, className }) {
  const { connectors } = useEditor()

  return (
    <div
      className={`cursor-grab select-none p-2 ${className}`}
      ref={(ref) => {
        connectors.create(ref, component)
      }}
    >
      {name}
    </div>
  )
}

SelectorItem.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  component: PropTypes.node.isRequired,
}
