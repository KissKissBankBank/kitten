import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Title } from 'kitten/components/typography/title'
import { HorizontalStroke } from 'kitten/components/layout/horizontal-stroke'
import { Marger } from 'kitten/components/layout/marger'
import COLORS from 'kitten/constants/colors-config'

export class RewardCardTitle extends Component {
  static propTypes = {
    children: PropTypes.string,
    tagName: PropTypes.string,
  }

  static defaultProps = {
    children: '',
    tagName: 'h6',
  }

  render() {
    const { children, tagName } = this.props

    return (
      <Fragment>
        <Marger bottom="2">
          <Title
            modifier="quaternary"
            italic
            margin={false}
            tag={tagName}
            style={{ color: COLORS.font1 }}
          >
            {children}
          </Title>
        </Marger>
        <HorizontalStroke size="big" />
      </Fragment>
    )
  }
}
