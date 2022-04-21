import React from 'react'

import { Button } from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' }
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <Button {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: 'primary',
  children: 'Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  children: 'Button'
}

export const Large = Template.bind({})
Large.args = {
  size: 'lg',
  children: 'Button'
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'md',
  children: 'Button'
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
  children: 'Button'
}

export const Disabled = Template.bind({})
Disabled.args = {
  size: 'md',
  children: 'Button',
  disabled: true
}

export const Loading = Template.bind({})
Loading.args = {
  size: 'md',
  children: 'Button',
  loading: true
}
