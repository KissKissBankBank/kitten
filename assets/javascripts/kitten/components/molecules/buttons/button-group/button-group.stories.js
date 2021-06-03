import React from 'react'
import { boolean, select } from '@storybook/addon-knobs'
import { ButtonGroup } from './index'
import { Marger, Container, Grid, GridCol, PayPalIcon } from '../../../..'

const variantOptions = {
  Andromeda: 'andromeda',
  Orion: 'orion',
}

export const Default = () => (
  <ButtonGroup aria-label="Button label">
    <ButtonGroup.Button>Button1</ButtonGroup.Button>
    <ButtonGroup.Button
      modifier={boolean('active', false) ? 'helium' : 'hydrogen'}
      active={boolean('active', false)}
    >
      Button2
    </ButtonGroup.Button>
    <ButtonGroup.Button>Button3</ButtonGroup.Button>
  </ButtonGroup>
)

Default.decorators = [
  Story => (
    <Marger top="4" bottom="4">
      <Container>
        <Grid>
          <GridCol>
            <Story />
          </GridCol>
        </Grid>
      </Container>
    </Marger>
  ),
]

export const WithVariant = () => (
  <ButtonGroup
    variant={select('Variant', variantOptions, 'orion')}
    aria-label="Button label"
  >
    <ButtonGroup.Button>Button1</ButtonGroup.Button>
    <ButtonGroup.Button active={boolean('active', false)}>
      <PayPalIcon />
    </ButtonGroup.Button>
  </ButtonGroup>
)

WithVariant.decorators = [
  Story => (
    <Marger top="4" bottom="4">
      <Container>
        <Grid>
          <GridCol>
            <Story />
          </GridCol>
        </Grid>
      </Container>
    </Marger>
  ),
]
