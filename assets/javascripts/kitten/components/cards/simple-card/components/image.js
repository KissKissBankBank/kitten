import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Text } from '../../../../components/typography/text'
import { Marger } from '../../../../components/layout/marger'
import { pxToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'

const StyledImage = styled.img`
  width: 100%;
  display: block;
`
const playerButtonSize = pxToRem(70)

const StyledPlayerButton = styled.div`
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
`

const StyledImageContainer = styled(Marger)`
  position: relative;
  transition: opacity ease 600ms, z-index ease 600ms;
  z-index: 1;
  background-color: ${({ imageContainerBackground }) =>
    imageContainerBackground};
  ${({ imageContainerRatio }) =>
    imageContainerRatio &&
    css`
      overflow: hidden;
      position: relative;
      padding-top: calc(100% / calc(${imageContainerRatio}));
      & > img {
        position: absolute;
        top: 0;
        height: auto;
        text-align: center;
      }
    `}
`

export class Image extends PureComponent {
  render() {
    const {
      imageProps,
      withPlayerButtonOnImage,
      arrowColor,
      ariaLabel,
      imageContainerBackground,
      imageContainerRatio,
    } = this.props

    const PlayerButtonOnImage = props => (
      <StyledPlayerButton>
        <Text
          size="default"
          weight="regular"
          color={props.arrowColor}
          aria-label={props.ariaLabel}
        >
          ►
        </Text>
      </StyledPlayerButton>
    )

    return (
      <StyledImageContainer
        bottom="2"
        className="k-Card__imageContainer"
        imageContainerBackground={imageContainerBackground}
        imageContainerRatio={imageContainerRatio}
      >
        {withPlayerButtonOnImage && (
          <PlayerButtonOnImage arrowColor={arrowColor} ariaLabel={ariaLabel} />
        )}
        <StyledImage
          {...imageProps}
          alt={imageProps.alt || ''}
          className="k-Card__image"
        />
      </StyledImageContainer>
    )
  }
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
