import React from 'react'
import { select } from '@storybook/addon-knobs'
import { ButtonIcon } from './index'
import { Marger } from '../../structure/marger'
import { Container } from '../../structure/container'
import { Grid, GridCol } from '../../structure/grid'
import { QuestionMarkIcon } from '../../../components/graphics/icons/question-mark-icon'

export default {
  component: ButtonIcon,
  title: 'Buttons/ButtonIcon',
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

const sizesObject = {
  nano: 'nano',
  micro: 'micro',
  tiny: 'tiny',
  regular: 'regular',
  big: 'big',
}

export const Default = () => (
  <StoryContainer>
    <ButtonIcon modifier="helium" size={select('Size', sizesObject, 'regular')}>
      <QuestionMarkIcon />
    </ButtonIcon>
  </StoryContainer>
)
