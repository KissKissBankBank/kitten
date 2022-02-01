import React from 'react'
import { PasswordInput } from './index'

export default {
  component: PasswordInput,
  title: 'Forms/Inputs/PasswordInput',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="PasswordInput" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],

  args: {
    iconLabel: 'Show password',
    hiddenIconLabel: 'Hide password',
    name: 'Password',
  },

  argTypes: {
    iconLabel: {
      name: 'iconLabel',
      control: 'text',
    },
    hiddenIconLabel: {
      name: 'hiddenIconLabel',
      control: 'text',
    },
    name: {
      name: 'name',
      control: 'text',
    },
  },
}  

export const Default = args => <PasswordInput {...args} />
