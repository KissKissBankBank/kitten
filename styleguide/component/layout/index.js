import React from 'react'
import Component from '../../app/component'
import Section from '../../app/section'
import Line from './line'
import FormActions from './form-actions'
import FormRow from './form-row'
import HorizontalStroke from './horizontal-stroke'
import VerticalStroke from './vertical-stroke'
import Separator from './separator'

export default () => {
  return (
    <Section title="Layout" id="layout">
      <Component title="Line" id="components/layout/line" component={Line} />
      <Component
        title="Form actions"
        id="components/layout/form-actions"
        component={FormActions}
      />
      <Component
        title="Form row"
        id="components/layout/form-row"
        component={FormRow}
      />
      <Component
        title="Horizontal stroke"
        id="components/layout/horizontal-stroke"
        component={HorizontalStroke}
      />
      <Component
        title="Vertical stroke"
        id="components/layout/vertical-stroke"
        component={VerticalStroke}
      />
      <Component
        title="Separator"
        id="components/layout/separator"
        component={Separator}
      />
    </Section>
  )
}
