import React, { forwardRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Text } from '../../typography/text'
import { Button } from '../../action/button'
import { ArrowIcon } from '../../graphics/icons/arrow-icon'
import { ScreenConfig } from '../../../constants/screen-config'
import { parseHtml } from '../../../helpers/utils/parser'
import { pxToRem } from '../../../helpers/utils/typography'
import { useMedia } from '../../../helpers/hooks/use-media-query'
import { getMinQuery } from '../../../helpers/utils/media-queries'

const StyledNav = styled.nav`
  .k-Pagination__List {
    padding: 0;
    display: flex;
    gap: ${pxToRem(5)};
  }

  .k-Pagination__ListItem {
    list-style: none;
    flex-shrink: 0;
  }

  .k-Pagination__ListItem__Ellipsis {
    text-align: center;
    align-self: center;
    width: ${pxToRem(40)};
  }

  .k-Pagination__ListItem__Arrow:first-child {
    margin-right: ${pxToRem(5)};
  }

  .k-Pagination__ListItem__Arrow:last-child {
    margin-left: ${pxToRem(5)};
  }

  &.k-Pagination--noMargin .k-Pagination__List {
    margin: 0;
  }

  &.k-Pagination--left .k-Pagination__List {
    justify-content: flex-start;
  }
  &.k-Pagination--center .k-Pagination__List {
    justify-content: center;
  }
  &.k-Pagination--right .k-Pagination__List {
    justify-content: flex-end;
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

export const Pagination = forwardRef(
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
      margin,
      align,
      className,
    },
    _ref,
  ) => {
    const size = useMedia({
      queries: [getMinQuery(ScreenConfig.L.min)],
      values: [7],
      defaultValue: 5,
    })
    const pageNumbers = pages(1, totalPages, currentPage, size)

    const pageClickHandler = number => event => onPageClick(number, event)

    const renderPage = (number, index) => {
      if (!number) {
        return (
          <li
            key={`ellipsis-${index}`}
            className="k-Pagination__ListItem k-Pagination__ListItem__Ellipsis"
            aria-hidden="true"
          >
            <Text size="tiny" weight="regular">
              …
            </Text>
          </li>
        )
      }

      let buttonProps = {
        modifier: 'hydrogen',
        tag: 'a',
        href: goToPageHref(number),
        'aria-label': goToPageLabel(number),
        onClick: pageClickHandler(number),
      }

      if (number === currentPage) {
        buttonProps = {
          modifier: 'lithium',
          tag: 'span',
          title: currentPageLabel(number),
          'aria-current': 'page',
        }
      }

      return (
        <li
          className="k-Pagination__ListItem k-Pagination__ListItem__Link"
          key={`page-${number}`}
        >
          <Button
            key={`link-${number}`}
            className="k-Pagination__Link"
            tabIndex="0"
            size="tiny"
            fit="icon"
            {...buttonProps}
          >
            {number}
          </Button>
        </li>
      )
    }

    const ArrowButton = ({ direction }) => {
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
        <li
          className={classNames(
            'k-Pagination__ListItem',
            'k-Pagination__ListItem__Arrow',
          )}
        >
          <Button
            key={`link-${direction}`}
            className="k-Pagination__Link"
            tag={isDisabled ? 'span' : 'a'}
            href={goToPageHref(number)}
            title={buttonLabel}
            aria-disabled={isDisabled || null}
            tabIndex={0}
            onClick={isDisabled ? null : pageClickHandler(number)}
            disabled={isDisabled}
            size="tiny"
            fit="icon"
          >
            <ArrowIcon
              className="k-Pagination__ArrowIcon"
              direction={direction}
              disabled={isDisabled}
              aria-hidden="true"
            />
          </Button>
        </li>
      )
    }

    return (
      <StyledNav
        role="navigation"
        aria-label={ariaLabelProp}
        className={classNames(
          'k-Pagination',
          className,
          `k-Pagination--${align}`,
          {
            'k-Pagination--noMargin': !margin,
          },
        )}
      >
        <ul className="k-Pagination__List">
          <ArrowButton direction="left" />
          {pageNumbers.map(renderPage)}
          <ArrowButton direction="right" />
        </ul>
      </StyledNav>
    )
  },
)

Pagination.propTypes = {
  prevButtonLabel: PropTypes.string,
  nextButtonLabel: PropTypes.string,
  goToPageLabel: PropTypes.func,
  goToPageHref: PropTypes.func,
  onPageClick: PropTypes.func,
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  currentPageLabel: PropTypes.func,
  'aria-label': PropTypes.string,
  margin: PropTypes.bool,
  align: PropTypes.oneOf([null, 'left', 'center', 'right']),
}

Pagination.defaultProps = {
  prevButtonLabel: 'Page précédente',
  nextButtonLabel: 'Page suivante',
  goToPageLabel: n => `Aller à la page ${n}`,
  goToPageHref: n => `#${n}`,
  onPageClick: () => {},
  currentPageLabel: n => `Page ${n}, il s’agit de la page actuelle`,
  currentPage: 1,
  totalPages: 1,
  'aria-label': 'Navigation dans la pagination',
  margin: true,
  align: 'center',
}
