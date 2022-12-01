import React from 'react'
import { DocsPage } from 'storybook/docs-page'
import { allowedColorStrings, Text } from './index'

export const Default = props => <Text {...props} />

export default {
  component: Text,
  title: 'Typography/Text',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="Text" />,
    },
  },
  decorators: [
    story => <div className="story-Container story-Grid">{story()}</div>,
  ],
  args: {
    color: null,
    cssColor: null,
    decoration: null,
    lineHeight: null,
    setting: null,
    size: null,
    fontStyle: null,
    tag: 'span',
    transform: null,
    weight: '400',
    children: 'Lorem ipsum dolor sit amet…',
  },
  argTypes: {
    color: {
      name: 'color',
      description: 'Sets the color, from a list.',
      options: allowedColorStrings,
      control: 'select',
    },
    cssColor: {
      name: 'cssColor',
      description: 'Sets a color from a CSS color string.',
      control: 'color',
    },
    decoration: {
      name: 'decoration',
      description: 'Adds an underline style.',
      options: ['underline', 'none'],
      control: 'select',
    },
    fontStyle: {
      name: 'fontStyle',
      description: 'Adds an italic style.',
      options: ['normal', 'italic'],
      control: 'select',
    },
    family: {
      name: 'family',
      description: 'Adds font family',
      options: ['none', 'antiqueolive'],
      control: 'select',
    },
    transform: {
      name: 'transform',
      description: 'Adds an uppercase style.',
      options: ['uppercase'],
      control: 'select',
    },
    lineHeight: {
      name: 'lineHeight',
      description: 'Sets the line-height (`normal` is ~1.2em).',
      options: ['normal', '1', '1.3'],
      control: 'select',
    },
    size: {
      name: 'size',
      description: 'Sets the size from a list.',
      options: ['giant', 'huge', 'large', 'medium', 'small', 'micro', 'nano'],
      control: 'select',
    },
    weight: {
      name: 'weight',
      description: 'Sets a weight.',
      options: ['400', '500', '600', '700'],
      control: 'select',
    },
    children: {
      name: 'children',
      control: 'text',
    },
    setting: {
      name: 'setting',
      description:
        '`font-feature-settings: "tnum"` enables tabular (monospace) numerals.',
      options: [null, 'tnum'],
      control: 'select',
    },
  },
}
