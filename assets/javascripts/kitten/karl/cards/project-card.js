import React from 'react'
import classNames from 'classnames'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Marger } from 'kitten/components/layout/marger'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { Progress } from 'kitten/components/meters/progress'
import { Button } from 'kitten/components/buttons/button'
import { ButtonImage } from 'kitten/components/buttons/button-image'
import { IconBadge } from 'kitten/components/notifications/icon-badge'
import { TagList } from 'kitten/components/lists/tag-list'
import { CheckedCircleIcon } from 'kitten/components/icons/checked-circle-icon'
import { WarningCircleIcon } from 'kitten/components/icons/warning-circle-icon'
import { CrossCircleIcon } from 'kitten/components/icons/cross-circle-icon'
import { ClockCircleIcon } from 'kitten/components/icons/clock-circle-icon'
import { LockIcon } from 'kitten/components/icons/lock-icon'

export class KarlProjectCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.initialState(props)
  }

  initialState(props) {
    const isCollectingOrClosing = props.status == 'collecting' || props.status == 'closing'

    // TODO: Use _underscore.js
    const showProgress = isCollectingOrClosing
    const showResults = props.status != 'studing'
    const showCurrentlyResults = isCollectingOrClosing && !props.disabled
    const showStatus = props.status != 'collecting'

    return {
      showProgress: showProgress,
      showResults: showResults,
      showCurrentlyResults: showCurrentlyResults,
      showStatus: showStatus,
    }
  }

  getHexaByScore() {
    const hexaByScore = {
      'A+': '#00696E',
      'A': '#009682',
      'B+': '#009B5F',
      'B': '#04AB2F',
      'C': '#8CC31E',
    }

    return hexaByScore[this.props.score]
  }

  getStatusData() {
    const iconClassName = 'k-ProjectCard__status__svg'
    let label = null
    let modifier = null

    switch(this.props.status) {
      case 'closing':
        label = [
          <CheckedCircleIcon key={ `closing-icon-${this.props.key}` }
                             className={ iconClassName }
                             circleColor="#68ffa0" />,
          "Collecte en closing !"
        ]
        break;
      case 'succeed':
        modifier = 'k-ProjectCard__status--succeed'
        label = [
          <CheckedCircleIcon key={ `succeed-icon-${this.props.key}` }
                             className={ iconClassName } />,
          "Collecte réussie !"
        ]
        break;
      case 'defaulted':
        modifier = 'k-ProjectCard__status--defaulted'
        label = [
          <WarningCircleIcon key={ `defaulted-icon-${this.props.key}` }
                             warningColor="#ff4146"
                             className={ iconClassName } />,
          "Projet en défaut de paiement"
        ]
        break;
      case 'retarded':
        modifier = 'k-ProjectCard__status--retarded'
        label = [
          <WarningCircleIcon key={ `retarded-icon-${this.props.key}` }
                             warningColor="#ff4146"
                             className={ iconClassName } />,
          "Projet en retard de paiement"
        ]
        break;
      case 'fraudulent':
        modifier = 'k-ProjectCard__status--retarded'
        label = [
          <WarningCircleIcon key={ `fraudulent-icon-${this.props.key}` }
                             warningColor="#ff4146"
                             className={ iconClassName } />,
          "Projet frauduleux"
        ]
        break;
      case 'failed':
        modifier = 'k-ProjectCard__status--failed'
        label = [
          <CrossCircleIcon key={ `failed-icon-${this.props.key}` }
                           crossColor="#d8d8d8"
                           className={ iconClassName } />,
          "Collecte échouée"
        ]
        break;
      case 'studing':
        modifier = 'k-ProjectCard__status--studing'
        label = [
          <ClockCircleIcon key={ `studing-icon-${this.props.key}` }
                           clockColor="#197ff2"
                           className={ iconClassName } />,
          "Projet à l'étude"
        ]
        break;
      default:
        label = ""
    }

    return { label: label, modifier: modifier }
  }

  renderCompany() {
    const scoreStyles = {
      backgroundColor: this.getHexaByScore(),
    }

    return (
      <div className="k-ProjectCard__grid">
        <Marger top="2" bottom="1" className="k-ProjectCard__flex">
          <ButtonImage tag="span" img={ { src: this.props.logo } } />
          <Paragraph className={ classNames('k-ProjectCard__flex__fluid',
                                            'k-u-margin-left-single',
                                            'k-u-margin-right-single') }
                     margin={ false }
                     modifier="quaternary">
            par&nbsp;:<br />
            <span className="k-u-strong">{ this.props.company }</span>
          </Paragraph>
          <IconBadge style={ scoreStyles }>{ this.props.score }</IconBadge>
        </Marger>

        <Marger top="1" bottom=".5">
          <Title margin={ false } modifier="quaternary">
            { this.props.title }
          </Title>
        </Marger>

        <Marger top=".5" bottom="1">
          <TagList items={ this.props.tags } />
        </Marger>

        <Marger top=".5" bottom="0.5">
          <Paragraph margin={ false } modifier="tertiary">
            { this.props.description }
          </Paragraph>
        </Marger>

        <Marger top=".5" bottom="1.5">
          <Paragraph margin={ false } modifier="quaternary">
            <span className="k-Paragraph__link k-u-hidden@s-up">
              Lire la suite…
            </span>
          </Paragraph>
        </Marger>
      </div>
    )
  }

  renderGoals() {
    return (
      <div className="k-ProjectCard__grid">
        <Marger top="1.5"
                bottom="2"
                className={ classNames('k-ProjectCard__flex',
                                       'k-ProjectCard__flex--spaceBetween') }>
          <Paragraph margin={ false }
                     modifier="quaternary"
                     className="k-u-align-center">
            Taux d’intérêt<br />
            <span className="k-u-strong">
              { this.props.dataLocked ? <LockIcon width="20" /> : this.props.interestRate }
            </span>
          </Paragraph>

          <Paragraph margin={ false }
                     modifier="quaternary"
                     className="k-u-align-center">
            Objectif<br />
            <span className="k-u-strong">
              { this.props.goal }
            </span>
          </Paragraph>

          <Paragraph margin={ false }
                     modifier="quaternary"
                    className="k-u-align-center">
            Durée<br />
            <span className="k-u-strong">
              { this.props.dataLocked ? <LockIcon width="20" /> : this.props.duration }
            </span>
          </Paragraph>
        </Marger>
      </div>
    )
  }

  renderImage() {
    if (!this.props.image) return

    return (
      <div className="k-ProjectCard__grid">
        <Marger top="2" bottom="2">
          <img className="k-u-align-center k-ProjectCard__img"
               src={ this.props.image } />
        </Marger>
      </div>
    )
  }

  renderProgress() {
    if (!this.state.showProgress) return

    return (
      <div className="k-ProjectCard__grid k-ProjectCard__borderTop">
        <Marger top="2" bottom="2" className="k-ProjectCard__flex">
          <Progress className="k-ProjectCard__flex__fluid"
                    value={ this.props.progress } />
          <Paragraph margin={ false }
                     modifier="quaternary"
                     className={ classNames('k-u-margin-left-single',
                                            'k-u-color-primary1',
                                            'k-u-strong') }>
            { this.props.progress }&nbsp;%
          </Paragraph>
        </Marger>
      </div>
    )
  }

  renderResults() {
    if (!this.state.showResults) return

    const dataClassName = classNames(
      'k-u-strong',
      { 'k-u-color-primary1': this.state.showCurrentlyResults },
    )

    return (
      <div className="k-ProjectCard__grid k-ProjectCard__borderTop">
        <Marger top="1.5"
                bottom="1.5"
                className="k-ProjectCard__flex k-ProjectCard__flex--spaceBetween">
          <Paragraph margin={ false }
                     modifier="quaternary"
                     className="k-u-align-center">
            <span className={ dataClassName }>
              { this.props.lenders }
            </span><br />
            preteurs
          </Paragraph>

          <Paragraph margin={ false }
                     modifier="quaternary"
                     className="k-u-align-center">
            <span className={ dataClassName }>
              { this.props.collected }
            </span><br />
            {
              this.state.showCurrentlyResults
              ? 'collectés'
              : `sur ${ this.props.goal }`
            }
          </Paragraph>

          <Paragraph margin={ false }
                     modifier="quaternary"
                     className="k-u-align-center">
            <span className={ dataClassName }>
              {
                this.state.showCurrentlyResults
                ? this.props.remaining
                : this.props.endAt
              }
            </span><br />
            {
              this.state.showCurrentlyResults
              ? 'restants'
              : 'date de fin'
            }
          </Paragraph>
        </Marger>
      </div>
    )
  }

  renderStatus() {
    if (!this.state.showStatus) return

    const data = this.getStatusData()

    const statusClassName = classNames(
      'k-ProjectCard__grid',
      'k-ProjectCard__borderTop',
      'k-ProjectCard__status',
      data.modifier,
    )

    return (
      <div className={ statusClassName }>
        <Marger top="1" bottom="1" className="k-ProjectCard__status__content">
          { data.label }
        </Marger>
      </div>
    )
  }

  render() {
    const projectCardClassName = classNames(
      'k-ProjectCard',
      {
        'k-ProjectCard--fullWidth': this.props.fullWidth,
        'is-disabled': this.props.disabled,
        'is-failed': this.props.status == 'failed'
      }
    )

    return (
      <div key={ this.props.key }  className={ projectCardClassName }>
        { this.renderCompany() }
        { this.renderGoals() }
        { this.renderImage() }
        { this.renderProgress() }
        { this.renderResults() }
        { this.renderStatus() }
      </div>
    )
  }
}

KarlProjectCard.defaultProps = {
  key: '1',
  disabled: false,
  dataLocked: false,
  logo: 'https://placehold.it/40x40/4a84ff/4a84ff',
  company: 'JCD Diffusion',
  score: 'A',
  title: 'Location de materiel de reception',
  tags: [{ key: 'tpe-pme', item: 'TPE / PME' }],
  description: 'Achat de matériel (vaisselle, tables, chaises, …) dans le cadre de son activité de location de matériel de réception',
  interestRate: '8,8 %',
  goal: '70 000 €',
  duration: '48 mois',
  image: 'https://placehold.it/310x175/4a84ff/4a84ff',
  progress: 28,
  lenders: 495,
  collected: '71 000 €',
  remaining: '12 j',
  endAt: '12/04/2017',
  status: 'collecting' // collecting, closing, succeed, defaulted, retarded, fraudulent, failed, studing
}
