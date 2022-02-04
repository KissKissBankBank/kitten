import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import deprecated from 'prop-types-extra/lib/deprecated'
import Truncate from 'react-truncate'

import { StyledCard } from './styles'
import { Text } from '../../../typography/text'
import { Title } from '../../../typography/title'
import { Progress } from '../../../feedback/progress'
import { GifVideo } from '../../../embed/gif-video'

export const ProjectCard = ({
  children,
  className,
  href,
  imageProps: { backgroundColor, alt, imageClassName, ...otherImageProps },
  status,
  sticker,
  videoSources,
  videoProps,
  stretch,
  loading,
  ...props
}) => {
  return (
    <StyledCard
      as={href ? 'a' : 'div'}
      className={classNames(
        'k-ProjectCard',
        className,
        `k-ProjectCard--${status}`,
        {
          'k-ProjectCard--isStretched': stretch,
          'k-ProjectCard--isLoading': loading,
        },
      )}
      href={href}
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
  stretch: false,
  loading: false,
}

ProjectCard.propTypes = {
  sticker: deprecated(
    PropTypes.node,
    'Please use `ProjectCard.Sticker` instead.',
  ),
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
  stretch: PropTypes.bool,
  loading: PropTypes.bool,
}

ProjectCard.Title = ({ children, className, ...props }) => {
  return (
    <Title
      modifier="septenary"
      noMargin
      className={classNames('k-ProjectCard__title', className)}
      {...props}
    >
      <Truncate lines={2}>{children}</Truncate>
    </Title>
  )
}

ProjectCard.Line = ({ className, ...props }) => {
  return (
    <div className={classNames('k-ProjectCard__line', className)} {...props} />
  )
}

ProjectCard.ItemsLine = ({ className, ...props }) => {
  return (
    <div
      className={classNames('k-ProjectCard__itemsLine', className)}
      {...props}
    />
  )
}

ProjectCard.Item = ({ className, ...props }) => {
  return (
    <div className={classNames('k-ProjectCard__item', className)} {...props} />
  )
}

ProjectCard.Sticker = ({ className, ...props }) => {
  return (
    <div
      className={classNames('k-ProjectCard__sticker k-u-ellipsis', className)}
      {...props}
    />
  )
}

ProjectCard.Progress = ({ className, value, ...props }) => {
  return (
    <div className={classNames('k-ProjectCard__progress', className)}>
      <Progress value={value} {...props} />
      <Text
        weight="bold"
        size="tiny"
        lineHeight="1"
        className="k-u-hidden@xs-down k-ProjectCard__progress__text"
      >
        {value}&nbsp;%
      </Text>
    </div>
  )
}

ProjectCard.Progress.defaultProps = {
  value: 0,
}

ProjectCard.Progress.propTypes = {
  value: PropTypes.number,
}
