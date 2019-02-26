import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScreenConfig } from '../../../constants/screen-config'
import isStringANumber from 'is-string-a-number'
import { upcaseFirst } from '../../../helpers/utils/string'

export class ResponsiveImage extends Component {
  static propTypes = {
    fromXxs: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fromXs: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fromS: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fromM: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fromL: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fromXl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isResponsive: PropTypes.boolean,
    pictureProps: PropTypes.object,
    ratio: 0,
  }

  static defaultProps = {
    fromXxs: 350,
    isResponsive: false,
    pictureProps: {},
  }

  constructor(props) {
    super(props)
  }

  // This urlBuilder is only temporary
  // TODO : get Tumbor on Kitten
  urlBuilder = (path, { width = 0, height = 0, filters = [] }) => {
    const chainedFilters = filters.reduce((acc, filter, index, array) => {
      if (index === array.length - 1) return `${acc}${filter}`
      return `${acc}${filter}:`
    }, '')
    return `http://localhost:8169/unsafe/${width}x${height}/filters:${chainedFilters}/host.docker.internal:3000${path}`
  }
  // End of temporary block

  propIsNumber = propName => this.valueIsNumber(this.props[propName])

  isSetValue = value => value || value === 0

  isPropWithViewportRange = viewportRange =>
    this.props && this.props[`from${upcaseFirst(viewportRange)}`]

  viewportRangeMediaQuery = viewportRange =>
    `(min-width: ${ScreenConfig[viewportRange.toUpperCase()].min}px)`

  getSrcSetForMediaQuery = (viewportRange, mimeType) => {
    const size = this.props[`from${upcaseFirst(viewportRange)}`]

    if (!this.isSetValue(size)) return

    let image1x = this.urlBuilder(this.props.src, {
      width: size,
      height: this.props.ratio && size * this.props.ratio,
      filters: ['quality(90)', `format(${mimeType})`],
    })

    let image2x = this.urlBuilder(this.props.src, {
      width: size * 2,
      height: this.props.ratio && size * 2 * this.props.ratio,
      filters: ['quality(60)', `format(${mimeType})`],
    })

    return `${image1x}, ${image2x} 2x`
  }

  viewportRangeSourcesCondition = (viewportRange, mimeType) => {
    const hasValue = this.isPropWithViewportRange(viewportRange)
    if (!this.isSetValue(hasValue)) return

    const viewportRangeMediaQuery = this.viewportRangeMediaQuery(viewportRange)
    const viewportRangeSrcSet = this.getSrcSetForMediaQuery(
      viewportRange,
      mimeType,
    )

    if (!viewportRangeSrcSet) return

    return { viewportRangeMediaQuery, viewportRangeSrcSet, mimeType }
  }

  getDefaultSrcSet = imageUrl =>
    this.urlBuilder(imageUrl, {
      width: this.props.fromXxs,
      height: this.props.ratio && this.props.fromXxs * this.props.ratio,
      filters: ['quality(90)'],
    })

  render() {
    const {
      src,
      fromXxs,
      fromXs,
      fromS,
      fromM,
      fromL,
      fromXl,
      pictureProps,
      isResponsive,
      ratio,
      ...others
    } = this.props

    if (!isResponsive) {
      return <img src={src} {...others} />
    }

    const viewportRanges = Object.keys(ScreenConfig)
      .map(size => size.toLowerCase())
      .filter(size => size !== 'xxs')
      .reverse()

    const viewportRangesSources = viewportRanges.reduce(
      (acc, viewportRange) => {
        return [
          ...acc,
          this.viewportRangeSourcesCondition(viewportRange, 'webp'),
          this.viewportRangeSourcesCondition(viewportRange, 'jpeg'),
        ]
      },
      [],
    )

    return (
      <picture {...pictureProps}>
        {viewportRangesSources.map(
          index =>
            index && (
              <source
                key={index.viewportRangeSrcSet}
                type={`image/${index.mimeType}`}
                media={index.viewportRangeMediaQuery}
                srcSet={index.viewportRangeSrcSet}
              />
            ),
        )}
        <img src={this.getDefaultSrcSet(src)} {...others} />
      </picture>
    )
  }
}
