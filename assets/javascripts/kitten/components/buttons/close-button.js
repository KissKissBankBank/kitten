import React from 'react'
import classNames from 'classnames'
import { Button } from 'kitten/components/buttons/button'
import { CrossIcon } from 'kitten/components/icons/cross-icon'

export class CloseButton extends React.Component {
  render() {
    const { className, closeButtonLabel, ...others } = this.props

    return (
      <button className={ classNames('k-ButtonIcon',
                                     'k-ButtonIcon--tiny',
                                     className) }
              title={ closeButtonLabel }
              aria-label={ closeButtonLabel }
              { ...others }>
        <CrossIcon className="k-ButtonIcon__svg k-ButtonIcon__svgRotate" />
      </button>
    )
  }
}

CloseButton.defaultProps = {
  closeButtonLabel: "Close",
  className: "k-ButtonIcon--hydrogen",
}
