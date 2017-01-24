import React from 'react'
import classNames from 'classnames'

export class Popover extends React.Component {

  handleCloseClick() {
    if (this.props.onCloseClick) return this.props.onCloseClick()
  }

  renderCloseButton() {
    return (
      <button title={ this.props.closeButtonLabel }
              aria-label={ this.props.closeButtonLabel }
              onClick={ this.handleCloseClick }
              className="k-ButtonIcon
                         k-ButtonIcon--hydrogen
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
    const { children, popoverClassName, containerClassName, ...others } = this.props

    const popoverClassNames = classNames(
      "k-Popover",
      popoverClassName
    )

    const containerClassNames = classNames(
      "k-Popover__container",
      containerClassName
    )

    return (
      <div ref="popover"
           className={ popoverClassNames }
           role="dialog"
           aria-hidden="true"
           aria-labelledby="dialogtitle"
           { ...others }>
        <div className={ containerClassNames }>
          { children }
          <div className="k-Popover__close">{ this.renderCloseButton() }</div>
        </div>
      </div>
    )
  }
}

Popover.defaultProps = {
  closeButtonLabel: 'Close',
  popoverClassName: "",
  containerClassName: "",
}
