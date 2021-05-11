import React from 'react'
import { number } from '@storybook/addon-knobs'
import { GifVideo } from './index'
import {
  Marger,
  Container,
  Grid, GridCol,
} from '../../../..'

export default {
  component: GifVideo,
  title: 'Atoms/Video/GifVideo',
}

export const Default = () => (
  <GifVideo
    style={{ width: '100%' }}
    poster="https://source.unsplash.com/random/900x400/?kitten"
  >
    <source
      src="https://kkbb-production.s3-eu-west-1.amazonaws.com/atoms/video/kitten/kitten_video.webm"
      type="video/webm"
    />
    <source
      src="https://kkbb-production.s3-eu-west-1.amazonaws.com/atoms/video/kitten/kitten_video.mp4"
      type="video/mp4"
    />
  </GifVideo>
)

export const WithUnavailableSources = () => (
  <GifVideo
    style={{ width: '100%' }}
    poster="https://source.unsplash.com/random/900x400/?kitten"
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
    poster="https://source.unsplash.com/random/900x400/?kitten"
  />
)

Default.decorators = [
  Story => (
    <Marger top="3" bottom="3">
      <Container>
        <Grid>
          <GridCol
            col={number('Grid number', 3)}
            style={{ height: number('Height', 400) }}
          >
            <Story />
          </GridCol>
        </Grid>
      </Container>
    </Marger>
  ),
]

WithUnavailableSources.decorators = Default.decorators
WithNoSource.decorators = Default.decorators
