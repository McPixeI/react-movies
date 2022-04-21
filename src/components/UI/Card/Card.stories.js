import React from 'react'

import { Card, CardBody, CardHeading } from './Card'

export default {
  title: 'Components/UI/Card',
  component: Card
}

const Template = args => (
  <Card {...args}>
    <CardHeading></CardHeading>
    <CardBody></CardBody>
  </Card>
)

export const Default = Template.bind({})
Default.args = {}
