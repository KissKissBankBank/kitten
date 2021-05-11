import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../../../components/atoms/typography/text'
import { ButtonImage } from '../../../../components/buttons/button-image'
import COLORS from '../../../../constants/colors-config'
import classNames from 'classnames'
import { GifVideo } from '../../../../components/atoms/video/gif-video'

const Image = ({
  imageContainerBackground,
  imageProps: { backgroundColor, alt, ...otherImageProps },
  videoProps,
  videoSources,
  avatarProps,
  ownerDescription,
  ownerTitle,
  loading,
}) => (
  <div className="k-CrowdfundingCard__image">
    <div
      className="k-CrowdfundingCard__image__imageContainer"
      style={
        imageContainerBackground
          ? { backgroundColor: imageContainerBackground }
          : null
      }
    >
      {!loading && videoSources.length == 0 && (
        <img
          {...otherImageProps}
          alt={alt || ''}
          className={classNames(
            'k-CrowdfundingCard__image__image',
            otherImageProps.className,
          )}
          style={
            backgroundColor
              ? {
                  backgroundColor: backgroundColor,
                  ...otherImageProps.style,
                }
              : otherImageProps.style
          }
        />
      )}
      {!loading && videoSources.length > 0 && (
        <GifVideo
          poster={otherImageProps.src}
          {...videoProps}
          className={classNames(
            'k-CrowdfundingCard__image__image',
            videoProps.className,
          )}
          style={
            backgroundColor
              ? {
                  backgroundColor: backgroundColor,
                  ...videoProps.style,
                }
              : videoProps.style
          }
        >
          {videoSources.map(sourceProps => (
            <source key={`video_source_${sourceProps.src}`} {...sourceProps} />
          ))}
        </GifVideo>
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
  videoProps: PropTypes.object,
  videoSources: PropTypes.arrayOf(
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
  videoProps: {},
  videoSources: [],
}

export default Image
