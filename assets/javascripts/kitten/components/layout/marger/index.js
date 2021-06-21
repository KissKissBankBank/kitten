import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ScreenConfig } from '../../../constants/screen-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import isStringANumber from 'is-string-a-number'
import { upcaseFirst } from '../../../helpers/utils/string'

export const Marger = props => {
  const { top, bottom, style, ...others } = props
  const gutter = 10 / TYPOGRAPHY.root

  const marginSize = value => `${value * gutter}rem`

  const valueIsNumber = value => {
    // Retro-compatibility: this handles the case when the user enters `.5` as a
    // value for a margin.
    if (typeof value === 'string' && value.match(/^-?\.\d+$/)) {
      return true
    }

    return isStringANumber(String(value))
  }

  const propIsNumber = propName => valueIsNumber(props[propName])

  const isSetValue = value => value || value === 0

  const isPropWithViewportRange = (propName, viewportRange) =>
    props[propName] && props[propName][`from${upcaseFirst(viewportRange)}`]

  const viewportRangeCssRule = viewportRange =>
    `@media (min-width: ${ScreenConfig[viewportRange.toUpperCase()].min}px)`

  const propCssDeclarationForViewportRange = (propName, viewportRange) => {
    const size = props[propName][`from${upcaseFirst(viewportRange)}`]

    if (!isSetValue(size)) return

    return `margin-${propName}: ${marginSize(size)};`
  }

  const viewportRangeStyleCondition = (propName, viewportRange) => {
    const hasValue = isPropWithViewportRange(propName, viewportRange)

    if (!isSetValue(hasValue)) return

    const returnedViewportRangeCssRule = viewportRangeCssRule(viewportRange)
    const viewportRangeCssValue = propCssDeclarationForViewportRange(
      propName,
      viewportRange,
    )

    if (!viewportRangeCssValue) return

    return `${returnedViewportRangeCssRule} { ${viewportRangeCssValue} }`
  }

  const hasDefaultProp = propName => props[propName] && props[propName].default

  const hasXxsProp = propName => props[propName] && props[propName].fromXxs

  const defaultValue = propName => {
    if (propIsNumber(propName)) return marginSize(props[propName])
    if (hasDefaultProp(propName)) return marginSize(props[propName].default)
    if (hasXxsProp(propName)) return marginSize(props[propName].fromXxs)
  }

  const stylesForName = propName => {
    const value = defaultValue(propName)
    if (value) return `margin-${propName}: ${defaultValue(propName)};`
  }

  const viewportRanges = Object.keys(ScreenConfig)
    .map(size => size.toLowerCase())
    .filter(size => size !== 'xxs')
  const viewportRangesStyles = viewportRanges.reduce((acc, viewportRange) => {
    return [
      ...acc,
      viewportRangeStyleCondition('top', viewportRange),
      viewportRangeStyleCondition('bottom', viewportRange),
    ]
  }, [])

  const styles = [
    stylesForName('top'),
    stylesForName('bottom'),
    viewportRangesStyles,
    style,
  ]

  return <StyledMarger styles={styles} {...others} />
}

const StyledMarger = styled.div`
  ${props => props.styles}
`

Marger.defaultProps = {
  top: null,
  bottom: null,
}

Marger.propTypes = {
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
