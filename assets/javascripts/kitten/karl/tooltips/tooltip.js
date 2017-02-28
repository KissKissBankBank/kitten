import React from 'react'
import { Tooltip } from 'kitten/components/tooltips/tooltip'
import { Button } from 'kitten/components/buttons/button'

export const KarlStaticTooltip = props => {
  const refElementProps = {
    modifier:'lithium',
    children: 'Button',
  }

  return (
    <Tooltip refElementProps={ refElementProps }
             refElement={ Button }
             alwaysOpen={ true }
             id="static-tooltip"
             { ...props } />
  )
}
