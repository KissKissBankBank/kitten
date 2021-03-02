import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import { Text } from '../../../../components/typography/text'
import { Marger } from '../../../../components/layout/marger'
import { pxToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'

const playerButtonSize = pxToRem(70)

const StyledImageContainer = styled(Marger)`
  position: relative;
  transition: opacity ease 600ms, z-index ease 600ms;
  z-index: 1;

  background-color: ${({ imageContainerBackground }) =>
    imageContainerBackground};

  &.k-Card__imageContainer--ratio {
    overflow: hidden;
    position: relative;
    padding-top: calc(100% / calc(${imageContainerRatio}));

    & > img {
      position: absolute;
      top: 0;
      height: auto;
      text-align: center;
    }
  }

  .k-Card__image {
    width: 100%;
    display: block;
  }

  .k-card__playerButton {
    width: ${playerButtonSize};
    height: ${playerButtonSize};
    background: ${COLORS.font1};
    position: absolute;
    top: calc(50% - ${playerButtonSize} / 2);
    left: calc(50% - ${playerButtonSize} / 2);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
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
}) => {

  const PlayerButtonOnImage = () => (
    <div className="k-card__playerButton">
      <Text
        size="default"
        weight="regular"
        color={arrowColor}
        aria-label={ariaLabel}
      >
        ►
      </Text>
    </div>
  )

  return (
    <StyledImageContainer
      bottom="2"
      className={classNames(
        "k-Card__imageContainer",
        className,
        {
          'k-Card__imageContainer--ratio' : imageContainerRatio,
          'k-Card__imageContainer--background' : imageContainerBackground,
        },
      )}
    >
      {withPlayerButtonOnImage && (
        <PlayerButtonOnImage arrowColor={arrowColor} ariaLabel={ariaLabel} />
      )}
      <img
        {...imageProps}
        alt={imageProps.alt || ''}
        className={classNames(
          "k-Card__image",
          className,
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
}
