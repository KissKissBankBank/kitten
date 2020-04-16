import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'
import { Video } from './index'
import { Loader } from '../../loaders/loader'

export default {
  component: Video,
  title: 'Videos/Video',
  decorators: [withKnobs, withInfo],
  parameters: {
    component: Video,
    info: {
      text: `
        # Video
        &nbsp;

        ## Import
        ~~~js
        import { Video } from '@kisskissbankbank/kitten/src/components/videos/video'
        ~~~
        &nbsp;

        ## Usage
        &nbsp;

        #### Default
        You can use all <video> attributes.

        ~~~js
        <Video src="…" />
        ~~~
        &nbsp;

        #### Loader
        ~~~js
        <Video src="…">
          <Video.Loader>
            <LoaderIcon />
          </Video.Loader>
        </Video>
        ~~~
        &nbsp;

        ---
      `,
      header: false,
      propTables: false,
    },
  },
}

export const DefaultProps = () => {
  return (
    <Marger top="3" bottom="3">
      <Container>
        <Grid>
          <GridCol
            col={number('Grid number', 3)}
            style={{ height: number('Height', 400) }}
          >
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
                'https://d3v4jsc54141g1.cloudfront.net/videos/maker/detailed_description_poster.jpg',
              )}
            >
              <Video.Loader>
                <Loader />
              </Video.Loader>
            </Video>
          </GridCol>
        </Grid>
      </Container>
    </Marger>
  )
}
