import React from 'react'
import { color, text, number, select, boolean } from '@storybook/addon-knobs'
import { ArrowContainer } from './index'
import { Text } from '../../typography/text'
import COLORS from '../../../constants/colors-config'

export const Default = () => (
  <ArrowContainer
    color={color('Color', COLORS.background3)}
    size={number('Size', 10)}
    position={select('Position', {
      Left: 'left',
      Top: 'top',
      Right: 'right',
      Bottom: 'bottom',
    })}
    distance={number('Distance', 20)}
    centered={boolean('Centered?', false)}
    shadow={boolean('Shadow?', false)}
    borderRadius={number('Border radius', 0)}
    borderColor={color('Border color', COLORS.line1)}
    borderWidth={number('Border width', 0)}
  >
    <Text size="tiny" color="font1" weight="light">
      {text('Content', 'Play with me!')}
    </Text>
  </ArrowContainer>
)
