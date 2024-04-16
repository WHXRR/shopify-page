import PropTypes from 'prop-types'
import { useNode } from '@craftjs/core'
import formComponents from '@/components/toolbar'
import UIComponents from '@/components/ui'

const { Accordion } = UIComponents
const { ToolbarInput, ToolbarRadio, ToolbarSelect, ToolbarResponsive } = formComponents
export const Container = ({
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
  backgroundColor,
  color,
  flexDirection,
  flex,
  alignItems,
  justifyContent,
  width,
  height,
  borderWidth,
  borderColor,
  borderRadius,
  borderStyle,
  style,
}) => {
  const {
    connectors: { connect, drag },
  } = useNode()
  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className={className}
      style={{
        display: 'flex',
        margin: `${marginTop + 'px'} ${marginRight + 'px'} ${marginBottom + 'px'} ${marginLeft + 'px'}`,
        padding: `${paddingTop + 'px'} ${paddingRight + 'px'} ${paddingBottom + 'px'} ${paddingLeft + 'px'}`,
        backgroundColor,
        color,
        flexDirection,
        flex,
        alignItems,
        justifyContent,
        width: +width ? width + 'px' : width,
        height: +height ? height + 'px' : height,
        borderWidth: `${borderWidth}px`,
        borderColor,
        borderRadius: `${borderRadius}px`,
        borderStyle,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export const ContainerSettings = () => {
  const { name } = useNode((node) => {
    return {
      props: node.data.props,
      name: node.data.custom.displayName || node.data.displayName,
    }
  })
  const margin = ['marginTop', 'marginRight', 'marginBottom', 'marginLeft']
  const padding = ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft']
  const borderStyle = [
    {
      label: 'solid',
      value: 'solid',
    },
    {
      label: 'dashed',
      value: 'dashed',
    },
    {
      label: 'dotted',
      value: 'dotted',
    },
    {
      label: 'double',
      value: 'double',
    },
    {
      label: 'groove',
      value: 'groove',
    },
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
        </Accordion>
      </div>
      <div className='py-1.5 border-b border-bg-gray dark:border-b-gray-700'>
        <Accordion titleClassName='font-semibold text-sm' title='Dimensions'>
          <div className='grid grid-cols-2 px-4 pb-2 gap-2'>
            <ToolbarInput propKey='width' label='Width' labelWidth='40px' labelPosition='left' />
            <ToolbarInput propKey='height' label='Height' labelWidth='40px' labelPosition='left' />
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
            <ToolbarInput type='color' propKey='backgroundColor' label='BackgroundColor' />
            <ToolbarInput type='color' propKey='color' label='Text' />
          </div>
        </Accordion>
      </div>
      <div className='py-1.5 border-b border-bg-gray dark:border-b-gray-700'>
        <Accordion titleClassName='font-semibold text-sm' title='Alignment'>
          <div className='grid grid-cols-2 px-4 pb-2 gap-2'>
            <div>
              <div className='text-slate-500 dark:text-slate-100 text-xs font-medium py-1 mb-1'>
                Flex Direction
              </div>
              <div className='flex flex-col gap-2'>
                <ToolbarRadio value='row' label='Row' propKey='flexDirection' />
                <ToolbarRadio value='column' label='Column' propKey='flexDirection' />
              </div>
            </div>
            <div>
              <div className='text-slate-500 dark:text-slate-100 text-xs font-medium py-1 mb-1'>
                Fill space
              </div>
              <div className='flex flex-col gap-2'>
                <ToolbarRadio value='1 1 0%' label='Yes' propKey='flex' />
                <ToolbarRadio value='unset' label='No' propKey='flex' />
              </div>
            </div>
            <div>
              <div className='text-slate-500 dark:text-slate-100 text-xs font-medium py-1 mb-1'>
                Align Items
              </div>
              <div className='flex flex-col gap-2'>
                <ToolbarRadio value='initial' label='Initial' propKey='alignItems' />
                <ToolbarRadio value='flex-start' label='Flex start' propKey='alignItems' />
                <ToolbarRadio value='center' label='Center' propKey='alignItems' />
                <ToolbarRadio value='flex-end' label='Flex end' propKey='alignItems' />
              </div>
            </div>
            <div>
              <div className='text-slate-500 dark:text-slate-100 text-xs font-medium py-1 mb-1'>
                Justify Content
              </div>
              <div className='flex flex-col gap-2'>
                <ToolbarRadio value='initial' label='Initial' propKey='justifyContent' />
                <ToolbarRadio value='flex-start' label='Flex start' propKey='justifyContent' />
                <ToolbarRadio value='center' label='Center' propKey='justifyContent' />
                <ToolbarRadio value='flex-end' label='Flex end' propKey='justifyContent' />
                <ToolbarRadio value='space-around' label='Space Around' propKey='justifyContent' />
                <ToolbarRadio
                  value='space-between'
                  label='Space Between'
                  propKey='justifyContent'
                />
                <ToolbarRadio value='space-evenly' label='Space Evenly' propKey='justifyContent' />
              </div>
            </div>
          </div>
        </Accordion>
      </div>
      <div className='py-1.5 border-b border-bg-gray dark:border-b-gray-700'>
        <Accordion titleClassName='font-semibold text-sm' title='Border'>
          <div className='px-4 pb-2 flex flex-col gap-2'>
            <ToolbarInput
              propKey='borderWidth'
              label='Border Width'
              labelWidth='80px'
              labelPosition='left'
              textAlign='right'
            />
            <ToolbarInput
              propKey='borderColor'
              label='Border Color'
              labelWidth='80px'
              labelPosition='left'
              type='color'
              textAlign='right'
              showColorText={false}
            />
            <ToolbarInput
              propKey='borderRadius'
              label='Border Radius'
              labelWidth='80px'
              labelPosition='left'
              textAlign='right'
            />
            <ToolbarSelect
              propKey='borderStyle'
              label='Border Style'
              labelWidth='80px'
              labelPosition='left'
              options={borderStyle}
            />
          </div>
        </Accordion>
      </div>
    </div>
  )
}

Container.craft = {
  props: {
    className: '',
    marginTop: '0',
    marginRight: '0',
    marginBottom: '0',
    marginLeft: '0',
    paddingTop: '0',
    paddingRight: '0',
    paddingBottom: '0',
    paddingLeft: '0',
    backgroundColor: '#eceff7',
    color: '#000000',
    flexDirection: 'row',
    flex: 'unset',
    alignItems: 'initial',
    justifyContent: 'initial',
    width: '100%',
    height: '300',
    borderWidth: '0',
    borderColor: '#000000',
    borderRadius: '0',
    borderStyle: 'solid',
  },
  rules: {
    canDrag: () => true,
  },
  related: {
    settings: ContainerSettings,
  },
}
