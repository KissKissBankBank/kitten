import React from 'react'
import { IconContainer } from './index'
import { color, number, select, text } from '@storybook/addon-knobs'
import COLORS from '../../../constants/colors-config'
import { CheckedCircleIcon } from '../../icons/checked-circle-icon'

export default {
  title: 'Layout/IconContainer',
  component: IconContainer,
  decorators: [
    Story => (
      <div className="story-Container story-Grid">
        <Story />
      </div>
    ),
  ],
}

export const Default = () => (
  <IconContainer
    position={select(
      'Position',
      {
        Left: 'left',
        Top: 'top',
        Right: 'right',
        Bottom: 'bottom',
      },
      'top',
    )}
    color={color('Color', COLORS.background3)}
    iconWidth={number('Width', 25)}
    iconDescription={text('IconDescription')}
    icon={<CheckedCircleIcon circleColor="#61d079" checkedColor="#fff" />}
  >
    {text('Text', 'Confucius says: in zion PLURALease earthly ascension.')}
  </IconContainer>
)
