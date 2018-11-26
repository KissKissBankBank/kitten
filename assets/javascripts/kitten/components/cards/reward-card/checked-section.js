import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { RewardCardCheckedIconLine } from '../../../components/cards/reward-card/checked-icon-line'
import { pxToRem } from '../../../helpers/utils/typography'

export class RewardCardCheckedSection extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children } = this.props

    return (
      <Fragment>
        <RewardCardCheckedIconLine />
        <div style={styles}>{children}</div>
      </Fragment>
    )
  }
}

const styles = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: `0 ${pxToRem(15)}`,
  marginTop: pxToRem(10),
  marginBottom: pxToRem(5),
}
