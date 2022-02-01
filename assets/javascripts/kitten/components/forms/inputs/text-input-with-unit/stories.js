import React from 'react'
import { TextInputWithUnit } from './index'
import { Default as TextInputStory } from '../text-input/stories.js'

export default {
  component: TextInputWithUnit,
  title: 'Forms/Inputs/TextInputWithUnit',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="TextInputWithUnit" />,
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
    ...TextInputStory.args,
    unit: '€',
    unitWord: '',
    wrapper: {},
  },

  argTypes: {
    ...TextInputStory.argTypes,
    unit: {
      name: 'unit',
      control: 'text',
    },
    unitWord: {
      name: 'unitWord',
      control: 'text',
    },
    wrapperProps: {
      name: 'wrapperProps',
      description: 'props object passed to the wrapper',
      control: 'object',
    },
  }
}

export const Default = args => <TextInputWithUnit {...args} />
