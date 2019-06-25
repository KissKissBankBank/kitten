import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { withKnobs } from '@storybook/addon-knobs'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { TextInput } from '../../form/text-input'
import { Grid, GridCol } from '../../grid/grid'
import { ReactAutocomplete } from './index'
import { pxToRem } from '../../../helpers/utils/typography'

storiesOf('Form/Autocomplete', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <Container>
        <Grid>
          <GridCol col="8">
            <Marger top="5" bottom="5">
              <TextInput ReactAutocomplete />
            </Marger>
          </GridCol>
        </Grid>
      </Container>
    )
  })
