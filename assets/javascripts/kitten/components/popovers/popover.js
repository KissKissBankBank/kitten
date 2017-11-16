import React from 'react'
import classNames from 'classnames'
import { CloseButton } from 'kitten/components/buttons/close-button'

export class Popover extends React.Component {
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
        closeButtonLabel={ this.props.closeButtonLabel }
        onClick={ this.handleCloseClick }
      />
    )
  }

  renderContent() {
    if (typeof this.props.children != 'string') {
      return this.props.children
    }

    return (
      <div className="k-Popover__content">
        { this.props.children }
      </div>
    )
  }

  render() {
    const { children,
            popoverClassName,
            containerClassName,
            titleAriaLabelId,
            onCloseClick,
            closeButtonLabel,
            ...popoverAttributes }
      = this.props

    const popoverClassNames = classNames(
      "k-Popover",
      popoverClassName
    )

    const containerClassNames = classNames(
      "k-Popover__container",
      containerClassName
    )

    return (
      <div
        ref="popover"
        className={ popoverClassNames }
        role="dialog"
        aria-hidden="true"
        aria-labelledby={ titleAriaLabelId }
        { ...popoverAttributes }
      >
        <div className={ containerClassNames }>
          { this.renderContent() }
          <div className="k-Popover__close">
            { this.renderCloseButton() }
          </div>
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
