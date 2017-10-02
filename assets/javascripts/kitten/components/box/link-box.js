import React from 'react'
import classNames from 'classnames'
import { ArrowIcon } from 'kitten/components/icons/arrow-icon'

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
    const {
      className,
      displayIcon,
      isExternal,
      href,
      title,
      text,
      ...others } = this.props

    let linkBoxClassNames = classNames(
      'k-LinkBox',
      className,
      { 'k-LinkBox--withIcon': displayIcon },
    )

    const target = isExternal ? { target: '_blank' } : {}

    return (
      <a
        { ...others }
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

          <div className={ classNames('k-LinkBox__navigation',
                                      'k-LinkBox__navigation--withAnimation') }>
            <span className={ classNames('k-LinkBox__button',
                                         'k-ButtonIcon',
                                         'k-ButtonIcon--hydrogen',
                                         'k-ButtonIcon--tiny',
                                         'k-ButtonIcon--withoutHover',
                                         'k-ButtonIcon--verticalArrow') }>
              <ArrowIcon className="k-ButtonIcon__svg" />
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
