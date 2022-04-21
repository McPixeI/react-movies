import React from 'react'

import { ExtLink } from './ExtLink'

export default {
  title: 'Components/UI/Links/ExtLink',
  component: ExtLink
}

const Template = args => <ExtLink {...args} />

export const Default = Template.bind({})
Default.args = {
  to: 'https://www.google.com',
  label: 'Navigate to Google'
}
