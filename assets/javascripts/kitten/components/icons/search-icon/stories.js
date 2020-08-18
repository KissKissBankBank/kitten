import React from 'react'
import { color } from '@storybook/addon-knobs'
import { SearchIcon } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'

export const Default = () => {
  return (
    <Container>
      <Marger top="5" bottom="5">
        <SearchIcon width="16" color={color('Color', '#333')} />
      </Marger>
    </Container>
  )
}

export default {
  title: 'Icons/SearchIcon',
  component: SearchIcon,
}
