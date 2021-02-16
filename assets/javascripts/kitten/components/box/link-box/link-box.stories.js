import React from 'react'
import { LinkBox } from './index'
import { text, boolean } from '@storybook/addon-knobs'
import { FlashCircleIcon } from '../../icons/flash-circle-icon'
import { Text } from '../../typography/text'
import COLORS from '../../../constants/colors-config'

export const Default = () => (
  <LinkBox
    href={text('Href', '#anchor')}
    isExternal={boolean('External?', false)}
  >
    <LinkBox.Icon>
      <FlashCircleIcon
        circleColor="#caf4fe"
        flashColor={COLORS.primary1}
        width="60"
        height="60"
      />
    </LinkBox.Icon>

    <LinkBox.Text>
      <Text size="micro" lineHeight="normal">
        Partie 1
      </Text>

      <Text size="tiny" weight="regular" lineHeight="normal">
        Les différents types de financement participatif
      </Text>
    </LinkBox.Text>
  </LinkBox>
)

Default.decorators = [
  Story => (
    <div className="story-Container story-Grid story-Grid--large">
      <Story />
    </div>
  ),
]
