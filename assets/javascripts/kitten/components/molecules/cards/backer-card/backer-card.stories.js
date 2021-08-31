import React from 'react'
import { BackerCard } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Molecules/Cards/BackerCard',
  component: BackerCard,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="BackerCard" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid">{story()}</div>
    ),
  ],
  argTypes: {
    title: {
      control: 'text',
    },
    subtitle: {
      control: 'text',
    },
    imgProps: {
      control: 'object',
    },
    description: {
      control: 'text',
    },
  },
  args: {
    title: 'Backer name',
    subtitle: 'Backer subtitle',
    imgProps: { src: `/kitten-${Math.floor(Math.random() * 10)}.jpg` },
    description: 'This description can take a React node.',
  },
}

export const Default = args => <BackerCard {...args} />
