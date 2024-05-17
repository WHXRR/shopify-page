import { useNode } from '@craftjs/core'
import formComponents from '@/components/toolbar'
import UIComponents from '@/components/ui'
import { FilterUselessFields } from '@/utils/FilterUselessFields'
import { ImageDefaultStyle } from '@/assets/js/defaultStyle'

const { Accordion } = UIComponents
const { ToolbarInput, ToolbarSelect, ToolbarResponsive } = formComponents

export function Image({
  className,
  src,
  alt,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  width,
  height,
  objectFit,
  style,
}) {
  const {
    connectors: { connect, drag },
  } = useNode()

  const newProps = FilterUselessFields(
    {
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      width,
      height,
    },
    ImageDefaultStyle,
  )

  return (
    <span
      ref={(ref) => connect(drag(ref))}
      className={`img-default ${className}`}
      style={{
        ...newProps,
        ...style,
      }}
    >
      <img
        src={src}
        alt={alt}
        className='img'
        style={{
          objectFit,
        }}
      />
    </span>
  )
}

export const ImageSettings = () => {
  const { name } = useNode((node) => {
    return {
      props: node.data.props,
      name: node.data.custom.displayName || node.data.displayName,
    }
  })
  const margin = ['marginTop', 'marginRight', 'marginBottom', 'marginLeft']
  const padding = ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft']
  const objectFitOptions = [
    { label: 'Contain', value: 'contain' },
    { label: 'Cover', value: 'cover' },
    { label: 'Fill', value: 'fill' },
    { label: 'None', value: 'none' },
    { label: 'Scale Down', value: 'scale-down' },
  ]
  return (
    <div>
      <div className='py-4 px-4 pb-2 border-b border-bg-gray font-medium text-lg dark:border-b-gray-700'>
        {name}
      </div>
      <div className='flex items-center justify-between px-4 py-3.5 border-b border-bg-gray dark:border-b-gray-700'>
        <div className='font-semibold text-sm'>Responsive</div>
        <div>
          <ToolbarResponsive />
        </div>
      </div>
      <div className='py-1.5 border-b border-bg-gray dark:border-b-gray-700'>
        <Accordion titleClassName='font-semibold text-sm' title='Dimensions'>
          <div className='grid grid-cols-2 px-4 pb-2 gap-2'>
            <ToolbarInput propKey='width' label='Width' labelWidth='40px' labelPosition='left' />
            <ToolbarInput propKey='height' label='Height' labelWidth='40px' labelPosition='left' />
          </div>
          <div className='px-4 pb-2 flex flex-col gap-2'>
            <ToolbarInput propKey='src' label='URL' textAlign='left' />
            <ToolbarInput propKey='alt' label='ALT' textAlign='left' />
            <ToolbarSelect propKey='objectFit' label='Object Fit' options={objectFitOptions} />
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
    </div>
  )
}

Image.craft = {
  props: {
    className: '',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    alt: 'img',
    ...ImageDefaultStyle,
  },
  related: {
    settings: ImageSettings,
  },
}
