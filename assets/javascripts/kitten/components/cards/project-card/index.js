import React, { Component, Fragment } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import deprecated from 'prop-types-extra/lib/deprecated'
import { card } from '../../../hoc/card'
import { Marger } from '../../../components/layout/marger'
import { Title } from '../../../components/typography/title'
import { Paragraph } from '../../../components/typography/paragraph'
import { Progress } from '../../../components/meters/progress'
import { ButtonImage } from '../../../components/buttons/button-image'
import { IconBadge } from '../../../components/notifications/icon-badge'
import { LockIcon } from '../../../components/icons/lock-icon'
import { CheckedCircleIcon } from '../../../components/icons/checked-circle-icon'
import { TagList } from '../../../components/lists/tag-list'
import { TypologyTagIcon } from '../../../components/icons/typology-tag-icon'
import { InstrumentTagIcon } from '../../../components/icons/instrument-tag-icon'

export const MIN_WIDTH = 280
export const MARGIN_BETWEEN = 40

class ProjectCardComponent extends Component {
  constructor() {
    super()

    this.renderTagsInList = this.renderTagsInList.bind(this)
  }

  renderDescription() {
    const { ownerAvatarSrc, ownerName, ownerLocation, title } = this.props

    return (
      <div className="k-ProjectCard__grid">
        <Marger top="2" bottom="1" className="k-ProjectCard__grid--flex">
          <ButtonImage
            tag="span"
            img={{ src: ownerAvatarSrc }}
            withoutPointerEvents
          />
          <Paragraph
            className={classNames(
              'k-ProjectCard__grid--flex__item-fluid',
              'k-u-margin-left-single',
              'k-u-margin-right-single',
            )}
            margin={false}
            normalLineHeight
            modifier="quaternary"
          >
            <span className="k-u-weight-regular">{ownerName}</span>
            {ownerLocation && (
              <Fragment>
                <br />
                {ownerLocation}
              </Fragment>
            )}
          </Paragraph>

          {this.renderTooltip()}
        </Marger>

        <Marger top="1" bottom="1.5" className="k-ProjectCard__grid--flex">
          <Title
            className="k-ProjectCard__grid--flex__item-fluid k-Card__title"
            margin={false}
            modifier="senary"
            tag="p"
          >
            {title}
          </Title>

          {this.renderScore()}
        </Marger>
      </div>
    )
  }

  renderTooltip() {
    if (!this.props.tooltipText) return

    return (
      <div className="k-ProjectCard__tooltip">
        <span className="k-ProjectCard__tooltip__content">
          {this.props.tooltipText}
        </span>
        <CheckedCircleIcon
          style={{ width: '20px', height: '20px' }}
          circleColor={this.props.tooltipIconColor}
          checkedColor="#fff"
        />
      </div>
    )
  }

  renderScore() {
    if (!this.props.scoreValue) return

    const scoreStyles = {
      backgroundColor: this.props.scoreBackgroundColor,
    }

    return (
      <IconBadge style={scoreStyles} className="k-u-margin-left-single">
        {this.props.scoreValue}
      </IconBadge>
    )
  }

  renderImage() {
    if (!this.props.imageSrc) return

    return (
      <div className="k-ProjectCard__grid">
        <Marger
          top="1.5"
          bottom="1.3"
          className="k-Card__imageContainer"
          style={styles.imageContainer}
        >
          <img
            className="k-ProjectCard__img k-Card__image"
            style={styles.image}
            src={this.props.imageSrc}
            alt=""
          />
        </Marger>
      </div>
    )
  }

  renderProgress() {
    const { progress, progressColor } = this.props

    if (progress === false) return

    return (
      <div
        className={classNames(
          'k-ProjectCard__grid',
          'k-ProjectCard__grid--withBorderTop',
        )}
      >
        <Marger top="1.3" bottom="1.5" className="k-ProjectCard__grid--flex">
          <Progress
            className="k-ProjectCard__grid--flex__item-fluid"
            value={progress}
            color={progressColor}
          />
          <Paragraph
            margin={false}
            modifier="quaternary"
            className={classNames(
              'k-u-margin-left-double',
              'k-u-color-primary1',
              'k-u-weight-regular',
            )}
          >
            {progress}&nbsp;%
          </Paragraph>
        </Marger>
      </div>
    )
  }

  renderTags() {
    return (
      <div key={`tag-list-${Math.random(1)}`} className="k-ProjectCard__grid">
        <Marger top="1.3" bottom="1.3">
          <TagList icon={TypologyTagIcon} items={this.props.tags} tiny />
        </Marger>
      </div>
    )
  }

