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

export default {
  component: Title,
  title: 'Title',
  decorators: [withKnobs],
}

export const asDymanicVariables = () => {
  const modifier = text("Modifier", "primary")
  const margin = boolean('Margin', false)
  const italic = boolean('Italic', false)
}

const modifierOptions = {
  Primary: 'primary',
  Secondary: 'secondary',
  Tertiary: 'tertiary',
  Quaternary: 'quaternary',
  Quinary: 'quinary',
  Senary: 'senary',
}

