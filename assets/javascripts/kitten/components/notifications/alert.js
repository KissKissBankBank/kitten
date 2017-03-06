import React from 'react'
import classNames from 'classnames'
import { CloseButton } from 'kitten/components/buttons/close-button'

export class Alert extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: props.show
    }

    this.handleCloseClick = this.handleCloseClick.bind(this)
  }

  handleCloseClick() {
    this.setState({
      show: false,
    })
  }

  renderCloseButton() {
    if (!this.props.closeButton) return

    return (
      <CloseButton modifier="carbon"
                   className="k-Alert__close"
                   closeButtonLabel={ this.props.closeButtonLabel }
                   onClick={ this.handleCloseClick } />
    )
  }

  render() {
    if (!this.props.show) return null

    const alertClassName = classNames(
      'k-Alert',
      {
        'k-Alert--success': this.props.success,
        'k-Alert--error': this.props.error,
        'k-Alert--hidden': !this.state.show,
      },
      this.props.className
    )

    return (
      <div className={ alertClassName } role="alert">
        <div className="k-Alert__row">
          <div className="k-Alert__content">
            { this.props.children }
          </div>
        </div>

        { this.renderCloseButton() }
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
  closeButtonLabel: "Close",
}