  renderTagsInList(tagList, index) {
    const icon = this.convertToClass(tagList.icon)
    const list = <TagList icon={icon} items={tagList.items} tiny />

    const separator = (
      <div className="k-u-margin-left-single">
        <hr
          className={classNames(
            'k-VerticalSeparator',
            'k-VerticalSeparator--darker',
          )}
        />
      </div>
    )

    const tagListWithMargin = (
      <div className="k-u-margin-left-single">{list}</div>
    )

    return (
      <div key={`tag-list-${index}`} className="k-ProjectCard__grid--flex">
        {index != 0 && separator}
        {index != 0 && tagListWithMargin}
        {index == 0 && list}
      </div>
    )
  }

  convertToClass(stringClassName) {
    switch (stringClassName) {
      case 'InstrumentTagIcon':
        return InstrumentTagIcon
      default:
        return TypologyTagIcon
    }
  }

  renderTagLists() {
    return (
      <div className="k-ProjectCard__grid">
        <Marger top="1.3" bottom="1.3" className="k-ProjectCard__grid--flex">
          {this.props.tagLists.map(this.renderTagsInList)}
        </Marger>
      </div>
    )
  }

  renderTagsArea() {
    if (!this.props.tagLists && !this.props.tags) return

    return this.props.tagLists ? this.renderTagLists() : this.renderTags()
  }

  renderInfos() {
    if (!this.props.info1 && !this.props.info2 && !this.props.info3) return

    return (
      <div className="k-ProjectCard__grid--withBorderTop">
        <Marger top="1.5" bottom="1.5" className="k-ProjectCard__grid--flex">
          {this.renderInfo(this.props.info1)}
          {this.renderInfo(this.props.info2)}
          {this.renderInfo(this.props.info3)}
        </Marger>
      </div>
    )
  }

  renderParagraph() {
    if (!this.props.paragraph) return

    return (
      <div
        className={classNames(
          'k-ProjectCard__paragraph',
          'k-ProjectCard__grid--withBorderTop',
        )}
      >
        <Marger top="2" bottom="2">
          <Paragraph margin={false} modifier="quaternary">
            {this.props.paragraph}
          </Paragraph>
        </Marger>
      </div>
    )
  }

  renderInfo(info) {
    if (!info) return

    const valueClassName = classNames('k-ProjectCard__info__value', {
      'k-u-color-primary1': this.props.coloredInfosValues,
    })

    const renderValue = (
      <span className={valueClassName}>
        {info.locked ? <LockIcon width="12" /> : info.value}
      </span>
    )

    const renderLabel = info.text

    return (
      <div className="k-u-align-center k-ProjectCard__info">
        {info.reverse ? renderValue : renderLabel}
        <br />
        {info.reverse ? renderLabel : renderValue}
      </div>
    )
  }

  renderStatus() {
    const {
      statusContent,
      statusPrimaryBackground,
      statusValidBackground,
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
        'k-ProjectCard__status--validBackground': statusValidBackground,
        'k-ProjectCard__status--tertiaryBackground': statusTertiaryBackground,
        'k-ProjectCard__status--greyBackground': statusGreyBackground,
        'k-ProjectCard__status--errorBackground': statusErrorBackground,
        'k-ProjectCard__status--errorReverseBackground': statusErrorReverseBackground,
      },
    )

    return (
      <div className={statusClassName}>
        <Marger top="1" bottom="1" className="k-ProjectCard__status__content">
          {statusContent}
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
      <Tag
        key={this.props.id}
        href={href}
        title={title}
        className={projectCardClassName}
      >
        {this.renderDescription()}
        {this.renderImage()}
        {this.renderTagsArea()}
        {this.renderProgress()}
        {this.renderParagraph()}
        {this.renderInfos()}
        {this.renderStatus()}
      </Tag>
    )
  }
}

const styles = {
  imageContainer: {
    overflow: 'hidden',
    position: 'relative',
    paddingTop: `${(9 / 16) * 100}%`,
  },
  image: {
    position: 'absolute',
    top: 0,
    display: 'block',
    width: '100%',
  },
}

ProjectCardComponent.defaultProps = {
  id: null,
  linkHref: null,
  linkTitle: null,
  ownerAvatarSrc: null,
  ownerName: 'Name',
  ownerLocation: null,
  tagLists: null,
  tags: null,
  paragraph: null,
  tooltipText: null,
  tooltipIconColor: '#19b4fa',
  scoreValue: null,
  scoreBackgroundColor: null,
  title: 'Title',
  imageSrc: null,
  progress: false,
  coloredInfosValues: false,
  info1: null,
  info2: null,
  info3: null,
  disabled: false,
  statusContent: null,
  statusPrimaryBackground: false,
  statusValidBackground: false,
  statusTertiaryBackground: false,
  statusGreyBackground: false,
  statusErrorBackground: false,
  statusErrorReverseBackground: false,
  statusWithoutTopBorder: false,
}

// Deprecated props

ProjectCardComponent.propTypes = {
  tags: deprecated(PropTypes.array, 'Use `tagLists` prop instead'),
}

// Add card generic styles.

export const ProjectCard = card(ProjectCardComponent, {
  light: true,
})
