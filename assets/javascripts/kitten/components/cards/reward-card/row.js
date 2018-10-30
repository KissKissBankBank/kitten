import React, { Component } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { pxToRem } from 'kitten/helpers/utils/typography'

class RewardCardRowBase extends Component {
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

    if (!children) return null

    const rowStyles = [styles, style]

    return <div style={rowStyles}>{children}</div>
  }
}

const styles = {
  display: 'flex',
  flexWrap: 'wrap',
  padding: `0 ${pxToRem(15)}`,
}

export const RewardCardRow = Radium(RewardCardRowBase)
