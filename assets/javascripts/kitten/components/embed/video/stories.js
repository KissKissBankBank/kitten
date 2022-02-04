import React from 'react'
import { Video } from './index'
import { Loader } from 'kitten'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: Video,
  title: 'Embed/Video',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="Video" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid">
        {story()}
      </div>
    ),
  ],

  args: {
    autoPlay: false,
  },

  argTypes: {
    autoPlay: {
      name: 'autoPlay',
      control: 'boolean',
    },
  },
}

export const Default = args => (
  <Video
    {...args}
    playsInline
    loop
    muted
    src="https://kkbb-production.s3-eu-west-1.amazonaws.com/videos/kitten/kitten_video.mp4"
    poster={`/kitten-${Math.floor(Math.random() * 10)}.jpg`}
  >
    <Video.Loader>
      <Loader />
    </Video.Loader>
  </Video>
)
