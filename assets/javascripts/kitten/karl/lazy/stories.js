import React from 'react'
import { storiesOf } from '@storybook/react'
import { Marger } from '../../components/layout/marger'
import { Container } from '../../components/grid/container'
import { Grid, GridCol } from '../../components/grid/grid'
import LazyHook from './lazy-hook.js'
import ImgWithLazy from './img-with-lazy.js'

storiesOf('IntersectionObserver/IntersectionObserverClass/Lazy', module)
  .add('using useLazyObserver hook', () => {
    return (
      <Marger top="100" bottom="4">
        <Container>
          <Grid>
            <GridCol col="6" col-xs="4" col-m="3" col-l="2">
              <LazyHook>
                <p>I’m visible!</p>
              </LazyHook>
            </GridCol>
          </Grid>
        </Container>
      </Marger>
    )
  })
  .add('using withLazy HOC', () => {
    return (
      <Marger top="100" bottom="4">
        <Container>
          <Grid>
            <GridCol col="6" col-xs="4" col-m="3" col-l="2">
              <ImgWithLazy
                imgSrc="https://placeimg.com/800/800/any"
                width={800}
                height={800}
              />
            </GridCol>
          </Grid>
        </Container>
      </Marger>
    )
  })
