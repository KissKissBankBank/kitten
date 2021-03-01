import React from 'react'
import { select, boolean } from '@storybook/addon-knobs'
import styled from 'styled-components'
import { IconBadge } from './index'
import { StarIcon } from '../../../components/icons/star-icon'
import COLORS from '../../../constants/colors-config'

const Container = styled.div`
  padding: 20px;
`

export default {
  title: 'Atoms/IconBadge',
  component: IconBadge,
}

export const Default = () => (
  <Container>
    <IconBadge
      disabled={boolean('disabled', false)}
      valid={boolean('valid', false)}
      empty={boolean('empty', false)}
      size={select('size', ['tiny', 'normal', 'big', 'huge'], 'normal')}
    >
      <StarIcon color={COLORS.background1} />
    </IconBadge>
  </Container>
)
