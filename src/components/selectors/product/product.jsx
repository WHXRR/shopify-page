import { useNode, Element } from '@craftjs/core'
import formComponents from '@/components/toolbar'
import UIComponents from '@/components/ui'
import { Container } from '../base/container'
import { Text } from '../base/text'
import { Image } from '../base/image'
import { Button } from '../base/button'

const { Accordion } = UIComponents
const { ToolbarInput, ToolbarRadio, ToolbarSelect, ToolbarResponsive } = formComponents

export function Product({
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
  borderWidth,
  borderColor,
  borderRadiusLTop,
  borderRadiusRTop,
  borderRadiusRBottom,
  borderRadiusLBottom,
  borderStyle,
  flexWrap,
  display,
  style,
}) {
  const {
    connectors: { connect, drag },
  } = useNode()
  return (
    <div
      ref={(ref) => connect(drag(ref))}
      style={{
        display,
        margin: `${marginTop + 'px'} ${marginRight + 'px'} ${marginBottom + 'px'} ${marginLeft + 'px'}`,
        padding: `${paddingTop + 'px'} ${paddingRight + 'px'} ${paddingBottom + 'px'} ${paddingLeft + 'px'}`,
        backgroundColor,
        color,
        flexDirection,
        flex,
        alignItems,
        justifyContent,
        borderWidth: `${borderWidth}px`,
        borderColor,
        borderRadius: `${borderRadiusLTop + 'px'} ${borderRadiusRTop + 'px'} ${borderRadiusRBottom + 'px'} ${borderRadiusLBottom + 'px'}`,
        borderStyle,
        boxSizing: 'border-box',
        flexShrink: 0,
        flexWrap,
        ...style,
      }}
    >
      <Element
        is={Container}
        id='text1'
        canvas
        custom={{ displayName: 'Text1' }}
        height='auto'
        justifyContent='center'
        backgroundColor='#000000'
        borderTopLeftRadius={15}
        borderTopRightRadius={15}
      >
        <Text text='Discovery package' color='#ffffff' fontSize={20} fontWeight='bold' />
      </Element>
      <Element
        is={Container}
        id='text2'
        canvas
        custom={{ displayName: 'Text2' }}
        height='auto'
        justifyContent='center'
        backgroundColor='#f5f6f6'
      >
        <Text text='1 PC * Weed puller' color='#787878' />
      </Element>
      <Element
        is={Container}
        id='text3'
        canvas
        custom={{ displayName: 'Text3' }}
        height='auto'
        justifyContent='center'
        backgroundColor='#f5f6f6'
      >
        <Text text='52% OFF' color='#787878' fontWeight='bold' fontSize={30} />
      </Element>
      <Element
        is={Container}
        id='productImg'
        canvas
        custom={{ displayName: 'ProductImg' }}
        height='auto'
        justifyContent='center'
        backgroundColor='#f5f6f6'
      >
        <Image src='https://cdn.shopify.com/s/files/1/0556/2348/3564/files/sku_1_4c934d5b-2793-4960-8774-d9a64523d0d4.jpg?v=1713258741' />
      </Element>
      <Element
        is={Container}
        id='productComment'
        canvas
        custom={{ displayName: 'ProductComment' }}
        height='auto'
        justifyContent='center'
        alignItems='center'
        backgroundColor='transparent'
        paddingTop={5}
        paddingBottom={5}
      >
        <Image
          src='https://cdn.shopifycdn.net/s/files/1/0225/4818/5162/files/five_stars.png?v=1619589505'
          width={100}
        />
        <Text
          text='45.9K Reviews'
          color='#6c757d'
          paddingBottom={0}
          paddingTop={0}
          paddingRight={0}
          paddingLeft={10}
        />
      </Element>
      <Element
        is={Container}
        id='productPrice'
        canvas
        custom={{ displayName: 'ProductPrice' }}
        height='auto'
        justifyContent='center'
        alignItems='center'
        backgroundColor='transparent'
        paddingTop={0}
        paddingBottom={5}
      >
        <Text
          text='£24.99'
          color='#888888'
          paddingBottom={0}
          paddingTop={0}
          paddingRight={0}
          paddingLeft={10}
          fontWeight='bold'
          fontSize={18}
          textDecoration='line-through'
        />
        <Text
          text='£11.99'
          color='#33602c'
          paddingBottom={0}
          paddingTop={0}
          paddingRight={0}
          paddingLeft={5}
          fontWeight='bold'
          fontSize={24}
        />
      </Element>
      <Element
        is={Container}
        id='productQTY'
        canvas
        custom={{ displayName: 'ProductQTY' }}
        height='auto'
        justifyContent='center'
        alignItems='center'
        backgroundColor='transparent'
      >
        <div className='product-qty'>
          <a className='product-minus'></a>
          <input
            id='quantity'
            className='product-ipt'
            min='1'
            name='quantity'
            type='text'
            defaultValue='1'
          />
          <a className='product-plus'></a>
        </div>
      </Element>
      <Element
        is={Container}
        id='productBuy'
        canvas
        custom={{ displayName: 'ProductBuy' }}
        height='auto'
        justifyContent='center'
        alignItems='center'
        backgroundColor='transparent'
        marginTop={10}
      >
        <Button
          className='beat buy-btn'
          backgroundColor='#000000'
          color='#ffffff'
          paddingLeft={50}
          paddingRight={50}
          paddingTop={8}
          paddingBottom={8}
          borderRadiusLBottom={50}
          borderRadiusLTop={50}
          borderRadiusRBottom={50}
          borderRadiusRTop={50}
        >
          <Text text='Order Now' fontWeight='bold' />
        </Button>
      </Element>
      <Element
        is={Container}
        id='productTips'
        canvas
        custom={{ displayName: 'ProductTips' }}
        height='auto'
        justifyContent='center'
        alignItems='center'
        backgroundColor='transparent'
      >
        <Text text='Secured and Encrypted' fontSize={12} color='#696969' />
      </Element>
    </div>
  )
}

