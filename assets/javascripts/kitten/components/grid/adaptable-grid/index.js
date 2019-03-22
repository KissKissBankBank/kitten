import React, { createContext, useState, useEffect, useContext } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { NUM_COLUMNS, GUTTER } from '../../../constants/grid-config'
import { ScreenConfig } from '../../../constants/screen-config'

const GridProperties = createContext({})

export const AdaptableGrid = ({
  children,
  gutter = GUTTER,
  colNumber = NUM_COLUMNS,
  colAlign = 'left',
  ...other
}) => {
  const gridProperties = {
    colAlign,
    colNumber: colNumber,
    gutter: gutter,
  }
  return (
    <StyledGrid gutter={gutter} colAlign={colAlign}>
      <GridProperties.Provider value={gridProperties}>
        {children}
      </GridProperties.Provider>
    </StyledGrid>
  )
}

export const AdaptableGridCol = ({ children, col, offset, ...other }) => {
  const [styles, setStyles] = useState(null)
  const { colAlign, colNumber, gutter } = useContext(GridProperties)
  const marginDirection = colAlign === 'right' ? 'right' : 'left'

  useEffect(() => {
    const props = { ...other }

    const stylesByMediaQuery = Object.keys(ScreenConfig).map(size => {
      const mediaQuery = size.toLowerCase()
      const col = props[`col-${mediaQuery}`]
      const offset = props[`offset-${mediaQuery}`]

      if (!col && !offset) {
        return false
      }

      return css`
        @media (min-width: ${ScreenConfig[size].min}px) {
          ${col &&
            css`
              width: ${(col * 100) / colNumber}%;
            `}
          ${offset > 0 &&
            css`
              margin-${marginDirection}: ${(offset * 100) / colNumber}%;
            `}
          ${offset === 0 &&
            css`
              margin-${marginDirection}: 0;
            `}
        }
      `
    })

    setStyles(stylesByMediaQuery)
  }, [])

  return (
    <StyledGridCol
      col={col || colNumber}
      offset={offset}
      gutter={gutter}
      colNumber={colNumber}
      colAlign={colAlign}
      marginDirection={marginDirection}
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
  display: block;
  box-sizing: border-box;
  padding-left: ${({ gutter }) => gutter / 2}px;
  padding-right: ${({ gutter }) => gutter / 2}px;
  flex: 0 0 auto;
  width: ${({ col, colNumber }) => (col * 100) / colNumber}%;
  ${({ offset, colNumber, colAlign, marginDirection }) => {
    if (!offset) return
    return css`margin-${marginDirection}: ${(offset * 100) / colNumber}%;`
  }}
  ${({ stylesByMediaQuery }) => stylesByMediaQuery}
`
