import React from 'react'
import { text, boolean, color } from '@storybook/addon-knobs'
import { SimpleCard } from './index'
import { Marger } from '../../structure/marger'
import { Container } from '../../structure/container'
import { Grid, GridCol } from '../../structure/grid'

export default {
  title: 'Cards/SimpleCard',
  component: SimpleCard,
}

export const Default = () => {
  return (
    <Marger top="4" bottom="4">
      <Container>
        <Grid>
          <GridCol col="6" col-xs="4" col-m="3" col-l="2">
            <SimpleCard
              href="#"
              imageProps={{
                src: text('Image src', '/kitten.jpg'),
              }}
              title={text('Title', 'Title')}
              subtitle={text('Subtitle', 'Subtitle')}
              paragraph={text('Paragraph', 'Paragraph')}
              withPlayerButtonOnImage={boolean(
                'With player button on image?',
                true,
              )}
            />
          </GridCol>
        </Grid>
      </Container>
    </Marger>
  )
}

export const WithImageContainerRatio = () => {
  return (
    <Marger top="4" bottom="4">
      <Container>
        <Grid>
          <GridCol col="6" col-xs="4" col-m="3" col-l="2">
            <SimpleCard
              href="#"
              imageProps={{
                src: text(
                  'Image src',
                  'https://placehold.it/160x90/555/caf4fe',
                ),
              }}
              title={text('Title', 'Title')}
              subtitle={text('Subtitle', 'Subtitle')}
              paragraph={text('Paragraph', 'Paragraph')}
              withPlayerButtonOnImage={boolean(
                'With player button on image?',
                false,
              )}
              imageContainerRatio={text('Adjust Ratio', '16/9')}
              imageContainerBackground={color('Adjust Color', '#eee')}
            />
          </GridCol>
        </Grid>
      </Container>
    </Marger>
  )
}
