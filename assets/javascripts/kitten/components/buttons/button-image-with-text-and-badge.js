import React from 'react'
import classNames from 'classnames'

class ButtonImageWithTextAndBadge extends React.Component {
  renderNotificationBadge() {
    return(
      <span className="k-ButtonWithBadge__badge k-Badge">
        { this.props.notifications }
      </span>
    )
  }

  render() {
    const {
      className,
      isExpanded,
      text,
      title,
      textClassName,
      srcImg,
      widthImg,
      heightImg,
      altImg,
      notifications,
      ...rest
    } = this.props

    const textClass = classNames('k-ButtonImageWithText__text',
                                 'k-ButtonImageWithText__text--withoutMarginRight',
                                 textClassName)
    let buttonClassName = classNames('k-ButtonImageWithText', className)
    if (notifications > 0)
      buttonClassName = classNames('k-ButtonWithBadge', buttonClassName)

    return(
      <span className={ buttonClassName }
              aria-haspopup="true"
              aria-expanded={ isExpanded }
              title={ title }
              { ...rest }>
        <span className="k-ButtonWithBadge">
          <span ref="buttonImage" className="k-ButtonImage">
            <img className="k-ButtonImage__img"
                 src={ srcImg }
                 width={ widthImg }
                 height={ heightImg }
                 alt={ altImg } />
          </span>
          { notifications ? this.renderNotificationBadge() : '' }
        </span>
        <p className={ textClass }>{ text }</p>
      </span>
    )
  }
}

ButtonImageWithTextAndBadge.propTypes = {
  children: React.PropTypes.string,
  onClick: React.PropTypes.func,
  isExpanded: React.PropTypes.bool,
  text: React.PropTypes.string,
  title: React.PropTypes.string,
  srcImg: React.PropTypes.string,
  widthImg: React.PropTypes.number,
  heightImg: React.PropTypes.number,
  altImg: React.PropTypes.string,
  notifications: React.PropTypes.number,
}

ButtonImageWithTextAndBadge.defaultProps = {
  children: 'Toggle button',
  onClick: () => {},
}

export default ButtonImageWithTextAndBadge
