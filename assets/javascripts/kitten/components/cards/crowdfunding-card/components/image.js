import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../../../components/typography/text'
import { ButtonImage } from '../../../../components/buttons/button-image'
import COLORS from '../../../../constants/colors-config'

class Image extends PureComponent {
  static propTypes = {
    imageProps: PropTypes.shape({
      backgroundColor: PropTypes.string,
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
    avatarProps: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
    ownerTitle: PropTypes.string,
    ownerDescription: PropTypes.string,
    loading: PropTypes.bool,
    imageContainerBackground: PropTypes.string,
  }

  static defaultProps = {
    imageProps: {
      backgroundColor: COLORS.line2,
      src: 'https://placehold.it/160x100/caf4fe/caf4fe',
      alt: '',
    },
    avatarProps: {
      src: 'https://placehold.it/100x100/caf4fe/caf4fe',
      alt: '',
    },
    ownerTitle: '',
    ownerDescription: '',
    loading: false,
    imageContainerBackground: '',
  }

  render() {
    const {
      imageContainerBackground,
      imageProps: { backgroundColor, alt, ...otherImageProps },
      avatarProps,
      ownerDescription,
      ownerTitle,
      loading,
    } = this.props

    return (
      <div className="k-CrowdfundingCard__image">
        <div
          className="k-CrowdfundingCard__image__imageContainer"
          style={{ backgroundColor: imageContainerBackground }}
        >
          {!loading && (
            <img
              {...otherImageProps}
              alt={alt || ''}
              className="k-Card__image"
              style={{ backgroundColor: backgroundColor }}
            />
          )}
        </div>

        <div className="k-CrowdfundingCard__image__ownerContainer">
          <div className="k-u-margin-top-single">
            <ButtonImage
              className="k-CrowdfundingCard__image__avatar"
              tag="span"
              img={!loading ? avatarProps : null}
              withoutPointerEvents
            />
          </div>

          <div className="k-CrowdfundingCard__image__owner k-u-margin-top-single">
            <Text
              className="k-CrowdfundingCard__image__title"
              tag="div"
              size="micro"
              weight="regular"
              color="font1"
            >
              {!loading && ownerTitle}
            </Text>

            <Text
              className="k-CrowdfundingCard__image__description"
              tag="div"
              size="micro"
              weight="light"
              color="font1"
            >
              {!loading && ownerDescription}
            </Text>
          </div>
        </div>
      </div>
    )
  }
}

export default Image
