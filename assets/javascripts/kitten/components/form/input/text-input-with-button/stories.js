import React from 'react'
import { SearchIcon } from 'kitten'
import { TextInputWithButton } from './index'
import { Default as TextInputStory } from '../text-input/stories.js'
import { buttonModifiers } from 'kitten'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: TextInputWithButton,
  title: 'Form/Input/TextInputWithButton',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="TextInputWithButton" />,
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
    inputValue: 'Input Value',
    inset: false,
    buttonValue: <SearchIcon />,
    modifier: 'helium',
    buttonProps: {
      fit: 'icon',
    },
  },

  argTypes: {
    ...TextInputStory.argTypes,
    inputValue: {
      name: 'inputValue',
      control: 'text',
    },
    buttonValue: {
      name: 'buttonValue',
      control: 'text',
    },
    inset: {
      name: 'inset',
      control: 'boolean',
    },
    modifier: {
      name: 'modifier',
      options: buttonModifiers,
      control: 'select',
    },
  },
}

export const Default = args => <TextInputWithButton {...args} />
