import React from 'react'
import { ArrowContainer } from './index'
import { Text, COLORS } from 'kitten'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Information/Boxes/ArrowContainer',
  component: ArrowContainer,
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="ArrowContainer" />
      ),
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
}

export const Default = ({ children, ...args }) => (
  <ArrowContainer {...args}>
    <Text size="small" color="font1" weight="400">
      {children}
    </Text>
  </ArrowContainer>
)

Default.args = {
  color: COLORS.background3,
  size: 10,
  position: 'left',
  distance: 20,
  centered: false,
  distanceAsPercentage: false,
  distanceIsReverse: false,
  shadow: false,
  borderRadius: 0,
  borderColor: COLORS.line1,
  borderWidth: 0,
  padding: 20,
  children: 'Play with me!',
}

Default.argTypes = {
  color: {
    name: 'color',
    control: 'color',
  },
  size: {
    name: 'size',
    control: 'text',
  },
  position: {
    name: 'position',
    options: ['left', 'top', 'right', 'bottom'],
    control: 'select',
  },
  distance: {
    name: 'distance',
    control: 'number',
  },
  centered: {
    name: 'centered',
    control: 'boolean',
  },
  distanceAsPercentage: {
    name: 'distanceAsPercentage',
    control: 'boolean',
  },
  distanceIsReverse: {
    name: 'distanceIsReverse',
    control: 'boolean',
  },
  shadow: {
    name: 'shadow',
    control: 'boolean',
  },
  borderRadius: {
    name: 'borderRadius',
    control: 'text',
  },
  borderColor: {
    name: 'borderColor',
    control: 'color',
  },
  borderWidth: {
    name: 'borderWidth',
    control: 'text',
  },
  padding: {
    name: 'padding',
    control: 'text',
  },
  children: {
    name: 'children',
    control: 'text',
  },
}
