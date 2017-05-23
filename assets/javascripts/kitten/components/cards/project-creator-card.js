import React from 'react'
import classNames from 'classnames'
import { card } from 'kitten/hoc/card'
import { Marger } from 'kitten/components/layout/marger'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { ClockIcon } from 'kitten/components/icons/clock-icon'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { Separator } from 'kitten/components/layout/separator'
import { RightArrowIcon } from 'kitten/components/icons/right-arrow-icon'

class ProjectCreatorCardComponent extends React.Component {
  renderDate() {
    return (
      <div className="k-ProjectCreatorCard__content">
        <ClockIcon />
        <span className="k-ProjectCreatorCard__date">
          { this.props.date }
        </span>
      </div>
    )
  }

  renderStatus() {
    const  { statusBackgroundColor,
             statusBorderColor,
             statusText,
             ...others } = this.props

    const statusStyles = {
      backgroundColor: statusBackgroundColor,
      borderColor: statusBorderColor ? statusBorderColor : statusBackgroundColor
    }

    return (
      <div className="k-ProjectCreatorCard__status">
        <span className="k-ProjectCreatorCard__status--icon"
              style={ statusStyles }>
        </span>
        <div className="k-ProjectCreatorCard__status--text">
          { statusText }
        </div>
      </div>
    )
  }

  renderDescription() {
    return (
      <div className="k-ProjectCreatorCard__grid">
        <Marger top="1.8"
                bottom="2">
          <div className="k-ProjectCreatorCard__grid--flex">
            { this.renderDate() }
            { this.renderStatus() }
          </div>
          <Paragraph margin={ false }
                     className="k-ProjectCreatorCard__text">
            { this.props.children }
          </Paragraph>
        </Marger>
      </div>
    )
  }

  renderLink() {
    if (!this.props.linkContent) return

    const target = this.props.isExternal ? { target: '_blank' } : {}

    return (
      <a className="k-ProjectCreatorCard__link"
         href={ this.props.href }
         { ...target }>
        <div className="k-ProjectCreatorCard__grid">
          <Marger top="1.2"
                  bottom="1.2"
                  className="k-ProjectCreatorCard__grid--flex">
            <span>{ this.props.linkText }</span>
            <span>
              <ButtonIcon className={ classNames('k-ButtonIcon--withoutHover',
                                                 'k-ButtonIcon--verticalArrow') }
                          size="tiny">
                <RightArrowIcon className="k-ButtonIcon__svg" />
              </ButtonIcon>
            </span>
          </Marger>
        </div>
      </a>
    )
  }

  render() {
    const ProjectCreatorCardClassName = classNames(
      'k-ProjectCreatorCard',
      this.props.className,
    )

    return (
      <div className={ ProjectCreatorCardClassName }>
        { this.renderDescription() }
        <Separator />
        { this.renderLink() }
      </div>
    )
  }
}

ProjectCreatorCardComponent.defaultProps = {
  date: null,
  children: null,
  linkContent: null,
  href: '#',
  isExternal: false,
  linkText: '',
  statusBackgroundColor: null,
  statusBorderColor: null,
  statusText: 'Status',
}

export const ProjectCreatorCard = card(ProjectCreatorCardComponent, {
  light: true,
  withBorder: true,
  withShadow: false,
  translateOnHover: true,
  rounded: 'tiny',
})
