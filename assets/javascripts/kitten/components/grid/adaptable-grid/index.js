import React, { createContext, useState, useEffect, useContext } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { NUM_COLUMNS, GUTTER } from '../../../constants/grid-config'
import { ScreenConfig } from '../../../constants/screen-config'
import { pxToRem } from '../../../helpers/utils/typography'

const GridProperties = createContext({})

export const AdaptableGrid = ({
  children,
  gutter,
  colNumber,
  colAlign,
  as,
  className,
}) => {
  const gridProperties = { colAlign, colNumber, gutter }
  return (
    <StyledGrid
      gutter={gutter}
      colAlign={colAlign}
      as={as}
      className={className}
    >
      <GridProperties.Provider value={gridProperties}>
        {children}
      </GridProperties.Provider>
    </StyledGrid>
  )
}

export const AdaptableGridCol = ({
  children,
  col,
  offset,
  as,
  className,
  ...other
}) => {
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
        @media (min-width: ${pxToRem(ScreenConfig[size].min)}) {
          ${
            col &&
            css`
              width: ${(col * 100) / colNumber}%;
            `
          }
          ${
            offset > 0 &&
            css`
              margin-${marginDirection}: ${(offset * 100) / colNumber}%;
            `
          }
          ${
            offset === 0 &&
            css`
              margin-${marginDirection}: 0;
            `
          }
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
      as={as}
      className={className}
    >
      {children}
    </StyledGridCol>
  )
}

AdaptableGrid.propTypes = {
  gutter: PropTypes.number,
  colNumber: PropTypes.number,
  colAlign: PropTypes.oneOf(['left', 'right', 'center']),
}

AdaptableGrid.defaultProps = {
  gutter: GUTTER,
  colNumber: NUM_COLUMNS,
  colAlign: 'left',
}

const StyledGrid = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ colAlign }) => colAlign};
  margin-left: ${({ gutter }) => pxToRem(-gutter / 2)};
  margin-right: ${({ gutter }) => pxToRem(-gutter / 2)};
`

const StyledGridCol = styled.div`
  display: block;
  box-sizing: border-box;
  padding-left: ${({ gutter }) => pxToRem(gutter / 2)};
  padding-right: ${({ gutter }) => pxToRem(gutter / 2)};
  flex: 0 0 auto;
  width: ${({ col, colNumber }) => (col * 100) / colNumber}%;
  ${({ offset, colNumber, marginDirection }) => {
    if (!offset) return
    return css`margin-${marginDirection}: ${(offset * 100) / colNumber}%;`
  }}
  ${({ stylesByMediaQuery }) => stylesByMediaQuery}
`
