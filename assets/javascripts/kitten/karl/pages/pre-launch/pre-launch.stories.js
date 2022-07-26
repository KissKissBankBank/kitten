import React from 'react'
import PreLaunch from './components'

export default {
  component: PreLaunch,
  title: 'pages/Pre-launch',
  parameters: {
    component: PreLaunch,
  },
}

export const FullPage = args => <PreLaunch {...args} />
