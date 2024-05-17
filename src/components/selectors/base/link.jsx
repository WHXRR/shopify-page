import { useNode, useEditor } from '@craftjs/core'
import { TextSettings } from '../base/text'
import ContentEditable from 'react-contenteditable'
import { FilterUselessFields } from '@/utils/FilterUselessFields'
import { TextDefaultStyle } from '@/assets/js/defaultStyle'

export function Link({
  text,
  style,
  children,
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
  textDecoration,
  lineHeight,
}) {
  const {
    connectors: { connect },
    actions: { setProp },
  } = useNode()
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }))

  const newProps = FilterUselessFields(
    {
      color,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      textAlign,
      fontWeight,
      fontSize,
      textDecoration,
      lineHeight,
    },
    TextDefaultStyle,
  )

  return (
    <ContentEditable
      innerRef={connect}
      html={text}
      disabled={!enabled}
      href='#'
      tagName='a'
      className={`text-default ${className}`}
      style={{
        ...newProps,
        ...style,
      }}
      onChange={(e) => {
        setProp((prop) => (prop.text = e.target.value), 500)
      }}
      onClick={(e) => {
        e.preventDefault()
      }}
    >
      {children}
    </ContentEditable>
  )
}
Link.craft = {
  props: {
    className: '',
    text: 'link',
    ...TextDefaultStyle,
  },
  related: {
    settings: TextSettings,
  },
}
