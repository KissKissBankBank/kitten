import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Text } from '../../../../components/typography/text'
import { pxToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'

export const Image = ({
  imageProps,
  withPlayerButtonOnImage,
  arrowColor,
  ariaLabel,
  imageContainerBackground,
  imageContainerRatio,
  className,
  playerButtonSize,
  style,
}) => {
  return (
    <div
      className={classNames('k-SimpleCard__imageContainer', className, {
        'k-SimpleCard__imageContainer--ratio': imageContainerRatio,
      })}
      style={{
        ...style,
        '--SimpleCard-image-container-background': imageContainerBackground,
        '--SimpleCard-image-container-ratio': imageContainerRatio,
      }}
    >
      {withPlayerButtonOnImage && (
        <div
          className="k-SimpleCard__playerButton"
          style={{
            '--SimpleCard-player-button-size': pxToRem(playerButtonSize),
          }}
        >
          <Text
            size="default"
            weight="regular"
            color={arrowColor}
            aria-label={ariaLabel}
          >
            ►
          </Text>
        </div>
      )}

      <img
        {...imageProps}
        alt={imageProps.alt || ''}
        className={classNames('k-SimpleCard__image', imageProps.className)}
      />
    </div>
  )
}

Image.propTypes = {
  imageProps: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
  withPlayerButtonOnImage: PropTypes.bool,
  ariaLabel: PropTypes.string,
  arrowColor: PropTypes.string,
  href: PropTypes.string,
  playerButtonSize: PropTypes.number,
  imageContainerBackground: PropTypes.string,
  imageContainerRatio: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
}

Image.defaultProps = {
  imageProps: {
    src: '',
    alt: '',
  },
  withPlayerButtonOnImage: false,
  arrowColor: 'background1',
  href: '#',
  imageContainerBackground: COLORS.line1,
  playerButtonSize: 70,
}
