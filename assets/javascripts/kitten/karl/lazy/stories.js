import React from 'react'
import {
  Marger,
  Container,
  Grid,
  GridCol,
} from 'kitten'
import LazyHook from './lazy-hook.js'
import ImgWithLazy from './img-with-lazy.js'

export default {
  title: 'Helpers/IntersectionObserver/IntersectionObserverClass/Lazy',
  component: LazyHook,
}

export const UsingUseLazyObserverHook = () => {
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
}

export const UsingWithLazyHOC = () => {
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
}
