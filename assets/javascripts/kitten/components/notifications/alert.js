import React from 'react'
import classNames from 'classnames'
import { CloseButton } from 'kitten/components/buttons/close-button'

export class Alert extends React.Component {
  renderCloseButton() {
    if (!this.props.closeButton) return

    return (
      <div className="k-Alert__close">
        <CloseButton className="k-ButtonIcon--carbon"
                     closeButtonLabel={ this.props.closeButtonLabel } />
      </div>
    )
  }

  render() {
    const alertClassName = classNames(
      'k-Alert',
      {
        'k-Alert--success': this.props.success,
        'k-Alert--error': this.props.error,
      }
    )

    return (
      <div className={ alertClassName } role="alert">
        <div className="k-Alert__row">
          <div className="k-Alert__content">
            { this.props.children }
          </div>

          { this.renderCloseButton() }
        </div>
      </div>
    )
  }
}

Alert.defaultProps = {
  error: false,
  success: false,
  closeButton: false,
  closeButtonLabel: "Close",
}
