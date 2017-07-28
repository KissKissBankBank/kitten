import React, { Component } from 'react'
import classNames from 'classnames'
import { card } from 'kitten/hoc/card'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Marger } from 'kitten/components/layout/marger'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { Separator } from 'kitten/components/layout/separator'
import { TagList } from 'kitten/components/lists/tag-list'
import { RightArrowIcon } from 'kitten/components/icons/right-arrow-icon'
import { LockIcon } from 'kitten/components/icons/lock-icon'
import { Loader } from 'kitten/components/loaders/loader'

class ProjectSimilarCardComponent extends Component {
  constructor() {
    super()

    this.renderInfo = this.renderInfo.bind(this)
    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this)
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this)

    this.state = {
      currentIndex: 0,
    }
  }

  handleLeftArrowClick() {
    const newCurrentIndex = this.state.currentIndex - 1

    this.goTo(newCurrentIndex)
  }

  handleRightArrowClick() {
    const newCurrentIndex = this.state.currentIndex + 1

    this.goTo(newCurrentIndex)
  }

  goTo(index) {
    this.setState({ currentIndex: index })
  }

  renderRefresh() {
    const {
      refresh,
      onRefreshClick,
    } = this.props

    return (
      <div className="k-ProjectSimilarCard__refresh">
        <span
          className="k-ProjectSimilarCard__refresh__link"
          onClick={ onRefreshClick }>
          { refresh }
        </span>
      </div>
    )
  }

  renderRightArrow() {
    const disabled = this.state.currentIndex == this.props.projects.length

    return(
      <ButtonIcon
        size="tiny"
        disabled={ disabled }
        onClick={ this.handleRightArrowClick }
        verticalArrow>
        <RightArrowIcon className="k-ButtonIcon__svg" />
      </ButtonIcon>
    )
  }

  renderLeftArrow() {
    const disabled = this.state.currentIndex == 0

    return(
      <ButtonIcon
        size="tiny"
        disabled={ disabled }
        onClick={ this.handleLeftArrowClick }
        verticalArrow>
        <RightArrowIcon
          className={ classNames('k-ButtonIcon__svg',
                                 'k-ButtonIcon__svg--mirror') } />
      </ButtonIcon>
    )
  }
  renderStep() {
    const { projects } = this.props

    if (projects.length == 0) return

    return `${this.state.currentIndex + 1 }/${ projects.length }`
  }

  renderHeader() {
    return (
      <div className="k-ProjectSimilarCard__grid">
        <Marger top="1" bottom="1">
          <div className="k-ProjectSimilarCard__grid--flex">
            { this.renderRefresh() }
            <div className="k-ProjectSimilarCard__navigation">
              <div className="k-ProjectSimilarCard__header--step">
                { this.renderStep() }
              </div>
              <div className="k-ProjectSimilarCard__header--button">
                { this.renderLeftArrow() }
                { this.renderRightArrow() }
              </div>
            </div>
          </div>
        </Marger>
      </div>
    )
  }

  renderImage(projectProps) {
    const {
      imageSrc,
    } = projectProps

    if (!imageSrc) return

    return (
      <Marger top="2" bottom="1">
        <div className="k-ProjectSimilarCard__grid">
          <img
            className="k-ProjectSimilarCard__img"
            src={ imageSrc }
            alt="" />
        </div>
      </Marger>
    )
  }

  renderTitle(projectProps) {
    const {
      title,
      imageSrc,
    } = projectProps

    if (!title) return

    const top = imageSrc ? 1 : 2

    return(
      <Marger top={ top } bottom="1">
        <Title
          modifier="quaternary"
          margin={ false }
          tag="p">
          { title }
        </Title>
      </Marger>
    )
  }

  renderDescription(projectProps) {
    const {
      description,
    } = projectProps

    if (!description) return

    return(
      <div className="k-ProjectSimilarCard__grid">
        { this.renderTitle(projectProps) }
        { this.renderTags(projectProps) }
        <Marger top="1" bottom="2">
          <Paragraph
            modifier="tertiary"
            margin={ false }>
            { description }
          </Paragraph>
        </Marger>
      </div>
    )
  }

  renderTags(projectProps) {
    const {
      tags,
    } = projectProps

    if (!tags) return

    return (
      <Marger top="1" bottom="1">
        <TagList
          items={ tags }
          tiny />
      </Marger>
    )
  }

  renderInfos(projectProps) {
    const {
      infos,
    } = projectProps

    if (!infos) return

    return (
      <div>
        <Separator />
        <Marger
          top="1.5"
          bottom="1.5"
          className="k-ProjectCard__grid--flex">
          { infos.map(this.renderInfo) }
        </Marger>
      </div>
    )
  }

  renderInfo(info) {
    const {
      coloredInfosValues,
    } = this.props

    const infoClassName = classNames(
      'k-ProjectSimilarCard__info__value',
      { 'k-u-color-primary1': coloredInfosValues },
    )

    return (
      <div className="k-u-align-center k-ProjectSimilarCard__info">
        { info.text }<br />
        <span className={ infoClassName }>
          { info.locked ? <LockIcon width='12' /> : info.value }
        </span>
      </div>
    )
  }

  renderLoader() {
    const {
      loading,
    } = this.props

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
    const {
      loading,
    } = this.props

    if (loading) return

    return [
      this.renderImage(),
      this.renderDescription(),
      this.renderInfos(),
    ]
  }

  render() {
    const {
      className,
    } = this.props

    const ProjectSimilarCardClassName = classNames(
      'k-ProjectSimilarCard',
      className,
    )

    const currentProjectProps = this.props.projects[this.state.currentIndex]

    return (
      <div className={ ProjectSimilarCardClassName }>
        { this.renderHeader() }
        <Separator />
        { this.renderProject() }
        { this.renderLoader() }
      </div>
    )
  }
}

ProjectSimilarCardComponent.defaultProps = {
  projects: [
    {
      imageSrc: null,
      title: "",
      description: "",
      tags: null, // Eg: [{ key: …, item: … }]
      infos: false, // Eg: [{ key: …, text: …, value: …, locked: … }]
    },
  ],
  coloredInfosValues: false,
  refresh: "Refresh",
  onRefreshClick: () => {},
  loading: false,
}

// Add generic card styles.
export const ProjectSimilarCard = card(ProjectSimilarCardComponent, {
  light: true,
  withBorder: true,
  withShadow: true,
  translateOnHover: true,
})
