import { useNode, useEditor } from '@craftjs/core'
import formComponents from '@/components/toolbar'
import UIComponents from '@/components/ui'
import ContentEditable from 'react-contenteditable'
import { FilterUselessFields } from '@/utils/FilterUselessFields'
import { TextDefaultStyle } from '@/assets/js/defaultStyle'

const { Accordion } = UIComponents

const { ToolbarInput, ToolbarRadio, ToolbarResponsive, ToolbarSelect } = formComponents
export const Text = ({
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
  textDecoration,
  lineHeight,
  style,
}) => {
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
      onChange={(e) => {
        setProp((prop) => (prop.text = e.target.value), 500)
      }}
      tagName='span'
      className={`text-default ${className}`}
      style={{
        ...newProps,
        ...style,
      }}
    />
  )
}

export const TextSettings = () => {
  const { name } = useNode((node) => {
    return {
      props: node.data.props,
      name: node.data.custom.displayName || node.data.displayName,
    }
  })
  const margin = ['marginTop', 'marginRight', 'marginBottom', 'marginLeft']
  const padding = ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft']
  const textDecoration = [
    { label: 'None', value: 'none' },
    { label: 'Underline', value: 'underline' },
    { label: 'Overline', value: 'overline' },
    { label: 'Line-through', value: 'line-through' },
  ]
  return (
    <div>
      <div className='py-4 px-4 border-b border-bg-gray font-medium text-lg dark:border-b-gray-700'>
        {name}
      </div>
      <div className='flex items-center justify-between px-4 py-3.5 border-b border-bg-gray dark:border-b-gray-700'>
        <div className='font-semibold text-sm'>Responsive</div>
        <div>
          <ToolbarResponsive />
        </div>
      </div>
      <div className='py-1.5 border-b border-bg-gray dark:border-b-gray-700'>
        <Accordion titleClassName='font-semibold text-sm' title='Typography'>
          <div className='px-4 pb-2 flex flex-col gap-2'>
            <ToolbarInput
              propKey='fontSize'
              label='Font Size'
              labelWidth='60px'
              labelPosition='left'
            />
            <ToolbarInput
              propKey='lineHeight'
              label='Line Height'
              labelWidth='60px'
              labelPosition='left'
            />
            <div className='flex justify-between gap-2 pt-2'>
              <ToolbarSelect
                propKey='textDecoration'
                label='Text Decoration'
                labelWidth='90px'
                labelPosition='left'
                options={textDecoration}
              />
            </div>
            <div className='text-slate-500 dark:text-slate-100 text-xs font-medium py-1 mb-1'>
              Align
            </div>
            <div className='flex justify-between gap-2'>
              <ToolbarRadio value='left' label='Left' propKey='textAlign' />
              <ToolbarRadio value='center' label='Center' propKey='textAlign' />
              <ToolbarRadio value='right' label='Right' propKey='textAlign' />
            </div>
            <div className='text-slate-500 dark:text-slate-100 text-xs font-medium py-1 mb-1'>
              Weight
            </div>
            <div className='flex justify-between gap-2'>
              <ToolbarRadio value='400' label='Regular' propKey='fontWeight' />
              <ToolbarRadio value='500' label='Medium' propKey='fontWeight' />
              <ToolbarRadio value='700' label='Bold' propKey='fontWeight' />
            </div>
          </div>
        </Accordion>
      </div>
      <div className='py-1.5 border-b border-bg-gray dark:border-b-gray-700'>
        <Accordion titleClassName='font-semibold text-sm' title='Margin'>
          <div className='grid grid-cols-2 px-4 pb-2 gap-2'>
            {margin.map((m) => (
              <ToolbarInput
                key={m}
                propKey={m}
                label={m.replace('margin', '')}
                labelWidth='40px'
                labelPosition='left'
              />
            ))}
          </div>
        </Accordion>
      </div>
      <div className='py-1.5 border-b border-bg-gray dark:border-b-gray-700'>
        <Accordion titleClassName='font-semibold text-sm' title='Padding'>
          <div className='grid grid-cols-2 px-4 pb-2 gap-2'>
            {padding.map((p) => (
              <ToolbarInput
                key={p}
                propKey={p}
                label={p.replace('padding', '')}
                labelWidth='40px'
                labelPosition='left'
              />
            ))}
          </div>
        </Accordion>
      </div>
      <div className='py-1.5 border-b border-bg-gray dark:border-b-gray-700'>
        <Accordion titleClassName='font-semibold text-sm' title='Colors'>
          <div className='px-4 pb-2 flex flex-col gap-2'>
            <ToolbarInput type='color' propKey='color' label='text' />
          </div>
        </Accordion>
      </div>
    </div>
  )
}

Text.craft = {
  props: {
    className: '',
    text: 'text',
    ...TextDefaultStyle,
  },
  related: {
    settings: TextSettings,
  },
}
