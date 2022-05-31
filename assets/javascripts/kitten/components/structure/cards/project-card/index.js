import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import deprecated from 'prop-types-extra/lib/deprecated'

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
  topLine,
  topLineAlign,
  overlayText,
  hoverableTitle,
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
          'k-ProjectCard--hoverableTitle': hoverableTitle,
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
        {!!overlayText && (
          <div className="k-ProjectCard__image__overlay">{overlayText}</div>
        )}
      </div>

      {topLine && (
        <div
          className={classNames(
            'k-ProjectCard__topLine',
            `k-ProjectCard__topLine--${topLineAlign}`,
          )}
        >
          {topLine}
        </div>
      )}

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
  topLine: null,
  topLineAlign: 'right',
  overlayText: '',
  hoverableTitle: false,
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
  topLine: PropTypes.node,
  topLineAlign: PropTypes.oneOf(['left', 'center', 'right']),
  overlayText: PropTypes.node,
  hoverableTitle: PropTypes.bool,
}

ProjectCard.Title = ({ className, style, ...props }) => {
  return (
    <Title
      modifier="septenary"
      noMargin
      className={classNames('k-ProjectCard__title', 'k-u-clamp-2', className)}
      {...props}
    />
  )
}

ProjectCard.Line = ({ className, lastLine, ...props }) => {
  return (
    <div
      className={classNames('k-ProjectCard__line', className, {
        'k-ProjectCard__line--lastLine': lastLine,
      })}
      {...props}
    />
  )
}

ProjectCard.ItemsLine = ({ className, noMargin = false, ...props }) => {
  return (
    <div
      className={classNames('k-ProjectCard__itemsLine', className, {
        'k-ProjectCard__itemsLine--noMargin': noMargin,
      })}
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

ProjectCard.Avatar = ({ className, imageProps, ...props }) => {
  return (
    <div className={classNames('k-ProjectCard__avatar', className)} {...props}>
      <img alt="" {...imageProps} />
    </div>
  )
}

ProjectCard.Progress = ({ className, value, ...props }) => {
  return (
    <div className={classNames('k-ProjectCard__progress', className)}>
      <Progress value={value} {...props} />
      <Text
        weight="700"
        size="small"
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
