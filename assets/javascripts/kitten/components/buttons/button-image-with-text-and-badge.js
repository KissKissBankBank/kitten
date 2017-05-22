import React from 'react'
import PropTypes from 'prop-types'
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
                                 'k-ButtonImageWithText__text--withoutPaddingRight',
                                 textClassName)
    let buttonClassName = classNames('k-ButtonImageWithText', className)

    return(
      <button className={ buttonClassName }
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
      </button>
    )
  }
}

ButtonImageWithTextAndBadge.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  isExpanded: PropTypes.bool,
  text: PropTypes.string,
  title: PropTypes.string,
  srcImg: PropTypes.string,
  widthImg: PropTypes.number,
  heightImg: PropTypes.number,
  altImg: PropTypes.string,
  notifications: PropTypes.number,
}

ButtonImageWithTextAndBadge.defaultProps = {
  children: 'Toggle button',
  onClick: () => {},
}

export default ButtonImageWithTextAndBadge
