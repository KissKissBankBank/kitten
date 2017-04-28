import React from 'react'
import classNames from 'classnames'

export class KarlMenuContent extends React.Component {
  constructor(props) {
    super(props)

    this.renderBrandCategory = this.renderBrandCategory.bind(this)
    this.renderComponentCategory = this.renderComponentCategory.bind(this)
  }

  renderBrandCategory(category) {
    return <KarlMenuCategory { ...category } />
  }

  renderComponentCategory(category) {
    return <KarlMenuCategory { ...category } />
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
        <a href="component" className="karl-Menu__listTitle">
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

    this.renderBrandComponent = this.renderBrandComponent.bind(this)
    this.renderElementComponent = this.renderElementComponent.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  renderBrandComponent(component) {
    return (
      <li>
        <a href={ `branding#${component.path}` }
           className="karl-Menu__subListItem karl-Menu__link">
           { component.name }
        </a>
      </li>
    )
  }

  renderElementComponent(component) {
    return (
      <li>
        <a href={ `component#${component.path}` }
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
        <a href={ `branding#${this.props.id}` }
           className={ karlMenuItemClassName }
           onClick= { this.handleClick }>
          { this.props.label }
        </a>
        <ul className={ karlMenuCategoryClassName }>
          { this.props.components.map(this.renderBrandComponent) }
        </ul>
      </li>
    )

    return (
      <li className="karl-Menu__list">
        <a href={ `component#${this.props.id}` }
           className={ karlMenuItemClassName }
           onClick= { this.handleClick }>
          { this.props.label }
        </a>
        <ul className={ karlMenuCategoryClassName }>
          { this.props.components.map(this.renderElementComponent) }
        </ul>
      </li>
    )
  }
}

//   <%= link_to "Component", components_path, class: "karl-Menu__listTitle" %>
//   <ul data-karl-menu-list>
//     <% Kitten.configuration.component_categories.each do |id:, label:, components:| %>
//       <li class="karl-Menu__list">
//         <a href="components#<%= id %>"
//            class="karl-Menu__listItem" data-karl-menu-link
//           <%= "with-arrow" if components.any? %>"><%= label %></a>
//         <ul class="karl-Menu__subList">
//           <% components.each do |component_path| %>
//             <li>
//               <a href="components#<%= component_path %>"
//                  class="karl-Menu__subListItem karl-Menu__link"
//                  data-karl-menu-link><%= default_title(component_path) %>
//               </a>
//             </li>
//           <% end %>
//         </ul>
//       </li>
//     <% end %>
//   </ul>
// </nav>
