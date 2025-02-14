import React from 'react'
import { IconContainer } from './index'
import { CheckedCircleIcon, COLORS, Text } from 'kitten'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Information/Boxes/IconContainer',
  component: IconContainer,
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="IconContainer" />
      ),
    },
  },
}

export const Default = ({ children, ...args }) => (
  <IconContainer {...args}>
    <Text>{children}</Text>
  </IconContainer>
)

Default.decorators = [
  story => (
    <div className="story-Container story-Grid story-Grid--large">
      {story()}
    </div>
  ),
]

Default.args = {
  position: 'top',
  color: COLORS.valid1,
  iconWidth: 25,
  iconHeight: null,
  iconDescription: 'Icon description',
  icon: <CheckedCircleIcon bgColor={COLORS.valid} color={COLORS.background1} />,
  children:
    'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
}

Default.argTypes = {
  position: {
    name: 'position',
    options: ['left', 'top', 'right', 'bottom'],
    control: 'select',
  },
  color: {
    name: 'color',
    control: 'color',
  },
  iconWidth: {
    name: 'iconWidth',
    control: 'number',
  },
  iconHeight: {
    name: 'iconHeight',
    control: 'number',
  },
  iconDescription: {
    name: 'iconDescription',
    control: 'text',
  },
  children: {
    name: 'children',
    control: 'text',
  },
}
