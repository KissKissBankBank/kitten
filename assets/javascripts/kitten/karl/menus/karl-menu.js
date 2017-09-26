import React from 'react'
import classNames from 'classnames'
import { KarlMenuHeader } from 'kitten/karl/headers/karl-header'

export class KarlMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = { opened: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ opened: !this.state.opened })
  }

  renderShadow() {
    if (this.state.opened)
      return <div className="karl-MenuShadow" onClick={ this.handleClick } />
  }

  render() {
    const karlMenuHeaderClassName = classNames(
      'karl-Menu',
      {
        'is-opened': this.state.opened,
      },
    )

    return (
      <div>
        <div className={ karlMenuHeaderClassName }>
          <KarlMenuHeader onButtonClick={ this.handleClick } currentPage={ this.props.currentPage } />
          <KarlMenuContent
            onMenuItemClick={ this.handleClick }
            brandingCategories={ this.props.brandingCategories }
            componentCategories={ this.props.componentCategories } />
        </div>

        { this.renderShadow() }
      </div>
    )
  }
}

export class KarlMenuContent extends React.Component {
  constructor(props) {
    super(props)

    this.renderComponentCategory = this.renderComponentCategory.bind(this)
  }

  renderComponentCategory(category) {
    return <KarlMenuCategory key={ category.id }
                             onMenuItemClick={ this.props.onMenuItemClick }
                             { ...category } />
  }

  render() {
    return (
      <nav className="karl-Menu__content">
        <a href="#branding"
           className="karl-Menu__listTitle"
           onClick={ this.props.onMenuItemClick }>
          Branding
        </a>
        <ul>
          { this.props.brandingCategories.map(this.renderComponentCategory) }
        </ul>
        <a href="#components"
           className="karl-Menu__listTitle"
           onClick={ this.props.onMenuItemClick }>
          Components
        </a>
        <ul>
          { this.props.componentCategories.map(this.renderComponentCategory) }
        </ul>
      </nav>
    )
  }
}

KarlMenuContent.defaultProps = {
  brandingCategories: [],
  componentCategories: [],
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
      <li key={ component.path }>
        <a href={ `#${component.path}` }
           className="karl-Menu__subListItem karl-Menu__link"
           onClick={ this.props.onMenuItemClick }>
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
        <a href={ `#${this.props.id}` }
           className={ karlMenuItemClassName }
           onClick={ this.handleClick }>
          { this.props.label }
        </a>
        <ul className={ karlMenuCategoryClassName }>
          { this.props.components.map(this.renderComponent) }
        </ul>
      </li>
    )
  }
}
