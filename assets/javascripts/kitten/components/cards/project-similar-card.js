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
import { RefreshIcon } from 'kitten/components/icons/refresh-icon'
import { RightArrowIcon } from 'kitten/components/icons/right-arrow-icon'

class ProjectSimilarCardComponent extends Component {
  constructor() {
    super()

    this.renderInfo = this.renderInfo.bind(this)
  }

  renderHeader() {
    const {
      step,
    } = this.props

    return (
      <div className="k-ProjectSimilarCard__grid">
        <Marger top="1" bottom="1">
          <div className="k-ProjectSimilarCard__grid--flex">
            <div className="k-ProjectSimilarCard__refresh">
              <ButtonIcon size="tiny">
                <RefreshIcon className="k-ButtonIcon__svg"
                             strokeClassName="k-Button__svg__stroke"
                             fillClassName="k-ButtonIcon__svg" />
              </ButtonIcon>
            </div>
            <div className="k-ProjectSimilarCard__navigation">
              <div className="k-ProjectSimilarCard__header--step">
                { step }
              </div>
              <div className="k-ProjectSimilarCard__header--button">
                <ButtonIcon className="k-ButtonIcon--verticalArrow"
                            size="tiny">
                  <RightArrowIcon
                    className={ classNames('k-ButtonIcon__svg',
                                           'k-ButtonIcon__svg--miror') } />
                </ButtonIcon>
                <ButtonIcon className="k-ButtonIcon--verticalArrow"
                            size="tiny">
                  <RightArrowIcon className="k-ButtonIcon__svg" />
                </ButtonIcon>
              </div>
            </div>
          </div>
        </Marger>
      </div>
    )
  }

  renderImage() {
    const {
      imageSrc,
    } = this.props

    if (!imageSrc) return

    return (
      <Marger top="2" bottom="1">
        <div className="k-ProjectSimilarCard__grid">
          <img className="k-ProjectSimilarCard__img"
               src={ imageSrc }
               alt="" />
        </div>
      </Marger>
    )
  }

  renderTitle() {
    const {
      title,
      imageSrc,
    } = this.props

    const top = imageSrc ? "1" : "2"

    return(
      <Marger top={ top } bottom="1">
        <Title modifier="quaternary"
               margin={ false }
               tag="p">
          { title }
        </Title>
      </Marger>
    )
  }

  renderDescription() {
    const {
      paragraph,
    } = this.props

    return(
      <div className="k-ProjectSimilarCard__grid">
        { this.renderTitle() }
        { this.renderTags() }
        <Marger top="1" bottom="2">
          <Paragraph modifier="tertiary"
                     margin={ false }>
            { paragraph }
          </Paragraph>
        </Marger>
      </div>
    )
  }

  renderTags() {
    const {
      tags,
    } = this.props

    if (!tags) return

    return (
      <Marger top="1" bottom="1">
        <TagList items={ tags } tiny />
      </Marger>
    )
  }

  renderInfos() {
    const {
      infos,
    } = this.props

    if (!infos) return

    return (
      <div>
        <Separator />
        <Marger top="1.5" bottom="1.5" className="k-ProjectCard__grid--flex">
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
          { info.locked ? <LockIcon width="12" /> : info.value }
        </span>
      </div>
    )
  }

  render() {
    const {
      className,
    } = this.props

    const ProjectSimilarCardClassName = classNames(
      'k-ProjectSimilarCard',
      className,
    )

    return (
      <div className={ ProjectSimilarCardClassName }>
        { this.renderHeader() }
        <Separator />
        { this.renderImage() }
        { this.renderDescription() }
        { this.renderInfos() }
      </div>
    )
  }
}


ProjectSimilarCardComponent.defaultProps = {
  step: "1/5",
  imageSrc: null,
  title: "Lorem ipsum dolor sit amet",
  paragraph: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem \
              accusantium doloremque laudantium",
  tags: null,
  infos: false,
  coloredInfosValues: false,

}

// Add card generic styles.

export const ProjectSimilarCard = card(ProjectSimilarCardComponent, {
  light: true,
  withBorder: true,
  withShadow: true,
  translateOnHover: true,
})
