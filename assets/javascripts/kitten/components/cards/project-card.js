import React from 'react'
import classNames from 'classnames'
import { card } from 'kitten/hoc/card'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Marger } from 'kitten/components/layout/marger'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { Progress } from 'kitten/components/meters/progress'
import { ButtonImage } from 'kitten/components/buttons/button-image'
import { IconBadge } from 'kitten/components/notifications/icon-badge'
import { LockIcon } from 'kitten/components/icons/lock-icon'

class ProjectCardComponent extends React.Component {
  renderDescription() {
    const {
      avatar,
      name,
      tags,
      scoreValue,
      scoreBackgroundColor,
      title,
    } = this.props

    const scoreStyles = {
      backgroundColor: scoreBackgroundColor,
    }

    return (
      <div className="k-ProjectCard__grid">
        <Marger top="2" bottom="1" className="k-ProjectCard__flex">
          <ButtonImage tag="span"
                       img={ { src: avatar } }
                       withoutPointerEvents />
          <Paragraph className={ classNames('k-ProjectCard__flex__fluid',
                                            'k-u-margin-left-single',
                                            'k-u-margin-right-single') }
                     margin={ false }
                     normalLineHeight
                     modifier="quaternary">
            <span className="k-u-strong">{ name }</span><br />
            { tags }
          </Paragraph>
          {
            scoreValue
            ? <IconBadge style={ scoreStyles }>{ scoreValue }</IconBadge>
            : null
          }
        </Marger>

        <Marger top="1" bottom="1.5">
          <Title margin={ false } modifier="quaternary">{ title }</Title>
        </Marger>
      </div>
    )
  }

  renderImage() {
    if (!this.props.image) return

    return (
      <div className={ classNames(
        'k-ProjectCard__grid',
        'k-ProjectCard__grid--withoutPadding@s-down') }>
        <Marger top="1.5"
                bottom="1.5"
                className="k-ProjectCard__marger--withoutMarginBottom@s-down">
          <img className="k-ProjectCard__img" src={ this.props.image } alt="" />
        </Marger>
      </div>
    )
  }

  renderProgress() {
    if (this.props.progress === false) return

    return (
      <div className="k-ProjectCard__grid k-ProjectCard__borderTop">
        <Marger top="1.5" bottom="1.5" className="k-ProjectCard__flex">
          <Progress className="k-ProjectCard__flex__fluid"
                    value={ this.props.progress } />
          <Paragraph margin={ false }
                     modifier="quaternary"
                     className={ classNames('k-u-margin-left-double',
                                            'k-u-color-primary1',
                                            'k-u-strong') }>
            { this.props.progress }&nbsp;%
          </Paragraph>
        </Marger>
      </div>
    )
  }

  renderInfos() {
    const infoClassName = classNames(
      'k-ProjectCard__info__value',
      { 'k-u-color-primary1': this.props.infosValuesColored },
    )

    return (
      <div className="k-ProjectCard__borderTop">
        <Marger top="1.5"
                bottom="1.5"
                className={ classNames('k-ProjectCard__flex',
                                       'k-ProjectCard__flex--spaceBetween') }>
          <span className="k-u-align-center k-ProjectCard__info">
            <span className={ infoClassName }>
              {
                this.props.info1.lockedValue
                ? <LockIcon width="12" />
                : this.props.info1.value
              }
            </span><br />
            { this.props.info1.text }
          </span>

          <span className="k-u-align-center k-ProjectCard__info">
            <span className={ infoClassName }>
              {
                this.props.info2.lockedValue
                ? <LockIcon width="12" />
                : this.props.info2.value
              }
            </span><br />
            { this.props.info2.text }
          </span>

          <span className="k-u-align-center k-ProjectCard__info">
            <span className={ infoClassName }>
              {
                this.props.info3.lockedValue
                ? <LockIcon width="12" />
                : this.props.info3.value
              }
            </span><br />
            { this.props.info3.text }
          </span>
        </Marger>
      </div>
    )
  }

  renderStatus() {
    const {
      statusContent,
      statusModifier,
      statusWithoutTopBorder,
    } = this.props

    if (!statusContent) return

    const statusClassName = classNames(
      'k-ProjectCard__grid',
      { 'k-ProjectCard__borderTop': !statusWithoutTopBorder },
      'k-ProjectCard__status',
      statusModifier,
    )

    return (
      <div className={ statusClassName }>
        <Marger top="1" bottom="1" className="k-ProjectCard__status__content">
          { statusContent }
        </Marger>
      </div>
    )
  }

  render() {
    const projectCardClassName = classNames(
      'k-ProjectCard',
      { 'is-disabled': this.props.disabled },
      this.props.className,
    )

    const Tag = this.props.href && !this.props.disabled ? 'a' : 'div'
    const href = this.props.disabled ? null : this.props.href

    return (
      <Tag key={ this.props.id }
           href={ href }
           className={ projectCardClassName }>
        { this.renderDescription() }
        { this.renderImage() }
        { this.renderProgress() }
        { this.renderInfos() }
        { this.renderStatus() }
      </Tag>
    )
  }
}

ProjectCardComponent.defaultProps = {
  id: null,
  href: null,
  avatar: null,
  name: 'Name',
  tags: 'Tag 1, Tag 2',
  scoreValue: null,
  scoreBackgroundColor: null,
  title: 'Title',
  image: null,
  progress: 0,
  infosValuesColored: false,
  info1: { value: 'xx', text: 'Info 1', lockedValue: false },
  info2: { value: 'xx', text: 'Info 2', lockedValue: false },
  info3: { value: 'xx', text: 'Info 3', lockedValue: false },
  disabled: false,
  statusContent: null,
  statusModifier: null,
  statusWithoutTopBorder: false,
}

// Add card generic styles.

export const ProjectCard = card(ProjectCardComponent, {
  light: true,
  withBorder: true,
  withShadow: true,
  translateOnHover: true,
})
