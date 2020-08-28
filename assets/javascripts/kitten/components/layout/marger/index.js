import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ScreenConfig } from '../../../constants/screen-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import isStringANumber from 'is-string-a-number'
import { upcaseFirst } from '../../../helpers/utils/string'

export class Marger extends Component {
  static propTypes = {
    top: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.shape({
        default: PropTypes.number,
        fromXxs: PropTypes.number,
        fromXs: PropTypes.number,
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
        fromXs: PropTypes.number,
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
    if (typeof value === 'string' && value.match(/^-?\.\d+$/)) {
      return true
    }

    return isStringANumber(String(value))
  }

  propIsNumber = propName => this.valueIsNumber(this.props[propName])

  isSetValue = value => value || value === 0

  isPropWithViewportRange = (propName, viewportRange) =>
    this.props[propName] &&
    this.props[propName][`from${upcaseFirst(viewportRange)}`]

  viewportRangeCssRule = viewportRange =>
    `@media (min-width: ${ScreenConfig[viewportRange.toUpperCase()].min}px)`

  propCssDeclarationForViewportRange = (propName, viewportRange) => {
    const size = this.props[propName][`from${upcaseFirst(viewportRange)}`]

    if (!this.isSetValue(size)) return

    return `margin-${propName}: ${this.marginSize(size)};`
  }

  viewportRangeStyleCondition = (propName, viewportRange) => {
    const hasValue = this.isPropWithViewportRange(propName, viewportRange)

    if (!this.isSetValue(hasValue)) return

    const viewportRangeCssRule = this.viewportRangeCssRule(viewportRange)
    const viewportRangeCssValue = this.propCssDeclarationForViewportRange(
      propName,
      viewportRange,
    )

    if (!viewportRangeCssValue) return

    return `${viewportRangeCssRule} { ${viewportRangeCssValue} }`
  }

  hasDefaultProp = propName =>
    this.props[propName] && this.props[propName].default

  hasXxsProp = propName => this.props[propName] && this.props[propName].fromXxs

  defaultValue = propName => {
    if (this.propIsNumber(propName))
      return this.marginSize(this.props[propName])
    if (this.hasDefaultProp(propName))
      return this.marginSize(this.props[propName].default)
    if (this.hasXxsProp(propName))
      return this.marginSize(this.props[propName].fromXxs)
  }

  stylesForName = propName => {
    const value = this.defaultValue(propName)
    if (value) return `margin-${propName}: ${this.defaultValue(propName)};`
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
      this.stylesForName('top'),
      this.stylesForName('bottom'),
      viewportRangesStyles,
      style,
    ]

    return <StyledMarger styles={styles} {...others} />
  }
}

const StyledMarger = styled.div`
  ${props => props.styles}
`
