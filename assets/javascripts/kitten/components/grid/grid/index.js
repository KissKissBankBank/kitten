import React from 'react'
import styled, { css } from 'styled-components'
import classNames from 'classnames'
import { pxToRem } from '../../../helpers/utils/typography'
import {
  ScreenConfig,
  ORDERED_SCREEN_SIZES,
} from '../../../constants/screen-config'
import { GUTTER, NUM_COLUMNS } from '../../../constants/grid-config'

const StyledGrid = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  margin-right: ${pxToRem(-GUTTER / 2)};
  margin-left: ${pxToRem(-GUTTER / 2)};

  .k-Grid__col {
    box-sizing: border-box;
    flex: 0 0 auto;
    padding-right: ${pxToRem(GUTTER / 2)};
    padding-left: ${pxToRem(GUTTER / 2)};
  }

  ${[...Array(NUM_COLUMNS + 1).keys()].map(
    column => css`
      .k-Grid__col--${column} {
        flex-basis: calc((100% / ${NUM_COLUMNS}) * ${column});
        max-width: calc((100% / ${NUM_COLUMNS}) * ${column});
      }
      .k-Grid__col--offset-${column} {
        margin-left: calc((100% / ${NUM_COLUMNS}) * ${column});
      }
    `,
  )}

  ${() =>
    ORDERED_SCREEN_SIZES.map(
      media =>
        media !== ORDERED_SCREEN_SIZES[0] &&
        css`
          @media (min-width: ${pxToRem(ScreenConfig[media].min)}) {
            ${[...Array(NUM_COLUMNS + 1).keys()].map(
              column => css`
                .k-Grid__col--${column + '-' + media.toLowerCase()} {
                  flex-basis: calc((100% / ${NUM_COLUMNS}) * ${column});
                  max-width: calc((100% / ${NUM_COLUMNS}) * ${column});
                }
                .k-Grid__col--offset-${column + '-' + media.toLowerCase()} {
                  margin-left: calc((100% / ${NUM_COLUMNS}) * ${column});
                }
              `,
            )}
          }
        `,
    )}
`

export const Grid = ({ className, ...others }) => (
  <StyledGrid className={classNames('k-Grid', className)} {...others} />
)

export const GridCol = ({ className, ...props }) => {
  const { col, offset, ...others } = props

  const classByMediaQuery = () => {
    const classNamesByMediaQuery = Object.keys(ScreenConfig).map(size => {
      const mediaQuery = size.toLowerCase()
      const col = props[`col-${mediaQuery}`]
      const offset = props[`offset-${mediaQuery}`]

      return classNames(classNamesByMediaQuery, {
        [`k-Grid__col--${col}-${mediaQuery}`]: col,
        [`k-Grid__col--offset-${offset}-${mediaQuery}`]:
          !!offset || offset === 0,
      })
    })

    return classNamesByMediaQuery
  }

  // Remove unknown props in others.
  Object.keys(ScreenConfig).map(size => {
    const mediaQuery = size.toLowerCase()
    delete others[`col-${mediaQuery}`]
    delete others[`offset-${mediaQuery}`]
  })

  return (
    <div
      {...others}
      className={classNames(
        'k-Grid__col',
        {
          [`k-Grid__col--${col}`]: col,
          [`k-Grid__col--offset-${offset}`]: offset,
        },
        classByMediaQuery(),
        className,
      )}
    />
  )
}

Grid.defaultProps = {
  className: null,
}

GridCol.defaultProps = {
  col: '12',
  offset: null,
  className: null,
}
