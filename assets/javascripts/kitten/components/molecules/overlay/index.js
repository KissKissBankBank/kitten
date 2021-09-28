import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'

export const CLOSE_OVERLAY_EVENT = 'overlay-close'
export const OPEN_OVERLAY_EVENT = 'overlay-open'

const StyledOverlay = styled.div`
  left: 0;
  top: 0;
  right: 100%;
  bottom: 100%;
  z-index: var(--Overlay-zIndex, 100);

  visibility: hidden;

  opacity: 0;
  background: rgba(0, 0, 0, 0.4);

  transition: visibility 0s ease, opacity 0.2s ease, bottom 0s, right 0s;
  transition-delay: 0.2s, 0s, 0.2s, 0.2s;

  &.k-Overlay--absolute {
    position: absolute;
  }
  &.k-Overlay--fixed {
    position: fixed;
  }

  &.k-Overlay--isActive {
    right: 0;
    bottom: 0;

    visibility: visible;

    opacity: 1;

    transition-delay: 0s, 0s, 0s, 0s;
  }
`

export const Overlay = ({
  zIndex,
  isActive,
  toggleEvent,
  closeEvent,
  openEvent,
  position,
  onToggle,
  className,
  style,
  ...other
}) => {
  const [internalIsActive, setInternalActive] = useState(isActive)

  useEffect(() => {
    !!toggleEvent &&
      window.addEventListener(toggleEvent, () => setInternalActive(current => (!current)))
    !!closeEvent &&
      window.addEventListener(closeEvent, () => setInternalActive(false))
    !!openEvent &&
      window.addEventListener(openEvent, () => setInternalActive(true))

    return () => {
      !!toggleEvent &&
        window.removeEventListener(toggleEvent, () => setInternalActive(current => (!current)))
      !!closeEvent &&
        window.removeEventListener(closeEvent, () => setInternalActive(false))
      !!openEvent &&
        window.removeEventListener(openEvent, () => setInternalActive(true))
    }
  }, [])

  useEffect(() => {
    onToggle({ isActive: !!internalIsActive })
  }, [internalIsActive])

  useEffect(() => {
    setInternalActive(!!isActive)
  }, [isActive])

  return (
    <StyledOverlay
      className={classNames(
        className,
        'k-Overlay',
        `k-Overlay--${position}`,
        {
          'k-Overlay--isActive': internalIsActive,
        },
      )}
      style={{
        ...style,
        '--Overlay-zIndex': zIndex,
      }}
      {...other}
    />
  )
}

Overlay.propTypes = {
  zIndex: PropTypes.number,
  isActive: PropTypes.bool,
  toggleEvent: PropTypes.string,
  closeEvent: PropTypes.string,
  openEvent: PropTypes.string,
  position: PropTypes.oneOf(['absolute', 'fixed']),
  onToggle: PropTypes.func,
}

Overlay.defaultProps = {
  zIndex: 100,
  isActive: false,
  toggleEvent: '',
  closeEvent: CLOSE_OVERLAY_EVENT,
  openEvent: OPEN_OVERLAY_EVENT,
  position: 'absolute',
  onToggle: () => {},
}
