import React from 'react'
import { TextCopy } from './index'
import { DocsPage } from 'storybook/docs-page'
import { buttonModifiers } from '../../actions/button'

export default {
  title: 'Forms/TextCopy',
  component: TextCopy,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="TextCopy" />,
    },
  },
  decorators: [story => <div className="story-Container">{story()}</div>],
  args: {
    alertMessage: 'Text has been copied!',
    textToCopy: undefined,
    description: 'Clicking the button will copy the contents of the input.',
    forceOneLine: false,
    buttonText: 'Je suis un bouton',
    buttonModifier: undefined,
    children: 'My text to copy on click',
  },
  argTypes: {
    alertMessage: {
      name: 'alertMessage',
      description: 'Text displayed when a text is copied.',
      control: 'text',
    },
    textToCopy: {
      name: 'textToCopy',
      description:
        'Specify a text to copy (if not, it will use the value of the children)',
      control: 'text',
    },
    description: {
      name: 'description',
      description:
        'Screen-reader-only text description of the component. For accessibility purposes.',
      control: 'text',
    },
    forceOneLine: {
      name: 'forceOneLine',
      control: 'boolean',
    },
    buttonText: {
      name: 'buttonText',
      control: 'text',
    },
    buttonModifier: {
      name: 'modifier',
      options: buttonModifiers,
      control: 'select',
    },
    children: {
      name: 'children',
      control: 'text',
    },
    size: {
      name: 'size',
      description: 'Button and input size',
      control: 'select',
      default: 'regular',
      options: ['tiny', 'regular', 'big', 'huge', 'giant'],
    },
  },
}

export const Default = args => {
  return <TextCopy {...args} />
}
