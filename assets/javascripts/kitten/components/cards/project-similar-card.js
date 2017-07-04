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
  renderHeader() {
    return (
      <div className="k-ProjectSimilarCard__grid">
        <Marger
          top="1"
          bottom="1">
          <div className="k-ProjectSimilarCard__grid--flex">
            <div className="k-ProjectSimilarCard__refresh">
              <ButtonIcon size="tiny">
                <RefreshIcon className="k-ButtonIcon__svg"/>
              </ButtonIcon>
            </div>

            <div className="k-ProjectSimilarCard__navigation">
              <div className="k-ProjectSimilarCard__header--step">
                1/5
              </div>

              <div className="k-ProjectSimilarCard__header--button">
                <ButtonIcon className={ classNames('k-ButtonIcon--verticalArrow') }
                            size="tiny">
                  <RightArrowIcon className="k-ButtonIcon__svg k-ButtonIcon__svg--miror" />
                </ButtonIcon>

                <ButtonIcon className={ classNames('k-ButtonIcon--verticalArrow') }
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
    if (!this.props.image) return

    return (
      <div className="k-ProjectSimilarCard__grid">
        <Marger top="1.5" bottom="1.3">
          <img className="k-ProjectSimilarCard__img"
                src={ this.props.image }
                alt="" />
        </Marger>
      </div>
    )
  }

  renderDescription() {
    const {
      title,
      text,
    } = this.props

    return(
      <Marger bottom="2">
        <div className="k-ProjectSimilarCard__grid">
          <Title modifier="quaternary"
                 margin={ false }>{ title }</Title>
          { this.renderTags() }
          <Paragraph modifier="tertiary"
                     margin={ false }>{ text }</Paragraph>
        </div>
      </Marger>
    )
  }

  renderTags() {
    if (!this.props.tags) return

    return (
      <Marger top=".5" bottom="1">
        <TagList items={ this.props.tags } tiny />
      </Marger>
    )
  }

  renderInfos() {
    return (
      <Marger top="1.6" bottom="1.6" className="k-ProjectCard__grid--flex">
        { this.renderInfo(this.props.info1) }
        { this.renderInfo(this.props.info2) }
        { this.renderInfo(this.props.info3) }
      </Marger>
    )
  }

  renderInfo(info) {
    const infoClassName = classNames(
      'k-ProjectSimilarCard__info__value',
      { 'k-u-color-primary1': this.props.coloredInfosValues },
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
    const ProjectSimilarCardClassName = classNames(
      'k-ProjectSimilarCard',
      this.props.className,
    )

    return (
      <div className={ ProjectSimilarCardClassName }>
        { this.renderHeader() }
        <Separator />
        { this.renderImage() }
        { this.renderDescription() }
        <Separator />
        { this.renderInfos() }
      </div>
    )
  }
}


ProjectSimilarCardComponent.defaultProps = {
  image: 'https://placehold.it/400x200/4a84ff/4a84ff',
  title: "Lorem ipsum dolor sit amet",
  text:  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
  tags: [{ key: 'tag-1', item: 'Tag 1' }, { key: 'tag-2', item: 'Tag 2', }],
  info1: { value: 'xx', text: 'Info 1', locked: false },
  info2: { value: 'xx', text: 'Info 2', locked: false },
  info3: { value: 'xx', text: 'Info 3', locked: false },
}

// Add card generic styles.

export const ProjectSimilarCard = card(ProjectSimilarCardComponent, {
  light: true,
  withBorder: true,
  withShadow: true,
  translateOnHover: true,
})
