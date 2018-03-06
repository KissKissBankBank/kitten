import React, { Component } from 'react'
import Radium from 'radium'
import COLORS from 'kitten/constants/colors-config'
import { Button } from 'kitten/components/buttons/button'
import { FilterIcon as FilterIconBase } from 'kitten/components/icons/filter-icon'

const FilterIcon = Radium(FilterIconBase)

export class KarlButtonIconFilter extends Component {
  render() {
    const animateIsHovered =
      Radium.getState(this.state, 'filterIcon', ':hover')
    const animateIsFocused =
      Radium.getState(this.state, 'filterIcon', ':focus')
    const animateIsActived =
      Radium.getState(this.state, 'filterIcon', ':active')

    const styleSvg = [
      styles.svg,
      (animateIsHovered && !isDisabled) && styles.svg.hover,
      (animateIsFocused && !isDisabled) && styles.svg.focus,
      (animateIsActived && !isDisabled) && styles.svg.active,
    ]

    return (
      <Button
        icon
      >
        <span
          className="k-Button__icon"
          key="filterIcon"
        >
          <FilterIcon
            isAnimate
            style={ styleSvg }
          />
        </span>
        Filtrer les projets
      </Button>
    )
  }
}

const styles = {
  svg: {
    display: 'block',
    width: '100%',
    height: 'auto',
    hover: {
      fill: `${COLORS.primary1}`,
    },
    focus: {
      fill: `${COLORS.primary1}`,
    },
    active: {
      fill: `${COLORS.background1}`,
    },
  },
  // isDisabled: {
  //   fill: `${COLORS.background1}`,
  // },

}
