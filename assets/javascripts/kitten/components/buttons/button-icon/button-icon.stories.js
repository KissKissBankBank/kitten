import React from 'react'
import { select } from '@storybook/addon-knobs'
import { ButtonIcon } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'
import { QuestionMarkIcon } from '../../../components/icons/question-mark-icon'

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
  null: null,
  big: 'big',
}

export const Default = () => (
  <StoryContainer>
    <ButtonIcon modifier="helium" size={select('Size', sizesObject, null)}>
      <QuestionMarkIcon />
    </ButtonIcon>
  </StoryContainer>
)
