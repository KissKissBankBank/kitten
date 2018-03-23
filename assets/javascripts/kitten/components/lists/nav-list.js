import React from 'react'

export class NavList extends React.Component {
  renderItem(item, i) {
    return (
      <li key={i} role="menuitem">
        {item}
      </li>
    )
  }

  render() {
    const { list, ...others } = this.props
    const items = list.map(this.renderItem)
    const defaultItem = 'No choice'

    return (
      <nav role="navigation">
        <ul {...others}>{items.length ? items : defaultItem}</ul>
      </nav>
    )
  }
}

// DEPRECATED: do not use default export.
export default NavList
