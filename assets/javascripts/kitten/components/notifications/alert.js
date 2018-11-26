import React, { Component } from 'react'
import classNames from 'classnames'
import { CloseButton } from '../../components/buttons/close-button'
import { domElementHelper } from '../../helpers/dom/element-helper'

export class Alert extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: props.show,
      height: 'auto',
    }

    this.handleCloseClick = this.handleCloseClick.bind(this)
    this.handleAnimationEnd = this.handleAnimationEnd.bind(this)
  }

  handleCloseClick() {
    this.setState({
      show: false,

      // The css animation on the close button requires a fixed height.
      height: domElementHelper.getComputedHeight(this.container),
    })
  }

  handleAnimationEnd() {
    this.props.onAfterClose()
  }

  renderCloseButton() {
    if (!this.props.closeButton) return

    return (
      <CloseButton
        modifier="carbon"
        className="k-Alert__close"
        closeButtonLabel={this.props.closeButtonLabel}
        onClick={this.handleCloseClick}
      />
    )
  }

  render() {
    if (!this.props.show) return null

    const {
      className,
      show,
      error,
      success,
      closeButton,
      closeButtonLabel,
      children,
      onAfterClose,
      ...others
    } = this.props

    const alertClassName = classNames(
      'k-Alert',
      {
        'k-Alert--success': success,
        'k-Alert--error': error,
        'k-Alert--hidden': !this.state.show,
      },
      className,
    )

    return (
      <div
        ref={div => (this.container = div)}
        role="alert"
        style={{ height: this.state.height }}
        className={alertClassName}
        onAnimationEnd={this.handleAnimationEnd}
        {...others}
      >
        <div className="k-Alert__container">
          <div className="k-Alert__row">
            <div className="k-Alert__content">{children}</div>
          </div>
        </div>

        {this.renderCloseButton()}
      </div>
    )
  }
}

Alert.defaultProps = {
  className: null,
  show: true,
  error: false,
  success: false,
  closeButton: false,
  closeButtonLabel: 'Close',
  onAfterClose: () => {},
}
