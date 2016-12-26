import React from 'react'
import classNames from 'classnames'

export default class LinkBox extends React.Component {
  renderIcon() {
    if (this.props.displayIcon) {
      return (
        <div className="k-LinkBox__icon">
          { this.props.children }
        </div>
      )
    }
  }

  render() {
    let linkBoxClassNames = classNames(
      'k-LinkBox',
      { 'k-LinkBox--withIcon': this.props.displayIcon },
    )

    const target = this.props.isExternal ? { target: '_blank' } : {}

    return (
      <a className= { linkBoxClassNames }
         href={ this.props.href }
         { ...target }>
        <div className="k-LinkBox__container">
          { this.renderIcon() }
          <div className="k-LinkBox__paragraph">
            <p className="k-LinkBox__title">{ this.props.title }</p>
            <p className="k-LinkBox__text">{ this.props.text }</p>
          </div>

          <div className="k-LinkBox__navigation k-LinkBox__navigation--withAnimation">
            <span className="k-LinkBox__button
                             k-ButtonIcon
                             k-ButtonIcon--hydrogen
                             k-ButtonIcon--tiny
                             k-ButtonIcon--withoutHover
                             k-ButtonIcon--verticalArrow">
              <svg className="k-ButtonIcon__svg"
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 10 10">
                <path d="M7.828,5L6.414,6.413L2.172,2.172l1.414-1.415L7.828,5z"/>
                <path d="M7.828,5L3.586,9.243L2.172,7.827l4.242-4.241L7.828,5z"/>
              </svg>
            </span>
          </div>
        </div>
      </a>
      )
  }
}

LinkBox.defaultProps = {
  displayIcon: false,
  href: '#',
  isExternal: false,
}
