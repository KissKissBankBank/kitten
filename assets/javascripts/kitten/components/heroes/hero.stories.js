import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import COLORS from '../../constants/colors-config'
import { Marger } from '../../components/layout/marger'
import { Hero } from './hero'
import { StyleRoot } from 'radium'
import { withKnobs, text, boolean, color, select } from '@storybook/addon-knobs'

storiesOf('Heroes/Hero', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo('common info')(() => (
      <Hero
        direction={select(
          'direction',
          { Left: 'left', Right: 'right' },
          'left',
        )}
        imageSrc={text('imageSrc', 'http://placekitten.com/800/800')}
        tiny={boolean('Tiny', false)}
        contentBackgroundColor={color('contentBackgroundColor', COLORS.font1)}
        contentColor={color('contentColor', COLORS.background1)}
      >
        <Marger top={10} bottom={10}>
          FooBar
        </Marger>
      </Hero>
    )),
  )
