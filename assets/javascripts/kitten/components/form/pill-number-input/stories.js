import React from 'react'
import { PillNumberInput } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: PillNumberInput,
  title: 'Form/PillNumberInput',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="PillNumberInput" />,
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
    value: 1,
    min: 0,
    max: 99,
    disableInput: false,
    disabled: false,
  },

  argTypes: {
    value: {
      name: 'value',
      control: 'number',
    },
    min: {
      name: 'min',
      control: 'number',
    },
    max: {
      name: 'max',
      control: 'number',
    },
    step: {
      name: 'step',
      control: 'number',
    },
    disableInput: {
      name: 'disableInput',
      control: 'boolean',
    },
    disabled: {
      name: 'disabled',
      control: 'boolean',
    },
    inputProps: {
      name: 'inputProps',
      control: 'object',
    },
    minusButtonProps: {
      name: 'minusButtonProps',
      control: 'object',
    },
    plusButtonProps: {
      name: 'plusButtonProps',
      control: 'object',
    },
  },
}

export const Default = args => <PillNumberInput {...args} />
