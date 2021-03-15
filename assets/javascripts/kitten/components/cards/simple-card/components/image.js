import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import { Text } from '../../../../components/typography/text'
import { Marger } from '../../../../components/layout/marger'
import { pxToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'

const StyledImageContainer = styled(Marger)`
  position: relative;
  transition: opacity ease 600ms, z-index ease 600ms;
  z-index: 1;
  background-color: var(--k-SimpleCard-image-container-background);

  &.k-SimpleCard__imageContainer--ratio {
    overflow: hidden;
    position: relative;
    padding-top: calc(100% / calc(var(--k-SimpleCard-image-container-ratio)));

    & > img {
      position: absolute;
      top: 0;
      height: auto;
      text-align: center;
    }
  }

  .k-SimpleCard__playerButton {
    width: var(--k-SimpleCard-player-button-size);
    height: var(--k-SimpleCard-player-button-size);
    background: ${COLORS.font1};
    position: absolute;
    top: calc(50% - var(--k-SimpleCard-player-button-size) / 2);
    left: calc(50% - var(--k-SimpleCard-player-button-size) / 2);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  .k-SimpleCard__image {
    width: 100%;
    display: block;
  }
`

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
    <StyledImageContainer
      bottom="2"
      className={classNames(
        "k-Card__imageContainer",
        "k-SimpleCard__imageContainer",
        className,
        { 'k-SimpleCard__imageContainer--ratio': imageContainerRatio },
      )}
      style={{
        ...style,
        '--SimpleCard-image-container-background': imageContainerBackground,
        '--k-SimpleCard-image-container-ratio': imageContainerRatio,
      }}
    >
      {withPlayerButtonOnImage && (
        <div
          className="k-SimpleCard__playerButton"
          style={{
            '--k-SimpleCard-player-button-size': pxToRem(playerButtonSize),
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
        className={classNames(
          "k-Card__image",
          "k-SimpleCard__image",
        )}
      />
    </StyledImageContainer>
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
