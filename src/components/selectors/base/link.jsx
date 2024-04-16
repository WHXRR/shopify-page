import { useNode } from '@craftjs/core'
import { TextSettings } from '../base/text'
import { Text } from './text'

export function Link({
  text,
  className,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  color,
  textAlign,
  fontWeight,
  fontSize,
  style,
  children,
}) {
  const {
    connectors: { connect, drag },
  } = useNode()
  return (
    <a
      onClick={(e) => {
        e.preventDefault()
      }}
      href='#'
      ref={(ref) => connect(drag(ref))}
      className={className}
      style={{
        margin: `${marginTop + 'px'} ${marginRight + 'px'} ${marginBottom + 'px'} ${marginLeft + 'px'}`,
        padding: `${paddingTop + 'px'} ${paddingRight + 'px'} ${paddingBottom + 'px'} ${paddingLeft + 'px'}`,
        color,
        textAlign,
        fontWeight,
        fontSize: `${fontSize}px`,
        ...style,
      }}
    >
      <Text text={text} />
      {children}
    </a>
  )
}
Link.craft = {
  props: {
    text: 'link',
    marginTop: '0',
    marginRight: '0',
    marginBottom: '0',
    marginLeft: '0',
    paddingTop: '5',
    paddingRight: '5',
    paddingBottom: '5',
    paddingLeft: '5',
    color: '#000000',
    textAlign: 'left',
    fontWeight: '400',
    fontSize: '16',
  },
  related: {
    settings: TextSettings,
  },
}
