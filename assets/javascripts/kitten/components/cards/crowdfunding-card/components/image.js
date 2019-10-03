import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { card } from '../../../../hoc/card'
import COLORS from '../../../../constants/colors-config'
import { ButtonImage } from '../../../../components/buttons/button-image'
import { pxToRem } from '../../../../helpers/utils/typography'
import { Text } from '../../../../components/typography/text'

const COMPONENT_GUTTER = pxToRem(10)

const StyledImageContainer = styled.div`
  position: relative;
  transition: opacity ease 600ms, z-index ease 600ms;
  padding-top: ${(9 / 16) * 100}%;
  background-color: ${({ imageContainerBackground }) =>
    imageContainerBackground};

  ${({ loading }) =>
    loading &&
    css`
      overflow: hidden;
      background-color: ${COLORS.line2};
    `}

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

const StyledImage = styled.img`
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  text-align: center;
`

const StyledContainerAvatar = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  top: 0;
  margin-top: ${pxToRem(-30)};
  background-color: ${COLORS.background1};
`
const StyledAvatar = styled(ButtonImage)`
  margin-left: ${COMPONENT_GUTTER};
  background-color: ${COLORS.line2};
`

const StyledOwner = styled.div`
  margin-left: ${COMPONENT_GUTTER};
  margin-right: calc(2 * calc(${COMPONENT_GUTTER}));
  line-height: 1.2;
`

const StyledTitle = styled(Text)`
  ${({ loading }) =>
    loading &&
    css`
      background-color: ${COLORS.line2};
      border-bottom: ${pxToRem(1)} solid ${COLORS.background1};
      width: ${pxToRem(70)};
      height: ${pxToRem(14)};
    `}
`

const StyledDescription = styled(Text)`
  ${({ loading }) =>
    loading &&
    css`
      background-color: ${COLORS.line2};
      border-top: ${pxToRem(1)} solid ${COLORS.background1};
      width: ${pxToRem(100)};
      height: ${pxToRem(14)};
    `}
`

class Image extends PureComponent {
  static propTypes = {
    imageProps: PropTypes.shape({
      backgroundColor: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
    avatarProps: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
    ownerTitle: PropTypes.string,
    ownerDescription: PropTypes.string,
    state: PropTypes.string,
    loading: PropTypes.bool,
  }

  static defaultProps = {
    imageProps: {
      backgroundColor: COLORS.line2,
      src: 'https://placehold.it/350x200/caf4fe/caf4fe',
      alt: '',
    },
    avatarProps: {
      src: 'https://placehold.it/100x100/caf4fe/caf4fe',
      alt: '',
    },
    ownerTitle: '',
    ownerDescription: '',
    loading: false,
  }

  render() {
    const {
      imageContainerBackground,
      imageContainerRatio,
      imageProps,
      avatarProps,
      ownerDescription,
      ownerTitle,
      loading,
    } = this.props

    return (
      <>
        <StyledImageContainer
          className="k-Card__imageContainer"
          imageContainerBackground={imageContainerBackground}
          imageContainerRatio={imageContainerRatio}
        >
          {!loading && (
            <StyledImage
              {...imageProps}
              alt={imageProps.alt || ''}
              className="k-Card__image"
            />
          )}
        </StyledImageContainer>

        <StyledContainerAvatar>
          <div className="k-u-margin-bottom-single k-u-margin-top-single">
            <StyledAvatar
              tag="span"
              img={!loading && avatarProps}
              withoutPointerEvents
            />
          </div>

          <StyledOwner>
            <StyledTitle tag="div" size="micro" weight="regular">
              {!loading && ownerTitle}
            </StyledTitle>

            <StyledDescription tag="div" size="micro" weight="light">
              {!loading && ownerDescription}
            </StyledDescription>
          </StyledOwner>
        </StyledContainerAvatar>
      </>
    )
  }
}

export default Image
