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
