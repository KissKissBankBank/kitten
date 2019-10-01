import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { card } from '../../../../hoc/card'
import COLORS from '../../../../constants/colors-config'
import { Marger } from '../../../../components/layout/marger'
import { ButtonImage } from '../../../../components/buttons/button-image'
import { pxToRem } from '../../../../helpers/utils/typography'
import { Text } from '../../../../components/typography/text'

const componentGutter = pxToRem(10)

const StyledImage = styled.img`
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  text-align: center;
`

const StyledImageContainer = styled(Marger)`
  position: relative;
  transition: opacity ease 600ms, z-index ease 600ms;
  padding-top: ${(9 / 16) * 100}%;
  margin-bottom: 0;

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

const StyledContainerAvatar = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  top: 0;
  margin-top: ${pxToRem(-30)};
  background-color: ${COLORS.background1};
`
const StyledAvatar = styled(ButtonImage)`
  margin-left: ${componentGutter};
  background-color: ${COLORS.line2};
`

const StyledOwner = styled.div`
  margin-left: ${componentGutter};
  margin-right: calc(2 * calc(${componentGutter}));
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

const StyledState = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: inline-flex;
  align-items: center;
  background-color: ${COLORS.background1};
  padding: ${componentGutter};
  line-height: 1;
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
    ownerTitle: 'Hello',
    ownerDescription: 'lundi, mardi',
    state: 'Lorem ipsum',
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
      state,
    } = this.props

    return (
      <>
        <StyledImageContainer
          bottom="2"
          className="k-Card__imageContainer"
          imageContainerBackground={imageContainerBackground}
          imageContainerRatio={imageContainerRatio}
        >
          {!loading && (
            <StyledImage {...imageProps} alt={imageProps.alt || ''} />
          )}
        </StyledImageContainer>

        {avatarProps && (
          <StyledContainerAvatar>
            <Marger top="1" bottom="1">
              <StyledAvatar
                tag="span"
                img={!loading && avatarProps}
                withoutPointerEvents
              />
            </Marger>

            <StyledOwner>
              <StyledTitle tag="div" size="micro" weight="regular">
                {!loading && ownerTitle}
              </StyledTitle>

              <StyledDescription tag="div" size="micro" weight="light">
                {!loading && ownerDescription}
              </StyledDescription>
            </StyledOwner>
          </StyledContainerAvatar>
        )}

        {state && !loading && (
          <StyledState>
            <Text size="micro" lineHeight="normal" weight="regular">
              {state}
            </Text>
          </StyledState>
        )}
      </>
    )
  }
}

export default Image
