import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, number, color, array } from '@storybook/addon-knobs'
import { NavTabCarousel } from './index'
import { Marger } from './../../layout/marger'
import { Container } from './../../grid/container'
import { Grid, GridCol } from './../../grid/grid'
import { parseHtml } from './../../../helpers/utils/parser'
import COLORS from './../../../constants/colors-config'

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

const links = [
  'http://www.google.com',
  'http://www.foo.bar',
  'http://www.bar.foo',
]
const totalIndex = 3

storiesOf('Carousel/NavTabCarousel', module)
  .addDecorator(withKnobs)
  .add('with Links', () => {
    return (
      <StoryGrid>
        <NavTabCarousel>
          <NavTabCarousel.Prev
            hoverColor={color('Prev hover color', '#fff')}
            children={text('Prev text', 'Foobar 1')}
          />
          <NavTabCarousel.Pagination
            activeIndex={number('Active index', 2)}
            links={array('links', links)}
            activeColor={color('Pagination active color', COLORS.primary1)}
          />
          <NavTabCarousel.Next
            hoverColor={color('Next hover color', '#fff')}
            children={text('Next text', 'Foobar 2')}
          />
        </NavTabCarousel>
      </StoryGrid>
    )
  })
  .add('with no prev', () => {
    return (
      <StoryGrid>
        <NavTabCarousel>
          <NavTabCarousel.Pagination
            activeIndex={number('Active index', 2)}
            totalIndex={number('total index', 2)}
            activeColor={color('Pagination active color', COLORS.primary1)}
          />
          <NavTabCarousel.Next
            hoverColor={color('Prev hover color', '#fff')}
            children={text('Prev text', 'Foobar 1')}
          />
        </NavTabCarousel>
      </StoryGrid>
    )
  })
  .add('with no next', () => {
    return (
      <StoryGrid>
        <NavTabCarousel>
          <NavTabCarousel.Prev
            hoverColor={color('Prev hover color', '#fff')}
            children={text('Prev text', 'Foobar 1')}
          />
          <NavTabCarousel.Pagination
            activeIndex={number('Active index', 2)}
            totalIndex={number('total index', 2)}
            activeColor={color('Pagination active color', COLORS.primary1)}
          />
        </NavTabCarousel>
      </StoryGrid>
    )
  })
  .add('with totalIndex', () => {
    return (
      <StoryGrid>
        <NavTabCarousel>
          <NavTabCarousel.Prev
            hoverColor={color('Prev hover color', '#fff')}
            children={text('Prev text', 'Foobar 1')}
          />
          <NavTabCarousel.Pagination
            activeIndex={number('Active index', 2)}
            totalIndex={number('total index', 3)}
            activeColor={color('Pagination active color', COLORS.primary1)}
          />
          <NavTabCarousel.Next
            hoverColor={color('Next hover color', '#fff')}
            children={text('Next text', 'Foobar 2')}
          />
        </NavTabCarousel>
      </StoryGrid>
    )
  })
