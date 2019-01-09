import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Item } from './components/item'
import { Context } from './components/context'
import COLORS from '../../../constants/colors-config'

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid ${COLORS.line1};
  border-bottom: 0;
`

export class HeaderMenu extends Component {
  static Item = Item

  static propTypes = {
    borderSide: PropTypes.oneOf(['left', 'right']),
  }

  static defaultProps = {
    borderSide: 'left',
  }

  constructor(props) {
    super(props)

    this.state = {
      borderSide: props.borderSide,
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.borderSide !== this.props.borderSide) {
      this.setState({ borderSide: this.props.borderSide })
    }
  }

  render() {
    const { children } = this.props

    return (
      <Context.Provider value={this.state}>
        <nav role="navigation">
          <List role="menubar">{children}</List>
        </nav>
      </Context.Provider>
    )
  }
}
