import React from 'react'
import { text, select } from '@storybook/addon-knobs'
import { Toggletip } from './index'

export default {
  title: 'Tooltips/Toggletip',
  component: Toggletip,
}

export const Default = () => {
  return (
    <div className="k-u-margin-vertical-octuple k-u-margin-horizontal-quadruple">
      <Toggletip
        actionLabel="Sample label"
        id="Toggletip-demo"
        modifier={select(
          'Modifier',
          ['info', 'warning', 'error', 'success', 'disabled'],
          'info',
        )}
        children={text('Text', 'The text of my Toggletip.')}
      />
    </div>
  )
}

export const MultipleToggletips = () => (
  <div className="k-u-margin-vertical-quadruple k-u-margin-horizontal-quadruple">
    <div className="k-u-margin-bottom-quadruple">
      <Toggletip
        actionLabel="Sample label"
        id="Toggletip-top"
        place="left"
        children="First Toggletip"
      />
    </div>
    <div className="k-u-margin-top-quadruple k-u-align-right">
      <Toggletip actionLabel="Sample label" id="Toggletip-bottom" place="right">
        This is a text{' '}
        <a className="k-u-link k-u-link-primary1" href="#">
          with a link
        </a>
        .
      </Toggletip>
    </div>
  </div>
)
