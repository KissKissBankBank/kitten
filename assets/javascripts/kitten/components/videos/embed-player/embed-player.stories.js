import React from 'react'
import { text, object } from '@storybook/addon-knobs'
import { EmbedPlayer } from './index'

export const Default = () => (
  <EmbedPlayer
    previewProps={object('thumbnail', {
      thumbnail: {
        src: 'https://placekitten.com/620/376',
        alt: 'Une image',
      },
    })}
    playButtonLabel={text('Label in player button for accessibility', 'Play')}
    ratio={text('Video ratio', (376.0 / 620) * 100)}
    iframeHtml='<iframe
              width="620"
              height="376"
              src="https://www.youtube.com/embed/30wT8ZJOeDA"
              frameborder="0" allow="autoplay; encrypted-media"
              allowfullscreen
            ></iframe>'
  />
)

Default.decorators = [
  Story => (
    <div className="story-Container story-Grid story-Grid--large">
      <Story />
    </div>
  ),
]
