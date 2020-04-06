import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import { Button as ButtonBase } from '../../components/buttons/button'
import { FilterIcon as FilterIconBase } from '../../components/icons/filter-icon'

const FilterIcon = Radium(FilterIconBase)
const Button = Radium(ButtonBase)

class KarlButtonIconFilterBase extends Component {
  render() {
    const animateIsHovered = Radium.getState(
      this.state,
      'button-filter',
      ':hover',
    )
    const animateIsFocused = Radium.getState(
      this.state,
      'button-filter',
      ':focus',
    )
    const animateIsActived = Radium.getState(
      this.state,
      'button-filter',
      ':active',
    )

    const isDisabled = this.props.disabled

    const isModifier = this.props.modifier

    const isAnimated =
      !isDisabled && (animateIsHovered || animateIsFocused || animateIsActived)

    return (
      <StyleRoot>
        <span key="button-filter" style={styles.filter}>
          <Button
            icon="true"
            aria-label="Filter button"
            title="Filter button"
            disabled={isDisabled}
            modifier={isModifier}
            style={styles.button}
          >
            <span className="k-Button__icon" style={styles.button.icon}>
              <FilterIcon
                key={`icon-${animateIsHovered}`} // TODO:
                animated={isAnimated}
                style={styles.button.icon.svg}
              />
            </span>
            Filtrer les projets
          </Button>
        </span>
      </StyleRoot>
    )
  }
}

KarlButtonIconFilterBase.defaultProps = {
  disabled: false,
  modifier: 'azote',
}

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
      },
    },
  },
}

export const KarlButtonIconFilter = Radium(KarlButtonIconFilterBase)
