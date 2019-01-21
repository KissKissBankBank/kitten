import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import COLORS from './../../../../constants/colors-config'
import { Marger } from './../../../layout/marger'
import { pxToRem } from './../../../../helpers/utils/typography'

const BulletPointStyles = styled.div`
  width: ${pxToRem(6)};
  height: ${pxToRem(6)};
  margin-left: ${pxToRem(4)};
  margin-right: ${pxToRem(4)};
  background-color: ${COLORS.background1};

  ${({ isSelected, color }) =>
    isSelected &&
    css`
      background-color: ${color || COLORS.primary1};
    `}
`

const PaginationStyles = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 ${pxToRem(10)};
`

export const Pagination = ({ activeIndex, totalIndex, color }) => {
  return (
    <PaginationStyles>
      {Array.apply(null, { length: totalIndex }).map((_, index) => (
        <BulletPointStyles
          key={index}
          isSelected={activeIndex === index + 1}
          color={color}
        />
      ))}
    </PaginationStyles>
  )
}

Pagination.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  totalIndex: PropTypes.number.isRequired,
}
