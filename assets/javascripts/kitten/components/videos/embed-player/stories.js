import React from 'react'
import { withKnobs, text, object } from '@storybook/addon-knobs'
import { Container } from '../../../components/grid/container'
import { EmbedPlayer } from './index'
import { Grid, GridCol } from '../../../components/grid/grid'

export default {
  component: EmbedPlayer,
  title: 'Videos/EmbedPlayer',
  decorators: [withKnobs, withInfo],
  parameters: {
    component: EmbedPlayer,
    info: {
      text: `
        # EmbedPlayer
        &nbsp;

        ## Import
        ~~~js
        import { EmbedPlayer } from '@kisskissbankbank/kitten/src/components/videos/embed-player'
        ~~~
        &nbsp;

        ## Usage
        &nbsp;

        #### Default
        You can use iframeHtml to specify an iFrame to embed.
        The ratio prop is required.

        ~~~js
        <EmbedPlayer
          previewProps={
            thumbnail: {
              src: 'https://placekitten.com/620/376',
              alt: 'Une image',
            },
          }
          playButtonLabel="Play"
          ratio={(376.0 / 620) * 100}
          iframeHtml='<iframe
              width="620"
              height="376"
              src="https://www.youtube.com/embed/30wT8ZJOeDA"
              frameborder="0" allow="autoplay; encrypted-media"
              allowfullscreen
            ></iframe>'
        />
        ~~~
        &nbsp;

        ---
      `,
      header: false,
      propTables: false,
    },
  },
}

export const DefaultProps = () => (
  <Container>
    <Grid>
      <GridCol offset="1" col="10">
        <EmbedPlayer
          previewProps={object('thumbnail', {
            thumbnail: {
              src: 'https://placekitten.com/620/376',
              alt: 'Une image',
            },
          })}
          playButtonLabel={text(
            'Label in player button for accessibility',
            'Play',
          )}
          ratio={text('Video ratio', (376.0 / 620) * 100)}
          iframeHtml='<iframe
              width="620"
              height="376"
              src="https://www.youtube.com/embed/30wT8ZJOeDA"
              frameborder="0" allow="autoplay; encrypted-media"
              allowfullscreen
            ></iframe>'
        />
      </GridCol>
    </Grid>
  </Container>
)
