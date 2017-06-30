import React from 'react'
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
import { LeftArrowIcon } from 'kitten/components/icons/left-arrow-icon'


class ProjectSimilarCardComponent extends React.Component {
  renderHeader() {
    return (
      <div className={ classNames('k-ProjectSimilarCard__grid') }>
        <Marger
          top="1"
          bottom="1">
          <div className="k-ProjectSimilarCard__grid--flex">
            <div className="k-ProjectSimilarCard__refresh">
              <ButtonIcon>
                <RefreshIcon />
              </ButtonIcon>
            </div>

            <div className="k-ProjectSimilarCard__navigation">
              <div className="k-ProjectSimilarCard__header--step">
                1/5
              </div>

              <ButtonIcon className={ classNames('k-ButtonIcon--verticalArrow') }
                          size="tiny">
                <LeftArrowIcon className="k-ButtonIcon__svg" />
              </ButtonIcon>

              <ButtonIcon className={ classNames('k-ButtonIcon--verticalArrow') }
                          size="tiny">
                <RightArrowIcon className="k-ButtonIcon__svg" />
              </ButtonIcon>
            </div>
          </div>
        </Marger>

      </div>
    )
  }

  // renderDescription() {
  //   return ()
  // }

  // renderImage() {
  //   return ()
  // }

  // renderTags() {
  //   return ()
  // }

  // renderInfos() {
  //   return (
  //     <div>
  //       <Marger>
  //         { this.renderInfo(this.props.info1) }
  //         { this.renderInfo(this.props.info2) }
  //         { this.renderInfo(this.props.info3) }
  //       </Marger>
  //     </div>
  //   )
  // }

  // renderInfo(info) {
  //   const infoClassName = classNames(
  //     'k-ProjectSimilarCard__info__value',
  //     { }
  //   )
  // }

  render() {
    const ProjectSimilarCardClassName = classNames(
      'k-ProjectSimilarCard',
      this.props.className,
    )

    return (
      <div className={ ProjectSimilarCardClassName }>
        { this.renderHeader() }
        <Separator />
      </div>
    )
  }
}


// Add card generic styles.

export const ProjectSimilarCard = card(ProjectSimilarCardComponent, {
  light: true,
  withBorder: true,
  withShadow: true,
  translateOnHover: true,
})
