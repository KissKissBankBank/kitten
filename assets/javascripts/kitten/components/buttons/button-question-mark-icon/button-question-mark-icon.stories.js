import React from 'react'
import { ButtonQuestionMarkIcon } from './index'
import { Marger } from '../../structure/marger'
import { Container } from '../../structure/container'
import { Grid, GridCol } from '../../structure/grid'

export default {
  component: ButtonQuestionMarkIcon,
  title: 'Buttons/ButtonQuestionMarkIcon',
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
    <ButtonQuestionMarkIcon />
  </StoryContainer>
)
