import React from 'react'
import Component from '../../app/component'
import Section from '../../app/section'
import Row from './row'
import SideGrid from './side-grid'
import Grid from './grid'
import SingleColumn from './single-column'
import LegoGrid from './lego-grid'
import VerticalGrid from './vertical-grid'

export default () => {
  return (
    <Section title="Grid system" id="grid-system">
      <Component title="Grid" id="components/grid-system/grid" component={Grid} />
      <Component
        title="Vertical Grid"
        id="components/grid-system/vertical-grid"
        component={VerticalGrid}
      />
      <Component
        title="Side Grid"
        id="components/grid-system/side-grid"
        component={SideGrid}
      />
      <Component title="Row" id="components/grid-system/row" component={Row} />
      <Component
        title="Single Column"
        id="components/grid-system/single-column"
        component={SingleColumn}
      />
      <Component
        title="Lego Grid"
        id="components/grid-system/lego-grid"
        component={LegoGrid}
      />
    </Section>
  )
}
