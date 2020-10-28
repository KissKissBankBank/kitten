import React, { Component } from 'react'
import classNames from 'classnames'
import { Marger } from '../../components/layout/marger'
import { CloseButton } from '../../components/buttons/close-button'

export class Popover extends Component {
  constructor(props) {
    super(props)

    this.handleCloseClick = this.handleCloseClick.bind(this)
  }

  handleCloseClick() {
    if (this.props.onCloseClick) return this.props.onCloseClick()
  }

  renderCloseButton() {
    return (
      <CloseButton
        modifier="hydrogen"
        size="micro"
        closeButtonLabel={this.props.closeButtonLabel}
        onClick={this.handleCloseClick}
      />
    )
  }

  renderContent() {
    if (typeof this.props.children != 'string') {
      return this.props.children
    }

    return (
      <Marger top="5" bottom="5" className="k-Popover__content">
        {this.props.children}
      </Marger>
    )
  }

  render() {
    const {
      children,
      popoverClassName,
      containerClassName,
      titleAriaLabelId,
      onCloseClick,
      closeButtonLabel,
      ...popoverAttributes
    } = this.props

    const popoverClassNames = classNames('k-Popover', popoverClassName)

    const containerClassNames = classNames(
      'k-Popover__container',
      containerClassName,
    )

    return (
      <div
        ref="popover"
        className={popoverClassNames}
        role="dialog"
        aria-hidden="true"
        aria-labelledby={titleAriaLabelId}
        {...popoverAttributes}
      >
        <div className={containerClassNames}>
          {this.renderContent()}
          <div>{this.renderCloseButton()}</div>
        </div>
      </div>
    )
  }
}

Popover.defaultProps = {
  onCloseClick: null,
  closeButtonLabel: 'Close',
  popoverClassName: '',
  containerClassName: '',
}
