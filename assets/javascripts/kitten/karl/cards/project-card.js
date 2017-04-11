import React from 'react'
import classNames from 'classnames'
import { ProjectCard } from 'kitten/components/cards/project-card'
import { CheckedCircleIcon } from 'kitten/components/icons/checked-circle-icon'
import { WarningCircleIcon } from 'kitten/components/icons/warning-circle-icon'
import { CrossCircleIcon } from 'kitten/components/icons/cross-circle-icon'
import { ClockCircleIcon } from 'kitten/components/icons/clock-circle-icon'

export class KarlProjectCard extends React.Component {
  getHexaByScore() {
    if (!this.props.score) return

    const hexaByScore = {
      'A+': '#00696E',
      'A': '#009682',
      'B+': '#009B5F',
      'B': '#04AB2F',
      'C': '#8CC31E',
    }

    return hexaByScore[this.props.score]
  }

  getScoreData() {
    if (!this.props.score) return

    return {
      scoreValue: this.props.score,
      scoreBackgroundColor: this.getHexaByScore(),
    }
  }

  getStatusData() {
    const iconClassName = 'k-ProjectCard__status__svg'
    let data = {}

    switch(this.props.status) {
      case 'collecting':
        data = {
          coloredInfosValues: true,
        }
        break
      case 'closing':
        data = {
          statusContent: [
            <CheckedCircleIcon key={ `closing-icon-${ this.props.id }` }
                               className={ iconClassName }
                               circleColor="#68ffa0" />,
            this.props.labelClosing
          ],
          coloredInfosValues: true,
        }
        break
      case 'succeed':
        data = {
          statusTertiaryBackground: true,
          statusContent: [
            <CheckedCircleIcon key={ `succeed-icon-${ this.props.id }` }
                               className={ iconClassName } />,
            this.props.labelSucceed
          ],
        }
        break
      case 'defaulted':
        data = {
          statusErrorBackground: true,
          statusContent: [
            <WarningCircleIcon key={ `defaulted-icon-${ this.props.id }` }
                               warningColor="#ff4146"
                               className={ iconClassName } />,
            this.props.labelDefaulted
          ],
        }
        break
      case 'retarded':
        data = {
          statusErrorBackground: true,
          statusContent: [
            <WarningCircleIcon key={ `retarded-icon-${ this.props.id }` }
                               warningColor="#ff4146"
                               className={ iconClassName } />,
            this.props.labelRetarded
          ],
        }
        break
      case 'fraudulent':
        data = {
          statusErrorBackground: true,
          statusContent: [
            <WarningCircleIcon key={ `fraudulent-icon-${ this.props.id }` }
                               warningColor="#ff4146"
                               className={ iconClassName } />,
            this.props.labelFraudulent
          ],
        }
        break
      case 'failed':
        data = {
          statusGreyBackground: true,
          statusContent: [
            <CrossCircleIcon key={ `failed-icon-${ this.props.id }` }
                             crossColor="#d8d8d8"
                             className={ iconClassName } />,
            this.props.labelFailed
          ],
        }
        break;
      case 'studing':
        data = {
          statusPrimaryBackground: true,
          statusContent: [
            <ClockCircleIcon key={ `studing-icon-${ this.props.id }` }
                             clockColor="#197ff2"
                             className={ iconClassName } />,
            this.props.labelStuding
          ],
        }
        break
      default:
        data = {}
    }

    return data
  }

  render() {
    return (
      <ProjectCard { ...this.props }
                   { ...this.getStatusData() }
                   { ...this.getScoreData() } />
    )
  }
}

// Status possibilities: collecting, closing, succeed, defaulted,
//                       retarded, fraudulent, failed, studing.

KarlProjectCard.defaultProps = {
  score: null,
  status: null,

  labelClosing: "Collecte en closing !",
  labelSucceed: "Collecte réussie !",
  labelDefaulted: "Projet en défaut de paiement",
  labelRetarded: "Projet en retard de paiement",
  labelFraudulent: "Projet frauduleux",
  labelFailed: "Collecte échouée",
  labelStuding: "Projet à l'étude",
}
