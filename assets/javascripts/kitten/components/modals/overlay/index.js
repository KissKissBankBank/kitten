import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'

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
    this.props.toggleEvent &&
      window.addEventListener(this.props.toggleEvent, this.toggleActiveState)
    this.props.closeEvent &&
      window.addEventListener(this.props.closeEvent, this.disableActiveState)
    this.props.openEvent &&
      window.addEventListener(this.props.openEvent, this.enableActiveState)
  }

  componentWillUnmount() {
    this.props.toggleEvent &&
      window.removeEventListener(this.props.toggleEvent, this.toggleActiveState)
    this.props.closeEvent &&
      window.removeEventListener(this.props.closeEvent, this.disableActiveState)
    this.props.openEvent &&
      window.removeEventListener(this.props.openEvent, this.enableActiveState)
  }

  toggleActiveState = () => this.setState({ isActive: !this.state.isActive })
  disableActiveState = () => this.setState({ isActive: false })
  enableActiveState = () => this.setState({ isActive: true })

  render() {
    const { className, zIndex, ...other } = this.props
    const { isActive } = this.state
    return (
      <StyledOverlay
        zIndex={zIndex}
        className={classNames(isActive && 'is-active', className)}
        {...other}
      />
    )
  }
}

Overlay.propTypes = {
  zIndex: PropTypes.number,
  isActive: PropTypes.bool,
  toggleEvent: PropTypes.string,
  closeEvent: PropTypes.string,
  openEvent: PropTypes.string,
}

Overlay.defaultProps = {
  zIndex: 100,
  isActive: false,
  toggleEvent: '',
  closeEvent: '',
  openEvent: '',
}
