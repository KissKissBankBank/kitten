import React from 'react'
import { VerticalCard } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Molecules/Cards/VerticalCard',
  component: VerticalCard,
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="VerticalCard" />
      ),
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--thin">
        {story()}
      </div>
    ),
  ],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    descriptionTag: { control: 'text' },
    imageProps: { control: 'object' },
    textAlign: { control: 'radio', options: ['left', 'center', 'right'] },
    titleTag: { control: 'text' },
    withTitleStroke: { control: 'boolean' },
  },
  args: {
    title: 'Custom title',
    description:
      'Donec sed odio dui. Maecenas faucibus mollis interdum. Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    descriptionTag: 'p',
    imageProps: {
      src: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
      alt: 'Image alt',
    },
    textAlign: 'center',
    titleTag: 'h2',
    withTitleStroke: false,
  },
}

export const Default = args => <VerticalCard {...args} />
