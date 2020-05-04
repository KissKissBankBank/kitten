import React from 'react'
import { DatavizVerticalBar as DatavizVerticalBarComponent } from './vertical'
import { DatavizHorizontalBar as DatavizHorizontalBarComponent } from './horizontal'

export default {
  component: DatavizVerticalBar,
  title: 'Dataviz/Bar',
  parameters: {
    component: DatavizVerticalBar,
  },
}

export const DatavizVerticalBar = () => <DatavizVerticalBarComponent />

export const DatavizHorizontalBar = () => <DatavizHorizontalBarComponent />
