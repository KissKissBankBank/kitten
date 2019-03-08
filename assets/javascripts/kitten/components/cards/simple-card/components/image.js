import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text } from '../../../../components/typography/text'
import { Marger } from '../../../../components/layout/marger'
import { pxToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'

const ImageStyle = styled.img`
  width: 100%;
  display: block;
`
const playerButtonSize = pxToRem(70)

const PlayerButtonStyle = styled.div`
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

const PlayerStyle = styled.div`
  position: relative;
  transition: opacity ease 600ms, z-index ease 600ms;
  z-index: 1;
`

export class Image extends PureComponent {
  render() {
    const {
      imageProps,
      withPlayerButtonOnImage,
      arrowColor,
      ariaLabel,
    } = this.props

    const PlayerButtonOnImage = props => (
      <PlayerButtonStyle>
        <Text
          size="default"
          weight="regular"
          color={props.arrowColor}
          aria-label={props.ariaLabel}
        >
          ►
        </Text>
      </PlayerButtonStyle>
    )

    return (
      <Marger bottom="2" className="k-Card__imageContainer">
        <PlayerStyle>
          {withPlayerButtonOnImage && (
            <PlayerButtonOnImage
              arrowColor={arrowColor}
              ariaLabel={ariaLabel}
            />
          )}
          <ImageStyle
            {...imageProps}
            alt={imageProps.alt || ''}
            className="k-Card__image"
          />
        </PlayerStyle>
      </Marger>
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
}

Image.defaultProps = {
  imageProps: {
    src: 'https://placehold.it/200x200/caf4fe/caf4fe',
    alt: '',
  },
  withPlayerButtonOnImage: false,
  ariaLabel: null,
  arrowColor: COLORS.background1,
  href: '#',
}
