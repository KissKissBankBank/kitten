import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'

import COLORS from './../../../constants/colors-config'
import { pxToRem, stepToRem } from './../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../constants/typography-config'

const StyledHorizontalTimeline = styled.dl`
  display: grid;
  padding: 0;
  margin: 0;
  white-space: initial;

  grid-template-columns:
    [col-start] repeat(var(--HorizontalTimeline-columnsCount), 1fr)
    [col-end] ${pxToRem(18)};
  grid-template-rows: 1fr [row-center] ${pxToRem(14)} [row-center-end] 1fr;

  grid-gap: ${pxToRem(10)} 0;

  .k-HorizontalTimeline__year,
  .k-HorizontalTimeline__block {
    padding: 0;
    margin: 0;
  }

  .k-HorizontalTimeline__year:nth-of-type(even),
  .k-HorizontalTimeline__block:nth-of-type(odd) {
    grid-row: 1 / span 1;
    align-self: end;
  }

  .k-HorizontalTimeline__block:nth-of-type(even),
  .k-HorizontalTimeline__year:nth-of-type(odd) {
    grid-row: 3 / span 1;
    align-self: start;
  }

  .k-HorizontalTimeline__year {
    position: relative;
    display: flex;
    gap: ${pxToRem(5)};
    align-items: center;
    justify-self: start;
    width: ${pxToRem(50)};
    margin-left: calc((${pxToRem(50)} - ${pxToRem(15)}) / -2);
    z-index: 3;

    ${TYPOGRAPHY.fontStyles['500']}
    font-size: ${stepToRem(-1)};
  }
  .k-HorizontalTimeline__year:nth-of-type(even) {
    flex-direction: column;
    margin-bottom: ${pxToRem(-24)};
  }
  .k-HorizontalTimeline__year:nth-of-type(odd) {
    margin-top: ${pxToRem(-24)};
    flex-direction: column-reverse;
  }

  .k-HorizontalTimeline__year::after {
    content: '';
    width: ${pxToRem(14)};
    height: ${pxToRem(14)};
    border-radius: var(--border-radius-rounded);
    border: ${pxToRem(4)} solid ${COLORS.primary1};
    display: block;
    grid-row: 2;
    box-sizing: border-box;
    background-color: white;
    box-shadow: 0 0 0 ${pxToRem(3)} white;
  }

  .k-HorizontalTimeline__year:nth-of-type(1)::after {
    grid-column: 1;
  }

  .k-HorizontalTimeline__block {
    min-width: ${pxToRem(210)};
  }
  .k-HorizontalTimeline__block:not(:last-of-type) {
    margin-right: calc(${pxToRem(-15)} - (${pxToRem(50)} - ${pxToRem(15)}) / 2);
  }

  .k-HorizontalTimeline__block:nth-of-type(even)::before,
  .k-HorizontalTimeline__block:nth-of-type(odd)::after {
    content: '';
    display: block;
    height: ${pxToRem(20)};
    width: ${pxToRem(2)};
    background-color: ${COLORS.primary4};
    margin-left: calc((${pxToRem(16)} - ${pxToRem(2)}) / 2);
  }
  .k-HorizontalTimeline__block:nth-of-type(even)::before {
    margin-bottom: ${pxToRem(10)};
  }
  .k-HorizontalTimeline__block:nth-of-type(odd)::after {
    margin-top: ${pxToRem(10)};
  }

  /* LINE */
  .k-HorizontalTimeline__line {
    grid-column: col-start / col-end;
    grid-row: row-center;
    align-self: center;
    background-color: ${COLORS.primary4};
    display: block;
    height: ${pxToRem(4)};
  }

  /* ELLIPSIS MARKERS */
  .k-HorizontalTimeline__ellipsis {
    display: block;
    position: relative;
    grid-row: row-center;
    grid-column: var(--HorizontalTimeline-ellipsis-column, col-end);
    justify-self: center;
    z-index: 5;
  }
  .k-HorizontalTimeline__ellipsis,
  .k-HorizontalTimeline__ellipsis::before,
  .k-HorizontalTimeline__ellipsis::after {
    content: '';
    background-color: ${COLORS.primary4};
    height: ${pxToRem(4)};
    width: ${pxToRem(4)};
    border-radius: var(--border-radius-rounded);
    align-self: center;
    box-shadow: 0 0 0 ${pxToRem(3)} white;
  }
  .k-HorizontalTimeline__ellipsis::before {
    position: absolute;
    left: calc(100% + ${pxToRem(3)});
  }
  .k-HorizontalTimeline__ellipsis::after {
    position: absolute;
    right: calc(100% + ${pxToRem(3)});
  }
  .k-HorizontalTimeline__ellipsis[style] {
    margin-left: ${pxToRem(14)};
  }
`

const Block = ({ year, children }) => (
  <>
    <dt className="k-HorizontalTimeline__year">{year}</dt>
    <dd className="k-HorizontalTimeline__block">{children}</dd>
  </>
)

Block.propTypes = {
  year: PropTypes.node.isRequired,
}

export const HorizontalTimeline = ({
  children,
  className,
  ellipsisColumns,
  style,
  ...props
}) => {
  const columnsCount = React.Children.count(children)

  return (
    <StyledHorizontalTimeline
      className={classNames('k-HorizontalTimeline', className)}
      style={{ ...style, '--HorizontalTimeline-columnsCount': columnsCount }}
      {...props}
    >
      {children}
      <i className="k-HorizontalTimeline__line" />

      {ellipsisColumns?.map(value => (
        <b
          key={`ellipsis-marker-${value}`}
          className="k-HorizontalTimeline__ellipsis"
          style={{ '--HorizontalTimeline-ellipsis-column': value }}
        />
      ))}
      <b className="k-HorizontalTimeline__ellipsis" />
    </StyledHorizontalTimeline>
  )
}

HorizontalTimeline.defaultProps = {
  ellipsisColumns: [],
}
HorizontalTimeline.propTypes = {
  ellipsisColumns: PropTypes.arrayOf(PropTypes.number),
}

HorizontalTimeline.Block = Block
