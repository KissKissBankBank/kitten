import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, number, object } from '@storybook/addon-knobs'
import { CarouselV2 } from './index'
import { CONTAINER_PADDING } from '../../../constants/grid-config'
import { Marger } from '../../../components/layout/marger'
import { Container } from '../../../components/grid/container'
import { Grid, GridCol } from '../../../components/grid/grid'

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      {children}
    </Marger>
  </Container>
)

storiesOf('Carousel/ProjectCarousel', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <StoryContainer>
      <CarouselV2 />
    </StoryContainer>
  ))
