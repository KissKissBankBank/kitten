import React from 'react'
import { InfoIcon } from 'kitten/components/icons/info-icon'

export class ButtonInfoIcon extends React.Component {
  render() {
    return (
      <button { ...this.props }
              className={ classNames('k-ButtonIcon',
                                     'k-ButtonIcon--beryllium',
                                     'k-ButtonIcon--micro') }>
        <InfoIcon className="k-ButtonIcon__svg" />
      </button>
    )
  }
}

ButtonInfoIcon.defaultProps = {
  type: 'button',
}
