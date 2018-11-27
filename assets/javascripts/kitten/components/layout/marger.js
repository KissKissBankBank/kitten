import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { ScreenConfig } from 'kitten/constants/screen-config'
import TYPOGRAPHY from 'kitten/constants/typography-config'
import isStringANumber from 'is-string-a-number'
import { upcaseFirst } from 'kitten/helpers/utils/string'

const viewportRanges = ['xxs', 'xs', 's', 'm', 'l', 'xl']

export class MargerBase extends Component {
  static propTypes = {
    top: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.shape({
        xxs: PropTypes.number,
        xs: PropTypes.number,
        s: PropTypes.number,
        m: PropTypes.number,
        l: PropTypes.number,
        xl: PropTypes.number,
      }),
    ]),
    bottom: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.shape({
        xxs: PropTypes.number,
        xs: PropTypes.number,
        s: PropTypes.number,
        m: PropTypes.number,
        l: PropTypes.number,
        xl: PropTypes.number,
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
    this.props[propName] && this.props[propName][viewportRange]
  viewportRangeCssRule = viewportRange =>
    `@media (max-width: ${ScreenConfig[viewportRange.toUpperCase()].max}px)`
  propCssDeclarationForViewportRange = (propName, viewportRange) => {
    const size = this.props[propName][viewportRange]
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

  render() {
    const { top, bottom, style, ...others } = this.props
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
      ...viewportRangesStyles,
    ]

    return (
      <StyleRoot>
        <div style={styles} {...others} />
      </StyleRoot>
    )
  }
}

class WrappedMarger extends Component {
  render() {
    return (
      <StyleRoot>
        <MargerBase {...this.props} />
      </StyleRoot>
    )
  }
}

export const Marger = Radium(WrappedMarger)
