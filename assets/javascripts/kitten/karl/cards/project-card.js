import React from 'react'
import classNames from 'classnames'
import { ProjectCard } from 'kitten/components/cards/project-card'
import { CheckedCircleIcon } from 'kitten/components/icons/checked-circle-icon'
import { WarningCircleIcon } from 'kitten/components/icons/warning-circle-icon'
import { CrossCircleIcon } from 'kitten/components/icons/cross-circle-icon'
import { ClockCircleIcon } from 'kitten/components/icons/clock-circle-icon'

export class KarlProjectCard extends React.Component {
  getHexaByScore() {
    const hexaByScore = {
      'A+': '#00696E',
      'A': '#009682',
      'B+': '#009B5F',
      'B': '#04AB2F',
      'C': '#8CC31E',
    }

    return this.props.score ? hexaByScore[this.props.score] : null
  }

  getScoreData() {
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
          infosValuesColored: true,
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
          infosValuesColored: true,
        }
        break
      case 'succeed':
        data = {
          statusModifier: 'k-ProjectCard__status--succeed',
          statusContent: [
            <CheckedCircleIcon key={ `succeed-icon-${ this.props.id }` }
                               className={ iconClassName } />,
            this.props.labelSucceed
          ],
          progress: false,
        }
        break
      case 'defaulted':
        data = {
          statusModifier: 'k-ProjectCard__status--defaulted',
          statusContent: [
            <WarningCircleIcon key={ `defaulted-icon-${ this.props.id }` }
                               warningColor="#ff4146"
                               className={ iconClassName } />,
            this.props.labelDefaulted
          ],
          progress: false,
        }
        break
      case 'retarded':
        data = {
          statusModifier: 'k-ProjectCard__status--retarded',
          statusContent: [
            <WarningCircleIcon key={ `retarded-icon-${ this.props.id }` }
                               warningColor="#ff4146"
                               className={ iconClassName } />,
            this.props.labelRetarded
          ],
          progress: false,
        }
        break
      case 'fraudulent':
        data = {
          statusModifier: 'k-ProjectCard__status--retarded',
          statusContent: [
            <WarningCircleIcon key={ `fraudulent-icon-${ this.props.id }` }
                               warningColor="#ff4146"
                               className={ iconClassName } />,
            this.props.labelFraudulent
          ],
          progress: false,
        }
        break
      case 'failed':
        data = {
          statusModifier: 'k-ProjectCard__status--failed',
          statusContent: [
            <CrossCircleIcon key={ `failed-icon-${ this.props.id }` }
                             crossColor="#d8d8d8"
                             className={ iconClassName } />,
            this.props.labelFailed
          ],
          progress: false,
        }
        break;
      case 'studing':
        data = {
          statusModifier: 'k-ProjectCard__status--studing',
          statusContent: [
            <ClockCircleIcon key={ `studing-icon-${ this.props.id }` }
                             clockColor="#197ff2"
                             className={ iconClassName } />,
            this.props.labelStuding
          ],
          progress: false,
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
