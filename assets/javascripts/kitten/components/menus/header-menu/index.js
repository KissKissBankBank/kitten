import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Item } from './components/item'
import { Context } from './components/context'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'

const borderStyle = `${pxToRem(1)} solid ${COLORS.line1}`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  border-left: ${({ noBorder }) => (noBorder ? 0 : borderStyle)};
  border-right: ${({ noBorder }) => (noBorder ? 0 : borderStyle)};
`

export const HeaderMenu = ({
  backgroundColors,
  borderSide,
  borderSideOnHover,
  largeItem,
  noBorder,
  children,
}) => (
  <Context.Provider
    value={{
      backgroundColors: backgroundColors,
      borderSide: borderSide,
      borderSideOnHover: borderSideOnHover,
      largeItem: largeItem,
      noBorder: noBorder,
    }}
  >
    <nav role="navigation">
      <List noBorder={noBorder} role="menubar">
        {children}
      </List>
    </nav>
  </Context.Provider>
)

HeaderMenu.Item = Item

HeaderMenu.propTypes = {
  backgroundColors: PropTypes.object,
  borderSide: PropTypes.oneOf(['left', 'right', false]),
  borderSideOnHover: PropTypes.bool,
  largeItem: PropTypes.bool,
  noBorder: PropTypes.bool,
}

HeaderMenu.defaultProps = {
  backgroundColors: {},
  borderSide: 'left',
  borderSideOnHover: true,
  largeItem: false,
  noBorder: false,
}
