import React from 'react'
import { Text } from './index'
import { DocsPage } from 'storybook/docs-page'

export const Default = props => <Text {...props} />

export default {
  component: Text,
  title: 'Atoms/Typography/Text',
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
    weight: 'light',
    children: 'Lorem ipsum dolor sit amet…',
  },
  argTypes: {
    color: {
      name: 'color',
      description: 'Sets the color, from a list.',
      options: ['font1', 'font2', 'primary1', 'background1', 'error', 'valid'],
      control: { type: 'select' },
    },
    cssColor: {
      name: 'cssColor',
      description: 'Sets a color from a CSS color string.',
      control: { type: 'color' },
    },
    decoration: {
      name: 'decoration',
      description: 'Adds an underline style.',
      options: ['underline', 'none'],
      control: { type: 'select' },
    },
    fontStyle: {
      name: 'fontStyle',
      description: 'Adds an italic style.',
      options: ['normal', 'italic'],
      control: { type: 'select' },
    },
    transform: {
      name: 'transform',
      description: 'Adds an uppercase style.',
      options: ['uppercase'],
      control: { type: 'select' },
    },
    lineHeight: {
      name: 'lineHeight',
      description: 'Sets the line-height (`normal` is ~1.2em).',
      options: ['normal', '1', '1.3'],
      control: { type: 'select' },
    },
    size: {
      name: 'size',
      description: 'Sets the size from a list.',
      options: ['giant', 'huge', 'big', 'default', 'tiny', 'micro', 'nano'],
      control: { type: 'select' },
    },
    weight: {
      name: 'weight',
      description: 'Sets a weight.',
      options: ['light', 'regular', 'bold'],
      control: { type: 'select' },
    },
    children: {
      name: 'children',
      control: { type: 'text' },
    },
    setting: {
      name: 'setting',
      description:
        '`font-feature-settings: "tnum"` enables tabular (monospace) numerals.',
      options: [null, 'tnum'],
      control: { type: 'select' },
    },
  },
}
