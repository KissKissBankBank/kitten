import React, { Component, Fragment } from 'react'
import { TeamCardTitle } from 'kitten/components/cards/team-card/title'
import { TeamCardImage } from 'kitten/components/cards/team-card/image'
import { TeamCardIcons } from 'kitten/components/cards/team-card/icons'

export class TeamCard extends Component {
  static Image = TeamCardImage
  static Title = TeamCardTitle
  static Icons = TeamCardIcons

  render() {
    return <Fragment>{this.props.children}</Fragment>
  }
}
