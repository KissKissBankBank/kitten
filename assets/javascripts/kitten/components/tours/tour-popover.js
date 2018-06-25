import React from 'react'
import classNames from 'classnames'

export class TourPopover extends React.Component {
  constructor(props) {
    super(props)

    this.handleResize = this.handleResize.bind(this)
  }

  // Component lifecycle.

  componentDidMount() {
    this.props.onPopoverPosition(this.refs.popover)
    window.addEventListener('resize', this.handleResize)
  }

  componentDidUpdate(prevProps) {
    if (this.shouldUpdatePosition(prevProps)) {
      this.props.onPopoverPosition(this.refs.popover)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  // Component listener callbacks.

  handleResize() {
    this.props.onPopoverPosition(this.refs.popover)
  }

  // Component methods.

  shouldUpdatePosition(prevProps) {
    return prevProps.name != this.props.name
  }

  // Component rendering.

  renderNextButton() {
    const isDisabled = !this.props.buttons.next.active
    const buttonClassName = classNames(
      'k-Tour__popover__button',
      'k-Tour__popover__button--right',
      'k-Button',
      'k-Button--tiny',
      'k-Button--icon',
      'k-Button--iconRight',
      {
        'k-Button--helium': !isDisabled,
        'k-Button--hydrogen': isDisabled,
      },
    )

    return (
      <button
        onClick={isDisabled ? null : this.props.onNextClick}
        title={this.props.buttons.next.title}
        className={buttonClassName}
        disabled={isDisabled}
      >
        {this.props.buttons.next.label}
        <svg
          className="k-Button__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 6 6"
        >
          <path d="M6 0H0v6h2V2h4z" />
        </svg>
      </button>
    )
  }

  renderPrevButton() {
    const isDisabled = !this.props.buttons.prev.active
    const buttonClassName = classNames(
      'k-Tour__popover__button',
      'k-Button',
      'k-Button--tiny',
      'k-Button--icon',
      {
        'k-Button--helium': !isDisabled,
        'k-Button--hydrogen': isDisabled,
      },
    )

    return (
      <button
        onClick={isDisabled ? null : this.props.onPrevClick}
        title={this.props.buttons.prev.title}
        className={buttonClassName}
        disabled={isDisabled}
      >
        <svg
          className="k-Button__icon--tiny"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 6 6"
          fill="#fff"
        >
          <path d="M6 0H0v6h2V2h4z" />
        </svg>
        {this.props.buttons.prev.label}
      </button>
    )
  }

  renderCloseButton() {
    return (
      <button
        title={this.props.buttons.close.label}
        aria-label={this.props.buttons.close.label}
        onClick={this.props.onCloseClick}
        className="k-ButtonIcon
                         k-ButtonIcon--hydrogen
                         k-ButtonIcon--tiny"
      >
        <svg
          className="k-ButtonIcon__svg k-ButtonIcon__svgRotate"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-11 -4 125 105"
        >
          <path d="M91.968 21.407l-70.56 70.56-13.44-13.44 70.56-70.56z" />
          <path d="M91.968 78.527l-13.44 13.44-70.56-70.56 13.44-13.44z" />
        </svg>
      </button>
    )
  }

  render() {
    return (
      <div
        ref="popover"
        className="k-Popover k-Tour__popover"
        role="dialog"
        aria-hidden="true"
        aria-labelledby="dialogtitle"
        style={this.props.style}
      >
        <div className="k-Popover__container k-Tour__popover__container">
          <div className="k-Tour__popover__illustration">
            {this.props.illustration}
          </div>
          <div className="k-Tour__popover__content">
            <p id="dialogtitle" className="k-Tour__popover__title">
              {this.props.title}
            </p>
            <p className="k-Tour__popover__text">{this.props.content}</p>
            <div className="k-Tour__popover__navigation">
              <p className="k-Tour__popover__numbering">
                {this.props.progress}
              </p>
              <div className="k-Tour__popover__buttons">
                {this.renderPrevButton()}
                {this.renderNextButton()}
              </div>
            </div>
          </div>
          <div className="k-Popover__close">{this.renderCloseButton()}</div>
        </div>
      </div>
    )
  }
}

// DEPRECATED: do not use default export.
export default TourPopover
