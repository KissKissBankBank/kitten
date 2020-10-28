import React from 'react'
import { ProjectCard } from '../../components/cards/project-card'
import { CheckedCircleIcon } from '../../components/icons/checked-circle-icon'
import { WarningCircleIcon } from '../../components/icons/warning-circle-icon'
import { CrossCircleIcon } from '../../components/icons/cross-circle-icon'
import { ClockCircleIcon } from '../../components/icons/clock-circle-icon'

const colors = {
  'line-2': '#d8d8d8',
  'primary-1': '#19b4fa',
  'tertiary-1': '#effaf1',
  error: '#ff0046',
}

export class KarlProjectCard extends React.Component {
  getHexaByScore() {
    if (!this.props.score) return

    const hexaByScore = {
      'A+': '#00696e',
      A: '#009682',
      'B+': '#009b5f',
      B: '#04ab2f',
      C: '#8cc31e',
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

    switch (this.props.status) {
      case 'collecting':
        data = {
          coloredInfosValues: true,
        }
        break

      case 'closing':
        data = {
          statusContent: [
            <CheckedCircleIcon
              key={`closing-icon-${this.props.id}`}
              className={iconClassName}
              circleColor={colors['tertiary-1']}
            />,
            this.props.labelClosing,
          ],
          coloredInfosValues: true,
        }
        break

      case 'succeed':
        data = {
          statusValidBackground: true,
          statusContent: [
            <CheckedCircleIcon
              key={`succeed-icon-${this.props.id}`}
              className={iconClassName}
            />,
            this.props.labelSucceed,
          ],
        }
        break

      case 'defaulted':
        data = {
          statusErrorBackground: true,
          statusContent: [
            <WarningCircleIcon
              key={`defaulted-icon-${this.props.id}`}
              warningColor={colors['error']}
              className={iconClassName}
            />,
            this.props.labelDefaulted,
          ],
        }
        break

      case 'delayed':
        data = {
          statusErrorReverseBackground: true,
          statusContent: [
            <WarningCircleIcon
              key={`delayed-icon-${this.props.id}`}
              warningColor="#fff"
              circleColor={colors['error']}
              className={iconClassName}
            />,
            this.props.labelDelayed,
          ],
        }
        break

      case 'fraudulent':
        data = {
          statusErrorBackground: true,
          statusContent: [
            <WarningCircleIcon
              key={`fraudulent-icon-${this.props.id}`}
              warningColor={colors['error']}
              className={iconClassName}
            />,
            this.props.labelFraudulent,
          ],
        }
        break

      case 'failed':
        data = {
          statusGreyBackground: true,
          statusContent: [
            <CrossCircleIcon
              key={`failed-icon-${this.props.id}`}
              crossColor={colors['line-2']}
              className={iconClassName}
            />,
            this.props.labelFailed,
          ],
        }
        break

      case 'studying':
        data = {
          statusPrimaryBackground: true,
          statusContent: [
            <ClockCircleIcon
              key={`studying-icon-${this.props.id}`}
              clockColor={colors['primary-1']}
              className={iconClassName}
            />,
            this.props.labelStudying,
          ],
        }
        break

      default:
    }

    return data
  }

  render() {
    return (
      <ProjectCard
        {...this.props}
        {...this.getStatusData()}
        {...this.getScoreData()}
      />
    )
  }
}

// Status options: collecting, closing, succeed, defaulted,
//                 delayed, fraudulent, failed, studying.

KarlProjectCard.defaultProps = {
  score: null,
  status: null,

  labelClosing: 'Collecte en closing !',
  labelSucceed: 'Collecte réussie !',
  labelDefaulted: 'Projet en défaut de paiement',
  labelDelayed: 'Projet en retard de paiement',
  labelFraudulent: 'Projet frauduleux',
  labelFailed: 'Collecte échouée',
  labelStudying: "Projet à l'étude",
}
