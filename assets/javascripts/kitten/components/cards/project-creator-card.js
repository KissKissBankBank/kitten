import React from 'react'
import classNames from 'classnames'
import { card } from 'kitten/hoc/card'
import { Marger } from 'kitten/components/layout/marger'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { StudingIcon } from 'kitten/components/icons/studing-icon'
import { Paragraph } from 'kitten/components/typography/paragraph'
import LinkBox from 'kitten/components/box/link-box'

class ProjectCreatorCardComponent extends React.Component {
  renderDescription() {
    const {
      ownerTitle,
    } = this.props

    return (
      <div className="k-ProjectCreatorCard__grid">
        <Marger top='1.8'
                bottom='2'>
          { this.renderDate() }
          <div className="k-ProjecrCreatorCard__date"> Le 15 mars 2017 </div>

          <Paragraph margin={ false }>
            { ownerTitle }
          </Paragraph>
        </Marger>
      </div>
    )
  }

  renderDate() {
    const {
      ownerDate,
    } = this.props

    if (!this.props.date) return

    return (
      <div>
        <StudingIcon />
        { ownerDate }
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
      <Tag margin={ false }>
        <LinkBox> { linkContent } </LinkBox>
      </Tag>
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
  ownerTitle: 'Title',
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
