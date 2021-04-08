import React, { useState } from 'react'
import { text, number, select, color, boolean } from '@storybook/addon-knobs'
import { ClickableCard } from './index'
import { Text } from '../../../components/typography/text'
import COLORS from '../../../constants/colors-config'

export default {
  component: Default,
  title: 'Cards/ClickableCard',
  parameters: {
    component: Default,
  },
  decorators: [
    Story => (
      <div className="story-Container story-Grid">
        <Story />
      </div>
    ),
  ],
}

export const Default = () => {
  const [isChecked, setChecked] = useState(false)
  return (
    <ClickableCard
      size={number('Card size', 250)}
      disabled={boolean('Is card disabled?', false)}
      fluid={boolean('Is card fluid?', false)}
      borderColor={color('Border color', COLORS.primary1)}
      backgroundColor={color('Background color', COLORS.primary6)}
      aria-checked={isChecked}
      onClick={() => setChecked(!isChecked)}
    >
      <ClickableCard.Image
        shape={select(
          'Image shape',
          { Square: 'square', Circle: 'circle' },
          'square',
        )}
        fit={select(
          'Image fit',
          {
            Cover: 'cover',
            Contain: 'contain',
            None: 'none',
          },
          'cover',
        )}
      >
        <img
          src={text('Image URL', 'https://placekitten.com/200/400')}
          alt=""
        />
      </ClickableCard.Image>
      <ClickableCard.Content>
        <Text weight="light" lineHeight="1.3">
          Kitty McMeow
        </Text>
        <br />
        <Text weight="regular" lineHeight="1.3" color="primary1">
          @kitty.mcmeow
        </Text>
      </ClickableCard.Content>
    </ClickableCard>
  )
}
