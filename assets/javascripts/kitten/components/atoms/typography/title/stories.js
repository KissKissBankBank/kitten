import React from 'react'
import { Title } from './index'

const argTypes = {
  tag: {
    name: 'tag',
    description: 'Changes the title’s element type.',
    control: { type: 'text' },
  },
  modifier: {
    name: 'modifier',
    description:
      'Title has seven modifiers, they define different sizes depending on the device (desktop, tablet and mobile)',
    options: [
      'primary',
      'secondary',
      'tertiary',
      'quaternary',
      'quinary',
      'senary',
      'septenary',
    ],
    control: { type: 'select' },
  },
  noMargin: {
    name: 'noMargin',
    description: 'Removes the default margins the element.',
    control: { type: 'boolean' },
  },
  cssColor: {
    name: 'cssColor',
    description: 'Sets a color from a CSS color string.',
    control: { type: 'color' },
  },
  italic: {
    name: 'italic',
    description: 'Adds an underline style.',
    control: { type: 'boolean' },
  },
  children: {
    name: 'children',
    control: { type: 'text' },
  },
}

const args = {
  tag: 'h1',
  modifier: 'primary',
  noMargin: false,
  italic: false,
  cssColor: null,
  children: 'Lorem ipsum dolor sit amet',
}

export const Default = props => <Title {...props} />

Default.args = args
Default.argTypes = argTypes

export const WithoutMargin = Default.bind({})
WithoutMargin.args = {
  ...Default.args,
  noMargin: true,
}

WithoutMargin.parameters = {
  docs: {
    description: {
      story: 'Without margin',
    },
  },
}

export const WithItalic = Default.bind({})
WithItalic.args = { ...Default.args, italic: true }
WithItalic.parameters = {
  docs: {
    description: {
      story: 'With italic style',
    },
  },
}

export default {
  component: Title,
  title: 'Atoms/Typography/Title',
  parameters: {
    component: Title,
    componentSubtitle: 'List of Title',
  },
  decorators: [
    story => (
      <div className="story-Container k-u-flex k-u-flex-direction-column">
        {story()}
      </div>
    ),
  ],
}
