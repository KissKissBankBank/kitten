import React, { useState, useEffect } from 'react'
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

export const HeaderMenu = ({ borderSide, largeItem, noBorder, children }) => {
  const [borderSideState, setBorderSide] = useState(borderSide)
  const [largeItemState, setLargeItem] = useState(largeItem)
  const [noBorderState, setNoBorder] = useState(noBorder)

  useEffect(() => {
    setBorderSide(borderSide)
  }, [borderSide])
  useEffect(() => {
    setLargeItem(largeItem)
  }, [largeItem])
  useEffect(() => {
    setNoBorder(noBorder)
  }, [noBorder])

  return (
    <Context.Provider
      value={{
        borderSide: borderSideState,
        largeItem: largeItemState,
        noBorder: noBorderState,
      }}
    >
      <nav role="navigation">
        <List noBorder={noBorderState} role="menubar">
          {children}
        </List>
      </nav>
    </Context.Provider>
  )
}

HeaderMenu.Item = Item

HeaderMenu.propTypes = {
  borderSide: PropTypes.oneOf(['left', 'right']),
  largeItem: PropTypes.bool,
  noBorder: PropTypes.bool,
}

HeaderMenu.defaultProps = {
  borderSide: 'left',
  largeItem: false,
  noBorder: false,
}
