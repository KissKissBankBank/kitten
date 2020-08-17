import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../../../components/typography/text'
import { ButtonImage } from '../../../../components/buttons/button-image'
import COLORS from '../../../../constants/colors-config'

const Image = ({
  imageContainerBackground,
  imageProps: { backgroundColor, alt, ...otherImageProps },
  videoProps,
  avatarProps,
  ownerDescription,
  ownerTitle,
  loading,
}) => (
  <div className="k-CrowdfundingCard__image">
    <div
      className="k-CrowdfundingCard__image__imageContainer"
      style={{ backgroundColor: imageContainerBackground }}
    >
      {!loading && videoProps.length == 0 && (
        <img
          {...otherImageProps}
          alt={alt || ''}
          className="k-Card__image k-CrowdfundingCard__image__image"
          style={{ backgroundColor: backgroundColor }}
        />
      )}
      {!loading && videoProps.length > 0 && (
        <video
          autoPlay
          loop
          muted
          poster={otherImageProps.src}
          className="k-Card__image k-CrowdfundingCard__image__image"
          style={{ backgroundColor: backgroundColor }}
        >
          {videoProps.map(sourceProps => (
            <source {...sourceProps} />
          ))}
        </video>
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

Image.propTypes = {
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
  videoProps: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      type: PropTypes.string,
    }),
  ),
}

Image.defaultProps = {
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
  videoProps: [],
}

export default Image
