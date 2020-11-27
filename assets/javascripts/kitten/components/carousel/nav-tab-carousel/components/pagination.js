import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import COLORS from './../../../../constants/colors-config'
import { pxToRem } from './../../../../helpers/utils/typography'
import { createRangeFromZeroTo } from './../../../../helpers/utils/range'

const BulletPointStyles = styled.div`
  min-width: ${pxToRem(6)};
  min-height: ${pxToRem(6)};
  margin-left: ${pxToRem(4)};
  margin-right: ${pxToRem(4)};
  background-color: ${COLORS.background1};

  ${({ isSelected, activeColor }) =>
    isSelected &&
    css`
      background-color: ${activeColor};
    `}

  &:focus {
    outline: none;
    box-shadow: 0 0 0 ${pxToRem(2)} ${COLORS.font1},
      0 0 0 ${pxToRem(4)} ${COLORS.primary3};
  }
`

const PaginationStyles = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 ${pxToRem(10)};
  width: 20%;
  min-width: ${pxToRem(60)};
`

export const Pagination = ({ activeIndex, links, totalIndex, activeColor }) => {
  const hasNoLinks = !links && totalIndex

  return (
    <PaginationStyles>
      {links &&
        links.map((link, index) => (
          <BulletPointStyles
            as="a"
            href={link}
            key={index}
            isSelected={activeIndex === index + 1}
            aria-current={activeIndex === index + 1}
            activeColor={activeColor}
            tabIndex="0"
          />
        ))}
      {hasNoLinks &&
        createRangeFromZeroTo(totalIndex).map((_, index) => (
          <BulletPointStyles
            key={index}
            isSelected={activeIndex === index + 1}
            aria-current={activeIndex === index + 1}
            activeColor={activeColor}
            tabIndex="0"
          />
        ))}
    </PaginationStyles>
  )
}

Pagination.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  totalIndex: PropTypes.number,
  activeColor: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.string),
}

Pagination.defaultProps = {
  activeColor: COLORS.primary1,
}
