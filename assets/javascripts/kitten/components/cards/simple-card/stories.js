import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import { SimpleCard } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'

storiesOf('Cards/SimpleCard', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
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
                    'https://placehold.it/200x200/caf4fe/caf4fe',
                  ),
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
  })
  .add('With imageContainerRatio', () => {
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
                imageContainerRatio={number('Adjust Ratio', 56.65)}
              />
            </GridCol>
          </Grid>
        </Container>
      </Marger>
    )
  })
