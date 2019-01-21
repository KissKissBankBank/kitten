import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, color } from '@storybook/addon-knobs'
import { SearchIcon } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'

storiesOf('Icons/SearchIcon', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <Container>
        <Marger top="5" bottom="5">
          <SearchIcon width="16" color={color('Color', '#333')} />
        </Marger>
      </Container>
    )
  })
