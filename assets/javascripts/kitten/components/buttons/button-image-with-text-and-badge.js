import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import COLORS from '../../constants/colors-config'

const NotificationBadge = ({ notifications, badgeColor }) => (
  <span
    className="k-ButtonWithBadge__badge k-Badge"
    style={{ backgroundColor: badgeColor }}
  >
    {notifications}
  </span>
)

export class ButtonImageWithTextAndBadge extends React.Component {
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
      badgeColor,
      ...rest
    } = this.props

    const textClass = classNames(
      'k-ButtonImageWithText__text',
      'k-ButtonImageWithText__text--withoutPaddingRight',
      textClassName,
    )
    let buttonClassName = classNames('k-ButtonImageWithText', className)

    return (
      <button
        className={buttonClassName}
        aria-haspopup="true"
        aria-expanded={isExpanded}
        title={title}
        {...rest}
      >
        <span className="k-ButtonWithBadge">
          <span ref="buttonImage" className="k-ButtonImage">
            <img
              className="k-ButtonImage__img"
              src={srcImg}
              width={widthImg}
              height={heightImg}
              alt={altImg}
            />
          </span>
          {notifications && (
            <NotificationBadge
              notifications={notifications}
              badgeColor={badgeColor}
            />
          )}
        </span>
        <p className={textClass}>{text}</p>
      </button>
    )
  }
}

ButtonImageWithTextAndBadge.propTypes = {
  onClick: PropTypes.func,
  isExpanded: PropTypes.bool,
  text: PropTypes.string,
  title: PropTypes.string,
  srcImg: PropTypes.string,
  widthImg: PropTypes.number,
  heightImg: PropTypes.number,
  altImg: PropTypes.string,
  notifications: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  badgeColor: PropTypes.string,
}

ButtonImageWithTextAndBadge.defaultProps = {
  onClick: () => {},
  badgeColor: COLORS.primary1,
}

// DEPRECATED: do not use default export.
export default ButtonImageWithTextAndBadge
