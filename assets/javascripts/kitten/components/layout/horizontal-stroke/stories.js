import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, number, select } from '@storybook/addon-knobs'
import { HorizontalStroke } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'

const sizeOptions = {
  Tiny: 'tiny',
  Default: 'default',
  Big: 'big',
  Huge: 'huge',
}

const info = {
  text: `
    # HorizontalStroke
    &nbsp;

    ## Import
    ~~~js
    import { HorizontalStroke } from '@kisskissbankbank/kitten/src/components/layout/horizontal-stroke'
    ~~~

    #### Size CSS
    ~~~js
    import { TINY, DEFAULT, BIG, HUGE } from '@kisskissbankbank/kitten/src/components/layout/horizontal-stroke'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <HorizontalStroke />
    ~~~

    #### Size
    ~~~js
    <HorizontalStroke size="tiny" />
    <HorizontalStroke size="default" />
    <HorizontalStroke size="big" />
    <HorizontalStroke size="huge" />
    ~~~

    #### Custom size
    ~~~js
    <HorizontalStroke customSize={{ width: 100, height: 50 }} />
    ~~~
  `,
  header: false,
  propTables: false,
}

storiesOf('Layout/HorizontalStroke', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add(
    'default',
    () => {
      return (
        <Marger top="4" bottom="4">
          <Container>
            <HorizontalStroke
              size={select('Size', sizeOptions, 'default')}
              customSize={{
                width: number('Width', null),
                height: number('Height', null),
              }}
            />
          </Container>
        </Marger>
      )
    },
    { info },
  )
