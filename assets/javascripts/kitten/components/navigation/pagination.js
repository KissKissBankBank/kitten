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

class PaginationBase extends Component {
  render() {
    return (
      <div>
        { this.renderList() }
      </div>
    )
  }

  renderList() {
    const {
      pagination,
      pages
    } = this.props

    return (
      <nav role="navigation" aria-label="Navigation par pagination">
        <ul style={ styles.group }>
          { this.renderArrowButton('left') }
          {
            pages.map(pagination =>
              <li
                style={ styles.group.list }
                key={ `item-${pagination}` }
              >
                <a
                  href="#"
                  key={ `link-${pagination}` }
                  style={ styles.group.list.buttonIcon }
                  aria-label={ `Aller à la page ${pagination}` }
                >
                  <Text
                    weight="regular"
                    size="tiny"
                  >
                    { pagination }
                  </Text>
                </a>
              </li>
            )
          }
          { this.renderThreePoints() }
          { this.renderArrowButton('right') }
        </ul>
      </nav>
    );
  }

  renderThreePoints() {
    const {
      threePoints,
    } = this.props

    return (
      <li
        style={ styles.group.list.points }
      >
        { parseHtml(threePoints) }
      </li>
    )
  }

  renderArrowButton(direction) {
    const {
      arrowButtonPrev,
      arrowButtonNext,
    } = this.props

    const ariaLabel = direction == 'left'
      ? parseHtml(arrowButtonPrev)
      : parseHtml(arrowButtonNext)

    const disabled = direction == 'left'
      ? this.props.prevProps.disabled
      : this.props.nextProps.disabled

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
        marginLeft: 0,
        marginRight: 0,
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
  prevProps: {
    disabled: false,
  },
  nextProps: {
    disabled: false,
  },
  arrowButtonPrev: 'précédente',
  arrowButtonNext: 'suivante',
  threePoints: '…',
  pages: [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6'
  ],
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

