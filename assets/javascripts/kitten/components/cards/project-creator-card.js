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
    return (
      <div className="k-ProjectCreatorCard__content">
        <ClockIcon />
        <div className="k-ProjectCreatorCard__date">
          { this.props.date }
        </div>
      </div>
    )
  }

  renderStatus() {
    return (
      <Status backgroundColor={ this.props.statusBackgroundColor }
              borderColor= { this.props.statusBorderColor }>
        { this.props.statusText }
      </Status>
    )
  }

  renderDescription() {
    return (
      <div className="k-ProjectCreatorCard__grid">
        <Marger top="1.8"
                bottom="2">
          <div className="k-ProjectCreatorCard__link--flex">
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
    const target = this.props.isExternal ? { target: '_blank' } : {}

    if (!this.props.linkContent) return

    return (
      <a className="k-ProjectCreatorCard__link"
           href={ this.props.href }
           { ...target }>
        <div className={ classNames('k-ProjectCreatorCard__grid',
                                    'k-ProjectCreatorCard__grid--withBorderTop') }>
          <Marger top="1.2"
                  bottom="1.2"
                  className="k-ProjectCreatorCard__link--flex">
            <div> { this.props.linkText } </div>
            <span>
              <ButtonIcon className={ classNames('k-ButtonIcon--withoutHover',
                                                 'k-ButtonIcon--verticalArrow') }
                          size="tiny">
                <ArrowRightIcon className="k-ButtonIcon__svg" />
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
      <div className= { ProjectCreatorCardClassName }>
        { this.renderDescription() }
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
  statusText: 'Ipsum',
}

// Add card generic styles.

export const ProjectCreatorCard = card(ProjectCreatorCardComponent, {
  light: true,
  withBorder: true,
  withShadow: false,
  translateOnHover: true,
  rounded: 'tiny',
})
