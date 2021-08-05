import React from 'react'
import { text, select, boolean } from '@storybook/addon-knobs'
import { Toggletip } from './index'
import COLORS from '../../../constants/colors-config'

export default {
  title: 'Molecules/Toggletip',
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

export const CustomTargetElement = () => {
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
        targetElement={
          <p className="k-u-weight-bold">This is the target of my tooltip</p>
        }
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
        bubbleProps={{
          className: 'k-u-color-background1 k-u-weight-regular',
          color: COLORS.primary1,
        }}
      >
        First toggletip.
        {boolean('Long Text', false) && (
          <>
            <br />
            Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac
            cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
            justo sit amet risus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Donec ullamcorper nulla non metus auctor
            fringilla.
          </>
        )}
      </Toggletip>
    </div>
    <div className="k-u-margin-vertical-quadruple k-u-align-right">
      <Toggletip
        modifier="warning"
        actionLabel="Sample label"
        id="Toggletip-center"
        bubbleProps={{
          zIndex: 500,
        }}
      >
        This is a text{' '}
        <a className="k-u-link k-u-link-font1" href="#">
          with a link
        </a>
        {boolean('Long Text', false) && (
          <>
            <br />
            Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac
            cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
            justo sit amet risus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Donec ullamcorper nulla non metus auctor
            fringilla.
          </>
        )}
        .
      </Toggletip>
    </div>
    <div className="k-u-margin-top-quadruple k-u-align-center">
      <Toggletip
        modifier="disabled"
        actionLabel="Sample label"
        id="Toggletip-bottom"
      >
        This is a text for the last toggletip.
        {boolean('Long Text', false) && (
          <>
            <br />
            Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac
            cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
            justo sit amet risus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Donec ullamcorper nulla non metus auctor
            fringilla.
          </>
        )}
      </Toggletip>
    </div>
  </div>
)
