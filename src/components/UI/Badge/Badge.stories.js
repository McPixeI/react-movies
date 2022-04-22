import React from 'react'

import { Badge } from './Badge'

export default {
  title: 'Components/UI/Badge',
  component: Badge
}

const DefaultTemplate = args => <Badge {...args} />

export const Primary = DefaultTemplate.bind({})
Primary.args = {
  variant: 'primary',
  children: 'Label'
}

export const Secondary = DefaultTemplate.bind({})
Secondary.args = {
  variant: 'secondary',
  children: 'Label'
}
