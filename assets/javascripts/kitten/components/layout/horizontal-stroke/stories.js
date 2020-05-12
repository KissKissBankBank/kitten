import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, number, select, object } from '@storybook/addon-knobs'
import { HorizontalStroke } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'

const sizeOptions = {
  Tiny: 'tiny',
  Default: 'default',
  Big: 'big',
  Huge: 'huge',
}

const modifierOptions = {
  null: null,
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  quaternary: 'quaternary',
  quinary: 'quinary',
  senary: 'senary',
  septenary: 'septenary',
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

    #### Modifier
    ~~~js
    <HorizontalStroke modifier="primary" />
    <HorizontalStroke modifier="secondary" />
    <HorizontalStroke modifier="tertiary" />
    <HorizontalStroke modifier="quaternary" />
    <HorizontalStroke modifier="quinary" />
    <HorizontalStroke modifier="senary" />
    <HorizontalStroke modifier="septenary" />
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

export default {
  component: HorizontalStroke,
  title: 'Layout/HorizontalStroke',
  decorators: [withKnobs, withInfo],
  parameters: {
    component: HorizontalStroke,
    info: info,
  },
}

export const Default = () => (
  <Marger top="4" bottom="4">
    <Container>
      <HorizontalStroke
        size={select('Size', sizeOptions, 'default')}
        modifier={select('Modifier', modifierOptions)}
        customSize={{
          width: number('Width', null),
          height: number('Height', null),
        }}
        style={object('Style object', { backgroundColor: '#333' })}
      />
    </Container>
  </Marger>
)
