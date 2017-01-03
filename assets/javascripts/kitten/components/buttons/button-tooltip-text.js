import React from 'react'
import { TooltipIcon } from 'kitten/components/icons/tooltip-icon'

export default class ButtonTooltipText extends React.Component {
  render() {
    return (
      <button className="k-Button
                         k-Button--helium"
              { ...this.props }>
        Passez à l'étape 2
      </button>
    )
  }
}
