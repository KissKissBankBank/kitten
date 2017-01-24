import React from 'react'
import classNames from 'classnames'

export class Popover extends React.Component {
  renderCloseButton() {
    return (
      <Popover closeLabel={ closeButtonLabel }
               onClick={ function(){} popoverClassName='k-Tour__popover' containerClassName='k-Tour__popover__container' } />
    )
  }

  renderButton() {
    return (
      <button title={ this.props.closeLabel }
              aria-label={ this.props.closeLabel }
              onClick={ this.props.onCloseClick }
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
    const { ...others } = this.props
    return (
      <div ref="popover"
           className="k-Popover" { popoverClassName }
           role="dialog"
           aria-hidden="true"
           aria-labelledby="dialogtitle"
           { ...others }>
        <div className="k-Popover__container" { containerClassName }>
          { children }
          <div className="k-Popover__close">{ this.renderCloseButton() }</div>
          }
        </div>
      </div>
    )
  }
}

Popover.defaultProps = {
  closeLabel:
  closeButtonLabel: 'Close',
}
