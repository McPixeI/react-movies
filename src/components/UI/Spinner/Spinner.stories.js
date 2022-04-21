import React from 'react'

import { Spinner } from './Spinner'

export default {
  title: 'Components/UI/Spinner',
  component: Spinner
}

const Template = args => <Spinner {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary'
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm'
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'md'
}

export const Large = Template.bind({})
Large.args = {
  size: 'lg'
}

export const AlignLeft = Template.bind({})
AlignLeft.args = {
  align: 'left'
}

export const AlignCenter = Template.bind({})
AlignCenter.args = {
  align: 'center'
}

export const AlignRight = Template.bind({})
AlignRight.args = {
  align: 'right'
}
