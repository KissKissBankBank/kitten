import React from 'react'
import { GifVideo } from './index'

export default {
  component: GifVideo,
  title: 'Atoms/Video/GifVideo',
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--thin">
        <div>{story()}</div>
      </div>
    ),
  ],
}

export const Default = () => (
  <GifVideo style={{ width: '100%' }} poster="/kitten.jpg">
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
  <GifVideo style={{ width: '100%' }} poster="/kitten.jpg">
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
  <GifVideo style={{ width: '100%' }} poster="/kitten.jpg" />
)
