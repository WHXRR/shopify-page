import SelectorsComponents from '../selectors'
import { Element } from '@craftjs/core'

const { Container, Text, Link, Image, Product, Button } = SelectorsComponents

export const componentList = [
  {
    name: 'Base',
    children: [
      { name: 'Text', component: <Text /> },
      {
        name: 'Link',
        component: <Element is={Link} canvas></Element>,
      },
      { name: 'Image', component: <Image /> },
      { name: 'Button', component: <Button /> },
      {
        name: 'Container',
        component: <Element is={Container} canvas></Element>,
      },
    ],
  },
  {
    name: 'Product',
    children: [
      {
        name: 'Product',
        component: <Product />,
      },
    ],
  },
]
