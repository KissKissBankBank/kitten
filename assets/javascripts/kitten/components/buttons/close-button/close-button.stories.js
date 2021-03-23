import React from 'react'
import { CloseButton } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'

export default {
  component: CloseButton,
  title: 'Buttons/CloseButton',
}

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      <Grid>
        <GridCol col-s="3" col-l="2">
          {children}
        </GridCol>
      </Grid>
    </Marger>
  </Container>
)

export const Default = () => (
  <StoryContainer>
    <CloseButton />
  </StoryContainer>
)
