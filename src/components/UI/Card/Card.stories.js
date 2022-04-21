import React from 'react'

import { Card, CardBody, CardHeading } from './Card'

export default {
  title: 'Components/UI/Card',
  component: Card
}

const Template = args => (
  <Card {...args}>
    <CardHeading>
      <img
        class='rounded-t-lg'
        src='https://via.placeholder.com/400'
        alt='Example image'
      />
    </CardHeading>
    <CardBody>
      <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        Heading text
      </h5>
      <p class='mb-3 font-normal text-gray-700 dark:text-gray-400'>
        Lorem ipsum dolor sit amet
      </p>
    </CardBody>
  </Card>
)

export const Default = Template.bind({})
Default.args = {}
