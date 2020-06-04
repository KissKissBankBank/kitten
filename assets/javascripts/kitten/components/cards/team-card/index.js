import { TeamCardTitle } from './components/title'
import { TeamCardImage } from './components/image'
import { TeamCardIcons } from './components/icons'

export const TeamCard = ({ children }) => children

TeamCard.Image = TeamCardImage
TeamCard.Title = TeamCardTitle
TeamCard.Icons = TeamCardIcons
