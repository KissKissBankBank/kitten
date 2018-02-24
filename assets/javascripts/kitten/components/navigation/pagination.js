import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Text } from 'kitten/components/typography/text'
import { ArrowIcon as ArrowIconBase } from 'kitten/components/icons/arrow-icon'
import { ScreenConfig,
  SCREEN_SIZE_M,
} from 'kitten/constants/screen-config'
import COLORS from 'kitten/constants/colors-config'
import { parseHtml } from 'kitten/helpers/utils/parser'

const ArrowIcon = Radium(ArrowIconBase)

// Returns an array with the given bounds
const range = (start, end) => {
  return Array(end - start + 1).fill().map((_, index) => start + index)
}

// Returns an array of page numbers and breaks "…" (as nulls) as a pagination
// that fits in the given array size given the current page number.
export function pages(min, max, page, size) {
  // 1, [2], 3
  if (max - min < size)
    return range(min, max)

  // 1, [2], 3, …, 42
  if (page - min + 1 < size - 2)
    return [...range(min, min - 1 + size - 2), null, max]

  // 1, …, 40, [41], 42
  if (max - page < size - 2)
    return [min, null, ...range(max + 1 - (size - 2), max)]

  // 1, …, [21], …, 42
  const sides = Math.floor((size - 4) / 2)
  return [min, null, ...range(page - sides, page + sides), null, max]
}

class PaginationBase extends Component {
  render() {
    const { totalPages, currentPage } = this.props
    const pageNumbers = pages(1, totalPages, currentPage, 7)

    // TODO: add prop for aria-label
    return (
      <nav role="navigation" aria-label="Navigation par pagination">
        <ul style={ styles.group }>
          { this.renderArrowButton('left') }
          { pageNumbers.map(this.renderPage) }
          { this.renderArrowButton('right') }
        </ul>
      </nav>
    )
  }

  renderPage = (number, index) => {
    if (!number) return this.renderSpacer(index)

    const styleButtonIcon = [
      styles.group.list.buttonIcon,
      number == this.props.currentPage &&
        styles.group.list.buttonIcon.isActive,
    ]

    // TODO: Use prop to translate "Aller à la page …"
    // TODO: Use prop to pass through "href"
    // TODO: Use prop to allow NavLinks or to handle onClick
    return (
      <li
        style={ styles.group.list }
        key={ `item-${number}` }
      >
        <a
          href="#"
          key={ `link-${number}` }
          style={ styleButtonIcon }
          aria-label={ `Aller à la page ${number}` }
        >
          <Text
            weight="regular"
            size="tiny"
          >
            { number }
          </Text>
        </a>
      </li>
    )
  }

  renderSpacer(index) {
    return (
      <li
        key={ `spacer-${index}` }
        style={ styles.group.list.points }
      >
        { '…' }
      </li>
    )
  }

  renderArrowButton(direction) {
    const {
      arrowButtonPrev,
      arrowButtonNext,
      currentPage,
      totalPages,
    } = this.props

    const ariaLabel = direction == 'left'
      ? parseHtml(arrowButtonPrev)
      : parseHtml(arrowButtonNext)

    const disabled = direction == 'left'
      ? currentPage == 1
      : currentPage == totalPages

    const linkIsHovered =
      Radium.getState(this.state, `link-${direction}`, ':hover')
    const linkIsFocused =
      Radium.getState(this.state, `link-${direction}`, ':focus')
    const linkIsActived =
      Radium.getState(this.state, `link-${direction}`, ':active')

    const styleList = [
      direction == 'left' && styles.group.list.left,
      direction == 'right' && styles.group.list.right,
    ]

    const styleButtonIcon = [
      styles.group.list.buttonIcon,
      disabled && styles.group.list.buttonIcon.isDisabled,
    ]

    const styleSvg = [
      styles.group.list.buttonIcon.svg,
      (linkIsHovered && !disabled) && styles.group.list.buttonIcon.svg.hover,
      (linkIsFocused && !disabled) && styles.group.list.buttonIcon.svg.focus,
      (linkIsActived && !disabled) && styles.group.list.buttonIcon.svg.active,
    ]

    return (
      <li style={ styleList }>
        <a
          href="#"
          key={ `link-${direction}` }
          style={ styleButtonIcon }
          aria-label={ `Aller à la page ${ariaLabel}` }
        >
          <ArrowIcon
            direction={ direction }
            disabled={ disabled }
            style={ styleSvg }
          />
        </a>
      </li>
    )
  }
}

const linkHoveredAndFocused = {
  borderColor: `${COLORS.primary1}`,
  color: `${COLORS.primary1}`,
  backgroundColor: `${COLORS.background1}`,
}

const disabledPseudoClass = {
  borderColor: `${COLORS.line2}`,
  color: `${COLORS.background1}`,
  backgroundColor: `${COLORS.line2}`,
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
        alignSelf: 'center',
        marginLeft: '14px',
        marginRight: '14px',
        [`@media (min-width: ${ScreenConfig['S'].min}px)`]: {
          marginLeft: '10px',
          marginRight: '10px',
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
        backgroundColor: `${COLORS.background1}`,
        borderColor: `${COLORS.line1}`,
        color: `${COLORS.font1}`,
        ':hover': linkHoveredAndFocused,
        ':focus': linkHoveredAndFocused,
        ':active': {
          backgroundColor: `${COLORS.primary1}`,
          borderColor: `${COLORS.primary1}`,
          color: `${COLORS.background1}`,
        },
        [`@media (min-width: ${ScreenConfig['S'].min}px)`]: {
          width: '50px',
          height: '50px',
          borderWidth: '2px',
        },

        isActive: {
          backgroundColor: `${COLORS.primary1}`,
          borderColor: `${COLORS.primary1}`,
          color: `${COLORS.background1}`,
        },

        isDisabled: {
          color: `${COLORS.background1}`,
          backgroundColor: `${COLORS.line2}`,
          borderColor: `${COLORS.line2}`,
          cursor: 'not-allowed',
          ':hover': disabledPseudoClass,
          ':focus': disabledPseudoClass,
          ':active': disabledPseudoClass,
        },

        svg: {
          alignSelf: 'center',
          margin: '0',
          padding: '0',
          width: '12px',
          height: '14px',
          pointerEvents: 'none',
          hover: {
            fill: `${COLORS.primary1}`,
          },
          focus: {
            fill: `${COLORS.primary1}`,
          },
          active: {
            fill: `${COLORS.background1}`,
          },
          isDisabled: {
            fill: `${COLORS.background1}`,
          },
        },
      },
    },
  },
}

PaginationBase.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']),
}

PaginationBase.defaultProps = {
  // TODO: Explain that it is a label
  arrowButtonPrev: 'précédente',
  arrowButtonNext: 'suivante',
  totalPages: 1,
  currentPage: 1,
}

const PaginationRadium = Radium(PaginationBase)

export class Pagination extends Component {
  render() {
    return(
      <StyleRoot>
        <PaginationRadium { ...this.props } />
      </StyleRoot>
    )
  }
}

