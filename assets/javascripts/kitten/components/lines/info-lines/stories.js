import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean, color } from '@storybook/addon-knobs'
import { InfoLines } from './index'
import { Grid, GridCol } from '../../../components/grid/grid'

const info = {
  text: `
    # InfoLines
    &nbsp;

    ## Import
    ~~~js
    import { InfoLines } from '@kisskissbankbank/kitten/src/components/lines/info-lines'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <InfoLines
      id="…"
      infos={[ key:'…', value: '…', id: '…' ]}
    />
    ~~~

    #### with borders
    ~~~js
    <InfoLines
      withBorderRadius="…"
      withLeftRightBorder="…"
    />
    ~~~

    #### without borders
    ~~~js
    <InfoLines withoutTopBottomBorder="…" />
    ~~~

    #### without responsive
    ~~~js
    <InfoLines withoutResponsive="…" />
    ~~~
  `,
  header: false,
  propTables: false,
}

storiesOf('Lines/Info Lines', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add(
    'InfoLines',
    () => {
      return (
        <Grid style={{ marginTop: '5em' }}>
          <GridCol offset="1" col="8">
            <InfoLines
              borderColor={color('custom border color', '#eee')}
              withBorderRadius={boolean('with border radius', false)}
              withLeftRightBorder={boolean('with left right border', false)}
              withoutTopBottomBorder={boolean(
                'without top bottom border',
                false,
              )}
              withoutResponsive={boolean('without responsive', false)}
              infos={[
                { number: 'Lorem', value: 'Ipsum', id: 'item-1' },
                { number: 'Dolor', value: 'Sit amet', id: 'item-2' },
                {
                  number: 'Dolorismip oiy',
                  value: 'Sit ametwelcome top',
                  id: 'item-3',
                },
                {
                  number: 'Dolorpmjezia dja',
                  value: 'Sit amet dsjkq djai',
                  id: 'item-4',
                },
                {
                  number: 'Dolordjoai daz',
                  value: 'Sit ametn dazj',
                  id: 'item-5',
                },
              ]}
            />
          </GridCol>
        </Grid>
      )
    },
    { info },
  )
