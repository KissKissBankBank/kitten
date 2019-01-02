import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Item } from './components/item'
import COLORS from '../../../constants/colors-config'

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid ${COLORS.line1};
  border-bottom: 1px solid ${COLORS.line1};
`

export class HeaderMenu extends Component {
  static Item = Item

  static propTypes = {
    selectedBorderSide: PropTypes.oneOf(['left', 'right']),
  }

  static defaultProps = {
    selectedBorderSide: 'left',
  }

  render() {
    const { children, selectedBorderSide } = this.props

    return (
      <nav>
        <List selectedBorderSide={selectedBorderSide}>{children}</List>
      </nav>
    )
  }
}
