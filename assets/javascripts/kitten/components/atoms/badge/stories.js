import React from 'react'
import { boolean, color, text } from '@storybook/addon-knobs'
import styled from 'styled-components'
import { Badge } from './index'
import { HeartIcon } from '../../../components/graphics/icons/heart-icon'
import COLORS from '../../../constants/colors-config'
import { DocsPage } from 'storybook/docs-page'

const Container = styled.div`
  padding: 20px;
`

export default {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="Badge" />,
    },
  },
}

export const Default = () => (
  <Container>
    <Badge
      spaced={boolean('spaced', false)}
      withBorder={boolean('withBorder', true)}
      color={color('color', COLORS.primary1)}
      Icon={boolean('Icon?', false) && (() => <HeartIcon width="30" />)}
    >
      {text('text', '2')}
    </Badge>
  </Container>
)
