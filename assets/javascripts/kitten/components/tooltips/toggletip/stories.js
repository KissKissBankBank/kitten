import React from 'react'
import { text, select } from '@storybook/addon-knobs'
import { Toggletip } from './index'
import COLORS from '../../../constants/colors-config'

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
        bubbleProps={{
          className: 'k-u-color-background1 k-u-weight-regular',
          color: COLORS.primary1,
        }}
      >
        First toggletip.
        <br />
        Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus
        commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
        amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Donec ullamcorper nulla non metus auctor fringilla.
      </Toggletip>
    </div>
    <div className="k-u-margin-vertical-quadruple k-u-align-right">
      <Toggletip
        modifier="warning"
        actionLabel="Sample label"
        id="Toggletip-center"
        place="right"
        bubbleProps={{
          zIndex: 500,
        }}
      >
        This is a text{' '}
        <a className="k-u-link k-u-link-font1" href="#">
          with a link
        </a>
        .
      </Toggletip>
    </div>
    <div className="k-u-margin-top-quadruple k-u-align-center">
      <Toggletip
        modifier="disabled"
        actionLabel="Sample label"
        id="Toggletip-bottom"
        place="right"
      >
        This is a text for the last toggletip.
        <br />
        Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus
        commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
        amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Donec ullamcorper nulla non metus auctor fringilla.
      </Toggletip>
    </div>
  </div>
)
