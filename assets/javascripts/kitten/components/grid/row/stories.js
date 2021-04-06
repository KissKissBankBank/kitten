import React from 'react'
import { Row } from './index'
import { boolean } from '@storybook/addon-knobs'

export default {
  component: Row,
  title: 'Grid/Row',
  parameters: {
    component: Row,
  },
}

export const Default = () => (
  <Row
    centered={boolean('centered', false)}
    light={boolean('light', false)}
    dark={boolean('dark', false)}
    lightTopBorder={boolean('lightTopBorder', false)}
    lightBottomBorder={boolean('lightBottomBorder', false)}
    padded={boolean('padded', false)}
  >
    <div>FooBar</div>
  </Row>
)
