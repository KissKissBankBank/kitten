import React from 'react'
import { text, number, boolean } from '@storybook/addon-knobs'
import { Grid, GridCol } from '../../grid/grid'
import { Video } from './index'
import { Loader } from '../../loaders/loader'

export const Default = () => (
  <Video
    autoPlay={boolean('Autoplay', false)}
    playsInline
    loop
    muted
    src={text(
      'Src',
      'https://d3v4jsc54141g1.cloudfront.net/videos/home/home_v2.mp4',
    )}
    poster={text(
      'Poster',
      'https://source.unsplash.com/random/900x1600/?kitten',
    )}
  >
    <Video.Loader>
      <Loader />
    </Video.Loader>
  </Video>
)

Default.decorators = [
  Story => (
    <div className="story-Container">
      <Grid>
        <GridCol
          col={number('Grid number', 3)}
          style={{ height: number('Height', 400) }}
        >
          <Story />
        </GridCol>
      </Grid>
    </div>
  ),
]
