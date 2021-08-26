import { Container } from '../../layout/container'
import { Marger } from '../../..'
import React from 'react'
import { text, boolean, select } from '@storybook/addon-knobs'
import { TextCopy } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Molecules/TextCopy',
  component: TextCopy,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="TextCopy" />,
    },
  },
  decorators: [story => (
    <div className="story-Container">
      {story()}
    </div>
  )],
  args: {
    alertMessage: 'Text has been copied!',
    textToCopy: undefined,
    description: 'Clicking the button will copy the contents of the input.',
    forceOneLine: false,
    buttonText: 'Je suis un bouton',
    buttonModifier: undefined,
    variant: 'andromeda',
    children: 'My text to copy on click',
  },
  argTypes: {
    alertMessage: {
      name: 'alertMessage',
      description: 'Text displayed when a text is copied.',
      control: { type: 'text' },
    },
    textToCopy: {
      name: 'textToCopy',
      description: 'Specify a text to copy (if not, it will use the value of the children)',
      control: { type: 'text' },
    },
    description: {
      name: 'description',
      description: 'Screen-reader-only text description of the component. For accessibility purposes.',
      control: { type: 'text' },
    },
    forceOneLine: {
      name: 'forceOneLine',
      control: { type: 'boolean' },
    },
    buttonText: {
      name: 'buttonText',
      control: { type: 'text' },
    },
    buttonModifier: {
      name: 'buttonModifier',
      options: [
        'hydrogen',
        'helium',
        'lithium',
        'beryllium',
        'carbon',
        'oxygen',
        'copper',
        'boron',
        'neon',
        'iron',
        'social_facebook',
        'social_twitter',
        'social_linkedin',
        'social_instagram',
        'social_youtube',
        'social_pinterest',
      ],
      control: { type: 'select' },
    },
    variant: {
      name: 'variant',
      options: ['andromeda', 'orion'],
      control: { type: 'inline-radio' },
    },
    children: {
      name: 'children',
      control: { type: 'text' },
    },
  },
}


export const Default = (args) => {
  return (
    <TextCopy {...args}/>
  )
}
