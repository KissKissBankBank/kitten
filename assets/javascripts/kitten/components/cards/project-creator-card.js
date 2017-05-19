import React from 'react'
import classNames from 'classnames'
import { card } from 'kitten/hoc/card'
import { Marger } from 'kitten/components/layout/marger'
import { Status } from 'kitten/components/layout/status'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { ClockIcon } from 'kitten/components/icons/clock-icon'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { ArrowRightIcon } from 'kitten/components/icons/arrow-right-icon'

class ProjectCreatorCardComponent extends React.Component {
  renderDate() {
    const {
      ownerDate,
    } = this.props

    return (
      <div className="k-ProjectCreatorCard__content">
        <ClockIcon />
        <div className="k-ProjectCreatorCard__date">
          { ownerDate }
        </div>
      </div>
    )
  }

  renderStatus() {
    return (
      <Status backgroundColor='#0d9ddb'
              borderColor='#0d9ddb' />
    )
  }

  renderDescription() {
    const {
      ownerTitle,
    } = this.props

    return (
      <div className="k-ProjectCreatorCard__grid">
        <Marger top='1.8'
                bottom='2'>
          <div className="k-ProjectCreatorCard__title">

            { this.renderDate() }

            { this.renderStatus() }

          </div>

          <Paragraph margin={ false }
                     className="k-ProjectCreatorCard__text">
            { ownerTitle }
          </Paragraph>
        </Marger>
      </div>
    )
  }

  renderLink() {
    const {
      linkContent,
      tag,
    } = this.props

    const Tag = tag

    if (!linkContent) return

    return (
      <div className="k-ProjectCreatorCard__link">
        <div className="k-ProjectCreatorCard__grid
                        k-ProjectCreatorCard__grid--withBorderTop">
          <Marger top="1.2" bottom="1.2">
            <div className="k-ProjectCreatorCard__link--flex">
              <div> Voir le project </div>
              <span>
                <ButtonIcon size="tiny" className="k-ButtonIcon--verticalArrow">
                  <ArrowRightIcon className="k-ButtonIcon__svg" />
                </ButtonIcon>
              </span>
            </div>
          </Marger>
        </div>
      </div>
    )
  }

  render() {
    const ProjectCreatorCardClassName = classNames(
      'k-ProjectCreatorCard',
      this.props.className,
    )

    return (
      <div className= { ProjectCreatorCardClassName }>
        { this.renderDescription() }
        { this.renderLink() }
      </div>
    )
  }
}

ProjectCreatorCardComponent.defaultProps = {
  ownerDate: null,
  ownerTitle: null,
  linkContent: null,
  tag: 'a',
}

// Add card generic styles.

export const ProjectCreatorCard = card(ProjectCreatorCardComponent, {
  light: true,
  withBorder: true,
  withShadow: false,
  translateOnHover: true,
  rounded: 'tiny',
})
