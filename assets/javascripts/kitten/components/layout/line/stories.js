import React from 'react'
import { Line } from './index'

export default {
  title: 'Layout/Line',
  component: Line,
}

export const Default = () => (
  <Line>
    <Line.Item>Item 1</Line.Item>
    <Line.Item>Item 2</Line.Item>
    <Line.Item>Item 3</Line.Item>
  </Line>
)
