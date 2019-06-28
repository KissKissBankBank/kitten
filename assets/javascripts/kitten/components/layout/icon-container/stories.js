import React from 'react'
import { storiesOf } from '@storybook/react'
import { IconContainer } from './index'
import { color, number, withKnobs, select, text } from '@storybook/addon-knobs'
import COLORS from '../../../constants/colors-config'
import { CheckedCircleIcon } from '../../icons/checked-circle-icon'
import { withInfo } from '@storybook/addon-info'

const info = {
  text: `
  # IconContainer
    &nbsp;

    ## Import
    ~~~js
    import { IconContainer } from '@kisskissbankbank/kitten'
    ~~~

    ## Usage
    ~~~js
    <IconContainer icon={<CheckedCircleIcon />}>
      MyContent
    </IconContainer>
    ~~~
  `,
}

storiesOf('Layout/IconContainer', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add(
    'default',
    () => {
      return (
        <IconContainer
          position={select(
            'Position',
            {
              Left: 'left',
              Top: 'top',
              Right: 'right',
              Bottom: 'bottom',
            },
            'top',
          )}
          color={color('Color', COLORS.background3)}
          iconWidth={number('Width', 25)}
          icon={<CheckedCircleIcon circleColor="#61d079" checkedColor="#fff" />}
        >
          {text(
            'Text',
            'Confucius says: in zion PLURALease earthly ascension.',
          )}
        </IconContainer>
      )
    },
    { info },
  )
