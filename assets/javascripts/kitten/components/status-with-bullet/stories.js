import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import { StatusWithBullet } from './index'
import { Grid, GridCol } from '../../components/grid/grid'

const info = {
  text: `
    # StatusWithBullet
    &nbsp;

    ## Import
    ~~~js
    import { StatusWithBullet } from '@kisskissbankbank/kitten/src/components/status-bullet'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <StatusWithBullet
      statusMessage="Message"
      statusType="success"
    />
    ~~~

  `,
  header: false,
  propTables: false,
}

storiesOf('StatusWithBullet', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add(
    'StatusWithBullet',
    () => {
      return (
        <Grid style={{ marginTop: '5em' }}>
          <GridCol offset="1" col="8">
            <StatusWithBullet
              statusMessage={text('Status message', 'Message')}
              statusType={select('Status type', [
                'success',
                'danger',
                'warning',
              ])}
            />
          </GridCol>
        </Grid>
      )
    },
    { info },
  )
