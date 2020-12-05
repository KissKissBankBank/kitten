import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import {
  withKnobs,
  text,
  boolean,
  select,
  number,
} from '@storybook/addon-knobs'
import { Card } from './index'
import { Grid, GridCol } from '../../grid/grid'

const info = {
  text: `
    #Card
    &nbsp;

    ## Import
    ~~~js
    import { Card } from '@kisskissbankbank/kitten/src/components/cards/card'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
      <Card>
        Children
      </Card>
    ~~~
  `,
}

const borderOptions = {
  None: 'none',
  Normal: 'normal',
  Dark: 'dark',
}

storiesOf('Cards/Card', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('default', () => {
    return (
      <Grid style={{ marginTop: '3em' }}>
        <GridCol offset="1" col="10">
          <Card
            light={boolean('Light', false)}
            shadow={boolean('Shadow', false)}
            border={select('Border', borderOptions, 'none')}
            radius={number('Radius', 0)}
            as={text('As', 'div')}
          >
            {text('Title', 'In enim justo.')}
          </Card>
        </GridCol>
      </Grid>
    )
  })
