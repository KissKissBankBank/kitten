import { Component } from 'react'
import { TeamCardTitle } from './team-card/title'
import { TeamCardImage } from './team-card/image'
import { TeamCardIcons } from './team-card/icons'

export class TeamCard extends Component {
  static Image = TeamCardImage
  static Title = TeamCardTitle
  static Icons = TeamCardIcons

  render = () => this.props.children
}
