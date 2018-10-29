import React, { Component } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { pxToRem } from 'kitten/helpers/utils/typography'

class RewardCardRowSideBase extends Component {
  static propTypes = {
    style: PropTypes.object,
    children: PropTypes.node,
  }

  static defaultProps = {
    style: {},
    children: '',
  }

  render() {
    const { children, style } = this.props
    const rowSideStyles = [styles, style]

    return <div style={rowSideStyles}>{children}</div>
  }
}

const styles = {
  flexGrow: 1,
  flexBasis: pxToRem(190), // based on image max-width
  margin: pxToRem(15),
}

export const RewardCardRowSide = Radium(RewardCardRowSideBase)
