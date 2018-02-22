import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'

export class FilterIcon extends Component {
  render() {

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 20 24"
        style={ styles.svg }
        // style="enable-background:new 0 0 20 24;"
      >
        <rect
          x="2"
          fill={ color }
          width="2"
          height="6"
          style={ styles.svg.filter1 }
        />

        <rect
          x="2"
          y="14"
          fill={ color }
          width="2"
          height="10"
        />

        <path
          fill={ color }
          d="M4,9v2H2V9H4 M6,7H0v6h6V7L6,7z"
        />

        <rect
          x="9"
          fill={ color }
          width="2"
          height="14"
        />

        <rect
          x="9"
          y="22"
          fill={ color }
          width="2"
          height="2"
        />

        <path
          fill={ color }
          d="M11,17v2H9v-2H11 M13,15H7v6h6V15L13,15z"
        />

        <rect
          x="16"
          fill={ color }
          width="2"
          height="4"
        />

        <rect
          x="16"
          y="12"
          fill={ color }
          width="2"
          height="12"
        />

        <path
          fill={ color }
          d="M18,7v2h-2V7H18 M20,5h-6v6h6V5L20,5z"
        />

      </svg>
    )
  }
}

const styles = {
  svg: {
    animationPlayState: 'paused',
    ':hover': {
      animationPlayState: 'running',
    },
    filter1: {
      animationFillMode: 'forwards',
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
    }
  }
}

FilterIcon.defaultProps = {
  color: '#222',
}
