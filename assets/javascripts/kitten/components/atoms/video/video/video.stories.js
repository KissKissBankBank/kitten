import React from 'react'
import { Video } from './index'
import { Loader } from '../../../..'

export const Default = args => (
  <Video
    {...args}
    playsInline
    loop
    muted
    src="https://kkbb-production.s3-eu-west-1.amazonaws.com/videos/kitten/kitten_video.mp4"
    poster="/kitten.jpg"
  >
    <Video.Loader>
      <Loader />
    </Video.Loader>
  </Video>
)

Default.decorators = [
  story => (
    <div className="story-Container story-Grid">
      <div>{story()}</div>
    </div>
  ),
]

Default.args = {
  autoPlay: false,
}

Default.argTypes = {
  autoPlay: {
    name: 'autoPlay',
    control: { type: 'boolean' },
  },
}
