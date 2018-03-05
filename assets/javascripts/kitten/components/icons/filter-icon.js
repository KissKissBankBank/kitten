import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'

export class FilterIcon extends Component {
  render() {
    return (
      <StyleRoot>
        { this.renderAnimation() }
      </StyleRoot>
    )
  }

  renderAnimation() {
    const {
      color,
      dur,
      type,
      name,
      begin,
    } = this.props

    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="20px"
        height="24px"
        viewBox="0 0 20 24"
        style="enable-background:new 0 0 20 24;"
        // xml:space="preserve"
      >

// Animation 1
        <rect
          x="2"
          width="2"
          height="10"
          fill={ color }
        >
          <animate
            attributeType={ type }
            attributeName={ name }
            values="-4; 0; -4"
            begin={ begin }
            dur={ dur }
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="2"
          y="14"
          width="2"
          height="10"
          fill={ color }
        >
          <animate
            attributeType={ type }
            attributeName={ name }
            values="14; 18; 14"
            begin={ begin }
            dur={ dur }
            repeatCount="indefinite"
          />
        </rect>
        <path
          fill={ color }
          d="M4,9v2H2V9H4 M6,7H0v6h6V7L6,7z"
        >
          <animateTransform
            attributeType={ type }
            attributeName="transform"
            type="translate"
            values="0 0; 0 4; 0 0"
            begin={ begin }
            dur={ dur }
            repeatCount="indefinite"
          />
        </path>

  // Animation 2
        <rect
          x="9"
          width="2"
          height="14"
          fill={ color }
        >
          <animate
            attributeType={ type }
            attributeName={ name }
            values="0; -12; 0"
            begin={ begin }
            dur={ dur }
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="9"
          y="22"
          width="2"
          height="14"
          fill={ color }
        >
          <animate
            attributeType={ type }
            attributeName={ name }
            values="22; 10; 22"
            begin={ begin }
            dur={ dur }
            repeatCount="indefinite"
          />
        </rect>
        <path
          fill={ color }
          d="M11,17v2H9v-2H11 M13,15H7v6h6V15L13,15z"
        >
          <animateTransform
            attributeType={ type }
            attributeName="transform"
            type="translate"
            values="0 0; 0 -12; 0 0"
            begin={ begin }
            dur={ dur }
            repeatCount="indefinite"
          />
        </path>

  // Animation 3
        <rect
          x="16"
          width="2"
          height="12"
          fill={ color }
        >
          <animate
            attributeType={ type }
            attributeName={ name }
            values="-8; 0; -8"
            begin={ begin }
            dur={ dur }
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="16"
          y="12"
          width="2"
          height="12"
          fill={ color }
        >
          <animate
            attributeType={ type }
            attributeName={ name }
            values="12; 20; 12"
            begin={ begin }
            dur={ dur }
            repeatCount="indefinite"
          />
        </rect>
        <path
          fill={ color }
          d="M18,7v2h-2V7H18 M20,5h-6v6h6V5L20,5z"
        >
          <animateTransform
            attributeType={ type }
            attributeName="transform"
            type="translate"
            values="0 0; 0 8; 0 0"
            begin={ begin }
            dur={ dur }
            repeatCount="indefinite"
          />
        </path>
      </svg>
    )
  }
}

const styles = {
}

FilterIcon.defaultProps = {
  color: '#222',
  dur: '1.5s',
  type: 'xml',
  name: 'y',
  begin: 'begin',
}
