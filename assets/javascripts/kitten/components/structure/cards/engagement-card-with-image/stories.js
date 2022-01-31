import React from 'react'
import { EngagementCardWithImage } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: EngagementCardWithImage,
  title: 'Structure/Cards/EngagementCardWithImage',
  parameters: {
    docs: {
      page: () => (
        <DocsPage
          filepath={__filename}
          importString="EngagementCardWithImage"
        />
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
    backgroundImage: { control: 'text' },
    imageHeight: { control: 'number' },
    href: { control: 'text' },
    children: { control: 'text' },
  },
  args: {
    backgroundImage: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
    imageHeight: 120,
    href: '#',
    children: 'Autoproduction culturelle',
  },
}

export const DefaultProps = args => <EngagementCardWithImage {...args} />
