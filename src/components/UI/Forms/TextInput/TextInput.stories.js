import React from 'react'

import { TextInput } from './TextInput'

export default {
  title: 'Components/Forms/TextInput',
  component: TextInput
}

const Template = args => <TextInput {...args} />

/*
  name,
  type = 'text',
  placeholder,
  size = 'md',
  label,
  value = '',
  disabled = false,
  error = '',
  required = false,
  className,
  onChange,
*/

export const Large = Template.bind({})
Large.args = {
  size: 'lg',
  label: 'Label'
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'md',
  label: 'Label'
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
  label: 'Label'
}

export const WithoutLabel = Template.bind({})
WithoutLabel.args = {
  size: 'sm'
}

export const Error = Template.bind({})
Error.args = {
  size: 'sm',
  label: 'Label',
  error: 'Some error message'
}
