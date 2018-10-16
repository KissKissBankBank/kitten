import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, number } from '@storybook/addon-knobs/react'
import { CounterBlock } from 'kitten/components/meters/counter-block'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Marger } from 'kitten/components/layout/marger'

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {},
})

storiesOf('metrics/CounterBlock', module)
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
              counter={number('Counter', 13106700)}
            />
          </GridCol>
        </Grid>
      </Marger>
    )),
  )
