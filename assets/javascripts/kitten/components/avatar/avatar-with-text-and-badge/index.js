import React from 'react'
import PropTypes from 'prop-types'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'

const textClassName = [
  'k-ButtonImageWithText__text',
  'k-ButtonImageWithText__text--withoutPaddingRight',
  'always-visible',
].join(' ')

export const AvatarWithTextAndBadge = ({
  imageProps: {
    src,
    height = pxToRem(40),
    width = pxToRem(40),
    text,
    textColor = COLORS.background1,
    backgroundColor = COLORS.primary3,
    alt,
  },
  notifications,
  badgeColor,
  text: mainText,
  subText,
}) => {
  return (
    <div className="k-ButtonImageWithText">
      <span className="k-ButtonWithBadge">
        <span className="k-ButtonImage">
          {src ? (
            <img
              className="k-ButtonImage__img"
              src={src}
              width={width}
              height={height}
              alt={alt}
            />
          ) : (
            <span
              style={{
                color: textColor,
                backgroundColor: backgroundColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: width,
                height: height,
              }}
            >
              {text}
            </span>
          )}
        </span>

        {!!notifications && (
          <span
            className="k-ButtonWithBadge__badge k-Badge"
            style={{ backgroundColor: badgeColor }}
          >
            {notifications}
          </span>
        )}
      </span>
      <span className={textClassName}>
        {mainText}
        {subText && (
          <>
            <br />
            {subText}
          </>
        )}
      </span>
    </div>
  )
}

AvatarWithTextAndBadge.propTypes = {
  imageProps: PropTypes.shape({
    src: PropTypes.string,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    text: PropTypes.node,
    textColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    alt: PropTypes.string,
  }),
  notifications: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  badgeColor: PropTypes.string,
  text: PropTypes.node,
  subText: PropTypes.node,
}

AvatarWithTextAndBadge.defaultProps = {
  badgeColor: COLORS.primary1,
  imageProps: {
    height: pxToRem(40),
    width: pxToRem(40),
    textColor: COLORS.background1,
    backgroundColor: COLORS.primary3,
  },
}
