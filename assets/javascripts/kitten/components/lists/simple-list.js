import React from 'react'

class SimpleList extends React.Component {
  renderItem(item, i) {
    return(
      <li key={ i } role="menuitem">
        { item }
      </li>
    )
  }

  render() {
    const { list, ...others } = this.props
    const items = list.map(this.renderItem)
    const defaultItem = ('No choice')

    return(
      <ul { ...others }>
        { items.length ? items : defaultItem }
      </ul>
    )
  }
}

export default SimpleList
