import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, number, select } from '@storybook/addon-knobs'
import { ArrowPanel } from './index'

const info = {
  text: `
    # ArrowPanel
    &nbsp;

    ## Import
    ~~~js
    import { ArrowPanel } from '@kisskissbankbank/kitten/src/components/layout/shadow-panel'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <ArrowPanel
      arrowSide="left"
      arrowPositionFromOrigin={30}
    >
      …
    </ArrowPanel>
    ~~~

  `,
  header: false,
  propTables: false,
}

storiesOf('Layout/ArrowPanel', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add(
    'default',
    () => {
      return (
        <div style={{ margin: '5em' }}>
          <ArrowPanel
            arrowSide={select(
              'Arrow side',
              ['left', 'right', 'top', 'bottom'],
              'top',
            )}
            arrowPositionFromOrigin={number('Arrow position from origin', 30)}
          >
            <div
              style={{
                width: number('Content width', 460),
                height: number('Content height', 240),
              }}
            >
              Play with my knob!
            </div>
          </ArrowPanel>
        </div>
      )
    },
    { info },
  )
