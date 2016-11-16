import React from 'react'
import classNames from 'classnames'

class TourPopover extends React.Component {
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
        'k-Button--zinc': !isDisabled,
        'k-Button--default': isDisabled,
      }
    )

    return (
      <button onClick={ isDisabled ? null : this.props.onNextClick }
              title={ this.props.buttons.next.title }
              className={ buttonClassName }
              disabled={ isDisabled }>
        { this.props.buttons.next.label }
        <svg className="k-Button__icon--tiny"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 10 10">
          <path d="M7.828,5L6.414,6.413L2.172,2.172l1.414-1.415L7.828,5z"/>
          <path d="M7.828,5L3.586,9.243L2.172,7.827l4.242-4.241L7.828,5z"/>
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
        'k-Button--zinc': !isDisabled,
        'k-Button--default': isDisabled,
      }
    )

    return (
      <button onClick={ isDisabled ? null : this.props.onPrevClick }
              title={ this.props.buttons.prev.title }
              className={ buttonClassName }
              disabled={ isDisabled }>
        <svg className="k-Button__icon--tiny"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 10 10">
          <path d="M2.2,5l1.4-1.4l4.2,4.2L6.4,9.2L2.2,5z"/>
          <path d="M2.2,5l4.2-4.2l1.4,1.4L3.6,6.4L2.2,5z"/>
        </svg>
        { this.props.buttons.prev.label }
      </button>
    )
  }

  renderCloseButton() {
    return (
      <button title={ this.props.buttons.close.label }
              aria-label={ this.props.buttons.close.label }
              onClick={ this.props.onCloseClick }
              className="k-ButtonIcon
                         k-ButtonIcon--default
                         k-ButtonIcon--tiny">
        <svg className="k-ButtonIcon__svg k-ButtonIcon__svgRotate"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="-11 -4 125 105">
          <path d="M91.968 21.407l-70.56 70.56-13.44-13.44 70.56-70.56z"/>
          <path d="M91.968 78.527l-13.44 13.44-70.56-70.56 13.44-13.44z"/>
        </svg>
      </button>
    )
  }

  render() {
    return(
      <div ref="popover"
           className="k-Popover k-Tour__popover"
           role="dialog"
           aria-hidden="true"
           aria-labelledby="dialogtitle"
           style={ this.props.style }>
        <div className="k-Popover__container k-Tour__popover__container">
          <div className="k-Tour__popover__illustration">
            { this.props.illustration }
          </div>
          <div className="k-Tour__popover__content">
            <p id="dialogtitle" className="k-Tour__popover__title">
              { this.props.title }
            </p>
            <p className="k-Tour__popover__text">{ this.props.content }</p>
            <div className="k-Tour__popover__navigation">
              <p className="k-Tour__popover__numbering">{ this.props.progress }</p>
              <div className="k-Tour__popover__buttons">
                { this.renderPrevButton() }
                { this.renderNextButton() }
              </div>
            </div>
          </div>
          <div className="k-Popover__close">{ this.renderCloseButton() }</div>
        </div>
      </div>
    )
  }
}

export default TourPopover
