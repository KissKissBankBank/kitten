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

export const HeaderMenu = ({
  backgroundColors,
  borderSide,
  borderSideOnHover,
  largeItem,
  noBorder,
  children,
}) => {
  const [backgroundColorsState, setBackgroundColors] = useState(
    backgroundColors,
  )
  const [borderSideState, setBorderSide] = useState(borderSide)
  const [largeItemState, setLargeItem] = useState(largeItem)
  const [noBorderState, setNoBorder] = useState(noBorder)
  const [borderSideOnHoverState, setBorderSideOnHover] = useState(
    borderSideOnHover,
  )

  useEffect(() => {
    setBorderSide(borderSide)
  }, [borderSide])

  useEffect(() => {
    setBorderSideOnHover(borderSideOnHover)
  }, [borderSideOnHover])

  useEffect(() => {
    setLargeItem(largeItem)
  }, [largeItem])

  useEffect(() => {
    setNoBorder(noBorder)
  }, [noBorder])

  useEffect(() => {
    setNoBorder(noBorder)
  }, [noBorder])

  return (
    <Context.Provider
      value={{
        backgroundColors: backgroundColorsState,
        borderSide: borderSideState,
        borderSideOnHover: borderSideOnHoverState,
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
