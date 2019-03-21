import React, { createContext, useState, useEffect, useContext } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import { NUM_COLUMNS, GUTTER } from '../../../constants/grid-config'
import { ScreenConfig } from '../../../constants/screen-config'

const GridColNumber = createContext(NUM_COLUMNS)
const GridGutter = createContext(GUTTER)
const GridAlign = createContext('left')

export const Grid = ({
  children,
  gutter,
  colNumber,
  colAlign = 'left',
  ...other
}) => {
  return (
    <StyledGrid gutter={gutter} colAlign={colAlign}>
      <GridColNumber.Provider value={colNumber || NUM_COLUMNS}>
        <GridGutter.Provider value={gutter || GUTTER}>
          <GridAlign.Provider value={colAlign}>{children}</GridAlign.Provider>
        </GridGutter.Provider>
      </GridColNumber.Provider>
    </StyledGrid>
  )
}

export const GridCol = ({ children, col, offset, ...other }) => {
  const colNumber = useContext(GridColNumber)
  const gutter = useContext(GridGutter)
  const colAlign = useContext(GridAlign)
  const [styles, setStyles] = useState(null)

  useEffect(() => {
    const props = { ...other }

    const stylesByMediaQuery = Object.keys(ScreenConfig).map(size => {
      const mediaQuery = size.toLowerCase()
      const col = props[`col-${mediaQuery}`]
      const offset = props[`offset-${mediaQuery}`]
      const marginDirection = colAlign === 'right' ? 'right' : 'left'

      if (!col && !offset) {
        return false
      }

      return css`
        @media (min-width: ${ScreenConfig[size].min}px) {
          ${col &&
            css`
              width: ${(col * 100) / colNumber}%;
            `}
          ${offset &&
            css`margin-${marginDirection}: ${(offset * 100) / colNumber}%;`}
        }
      `
    })

    setStyles(stylesByMediaQuery)
  }, [])

  return (
    <StyledGridCol
      col={col}
      offset={offset}
      gutter={gutter}
      colNumber={colNumber}
      colAlign={colAlign}
      props={{ ...other }}
      stylesByMediaQuery={styles}
    >
      {children}
    </StyledGridCol>
  )
}

const StyledGrid = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ colAlign }) => colAlign};
  margin-left: ${({ gutter }) => gutter / 2}px;
  margin-right: ${({ gutter }) => gutter / 2}px;
`

const StyledGridCol = styled.div`
  ${({ offset, colNumber, colAlign }) => {
    if (!offset) return
    const marginDirection = colAlign === 'right' ? 'right' : 'left'
    return css`margin-${marginDirection}: ${(offset * 100) / colNumber}%;`
  }}
  width: ${({ col, colNumber }) => (col * 100) / colNumber}%;
  display: block;
  box-sizing: border-box;
  padding-left: ${({ gutter }) => gutter / 2}px;
  padding-right: ${({ gutter }) => gutter / 2}px;
  flex: 0 0 auto;
  ${({ stylesByMediaQuery }) => stylesByMediaQuery}
`
