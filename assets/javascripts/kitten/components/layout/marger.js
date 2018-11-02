import React, { Component } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { ScreenConfig } from 'kitten/constants/screen-config'
import TYPOGRAPHY from 'kitten/constants/typography-config'
import pipe from 'ramda/src/pipe'
import isPlainNumber from 'is-plain-number'

class MargerBase extends Component {
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
      return isPlainNumber(`0${value}`)
    }

    return isPlainNumber(value)
  }

  topIsNumber = () => this.valueIsNumber(this.props.top)
  bottomIsNumber = () => this.valueIsNumber(this.props.bottom)

  render() {
    const { top, bottom, style, ...others } = this.props

    const styles = [
      style,
      this.topIsNumber() && { marginTop: this.marginSize(top) },
      this.bottomIsNumber() && { marginBottom: this.marginSize(bottom) },
    ]

    return <div style={styles} {...others} />
  }
}

export const Marger = Radium(MargerBase)
