import React from 'react'
import classNames from 'classnames'
import { card } from '../../../hoc/card'
import { Marger } from '../../../components/layout/marger'
import { ClockIcon } from '../../../components/icons/clock-icon'
import { Paragraph } from '../../../components/typography/paragraph'
import { ButtonIcon } from '../../../components/buttons/button-icon'
import { Separator } from '../../../components/layout/separator'
import { ArrowIcon } from '../../../components/icons/arrow-icon'

class ProjectCreatorCardComponent extends React.Component {
  renderDate() {
    if (!this.props.date) return

    return (
      <div className="k-ProjectCreatorCard__content">
        <ClockIcon width="10px" height="10px" />
        <span className="k-ProjectCreatorCard__date">{this.props.date}</span>
      </div>
    )
  }

  renderStatus() {
    if (!this.props.statusText) return

    const { statusBackgroundColor, statusBorderColor, statusText } = this.props

    const statusStyles = {
      backgroundColor: statusBackgroundColor,
      borderColor: statusBorderColor
        ? statusBorderColor
        : statusBackgroundColor,
    }

    return (
      <div className="k-ProjectCreatorCard__status">
        <span
          className="k-ProjectCreatorCard__status--icon"
          style={statusStyles}
        />
        <div className="k-ProjectCreatorCard__status--text">{statusText}</div>
      </div>
    )
  }

  renderDescription() {
    return (
      <div className="k-ProjectCreatorCard__grid">
        <Marger top="2" bottom="1">
          <div className="k-ProjectCreatorCard__grid--flexEnd">
            {this.renderDate()}
            {this.renderStatus()}
          </div>
        </Marger>
        <Marger top="1" bottom="2">
          <Paragraph margin={false}>{this.props.children}</Paragraph>
        </Marger>
      </div>
    )
  }

  renderLink() {
    if (!this.props.href) return

    const target = this.props.isExternal ? { target: '_blank' } : {}

    return (
      <a
        className="k-ProjectCreatorCard__link"
        href={this.props.href}
        {...target}
      >
        <Separator darker />
        <div className="k-ProjectCreatorCard__grid">
          <Marger
            top="1.2"
            bottom="1.2"
            className="k-ProjectCreatorCard__grid--flex"
          >
            {this.props.linkText}
            <ButtonIcon size="tiny" withoutHover verticalArrow>
              <ArrowIcon className="k-ButtonIcon__svg" />
            </ButtonIcon>
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
      <div className={ProjectCreatorCardClassName}>
        {this.renderDescription()}
        {this.renderLink()}
      </div>
    )
  }
}

export const ProjectCreatorCard = props => {
  const ProjectCreatorCardContent = card(ProjectCreatorCardComponent)
  return (
    <ProjectCreatorCardContent
      withDarkBorder={!!props.href}
      light
      withBorder
      withShadow={false}
      translateOnHover
      rounded={'tiny'}
      {...props}
    />
  )
}

ProjectCreatorCard.defaultProps = {
  date: null,
  children: null,
  href: null,
  isExternal: false,
  linkText: null,
  statusBackgroundColor: null,
  statusBorderColor: null,
  statusText: 'Status',
}
