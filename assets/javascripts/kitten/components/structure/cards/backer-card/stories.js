import React from 'react'
import { BackerCard } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Structure/Cards/BackerCard',
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
    title: 'Backer Name',
    subtitle: 'Backer subtitle',
    imgProps: { src: `/kitten-${Math.floor(Math.random() * 10)}.jpg` },
    description: (
      <div>
        Merci d'avoir fait progresser le projet de{' '}
        <strong className="k-u-weight-500 k-u-color-primary1">55 €</strong> le{' '}
        <strong className="k-u-weight-500">9 juin 2022</strong>
      </div>
    ),
  },
}

export const Default = args => <BackerCard {...args} />
