import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import { ButtonGroup } from './index'
import { Marger } from '../../structure/marger'
import { Container } from '../../structure/container'
import { Grid, GridCol } from '../../structure/grid'

const StoryContainer = ({ children }) => (
  <Container>
    <Grid>
      <GridCol>
        <Marger top="5" bottom="5">
          {children}
        </Marger>
      </GridCol>
    </Grid>
  </Container>
)

export const Default = () => (
  <StoryContainer>
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
  </StoryContainer>
)
