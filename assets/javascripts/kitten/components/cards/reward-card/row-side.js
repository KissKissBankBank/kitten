import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { pxToRem } from 'kitten/helpers/utils/typography'

export class RewardCardRowSide extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  static defaultProps = {
    children: '',
  }

  render() {
    const { children } = this.props

    return <div style={styles}>{children}</div>
  }
}

const styles = {
  flexGrow: 1,
  flexBasis: pxToRem(190), // based on image max-width
  margin: pxToRem(15),
}
