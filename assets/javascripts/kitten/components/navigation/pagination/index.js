import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { Text } from '../../../components/typography/text'
import { ArrowIcon } from '../../../components/icons/arrow-icon'
import { ScreenConfig } from '../../../constants/screen-config'
import COLORS from '../../../constants/colors-config'
import { parseHtml } from '../../../helpers/utils/parser'
import { mediaQueries } from '../../../hoc/media-queries'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'

const StyledGroup = styled.ul`
  display: inline-flex;
  padding: 0;
`
const StyledList = styled.li`
  list-style: none;
  margin-right: 0;

  @media (min-width: ${ScreenConfig.S.min}px) {
    margin-right: ${pxToRem(8)};
    margin-left: ${pxToRem(8)};
  }

  &:last-child {
    margin-right: 0;
  }
`

const StyledArrowIconDirection = styled.li`
  ${({ direction }) =>
    direction === 'left' &&
    css`
      margin-right: ${pxToRem(30)};
      list-style: none;

      @media (min-width: ${ScreenConfig.S.min}px) {
        margin-right: ${pxToRem(22)};
      }
    `}

  ${({ direction }) =>
    direction === 'right' &&
    css`
      margin-left: ${pxToRem(30)};
      list-style: none;

      @media (min-width: ${ScreenConfig.S.min}px) {
        margin-left: ${pxToRem(22)};
      }
    `}
`

const StyledButtonIcon = styled(Text)`
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
  text-decoration: none;
  font-weight: 500;
  font-size: ${stepToRem(-1)};
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
  }

  &:active {
    color: ${COLORS.background1};
    border-color: ${COLORS.primary1};
    background-color: ${COLORS.primary1};
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

  ${({ isDisabled }) =>
    isDisabled &&
    css`
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
    `}
`

const StyledSvg = styled(ArrowIcon)`
  align-self: center;
  margin: 0;
  padding: 0;
  width: ${pxToRem(6)};
  height: ${pxToRem(6)};
  pointer-events: none;

  ${StyledButtonIcon}:hover &,
  ${StyledButtonIcon}:focus & {
    fill: ${COLORS.primary1};
  }

  ${StyledButtonIcon}:active & {
    fill: ${COLORS.background1};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      fill: ${COLORS.background1};

      ${StyledButtonIcon}:hover &,
      ${StyledButtonIcon}:focus &,
      ${StyledButtonIcon}:active & {
        fill: ${COLORS.background1};
      }
    `}
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

class PaginationBase extends PureComponent {
  static propTypes = {
    prevButtonLabel: PropTypes.string,
    nextButtonLabel: PropTypes.string,
    goToPageLabel: PropTypes.func,
    goToPageHref: PropTypes.func,
    onPageClick: PropTypes.func,
    totalPages: PropTypes.number,
    currentPage: PropTypes.number,
    'aria-label': PropTypes.string,
  }

  static defaultProps = {
    prevButtonLabel: 'Previous page',
    nextButtonLabel: 'Next page',
    goToPageLabel: n => `Go to page ${n}`,
    goToPageHref: n => `#${n}`,
    onPageClick: () => {},
    currentPage: 1,
    totalPages: 1,
    'aria-label': 'Pagination navigation',
  }

  render() {
    const { totalPages, currentPage } = this.props
    const size = this.props.viewportIsTabletOrLess ? 5 : 7
    const pageNumbers = pages(1, totalPages, currentPage, size)

    return (
      <nav role="navigation" aria-label={this.props['aria-label']}>
        <StyledGroup>
          {this.renderArrowButton('left')}
          {pageNumbers.map(this.renderPage)}
          {this.renderArrowButton('right')}
        </StyledGroup>
      </nav>
    )
  }

  preventClickDefault = e => e.preventDefault()

  pageClickHandler = number => event => this.props.onPageClick(number, event)

  renderPage = (number, index) => {
    if (!number) return this.renderSpacer(index)

    const isActive = number === this.props.currentPage
    const tag = isActive ? 'span' : 'a'
    const href = isActive ? null : this.props.goToPageHref(number)

    return (
      <StyledList key={`page-${number}`}>
        <StyledButtonIcon
          as={tag}
          href={href}
          key={`link-${number}`}
          isActive={isActive}
          aria-label={this.props.goToPageLabel(number)}
          onClick={isActive ? null : this.pageClickHandler(number)}
        >
          {number}
        </StyledButtonIcon>
      </StyledList>
    )
  }

  renderSpacer(index) {
    return <StyledPoints key={`spacer-${index}`}>{'…'}</StyledPoints>
  }

  renderArrowButton(direction) {
    const {
      prevButtonLabel,
      nextButtonLabel,
      currentPage,
      totalPages,
      isActive,
    } = this.props

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
          as="a"
          href={this.props.goToPageHref(number)}
          key={`link-${direction}`}
          aria-label={buttonLabel}
          title={buttonLabel}
          isDisabled={isDisabled}
          tabIndex={isDisabled ? -1 : null}
          onClick={
            isDisabled
              ? this.preventClickDefault
              : this.pageClickHandler(number)
          }
        >
          <StyledSvg direction={direction} disabled={isDisabled} />
        </StyledButtonIcon>
      </StyledArrowIconDirection>
    )
  }
}

export const Pagination = mediaQueries(PaginationBase, {
  viewportIsTabletOrLess: true,
})
