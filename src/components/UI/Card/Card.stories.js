import React from 'react'
import { Button } from '../Button/Button'
import { Card, CardBody, CardHeading } from './Card'

export default {
  title: 'Components/UI/Card',
  component: Card
}

const BasicTemplate = args => (
  <Card {...args}>
    <CardBody>
      <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        Heading text
      </h5>
      <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
        We can put whatever we want inside every Card child, for example, a
        button:
      </p>
      <Button size='md'>Button</Button>
    </CardBody>
  </Card>
)

const WithHeadingTemplate = args => (
  <Card {...args}>
    <CardHeading>
      <img
        src='https://via.placeholder.com/400'
        alt='Example'
      />
    </CardHeading>
    <CardBody>
      <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        Heading text
      </h5>
      <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
        Lorem ipsum dolor sit amet
      </p>
    </CardBody>
  </Card>
)

export const Basic = BasicTemplate.bind({})

export const WithHeading = WithHeadingTemplate.bind({})
WithHeadingTemplate.args = {}

export const CardFullLink = WithHeadingTemplate.bind({})
CardFullLink.args = {
  link: 'https://www.google.com'
}
