import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, number } from '@storybook/addon-knobs'
import { NavTabCarousel } from './index'
import { Marger } from './../../layout/marger'
import { Container } from './../../grid/container'
import { Grid, GridCol } from './../../grid/grid'
import { parseHtml } from './../../../helpers/utils/parser'

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
          <NavTabCarousel.Prev
            hoverColor={text('Prev hover color', '#fff')}
            children={text('Prev text', 'Foobar 1')}
          />
          <NavTabCarousel.Pagination
            activeIndex={number('Active index', 2)}
            totalIndex={number('Total index', totalIndex)}
            color={text('Pagination current color', '')}
          />
          <NavTabCarousel.Next
            hoverColor={text('Next hover color', '#fff')}
            children={text('Next text', 'Foobar 2')}
          />
        </NavTabCarousel>
      </StoryGrid>
    )
  })
