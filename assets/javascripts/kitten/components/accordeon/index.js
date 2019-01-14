import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Item } from './components/item'
import { Header } from './components/header'
import { Content } from './components/content'
import { Context } from './components/context'
import { Marger } from '../layout/marger'
import { getReactElementsByType } from '../../helpers/react/react-elements'

export class Accordeon extends Component {
  static Item = Item
  static Header = Header
  static Content = Content

  constructor(props) {
    super(props)

    this.state = {
      selectedItem: props.selectedItem,
      updateSelectedItem: this.updateSelectedItem,
      isAnimated: props.isAnimated,
    }
  }

  componentDidUpdate = prevProps => {
    if (prevProps.selectedItem !== this.props.selectedItem) {
      this.updateSelectedItem(this.props.selectedItem)
    }
    if (prevProps.isAnimated !== this.props.isAnimated) {
      this.setState({ isAnimated: this.props.isAnimated })
    }
  }

  updateSelectedItem = newSelectedItemId => {
    this.setState({ selectedItem: newSelectedItemId })
    this.props.onChange(newSelectedItemId)
  }

  render() {
    const { children } = this.props
    const items = getReactElementsByType({ children, type: Accordeon.Item })

    return (
      <Context.Provider value={this.state}>
        {items.map((item, index) => (
          <Marger key={index} bottom={index === items.length - 1 ? 0 : 1.5}>
            {React.cloneElement(item, { id: item.props.id || index })}
          </Marger>
        ))}
      </Context.Provider>
    )
  }
}

Accordeon.propTypes = {
  selectedItem: PropTypes.number,
  onChange: PropTypes.func,
  isAnimated: PropTypes.bool,
}

Accordeon.defaultProps = {
  selectedItem: null,
  onChange: () => {},
  isAnimated: true,
}