export const ProductSettings = () => {
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
  const displayStyle = [
    {
      label: 'flex',
      value: 'flex',
    },
    {
      label: 'block',
      value: 'block',
    },
    {
      label: 'inline',
      value: 'inline',
    },
    {
      label: 'inline-block',
      value: 'inline-block',
    },
  ]
  const borderRadius = [
    'borderRadiusLTop',
    'borderRadiusRTop',
    'borderRadiusLBottom',
    'borderRadiusRBottom',
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
        <Accordion titleClassName='font-semibold text-sm' title='Display'>
          <div className='px-4 pb-2 flex flex-col gap-2'>
            <ToolbarSelect
              propKey='display'
              label='Display'
              labelWidth='80px'
              labelPosition='left'
              options={displayStyle}
            />
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
            <div>
              <div className='text-slate-500 dark:text-slate-100 text-xs font-medium py-1 mb-1'>
                Flex Wrap
              </div>
              <div className='flex flex-col gap-2'>
                <ToolbarRadio value='wrap' label='Wrap' propKey='flexWrap' />
                <ToolbarRadio value='no-wrap' label='NoWrap' propKey='flexWrap' />
              </div>
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
            <ToolbarInput type='color' propKey='backgroundColor' label='BackgroundColor' />
            <ToolbarInput type='color' propKey='color' label='Text' />
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
            <div className='grid grid-cols-2 pb-2 gap-2'>
              {borderRadius.map((b) => (
                <ToolbarInput
                  key={b}
                  propKey={b}
                  label={b.replace('borderRadius', '')}
                  labelWidth='50px'
                  labelPosition='left'
                />
              ))}
            </div>
          </div>
        </Accordion>
      </div>
    </div>
  )
}

Product.craft = {
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
    backgroundColor: 'transparent',
    color: '#000000',
    flexDirection: 'column',
    flex: 'unset',
    alignItems: 'initial',
    justifyContent: 'initial',
    borderWidth: '0',
    borderColor: '#000000',
    borderStyle: 'solid',
    flexWrap: 'no-wrap',
    display: 'flex',
    borderRadiusLTop: '0',
    borderRadiusRTop: '0',
    borderRadiusRBottom: '0',
    borderRadiusLBottom: '0',
  },
  related: {
    settings: ProductSettings,
  },
}
