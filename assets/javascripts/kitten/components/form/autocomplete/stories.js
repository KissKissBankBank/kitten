import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { withKnobs } from '@storybook/addon-knobs'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Text } from '../../../components/typography/text'
import { ButtonGroup } from '../../../components/buttons/button-group'
import { Button } from '../../../components/buttons/button/button'
import { ExpandBoard } from '../../../components/expandable/expand-board'
import { Grid, GridCol } from '../../grid/grid'
import { ReactAutocomplete } from './index'
import { pxToRem } from '../../../helpers/utils/typography'

const StoryContainer = ({ children }) => (
  <Container>
    <Grid>
      <GridCol col="8">
        <Marger top="5" bottom="5">
          {children}
        </Marger>
      </GridCol>
    </Grid>
  </Container>
)

storiesOf('Form/Autocomplete', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <StoryContainer>
        <ReactAutocomplete />
      </StoryContainer>
    )
  })
