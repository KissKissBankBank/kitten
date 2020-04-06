import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Text } from '../../../components/typography/text'
import { ArrowIcon } from '../../../components/icons/arrow-icon'
import { ScreenConfig } from '../../../constants/screen-config'
import COLORS from '../../../constants/colors-config'
import { parseHtml } from '../../../helpers/utils/parser'
import { mediaQueries } from '../../../hoc/media-queries'
import { pxToRem } from '../../../helpers/utils/typography'

const StyledGroup = styled.ul`
  display: inline-flex;
  padding: 0;
`

const StyledList = styled.li`
  list-style: none;
  margin-right: 0;

  @media (min-width: ${ScreenConfig.S.min}px) {
    margin: ${pxToRem(0)} ${pxToRem(8)};
  }
`

const StyledArrowIconDirection = styled(({ direction, ...others }) => (
  <li {...others} />
))`
  list-style: none;

  ${({ direction }) =>
    direction === 'left' &&
    css`
      margin-right: ${pxToRem(30)};

      @media (min-width: ${ScreenConfig.S.min}px) {
        margin-right: ${pxToRem(22)};
      }
    `}

  ${({ direction }) =>
    direction === 'right' &&
    css`
      margin-left: ${pxToRem(30)};

      @media (min-width: ${ScreenConfig.S.min}px) {
        margin-left: ${pxToRem(22)};
      }
    `}
`

const StyledButtonIcon = styled(({ isDisabled, isActive, ...others }) => (
  <Text {...others} />
))`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  width: ${pxToRem(40)};
  height: ${pxToRem(40)};
  border-radius: 0;
  border-width: 0;
  border-style: solid;
  outline: none;
  color: ${COLORS.font1};
  border-color: ${COLORS.line1};
  background-color: ${COLORS.background1};

  @media (min-width: ${ScreenConfig.S.min}px) {
    width: ${pxToRem(50)};
    height: ${pxToRem(50)};
    border-width: ${pxToRem(2)};
  }

  &:hover,
  &:focus {
    color: ${COLORS.primary1};
    border-color: ${COLORS.primary1};
    background-color: ${COLORS.background1};
    text-decoration: none;
  }

  &:active {
    color: ${COLORS.background1};
    border-color: ${COLORS.primary1};
    background-color: ${COLORS.primary1};
    text-decoration: none;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      cursor: auto;
      color: ${COLORS.background1};
      border-color: ${COLORS.primary1};
      background-color: ${COLORS.primary1};

      &:hover,
      &:focus,
      &:active {
        color: ${COLORS.background1};
        border-color: ${COLORS.primary1};
        background-color: ${COLORS.primary1};
      }
    `}

  &[aria-disabled="true"] {
    color: ${COLORS.background1};
    border-color: ${COLORS.line2};
    background-color: ${COLORS.line2};
    cursor: not-allowed;

    &:hover,
    &:focus,
    &:active {
      color: ${COLORS.background1};
      border-color: ${COLORS.line2};
      background-color: ${COLORS.line2};
    }
  }
`

const StyledSvg = styled(ArrowIcon)`
  align-self: center;
  margin: 0;
  padding: 0;
  pointer-events: none;
  color: inherit;
  fill: currentColor;
`

const StyledPoints = styled.li`
  list-style: none;
  text-decoration: none;
  text-align: center;
  align-self: center;
  width: ${pxToRem(40)};

  @media (min-width: ${ScreenConfig.S.min}px) {
    margin: ${pxToRem(0)} ${pxToRem(8)};
    width: ${pxToRem(50)};
  }
