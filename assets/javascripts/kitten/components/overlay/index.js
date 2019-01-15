import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const StyledOverlay = styled.div`
  display: block;

  position: fixed;
  left: 0;
  top: 0;
  right: 100%;
  bottom: 100%;
  z-index: ${({ zIndex }) => zIndex};

  visibility: hidden;

  opacity: 0;
  background: rgba(0, 0, 0, 0.5);

  transition: visibility 0s ease, opacity 0.2s ease, bottom 0s, right 0s;
  transition-delay: 0.2s, 0s, 0.2s, 0.2s;

  &.is-active {
    right: 0;
    bottom: 0;

    visibility: visible;

    opacity: 1;

    transition-delay: 0s, 0s, 0s, 0s;
  }
`

export class Overlay extends Component {
  render() {
    const { zIndex, isActive } = this.props
    return <StyledOverlay zIndex={zIndex} className={isActive && 'is-active'} />
  }
}

Overlay.propTypes = {
  zIndex: PropTypes.number,
  isActive: PropTypes.bool,
}

Overlay.defaultProps = {
  zIndex: 100,
  isActive: false,
}
