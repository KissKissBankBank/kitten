import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import COLORS from './../../../../constants/colors-config'
import { Marger } from './../../../layout/marger'

const BulletPointStyles = styled.div`
  width: 6px;
  height: 6px;
  margin-left: 4px;
  margin-right: 4px;
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
  margin: 0 10px;
  flex-grow: 2;
`

const BulletPoint = ({ isSelected, color }) => {
  return <BulletPointStyles isSelected={isSelected} color={color} />
}

export const Pagination = ({ activeIndex }) => {
  return (
    <PaginationStyles>
      <BulletPoint isSelected={activeIndex == 1} />
      <BulletPoint isSelected={activeIndex == 2} />
      <BulletPoint isSelected={activeIndex == 3} />
    </PaginationStyles>
  )
}

Pagination.propTypes = {
  activeIndex: PropTypes.oneOf([1, 2, 3]),
}

Pagination.defaultProps = {
  activeIndex: null,
}
