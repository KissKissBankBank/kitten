import React from 'react'
import { EmbedPlayer } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Molecules/Embed/EmbedPlayer',
  component: EmbedPlayer,
  parameters: {
    docs: {
      description:
        'You can use iframeHtml to specify an iFrame to embed. The ratio prop is required.',
      page: () => <DocsPage filepath={__filename} importString="EmbedPlayer" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
  argTypes: {
    playButtonLabel: {
      name: 'playButtonLabel',
      control: { type: 'text' },
    },
    ratio: {
      name: 'ratio',
      control: { type: 'number' },
    },
    badgeComponent: {
      name: 'badgeComponent',
      control: null,
    },
    iframeHtml: {
      name: 'iframeHtml',
      control: { type: 'text' },
    },
    previewProps: {
      name: 'previewProps',
      control: { type: 'object' },
    },
  },
}

export const Default = args => <EmbedPlayer {...args} />
Default.args = {
  previewProps: {
    thumbnail: {
      src: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
      alt: 'Une image',
    },
  },
  playButtonLabel: 'Play',
  ratio: (376 / 620) * 100,
  iframeHtml: `<iframe width="620" height="376" src="https://www.youtube.com/embed/30wT8ZJOeDA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen />`,
}
