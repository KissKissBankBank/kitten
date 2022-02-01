import React from 'react'
import { GifVideo } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: GifVideo,
  title: 'Information/GifVideo',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="GifVideo" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--thin">
        <div>{story()}</div>
      </div>
    ),
  ],
}

export const Default = () => (
  <GifVideo
    style={{ width: '100%' }}
    poster={`/kitten-${Math.floor(Math.random() * 10)}.jpg`}
  >
    <source
      src="https://kkbb-production.s3-eu-west-1.amazonaws.com/videos/kitten/kitten_video.webm"
      type="video/webm"
    />
    <source
      src="https://kkbb-production.s3-eu-west-1.amazonaws.com/videos/kitten/kitten_video.mp4"
      type="video/mp4"
    />
  </GifVideo>
)

export const WithUnavailableSources = () => (
  <GifVideo
    style={{ width: '100%' }}
    poster={`/kitten-${Math.floor(Math.random() * 10)}.jpg`}
  >
    <source
      src="https://thisServerDoesNotExist.local/video.webm#BAD_URL"
      type="video/webm"
    />
    <source
      src="https://kkbb-production.s3-eu-west-1.amazonaws.com/thisFileDoesNotExist.wav"
      type="video/webm"
    />
  </GifVideo>
)

export const WithNoSource = () => (
  <GifVideo
    style={{ width: '100%' }}
    poster={`/kitten-${Math.floor(Math.random() * 10)}.jpg`}
  />
)
