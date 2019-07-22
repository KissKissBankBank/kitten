import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, object, boolean } from '@storybook/addon-knobs'
import { infoLines } from './index'

storiesOf('Lines/Info Lines', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('InfoLines', () => {
    return (
      <Grid style={{ marginTop: '5em' }}>
        <GridCol offset="1" col="8">
          <InfoLines />
        </GridCol>
      </Grid>
    )
  })
