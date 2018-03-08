import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import COLORS from 'kitten/constants/colors-config'
import { Button  as ButtonBase } from 'kitten/components/buttons/button'
import { FilterIcon as FilterIconBase } from 'kitten/components/icons/filter-icon'

const FilterIcon = Radium(FilterIconBase)
const Button = Radium(ButtonBase)

const karlButtonIconFilter = (props) => {
  return class KarlButtonIconFilter extends Component {
    render() {
      const animateIsHovered =
        Radium.getState(this.state, 'button-filter', ':hover')
      const animateIsFocused =
        Radium.getState(this.state, 'button-filter', ':focus')
      const animateIsActived =
        Radium.getState(this.state, 'button-filter', ':active')

      const isAnimate =
        !isDisabled && (animateIsHovered || animateIsFocused || animateIsActived)

      const styleSvg = [
        styles.button.icon.svg,
        (animateIsHovered && !isDisabled) && styles.button.icon.svg.hover,
        (animateIsFocused && !isDisabled) && styles.button.icon.svg.focus,
        (animateIsActived && !isDisabled) && styles.button.icon.svg.active,
        isDisabled && styles.button.icon.svg.disabled,
      ]

      return (
        <StyleRoot>
          <span key="button-filter" style={ styles.filter }>
            <Button
              icon="true"
              aria-label="Filter button"
              title="Filter button"
              style={ styles.button }
              { ...props }
            >
              <span
                className="k-Button__icon"
                style={ styles.button.icon }
              >
                <FilterIcon
                  key={ `icon-${animateIsHovered}` } // TODO:
                  isAnimate={ isAnimate }
                  style={ styleSvg }
                />
              </span>
              Filtrer les projets
            </Button>
          </span>
        </StyleRoot>
      )
    }
  }
}

// KarlButtonIconFilterBase.defaultProps = {
//   disabled: false,
// }

const styles = {
  filter: {
    ':hover': {},
    ':focus': {},
    ':active': {},
    ':disabled': {},
  },

  button: {
    display: 'flex',
    alignItems: 'center',

    icon: {
      width: '20px',
      height: '24px',
      paddingTop: 0,
      paddingBottom: 0,

      svg: {
        display: 'block',
        hover: {
          fill: `${COLORS.primary1}`,
        },
        focus: {
          fill: `${COLORS.primary1}`,
        },
        active: {
          fill: `${COLORS.primary3}`,
        },
        disabled: {
          fill: `${COLORS.background1}`,
        },
      },
    },
  },
}

// export const KarlButtonIconFilter = Radium(KarlButtonIconFilterBase)
