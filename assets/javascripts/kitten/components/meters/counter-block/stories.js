import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text } from '@storybook/addon-knobs'
import { CounterBlock } from '../../../components/meters/counter-block'
import { Marger } from '../../../components/layout/marger'

storiesOf('Meters/CounterBlock', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo('Common info')(() => (
      <Marger top="3" bottom="3">
        <CounterBlock
          title={text('Title', 'Total validated amount')}
          subTitle={text('Sub Title', 'collected since Novembre 19th 2014')}
          counter={text('Counter', '52 982 287')}
          unit={text('Unit', '€')}
        />
      </Marger>
    )),
  )
