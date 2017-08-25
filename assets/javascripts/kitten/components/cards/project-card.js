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
import { CheckedCircleIcon } from 'kitten/components/icons/checked-circle-icon'
import { TagList } from 'kitten/components/lists/tag-list'

class ProjectCardComponent extends React.Component {
  renderDescription() {
    const {
      ownerAvatarSrc,
      ownerName,
      ownerLocation,
      title,
    } = this.props

    return (
      <div className="k-ProjectCard__grid">
        <Marger top="2" bottom="1" className="k-ProjectCard__grid--flex">
          <ButtonImage tag="span"
                       img={ { src: ownerAvatarSrc } }
                       withBorder
                       withoutPointerEvents />
          <Paragraph className={ classNames('k-ProjectCard__grid--flex__item-fluid',
                                            'k-u-margin-left-single',
                                            'k-u-margin-right-single') }
                     margin={ false }
                     normalLineHeight
                     modifier="quaternary">
            <span className="k-u-strong">{ ownerName }</span><br />
            { ownerLocation }
          </Paragraph>

          { this.renderTooltip() }
        </Marger>

        <Marger top="1" bottom="1.5" className="k-ProjectCard__grid--flex">
          <Title className="k-ProjectCard__grid--flex__item-fluid"
                 margin={ false }
                 modifier="quaternary"
                 tag="p">
            { title }
          </Title>

          { this.renderScore() }
        </Marger>
      </div>
    )
  }

  renderTooltip() {
    if (!this.props.tooltipText) return

    return (
      <div className="k-ProjectCard__tooltip">
        <span className="k-ProjectCard__tooltip__content">
          { this.props.tooltipText }
        </span>
        <CheckedCircleIcon
          style={ { width: '20px', height: '20px' } }
          circleColor={ this.props.tooltipIconColor }
          checkedColor="#fff" />
      </div>
    )
  }

  renderScore() {
    if (!this.props.scoreValue) return

    const scoreStyles = {
      backgroundColor: this.props.scoreBackgroundColor,
    }

    return (
      <IconBadge style={ scoreStyles } className="k-u-margin-left-single">
        { this.props.scoreValue }
      </IconBadge>
    )
  }

  renderImage() {
    if (!this.props.imageSrc) return

    return (
      <div className="k-ProjectCard__grid">
        <Marger top="1.5" bottom="1.3">
          <img className="k-ProjectCard__img"
               src={ this.props.imageSrc }
               alt="" />
        </Marger>
      </div>
    )
  }

  renderProgress() {
    if (this.props.progress === false) return

    return (
      <div className="k-ProjectCard__grid k-ProjectCard__grid--withBorderTop">
        <Marger top="1.3" bottom="1.5" className="k-ProjectCard__grid--flex">
          <Progress className="k-ProjectCard__grid--flex__item-fluid"
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

  renderTags() {
    if (!this.props.tags) return

    return (
      <div className="k-ProjectCard__grid">
        <Marger top="1.3" bottom="1.3">
          <TagList items={ this.props.tags } tiny />
        </Marger>
      </div>
    )
  }

  renderInfos() {
    return (
      <div className="k-ProjectCard__grid--withBorderTop">
        <Marger top="1.5" bottom="1.5" className="k-ProjectCard__grid--flex">
          { this.renderInfo(this.props.info1) }
          { this.renderInfo(this.props.info2) }
          { this.renderInfo(this.props.info3) }
        </Marger>
      </div>
    )
  }

  renderInfo(info) {
    const valueClassName = classNames(
      'k-ProjectCard__info__value',
      { 'k-u-color-primary1': this.props.coloredInfosValues },
    )

    const renderValue =
      <span className={ valueClassName }>
        { info.locked ? <LockIcon width="12" /> : info.value }
      </span>

    const renderLabel = info.text

    return (
      <div className="k-u-align-center k-ProjectCard__info">
        { info.reverse ? renderValue : renderLabel }
        <br />
        { info.reverse ? renderLabel : renderValue }
      </div>
    )
  }

  renderStatus() {
    const {
      statusContent,
      statusPrimaryBackground,
      statusTertiaryBackground,
      statusGreyBackground,
      statusErrorBackground,
      statusErrorReverseBackground,
      statusWithoutTopBorder,
    } = this.props

    if (!statusContent) return

    const statusClassName = classNames(
      'k-ProjectCard__grid',
      'k-ProjectCard__status',
      {
        'k-ProjectCard__grid--withBorderTop': !statusWithoutTopBorder,
        'k-ProjectCard__status--primaryBackground': statusPrimaryBackground,
        'k-ProjectCard__status--tertiaryBackground': statusTertiaryBackground,
        'k-ProjectCard__status--greyBackground': statusGreyBackground,
        'k-ProjectCard__status--errorBackground': statusErrorBackground,
        'k-ProjectCard__status--errorReverseBackground':
          statusErrorReverseBackground,
      },
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

    const Tag = this.props.linkHref && !this.props.disabled ? 'a' : 'div'
    const href = this.props.disabled ? null : this.props.linkHref
    const title = this.props.disabled ? null : this.props.linkTitle

    return (
      <Tag key={ this.props.id }
           href={ href }
           title={ title }
           className={ projectCardClassName }>
        { this.renderDescription() }
        { this.renderImage() }
        { this.renderTags() }
        { this.renderProgress() }
        { this.renderInfos() }
        { this.renderStatus() }
      </Tag>
    )
  }
}

ProjectCardComponent.defaultProps = {
  id: null,
  linkHref: null,
  linkTitle: null,
  ownerAvatarSrc: null,
  ownerName: 'Name',
  ownerLocation: 'Location',
  tags: [{ key: 'tag-1', item: 'Tag 1' }, { key: 'tag-2', item: 'Tag 2' }],
  tooltipText: null,
  tooltipIconColor: '#4a84ff',
  scoreValue: null,
  scoreBackgroundColor: null,
  title: 'Title',
  imageSrc: null,
  progress: false,
  coloredInfosValues: false,
  info1: { value: 'xx', text: 'Info 1', locked: false, reverse: false },
  info2: { value: 'xx', text: 'Info 2', locked: false, reverse: false },
  info3: { value: 'xx', text: 'Info 3', locked: false, reverse: false },
  disabled: false,
  statusContent: null,
  statusPrimaryBackground: false,
  statusTertiaryBackground: false,
  statusGreyBackground: false,
  statusErrorBackground: false,
  statusErrorReverseBackground: false,
  statusWithoutTopBorder: false,
}

// Add card generic styles.

export const ProjectCard = card(ProjectCardComponent, {
  light: true,
  withBorder: true,
  withShadow: true,
  translateOnHover: true,
})
