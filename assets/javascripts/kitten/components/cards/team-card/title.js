import React, { Component } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { Text } from 'kitten/components/typography/text'
import { Marger } from 'kitten/components/layout/marger'

export class TeamCardTitle extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    subTilte: PropTypes.string.isRequired,
  }

  render() {
    const { children, subTitle } = this.props
    return (
      <Marger top="2" bottom="1.5">
        <Text size="default" weight="bold" color="font1">
          {children}
        </Text>
        <br />
        <Text size="micro" color="font1" weight="light">
          {subTitle}
        </Text>
      </Marger>
    )
  }
}
