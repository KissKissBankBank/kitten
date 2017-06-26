import React from 'react'
// DEPRECATED
import { TooltipIcon } from 'kitten/components/icons/tooltip-icon'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'

export default class ButtonTooltipIcon extends React.Component {
 render() {
   return (
    <ButtonIcon { ...this.props }
      size="micro"
      modifier="beryllium">
       <TooltipIcon className="k-ButtonIcon__svg" />
     </ButtonIcon>
   )
 }
}

ButtonTooltipIcon.defaultProps = {
 type: 'button',
}
