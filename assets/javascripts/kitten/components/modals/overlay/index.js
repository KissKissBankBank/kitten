import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const StyledOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 100%;
  bottom: 100%;
  z-index: ${({ zIndex }) => zIndex};

  visibility: hidden;

  opacity: 0;
  background: rgba(34, 34, 34, 0.9);

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
  constructor(props) {
    super(props)

    this.state = { isActive: props.isActive }
  }

  componentDidMount() {
    if (this.props.toggleEvent !== '') {
      window.addEventListener(this.props.toggleEvent, this.toggleActiveState)
    }
  }

  componentWillUnmount() {
    if (this.props.toggleEvent !== '') {
      window.removeEventListener(this.props.toggleEvent, this.toggleActiveState)
    }
  }

  toggleActiveState = () => {
    this.setState({ isActive: !this.state.isActive })
  }

  render() {
    const { zIndex, ...other } = this.props
    const { isActive } = this.state
    return (
      <StyledOverlay
        zIndex={zIndex}
        className={isActive && 'is-active'}
        {...other}
      />
    )
  }
}

Overlay.propTypes = {
  zIndex: PropTypes.number,
  isActive: PropTypes.bool,
  toggleEvent: PropTypes.string,
}

Overlay.defaultProps = {
  zIndex: 100,
  isActive: false,
  toggleEvent: '',
}
