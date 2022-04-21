import React from 'react'

import { TextInput } from './TextInput'

export default {
  title: 'Components/Forms/TextInput',
  component: TextInput
}

const Template = args => <TextInput {...args} />

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

export const PasswordType = Template.bind({})
PasswordType.args = {
  size: 'md',
  type: 'password',
  value: '1234',
  label: 'Password'
}

export const Error = Template.bind({})
Error.args = {
  size: 'sm',
  label: 'Label',
  error: 'Some error message'
}
