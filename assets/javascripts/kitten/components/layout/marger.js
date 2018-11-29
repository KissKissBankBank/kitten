import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { ScreenConfig } from 'kitten/constants/screen-config'
import TYPOGRAPHY from 'kitten/constants/typography-config'
import isStringANumber from 'is-string-a-number'
import { upcaseFirst } from 'kitten/helpers/utils/string'

export class MargerBase extends Component {
  static propTypes = {
    top: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.shape({
        default: PropTypes.number,
        fromXxs: PropTypes.number,
        frommXs: PropTypes.number,
        fromS: PropTypes.number,
        fromM: PropTypes.number,
        fromL: PropTypes.number,
        fromXl: PropTypes.number,
      }),
    ]),
    bottom: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.shape({
        default: PropTypes.number,
        fromXxs: PropTypes.number,
        frommXs: PropTypes.number,
        fromS: PropTypes.number,
        fromM: PropTypes.number,
        fromL: PropTypes.number,
        fromXl: PropTypes.number,
      }),
    ]),
  }

  static defaultProps = {
    top: null,
    bottom: null,
  }

  constructor(props) {
    super(props)

    // Use 10px as gutter base and transform it to have a rem unit.
    this.gutter = 10 / TYPOGRAPHY.root
  }

  marginSize = value => `${value * this.gutter}rem`
  valueIsNumber = value => {
    // Retro-compatibility: this handles the case when the user enters `.5` as a
    // value for a margin.
    if (typeof value === 'string' && value.match(/^\./)) {
      return isStringANumber(`0${value}`)
    }

    return isStringANumber(String(value))
  }

  propIsNumber = propName => this.valueIsNumber(this.props[propName])
  isPropWithViewportRange = (propName, viewportRange) =>
    this.props[propName] &&
    this.props[propName][`from${upcaseFirst(viewportRange)}`]
  viewportRangeCssRule = viewportRange =>
    `@media (min-width: ${ScreenConfig[viewportRange.toUpperCase()].min}px)`
  propCssDeclarationForViewportRange = (propName, viewportRange) => {
    const size = this.props[propName][`from${upcaseFirst(viewportRange)}`]
    const cssRule = `margin${upcaseFirst(propName)}`

    return { [cssRule]: this.marginSize(size) }
  }

  viewportRangeStyleCondition = (propName, viewportRange) => {
    const hasValue = this.isPropWithViewportRange(propName, viewportRange)

    if (!hasValue) return null

    const viewportRangeCssRule = this.viewportRangeCssRule(viewportRange)
    const viewportRangeCssValue = this.propCssDeclarationForViewportRange(
      propName,
      viewportRange,
    )

    return { [viewportRangeCssRule]: viewportRangeCssValue }
  }

  hasDefaultProp = propName =>
    this.props[propName] && this.props[propName].default

  hasXxsProp = propName => this.props[propName] && this.props[propName].fromXxs

  defaultProp = propName => {
    const cssRule = `margin${upcaseFirst(propName)}`

    if (this.hasDefaultProp(propName)) {
      return { [cssRule]: this.marginSize(this.props[propName].default) }
    }

    if (this.hasXxsProp(propName)) {
      return { [cssRule]: this.marginSize(this.props[propName].fromXxs) }
    }
  }

  render() {
    const { top, bottom, style, ...others } = this.props
    const viewportRanges = Object.keys(ScreenConfig)
      .map(size => size.toLowerCase())
      .filter(size => size !== 'xxs')
    const viewportRangesStyles = viewportRanges.reduce((acc, viewportRange) => {
      return [
        ...acc,
        this.viewportRangeStyleCondition('top', viewportRange),
        this.viewportRangeStyleCondition('bottom', viewportRange),
      ]
    }, [])

    const styles = [
      style,
      this.propIsNumber('top') && { marginTop: this.marginSize(top) },
      this.propIsNumber('bottom') && { marginBottom: this.marginSize(bottom) },
      this.defaultProp('top'),
      this.defaultProp('bottom'),
      ...viewportRangesStyles,
    ]

    return (
      <StyleRoot>
        <div style={styles} {...others} />
      </StyleRoot>
    )
  }
}

export class Marger extends Component {
  render() {
    return (
      <StyleRoot>
        <MargerBase {...this.props} />
      </StyleRoot>
    )
  }
}
