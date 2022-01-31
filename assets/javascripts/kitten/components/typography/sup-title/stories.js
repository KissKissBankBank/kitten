import React from 'react'
import { SupTitle } from './index'

export const Default = args => <SupTitle {...args} />

Default.decorators = [story => <div className="story-Container">{story()}</div>]

Default.args = {
  children: 'Lorem ipsum dolor sit amet…',
}

Default.argTypes = {
  children: {
    name: 'children',
    description: 'Content of the SupTitle',
    control: 'text',
  },
}
