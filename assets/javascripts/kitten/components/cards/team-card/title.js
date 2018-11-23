import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { Text } from 'kitten/components/typography/text'
import { Marger } from 'kitten/components/layout/marger'

export class TeamCardTitle extends Component {
  static propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    jobTilte: PropTypes.string.isRequired,
  }

  render() {
    const { firstName, lastName, jobTitle } = this.props
    return (
      <Marger top="2" bottom="1.5">
        <Text size="default" weight="bold" color="font1">
          {firstName} {lastName}
        </Text>
        <br />
        <Text size="micro" color="font1" weight="light">
          {jobTitle}
        </Text>
      </Marger>
    )
  }
}
