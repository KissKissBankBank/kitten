import React, { Component } from 'react'
import Styled from 'styled-components'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { Text } from '../../components/typography/text'
import { ArrowIcon } from '../../components/icons/arrow-icon'
import { ScreenConfig } from '../../constants/screen-config'
import COLORS from '../../constants/colors-config'
import { parseHtml } from '../../helpers/utils/parser'
import { mediaQueries } from '../../hoc/media-queries'
import { pxToRem } from '../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'

const StyledGroup = styled.ul`
  display: inline-flex;
  padding: 0;
`
const StyledList = styled.li`
  list-style: none;
  margin-right: 0;

  @media (min-width: ${ScreenConfig.M.min}px) {
    margin-right: ${pxToRem(8)};
    margin-left: ${pxToRem(8)};
  }

  &:last-child {
    margin-right: 0;
  }
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
  outline: none;
  color: ${COLORS.font1};
  border-color: ${COLORS.line1};
  background-color: ${COLORS.background1};

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

  @media (min-width: ${ScreenConfig.S.min}px) : {
    width: ${pxToRem(50)};
    height: ${pxToRem(50)};
    border-width: ${pxToRem(2)};
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

class PaginationBase extends Component {
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

    const styleButtonIcon = [
      styles.group.list.buttonIcon,
      isActive && styles.group.list.buttonIcon.isActive,
    ]

    return (
      <StyledList key={`page-${number}`}>
        <StyledButtonIcon
          as={tag}
          weight="regular"
          size="tiny"
          href={href}
          key={`link-${number}`}
          // style={styleButtonIcon}
          aria-label={this.props.goToPageLabel(number)}
          onClick={isActive ? null : this.pageClickHandler(number)}
        >
          {number}
        </StyledButtonIcon>
      </StyledList>
    )
  }

  renderSpacer(index) {
    return (
      <li key={`spacer-${index}`} style={styles.group.list.points}>
        {'…'}
      </li>
    )
  }

  renderArrowButton(direction) {
    const {
      prevButtonLabel,
      nextButtonLabel,
      currentPage,
      totalPages,
    } = this.props

    const buttonLabel =
      direction == 'left'
        ? parseHtml(prevButtonLabel)
        : parseHtml(nextButtonLabel)

    const isDisabled =
      direction == 'left' ? currentPage == 1 : currentPage == totalPages

    const linkIsHovered = Radium.getState(
      this.state,
      `link-${direction}`,
      ':hover',
    )
    const linkIsFocused = Radium.getState(
      this.state,
      `link-${direction}`,
      ':focus',
    )
    const linkIsActived = Radium.getState(
      this.state,
      `link-${direction}`,
      ':active',
    )

    const styleList = [
      direction == 'left' && styles.group.list.left,
      direction == 'right' && styles.group.list.right,
    ]

    const styleButtonIcon = [
      styles.group.list.buttonIcon,
      isDisabled && styles.group.list.buttonIcon.isDisabled,
    ]

    const styleSvg = [
      styles.group.list.buttonIcon.svg,
      linkIsHovered && !isDisabled && styles.group.list.buttonIcon.svg.hover,
      linkIsFocused && !isDisabled && styles.group.list.buttonIcon.svg.focus,
      linkIsActived && !isDisabled && styles.group.list.buttonIcon.svg.active,
    ]

    const number =
      direction == 'left'
        ? currentPage == 1
          ? 1
          : currentPage - 1
        : currentPage == totalPages
        ? totalPages
        : currentPage + 1

    return (
      <li style={styleList}>
        <a
          href={this.props.goToPageHref(number)}
          key={`link-${direction}`}
          style={styleButtonIcon}
          aria-label={buttonLabel}
          title={buttonLabel}
          tabIndex={isDisabled ? -1 : null}
          onClick={
            isDisabled
              ? this.preventClickDefault
              : this.pageClickHandler(number)
          }
        >
          <ArrowIcon
            direction={direction}
            disabled={isDisabled}
            style={styleSvg}
          />
        </a>
      </li>
    )
  }
}

const linkHoveredAndFocused = {
  color: COLORS.primary1,
  borderColor: COLORS.primary1,
  backgroundColor: COLORS.background1,
}

const disabledPseudoClass = {
  color: COLORS.background1,
  borderColor: COLORS.line2,
  backgroundColor: COLORS.line2,
}

const isActivedPseudoClass = {
  color: COLORS.background1,
  borderColor: COLORS.primary1,
  backgroundColor: COLORS.primary1,
}

const styles = {
  group: {
    display: 'inline-flex',
    padding: 0,

    list: {
      listStyle: 'none',
      marginRight: 0,
      [`@media (min-width: ${ScreenConfig['S'].min}px)`]: {
        marginRight: '8px',
        marginLeft: '8px',
      },

      lastChild: {
        marginRight: 0,
      },

      left: {
        marginRight: '30px',
        listStyle: 'none',
        [`@media (min-width: ${ScreenConfig['S'].min}px)`]: {
          marginRight: '22px',
        },
      },

      right: {
        marginLeft: '30px',
        listStyle: 'none',
        [`@media (min-width: ${ScreenConfig['S'].min}px)`]: {
          marginLeft: '22px',
        },
      },

      points: {
        listStyle: 'none',
        textDecoration: 'none',
        textAlign: 'center',
        alignSelf: 'center',
        width: '40px',
        [`@media (min-width: ${ScreenConfig['S'].min}px)`]: {
          marginLeft: '8px',
          marginRight: '8px',
          width: '50px',
        },
      },

      buttonIcon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        cursor: 'pointer',
        width: '40px',
        height: '40px',
        borderRadius: 0,
        borderWidth: 0,
        borderStyle: 'solid',
        textDecoration: 'none',
        outline: 'none',
        color: COLORS.font1,
        borderColor: COLORS.line1,
        backgroundColor: COLORS.background1,
        ':hover': linkHoveredAndFocused,
        ':focus': linkHoveredAndFocused,
        ':active': isActivedPseudoClass,

        [`@media (min-width: ${ScreenConfig['S'].min}px)`]: {
          width: '50px',
          height: '50px',
          borderWidth: '2px',
        },

        isActive: {
          cursor: 'auto',
          color: COLORS.background1,
          borderColor: COLORS.primary1,
          backgroundColor: COLORS.primary1,
          ':hover': isActivedPseudoClass,
          ':focus': isActivedPseudoClass,
          ':active': isActivedPseudoClass,
        },

        isDisabled: {
          color: COLORS.background1,
          borderColor: COLORS.line2,
          backgroundColor: COLORS.line2,
          cursor: 'not-allowed',
          ':hover': disabledPseudoClass,
          ':focus': disabledPseudoClass,
          ':active': disabledPseudoClass,
        },

        svg: {
          alignSelf: 'center',
          margin: '0',
          padding: '0',
          width: '6px',
          height: '6px',
          pointerEvents: 'none',
          hover: {
            fill: COLORS.primary1,
          },
          focus: {
            fill: COLORS.primary1,
          },
          active: {
            fill: COLORS.background1,
          },
          isDisabled: {
            fill: COLORS.background1,
          },
        },
      },
    },
  },
}

export const Pagination = mediaQueries(Radium(PaginationBase), {
  viewportIsTabletOrLess: true,
})
