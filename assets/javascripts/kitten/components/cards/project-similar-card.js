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
                <RefreshIcon
                  className="k-ButtonIcon__svg"
                  strokeClassName="k-Button__svg__stroke"
                  fillClassName="k-ButtonIcon__svg" />
              </ButtonIcon>
            </div>

            <div className="k-ProjectSimilarCard__navigation">
              <div className="k-ProjectSimilarCard__header--step">
                { this.props.step }
              </div>

              <div className="k-ProjectSimilarCard__header--button">
                <ButtonIcon className="k-ButtonIcon--verticalArrow"
                            size="tiny">
                  <RightArrowIcon
                    className={ classNames('k-ButtonIcon__svg',
                                           'k-ButtonIcon__svg--miror' )} />
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
    if (!this.props.image) return

    return (
      <Marger top="1.5">
        <div className="k-ProjectSimilarCard__grid">
          <img className="k-ProjectSimilarCard__img"
                src={ this.props.image }
                alt="" />
        </div>
      </Marger>
    )
  }

  renderDescription() {
    const {
      title,
      paragraph,
    } = this.props

    return(
      <Marger top="2" bottom="2">
        <div className="k-ProjectSimilarCard__grid">
          <Title modifier="quaternary"
                 margin={ false }>{ title }</Title>
          { this.renderTags() }
          <Marger top="1">
            <Paragraph modifier="tertiary"
                       margin={ false }>{ paragraph }</Paragraph>
          </Marger>
        </div>
      </Marger>
    )
  }

  renderTags() {
    if (!this.props.tags) return

    return (
      <Marger top=".5">
        <TagList items={ this.props.tags } tiny />
      </Marger>
    )
  }

  renderInfos() {
    if (!this.props.infos) return

    return (
      <div>
        <Separator />
        <Marger top="1.6" bottom="1.6" className="k-ProjectCard__grid--flex">
          { this.props.infos.map(this.renderInfo) }
        </Marger>
      </div>
    )
  }

  renderInfo(info) {
    const infoClassName = classNames(
      'k-ProjectSimilarCard__info__value',
    )

    return (
      <div className={ classNames('k-u-align-center',
                                  'k-ProjectSimilarCard__info' )}>
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
      className,
    ) = this.props

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
  image: null,
  title: "Lorem ipsum dolor sit amet",
  paragraph: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
  tags: null,
  infos: false,

}

// Add card generic styles.

export const ProjectSimilarCard = card(ProjectSimilarCardComponent, {
  light: true,
  withBorder: true,
  withShadow: true,
  translateOnHover: true,
})
