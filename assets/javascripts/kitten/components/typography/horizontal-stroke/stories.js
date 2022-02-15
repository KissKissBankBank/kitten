import React from 'react'
import { COLORS } from 'kitten'
import { HorizontalStroke } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: HorizontalStroke,
  title: 'Typography/HorizontalStroke',
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="HorizontalStroke" />
      ),
    },
  },
  decorators: [story => <div className="story-Container">{story()}</div>],

  args: {
    size: 'default',
    modifier: null,
    customSize: null,
    color: COLORS.font1,
  },

  argTypes: {
    size: {
      name: 'size',
      options: ['micro', 'tiny', 'default', 'big', 'huge'],
      control: 'select',
    },
    modifier: {
      name: 'modifier',
      options: {
        null: null,
        primary: 'primary',
        secondary: 'secondary',
        tertiary: 'tertiary',
        quaternary: 'quaternary',
        quinary: 'quinary',
        senary: 'senary',
        septenary: 'septenary',
      },
      control: 'select',
    },
    customSize: {
      name: 'customSize',
      control: 'object',
    },
    color: {
      name: 'color',
      control: 'color',
    },
  },
}

export const Default = args => <HorizontalStroke {...args} />
