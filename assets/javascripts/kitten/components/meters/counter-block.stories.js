import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text } from '@storybook/addon-knobs'
import { CounterBlock } from '../../components/meters/counter-block'
import { Grid, GridCol } from '../../components/grid/grid'
import { Marger } from '../../components/layout/marger'

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {},
})

storiesOf('Meters/CounterBlock', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo('common info')(() => (
      <Marger top="3" bottom="3">
        <Grid>
          <GridCol offset-l="1" col-l="10">
            <CounterBlock
              title={text('Title', 'Total validated amount')}
              subTitle={text(
                'Sub Title',
                'euro collected since Novembre 19th 2014',
              )}
              counter={text('Counter', '13 106 700')}
            />
          </GridCol>
        </Grid>
      </Marger>
    )),
  )
