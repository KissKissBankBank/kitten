import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { StyledCard } from './styles'
import { Text } from '../../../../components/atoms/typography/text'
import { Title } from '../../../../components/atoms/typography/title'
import { Progress } from '../../../../components/atoms/progress'
import { GifVideo } from '../../../../components/atoms/video/gif-video'

export const ProjectCard = ({
  children,
  className,
  href,
  imageProps: { backgroundColor, alt, imageClassName, ...otherImageProps },
  status,
  sticker,
  videoSources,
  videoProps,
  ...props
}) => {
  return (
    <StyledCard
      as={href ? 'a' : 'div'}
      className={classNames(
        'k-ProjectCard',
        className,
        `k-ProjectCard--${status}`,
      )}
      {...props}
    >
      <div className="k-ProjectCard__image">
        {videoSources.length == 0 && (
          <img
            {...otherImageProps}
            alt={alt || ''}
            className={classNames(
              'k-ProjectCard__image__image',
              imageClassName,
            )}
          />
        )}
        {videoSources.length > 0 && (
          <GifVideo
            poster={otherImageProps.src}
            {...videoProps}
            className={classNames(
              'k-ProjectCard__image__image',
              videoProps.className,
            )}
          >
            {videoSources.map(sourceProps => (
              <source
                key={`video_source_${sourceProps.src}`}
                {...sourceProps}
              />
            ))}
          </GifVideo>
        )}
      </div>

      <div className="k-ProjectCard__content">
        {sticker && (
          <div className="k-ProjectCard__sticker k-u-ellipsis">{sticker}</div>
        )}
        {children}
      </div>
    </StyledCard>
  )
}

ProjectCard.defaultProps = {
  status: 'normal',
  imageProps: {
    src: '',
    alt: '',
  },
  videoProps: {},
  videoSources: [],
}

ProjectCard.propTypes = {
  status: PropTypes.oneOf([
    'normal',
    'danger',
    'warning',
    'success',
    'disabled',
  ]),
  imageProps: PropTypes.object,
  videoProps: PropTypes.object,
  videoSources: PropTypes.array,
}

ProjectCard.Title = ({ className, ...props }) => {
  return (
    <Title
      modifier="senary"
      noMargin
      className={classNames('k-ProjectCard__title', className)}
      {...props}
    />
  )
}

ProjectCard.Line = ({ className, ...props }) => {
  return (
    <div className={classNames('k-ProjectCard__line', className)} {...props} />
  )
}

ProjectCard.Item = ({ className, ...props }) => {
  return (
    <div className={classNames('k-ProjectCard__item', className)} {...props} />
  )
}

ProjectCard.Progress = ({ className, value, ...props }) => {
  return (
    <div
      className={classNames('k-ProjectCard__progress', className)}
      {...props}
    >
      <Progress variant="andromeda" value={value} {...props} />
      <Text weight="bold" size="tiny" lineHeight="1">
        {value}&nbsp;%
      </Text>
    </div>
  )
}