`

// Returns an array with the given bounds
const range = (start, end) =>
  Array(end - start + 1)
    .fill()
    .map((_, index) => start + index)

// Returns an array of size `availableSlots` with page number integers
// and breaks "…" (represented as nulls).
export function pages(min, max, currentPage, availableSlots) {
  // 1, 2, 3
  if (max - min < availableSlots) {
    return range(min, max)
  }

  // 1, 2, 3, …, 42
  if (currentPage - min + 1 < availableSlots - 2) {
    return [...range(min, min - 1 + availableSlots - 2), null, max]
  }

  // 1, …, 40, 41, 42
  if (max - currentPage < availableSlots - 2) {
    return [min, null, ...range(max + 1 - (availableSlots - 2), max)]
  }

  // 1, …, 21, …, 42
  const sides = Math.floor((availableSlots - 4) / 2)
  return [
    min,
    null,
    ...range(currentPage - sides, currentPage + sides),
    null,
    max,
  ]
}

const PaginationBase = forwardRef(
  (
    {
      prevButtonLabel,
      nextButtonLabel,
      goToPageLabel,
      goToPageHref,
      onPageClick,
      currentPageLabel,
      currentPage,
      totalPages,
      'aria-label': ariaLabelProp,
      viewportIsMOrLess,
    },
    _ref,
  ) => {
    const size = viewportIsMOrLess ? 5 : 7
    const pageNumbers = pages(1, totalPages, currentPage, size)
    const preventClickDefault = e => e.preventDefault()

    const pageClickHandler = number => event => onPageClick(number, event)

    const renderPage = (number, index) => {
      if (!number) return renderSpacer(index)

      const isActive = number === currentPage
      const tag = isActive ? 'span' : 'a'
      const href = isActive ? null : goToPageHref(number)

      const ariaLabel = isActive
        ? currentPageLabel(number)
        : goToPageLabel(number)

      return (
        <StyledList key={`page-${number}`}>
          <StyledButtonIcon
            tag={tag}
            href={href}
            key={`link-${number}`}
            weight="regular"
            decoration="none"
            size="tiny"
            isActive={isActive}
            aria-current={isActive && 'page'}
            aria-label={ariaLabel}
            onClick={isActive ? null : pageClickHandler(number)}
          >
            {number}
          </StyledButtonIcon>
        </StyledList>
      )
    }

    const renderSpacer = index => (
      <StyledPoints key={`spacer-${index}`} aria-hidden="true">
        {'…'}
      </StyledPoints>
    )

    const renderArrowButton = direction => {
      const buttonLabel =
        direction == 'left'
          ? parseHtml(prevButtonLabel)
          : parseHtml(nextButtonLabel)

      const isDisabled =
        direction == 'left' ? currentPage == 1 : currentPage == totalPages

      const number =
        direction == 'left'
          ? currentPage == 1
            ? 1
            : currentPage - 1
          : currentPage == totalPages
          ? totalPages
          : currentPage + 1

      return (
        <StyledArrowIconDirection direction={direction}>
          <StyledButtonIcon
            tag="a"
            href={goToPageHref(number)}
            key={`link-${direction}`}
            aria-label={buttonLabel}
            aria-disabled={isDisabled}
            title={buttonLabel}
            isDisabled={isDisabled}
            tabIndex={isDisabled ? -1 : null}
            onClick={
              isDisabled ? preventClickDefault : pageClickHandler(number)
            }
          >
            <StyledSvg
              direction={direction}
              disabled={isDisabled}
              aria-hidden="true"
              version="solid"
            />
          </StyledButtonIcon>
        </StyledArrowIconDirection>
      )
    }

    return (
      <nav role="navigation" aria-label={ariaLabelProp}>
        <StyledGroup>
          {renderArrowButton('left')}
          {pageNumbers.map(renderPage)}
          {renderArrowButton('right')}
        </StyledGroup>
      </nav>
    )
  },
)

PaginationBase.propTypes = {
  prevButtonLabel: PropTypes.string,
  nextButtonLabel: PropTypes.string,
  goToPageLabel: PropTypes.func,
  goToPageHref: PropTypes.func,
  onPageClick: PropTypes.func,
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  currentPageLabel: PropTypes.func,
  'aria-label': PropTypes.string,
}

PaginationBase.defaultProps = {
  prevButtonLabel: 'Previous page',
  nextButtonLabel: 'Next page',
  goToPageLabel: n => `Go to page ${n}`,
  goToPageHref: n => `#${n}`,
  onPageClick: () => {},
  currentPageLabel: n => `Page ${n}, this is the current page`,
  currentPage: 1,
  totalPages: 1,
  'aria-label': 'Pagination navigation',
}

export const Pagination = mediaQueries(PaginationBase, {
  viewportIsMOrLess: true,
})
