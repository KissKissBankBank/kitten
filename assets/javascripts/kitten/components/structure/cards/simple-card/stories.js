import React from 'react'
import { SimpleCard } from './index'
import { DocsPage } from 'storybook/docs-page'
import { COLORS } from '../../../..'

const argTypes = {
  imageProps: { control: 'object' },
  withPlayerButtonOnImage: { control: 'bool' },
  ariaLabel: { control: 'string' },
  arrowColor: { control: 'string' },
  href: { control: 'string' },
  playerButtonSize: { control: 'number' },
  imageContainerBackground: { control: 'string' },
  imageContainerRatio: { control: 'number' },
  title: { control: 'text' },
  titleProps: { control: 'object' },
  subtitle: { control: 'text' },
  paragraph: { control: 'text' },
}

const args = {
  imageProps: {
    alt: '',
    src: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
  },
  withPlayerButtonOnImage: false,
  ariaLabel: 'Aria label',
  arrowColor: COLORS.background1,
  href: '#',
  playerButtonSize: 70,
  imageContainerBackground: COLORS.primary4,
  imageContainerRatio: 16 / 9,
  title: 'Title',
  titleProps: {},
  subtitle: 'Subtitle text',
  paragraph: 'Paragraph content of card',
}

export default {
  title: 'Structure/Cards/SimpleCard',
  component: SimpleCard,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="SimpleCard" />,
    },
  },
  decorators: [
    story => <div className="story-Container story-Grid">{story()}</div>,
  ],
  argTypes,
  args,
}

export const Default = args => <SimpleCard {...args} />
