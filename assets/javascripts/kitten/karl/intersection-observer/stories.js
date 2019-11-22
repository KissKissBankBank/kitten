import React, { useRef } from 'react'
import { storiesOf } from '@storybook/react'
import { Marger } from '../../components/layout/marger'
import { Container } from '../../components/grid/container'
import { Grid, GridCol } from '../../components/grid/grid'

import useIntersectionObserver from '../../helpers/utils/intersection-hook'

const ObservedComponent = ({ children, ...props }) => {
  const options = {
    rootMargin: '-40% 0px',
    threshold: 0.01,
  }

  const observedComponentRef = useRef(null)
  const isVisible = useIntersectionObserver({ observedComponentRef, options })

  return (
    <span ref={observedComponentRef} {...props}>
      {isVisible && children}
    </span>
  )
}

storiesOf('IntersectionObserverClass', module).add(
  'using IntersectionObserverClass hook',
  () => {
    return (
      <Container>
        <Grid>
          <GridCol col="6" col-xs="4" col-m="3" col-l="2">
            A kitten will become visible on scroll.
            <Marger top="100" bottom="50" style={{ background: '#eee' }}>
              Here:
              <ObservedComponent>🐱 I’m visible! 🐱</ObservedComponent>
            </Marger>
          </GridCol>
        </Grid>
      </Container>
    )
  },
)
