import React from 'react'

import { Toggle } from './Toggle'

export default {
  title: 'Components/Forms/Toggle',
  component: Toggle
}

const Template = args => <Toggle {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Default toggle',
  checked: false,
  disabled: false
}

export const DefaultChecked = Template.bind({})
DefaultChecked.args = {
  text: 'Default checked',
  checked: true
}

export const Disabled = Template.bind({})
Disabled.args = {
  text: 'Disabled',
  disabled: true
}
