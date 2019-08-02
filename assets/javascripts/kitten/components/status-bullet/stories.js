import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import { StatusBullet } from './index'
import { Grid, GridCol } from '../../components/grid/grid'

const info = {
  text: `
    # StatusBullet
    &nbsp;

    ## Import
    ~~~js
    import { StatusBullet } from '@kisskissbankbank/kitten/src/components/status-bullet'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <StatusBullet
      statusMessage="Message"
      statusType="success"
    />
    ~~~

  `,
  header: false,
  propTables: false,
}

storiesOf('StatusBullet', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add(
    'StatusBullet',
    () => {
      return (
        <Grid style={{ marginTop: '5em' }}>
          <GridCol offset="1" col="8">
            <StatusBullet
              statusMessage={text('Status message', 'Message')}
              statusType={select('Status type', ['success', 'danger'])}
            />
          </GridCol>
        </Grid>
      )
    },
    { info },
  )
