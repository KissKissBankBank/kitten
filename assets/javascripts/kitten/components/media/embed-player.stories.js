import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, object } from '@storybook/addon-knobs'
import { StyleRoot } from 'radium'
import { Container } from '../../components/grid/container'
import { EmbedPlayer } from '../../components/media/embed-player'
import { Grid, GridCol } from '../../components/grid/grid'

storiesOf('Media/EmbedPlayer', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo('common info')(() => (
      <StyleRoot>
        <Container>
          <Grid>
            <GridCol offset="1" col="10">
              <EmbedPlayer
                previewProps={object('thumbnail', {
                  thumbnail: {
                    src: 'https://placehold.it/620x376/caf4fe/caf4fe',
                    alt: 'Une image',
                  },
                })}
                playButtonLabel={text(
                  'Label in player button for accessibility',
                  'Play',
                )}
                ratio={text('Video ratio', (376.0 / 620) * 100)}
                iframeHtml={text(
                  'Iframe video',
                  `<iframe
                    width="620"
                    height="376"
                    src="https://www.youtube.com/embed/30wT8ZJOeDA"
                    frameborder="0" allow="autoplay; encrypted-media"
                    allowfullscreen
                  ></iframe>`.replace(/\s+/g, ' '),
                )}
              />
            </GridCol>
          </Grid>
        </Container>
      </StyleRoot>
    )),
  )
