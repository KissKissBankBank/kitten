import React from 'react'
import { Text } from './index'

const argTypes = {
  color: {
    name: 'color',
    description: ' Available colors:',
    options: [
      'font1',
      'font2',
      'primary1',
      'background1',
      'error',
      'valid',
    ],
    control: {type: 'select'},
  },
  cssColor: {
    name: 'cssColor',
    description: 'Specify a color (use a CSS color string).',
    control: {type: 'color'},
  },
  decoration: {
    name: 'decoration',
    description: 'If `tag="a"`, show underline.',
    options: [
      'underline',
      'none',
    ],
    control: {type: 'select'},
  },
  fontStyle: {
    name: 'fontStyle',
    description: 'Available font styles (`normal` or `italic`):',
    options: [
      'normal',
      'italic',
    ],
    control: {type: 'select'},
  },
  transform: {
    name: 'transform',
    description: '`text-transform: uppercase`',
    options: [
      'uppercase',
    ],
    control: {type: 'select'},
  },
  lineHeight: {
    name: 'lineHeight',
    description: '`line-height: normal` correspond approximately to 1.2.',
    options: [
      'normal',
      '1',
      '1.3',
    ],
    control: {type: 'select'},
  },
  size: {
    name: 'size',
    description: 'Available sizes:',
    options: [
      'giant',
      'huge',
      'big',
      'default',
      'tiny',
      'micro',
      'nano',
    ],
    control: {type: 'select'},
  },
  weight: {
    name: 'weight',
    description: 'Available font weights (`light`, `regular` or `italic`):',
    options: [
      'light',
      'regular',
      'bold',
    ],
    control: {type: 'select'},
  },
  text: {
    control: {type: 'text'},
  },
  setting: {
    name: 'setting',
    description: '`font-feature-settings: "tnum"` enables tabular (monospace) numerals.',
    options: [
      'tnum',
    ],
    control: {type: 'select'},
  },
}

const args = {
  className: null,
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
  text: 'Lorem ipsum dolor sit amet…',
}

export const Default = ({
  color,
  cssColor,
  decoration,
  lineHeight,
  size,
  fontStyle,
  transform,
  weight,
  setting,
  text,
  ...props
}) => (
  <Text
    color={color}
    cssColor={cssColor}
    decoration={decoration}
    lineHeight={lineHeight}
    size={size}
    fontStyle={fontStyle}
    transform={transform}
    weight={weight}
    setting={setting}
    
    {...props}
  >
    {text}
  </Text>
)

Default.args = args;
Default.argTypes = argTypes;

export default {
  component: Text,
  title: 'Typography/Text',
  parameters: {
    component: Text,
  },
  args,
  argTypes,
}
