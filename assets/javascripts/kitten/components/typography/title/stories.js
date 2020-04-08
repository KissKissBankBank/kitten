import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import {
  withKnobs,
  text,
  boolean,
  select,
} from '@storybook/addon-knobs'
import { Title } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'

const modifierOptions = {
  Primary: 'primary',
  Secondary: 'secondary',
  Tertiary: 'tertiary',
  Quaternary: 'quaternary',
  Quinary: 'quinary',
  Senary: 'senary',
  Septenary: 'septenary',
}

export default {
  component: Title,
  title: 'Typography/Title',
  decorators: [withKnobs],
}

export const defaultProps = () => (
  <Container>
    <Marger top="4">
      <Title
        modifier={select("Modifier", modifierOptions, 'primary')}
        italic={boolean("Italic", false)}
        margin={boolean("Margin", false)}
      >
        {text('Title', "Lorem ipsum dolor sit amet")}
      </Title>
    </Marger>
  </Container>
)
