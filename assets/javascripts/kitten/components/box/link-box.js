import React, { Component } from 'react'
import classNames from 'classnames'
import { ArrowIcon } from 'kitten/components/icons/arrow-icon'

export class LinkBox extends Component {
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
    const {
      className,
      displayIcon,
      isExternal,
      href,
      title,
      text,
      linkProps } = this.props

    let linkBoxClassNames = classNames(
      'k-LinkBox',
      className,
      { 'k-LinkBox--withIcon': displayIcon },
    )

    const target = isExternal ? { target: '_blank' } : {}

    return (
      <a
        { ...linkProps }
        className={ linkBoxClassNames }
        href={ href }
        { ...target }
      >
        <div className="k-LinkBox__container">
          { this.renderIcon() }
          <div className="k-LinkBox__paragraph">
            <p className="k-LinkBox__title">{ title }</p>
            <p className="k-LinkBox__text">{ text }</p>
          </div>

          <div className="k-LinkBox__navigation">
            <ArrowIcon className="k-ButtonIcon__svg" />
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

// DEPRECATED: do not use default export.
export default LinkBox
