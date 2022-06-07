import React, { useState } from 'react'
import { ClickableCard } from './index'
import { Text, COLORS } from 'kitten'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: Default,
  title: 'Structure/Cards/ClickableCard',
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="ClickableCard" />
      ),
    },
  },
  decorators: [
    story => <div className="story-Container story-Grid">{story()}</div>,
  ],
  argTypes: {
    size: { control: 'number' },
    disabled: { control: 'boolean' },
    fluid: { control: 'boolean' },
    borderColor: { control: 'color' },
    backgroundColor: { control: 'color' },
    imageShape: {
      name: 'ClickableCard.Image: shape',
      options: ['square', 'circle'],
      control: 'radio',
    },
    imageFit: {
      name: 'ClickableCard.Image: fit',
      options: ['cover', 'contain', 'none'],
      control: 'radio',
    },
  },
  args: {
    size: 250,
    disabled: false,
    fluid: false,
    borderColor: COLORS.primary1,
    backgroundColor: COLORS.background2,
    imageShape: 'circle',
    imageFit: 'cover',
  },
}

export const Default = ({ imageShape, imageFit, ...args }) => {
  const [isChecked, setChecked] = useState(false)
  return (
    <ClickableCard
      {...args}
      aria-checked={isChecked}
      onClick={() => setChecked(!isChecked)}
    >
      <ClickableCard.Image shape={imageShape} fit={imageFit}>
        <img src={`/kitten-${Math.floor(Math.random() * 10)}.jpg`} alt="" />
      </ClickableCard.Image>
      <ClickableCard.Content>
        <Text weight="400" lineHeight="1.3">
          Kitty McMeow
        </Text>
        <br />
        <Text weight="500" lineHeight="1.3" color="primary1">
          @kitty.mcmeow
        </Text>
      </ClickableCard.Content>
    </ClickableCard>
  )
}
