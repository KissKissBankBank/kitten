import React, { Component } from 'react'
import { TeamCardTitle } from '../../components/cards/team-card/title'
import { TeamCardImage } from '../../components/cards/team-card/image'
import { TeamCardIcons } from '../../components/cards/team-card/icons'

export class TeamCard extends Component {
  static Image = TeamCardImage
  static Title = TeamCardTitle
  static Icons = TeamCardIcons

  render = () => this.props.children
}
