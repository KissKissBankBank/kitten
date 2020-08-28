import React, { Component } from 'react'
import classNames from 'classnames'
import { card } from '../../../hoc/card'
import { Marger } from '../../../components/layout/marger'
import { Title } from '../../../components/typography/title'
import { Paragraph } from '../../../components/typography/paragraph'
import { ButtonIcon } from '../../../components/buttons/button-icon'
import { Separator } from '../../../components/layout/separator'
import { TagList } from '../../../components/lists/tag-list'
import { ArrowIcon } from '../../../components/icons/arrow-icon'
import { LockIcon } from '../../../components/icons/lock-icon'
import { Loader } from '../../../components/loaders/loader'
import { TypologyTagIcon } from '../../../components/icons/typology-tag-icon'
import { InstrumentTagIcon } from '../../../components/icons/instrument-tag-icon'

class SimilarProjectCardComponent extends Component {
  constructor() {
    super()

    this.renderInfo = this.renderInfo.bind(this)
    this.renderTagsInList = this.renderTagsInList.bind(this)
  }

  renderRefresh() {
    const { refresh, onRefreshClick } = this.props

    return (
      <div className="k-ProjectSimilarCard__refresh">
        <span
          className="k-ProjectSimilarCard__refresh__link"
          onClick={onRefreshClick}
        >
          {refresh}
        </span>
      </div>
    )
  }

  renderLeftArrow() {
    return (
      <ButtonIcon
        size="tiny"
        type="button"
        verticalArrow
        disabled={this.props.leftArrowDisabled}
        onClick={this.props.onLeftArrowClick}
      >
        <ArrowIcon direction="left" className="k-ButtonIcon__svg" />
      </ButtonIcon>
    )
  }

  renderRightArrow() {
    return (
      <ButtonIcon
        size="tiny"
        type="button"
        verticalArrow
        disabled={this.props.rightArrowDisabled}
        onClick={this.props.onRightArrowClick}
      >
        <ArrowIcon className="k-ButtonIcon__svg" />
      </ButtonIcon>
    )
  }

  renderHeader() {
    const { step } = this.props

    return (
      <div className="k-ProjectSimilarCard__grid">
        <Marger top="1" bottom="1">
          <div className="k-ProjectSimilarCard__grid--flex">
            {this.renderRefresh()}
            <div className="k-ProjectSimilarCard__navigation">
              <div className="k-ProjectSimilarCard__header--step">{step}</div>
              <div className="k-ProjectSimilarCard__header--button">
                {this.renderLeftArrow()}
                {this.renderRightArrow()}
              </div>
            </div>
          </div>
        </Marger>
      </div>
    )
  }

  renderImage() {
    const { imageSrc } = this.props

    if (!imageSrc) return

    return (
      <Marger top="2" bottom="1" key="image">
        <div className="k-ProjectSimilarCard__grid">
          <img className="k-ProjectSimilarCard__img" src={imageSrc} alt="" />
        </div>
      </Marger>
    )
  }

  renderTitle() {
    const { title, imageSrc } = this.props

    const top = imageSrc ? 1 : 2

    return (
      <Marger top={top} bottom="1">
        <Title modifier="senary" margin={false} tag="p">
          {title}
        </Title>
      </Marger>
    )
  }

  renderDescription() {
    const { paragraph } = this.props

    return (
      <div key="description" className="k-ProjectSimilarCard__grid">
        {this.renderTitle()}
        {this.renderTagsArea()}
        <Marger top="1" bottom="2">
          <Paragraph modifier="tertiary" margin={false}>
            {paragraph}
          </Paragraph>
        </Marger>
      </div>
    )
  }

  renderTags() {
    return (
      <Marger top="1" bottom="1">
        <TagList icon={TypologyTagIcon} items={this.props.tags} tiny />
      </Marger>
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
      <Marger top="1" bottom="1" className="k-ProjectCard__grid--flex">
        {this.props.tagLists.map(this.renderTagsInList)}
      </Marger>
    )
  }

  renderTagsArea() {
    if (!this.props.tagLists && !this.props.tags) return

    return this.props.tagLists ? this.renderTagLists() : this.renderTags()
  }

  renderInfos() {
    const { infos } = this.props

    if (!infos) return

    return (
      <div key="infos">
        <Separator />
        <Marger top="1.5" bottom="1.5" className="k-ProjectCard__grid--flex">
          {infos.map(this.renderInfo)}
        </Marger>
      </div>
    )
  }

  renderInfo(info) {
    const { coloredInfosValues } = this.props

    const infoClassName = classNames('k-ProjectSimilarCard__info__value', {
      'k-u-color-primary1': coloredInfosValues,
    })

    return (
      <div
        key={info.text}
        className={classNames('k-u-align-center', 'k-ProjectSimilarCard__info')}
      >
        {info.text}
        <br />
        <span className={infoClassName}>
          {info.locked ? <LockIcon width="12" /> : info.value}
        </span>
      </div>
    )
  }

  renderLoader() {
    const { loading } = this.props

    if (!loading) return

    return (
      <Marger top="9" bottom="9">
        <div className="k-ProjectSimilarCard__grid">
          <Loader className="k-ProjectSimilarCard__loading" />
        </div>
      </Marger>
    )
  }

  renderProject() {
    const { loading } = this.props

    if (loading) return

    return [this.renderImage(), this.renderDescription(), this.renderInfos()]
  }

  hasLink() {
    return !this.props.loading && !!this.props.link && !!this.props.link.href
  }

  contentTagProps() {
    const tagClassName = 'k-ProjectSimilarCard__content'

    if (!this.hasLink()) return { className: tagClassName }

    const { className, target, ...linkProps } = this.props.link

    return {
      ...linkProps,
      target: target || '_blank',
      className: classNames(tagClassName, className),
    }
  }

  render() {
    const { className } = this.props

    const ProjectSimilarCardClassName = classNames(
      'k-ProjectSimilarCard',
      className,
    )

    const Tag = this.hasLink() ? 'a' : 'div'

    return (
      <div className={ProjectSimilarCardClassName}>
        {this.renderHeader()}
        <Separator />
        <Tag {...this.contentTagProps()}>
          {this.renderProject()}
          {this.renderLoader()}
        </Tag>
      </div>
    )
  }
}

SimilarProjectCardComponent.defaultProps = {
  step: '',
  imageSrc: null,
  title: '',
  paragraph: '',
  tagLists: null,
  tags: null,
  infos: false, // Eg: [{ key: …, text: …, value: …, locked: … }]
  coloredInfosValues: false,
  refresh: 'Refresh',
  onRefreshClick: () => {},
  onLeftArrowClick: () => {},
  onRightArrowClick: () => {},
  loading: false,
  leftArrowDisabled: true,
  rightArrowDisabled: true,

  // `link` prop should be formatted as follow:
  // {
  //   href: 'link-url',
  //   target: '_blank',
  //   className: 'link-custom-classname',
  //   …
  // }
  link: null,
}

// Add generic card styles.
export const SimilarProjectCard = card(SimilarProjectCardComponent, {
  light: true,
  withBorder: true,
  withShadow: true,
  translateOnHover: true,
})

// DEPRECATED
export const ProjectSimilarCard = SimilarProjectCard
