import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, number } from '@storybook/addon-knobs'
import { NavTabCarousel } from './index'
import { Marger } from './../../layout/marger'
import { Container } from './../../grid/container'
import { Grid, GridCol } from './../../grid/grid'

const StoryGrid = ({ children }) => (
  <Container>
    <Grid>
      <GridCol offset="2" col="8">
        <Marger top="5" bottom="5">
          {children}
        </Marger>
      </GridCol>
    </Grid>
  </Container>
)

const totalIndex = 3

storiesOf('Carousel/NavTabCarousel', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <StoryGrid>
        <NavTabCarousel>
          <NavTabCarousel.Prev children={text('Prev text', 'Foobar 1')} />
          <NavTabCarousel.Pagination
            activeIndex={number('active index', 2)}
            totalIndex={number('total index', totalIndex)}
            color={text('Color', '')}
          />
          <NavTabCarousel.Next children={text('Next text', 'Foobar 2')} />
        </NavTabCarousel>
      </StoryGrid>
    )
  })
