import React from 'react'
import classNames from 'classnames'

export class KarlMenuContent extends React.Component {
  constructor(props) {
    super(props)

    this.renderBrandCategory = this.renderBrandCategory.bind(this)
    this.renderComponentCategory = this.renderComponentCategory.bind(this)
  }

  renderBrandCategory(category) {
    return <KarlMenuCategory href="branding" { ...category } />
  }

  renderComponentCategory(category) {
    return <KarlMenuCategory href="components" { ...category } />
  }

  render() {
    return (
      <nav className="karl-Menu__content">
        <div className="k-u-clearfix"></div>
        <a href="branding" className="karl-Menu__listTitle">
          Branding
        </a>
        <ul>
          { this.props.brandingCategories.map(this.renderBrandCategory) }
        </ul>
        <a href="components" className="karl-Menu__listTitle">
          Components
        </a>
        <ul>
          { this.props.componentCategories.map(this.renderComponentCategory) }
        </ul>
      </nav>
    )
  }
}

class KarlMenuCategory extends React.Component {
  constructor(props) {
    super(props)

    this.state = { opened: false }

    this.renderComponent = this.renderComponent.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  renderComponent(component) {
    return (
      <li>
        <a href={ `${this.props.href}#${component.path}` }
           className="karl-Menu__subListItem karl-Menu__link">
           { component.name }
        </a>
      </li>
    )
  }

  handleClick() {
    this.setState({ opened: !this.state.opened })
  }

  render() {
    const karlMenuCategoryClassName = classNames(
      'karl-Menu__subList',
      {
        'is-opened': this.state.opened,
      },
    )

    const karlMenuItemClassName = classNames(
      'karl-Menu__listItem with-arrow',
      {
        'is-opened': this.state.opened,
      },
    )

    return (
      <li className="karl-Menu__list">
        <a href={ `${this.props.href}#${this.props.id}` }
           className={ karlMenuItemClassName }
           onClick= { this.handleClick }>
          { this.props.label }
        </a>
        <ul className={ karlMenuCategoryClassName }>
          { this.props.components.map(this.renderComponent) }
        </ul>
      </li>
    )
  }
}
