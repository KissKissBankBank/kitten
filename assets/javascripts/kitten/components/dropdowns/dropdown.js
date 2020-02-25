import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import emitter from '../../helpers/utils/emitter'
import { DropdownButton } from '../../components/dropdowns/dropdown-button'
import domElementHelper from '../../helpers/dom/element-helper'

export const Dropdown = React.forwardRef(
  (
    {
      arrowHorizontalPosition,
      button,
      buttonContentOnCollapsed,
      buttonContentOnExpanded,
      className,
      buttonId,
      buttonClassName,
      closeEvents,
      contentHorizontalPosition,
      dropdownContent,
      dropdownListArrow,
      isExpanded,
      notifications,
      onPositionUpdate,
      onToggle,
      positionedOn,
      positionedWith,
      positionedWithBorder,
      refreshEvents,
    },
    dropdownRef,
  ) => {
    const [isExpandedState, setIsExpanded] = useState(false)
    const [referenceElementHeightState, setReferenceElementHeight] = useState(0)
    const dropdownContentRef = useRef(null)
    const arrowRef = useRef(null)
    const dropdownButtonRef = useRef(null)

    useEffect(() => {
      if (domElementHelper.canUseDom()) {
        // Update dropdown content position after DOM is build.
        setReferenceElementHeight(getReferenceElementHeight())
      }

      // Handle events.
      handleClickOnLinks()

      emitter.on('dropdown:opening:trigger', closeDropdown)

      if (refreshEvents) {
        refreshEvents.forEach(ev => {
          window.addEventListener(ev, handleDropdownPosition)
        })
      }

      if (closeEvents) {
        closeEvents.forEach(ev => {
          window.addEventListener(ev, closeDropdown)
        })
      }

      return () => {
        revertHandleClickOnLinks()

        if (refreshEvents) {
          refreshEvents.forEach(ev => {
            window.removeEventListener(ev, handleDropdownPosition)
          })
        }

        if (closeEvents) {
          closeEvents.forEach(ev => {
            window.removeEventListener(ev, closeDropdown)
          })
        }

        emitter.off('dropdown:opening:trigger', closeDropdown)
      }
    }, [])

    useEffect(() => {
      if (isExpanded != isExpandedState) {
        toggle(isExpanded)
      }
    }, [isExpanded])

    const closeDropdown = () => {
      setIsExpanded(false)
    }

    const toggle = nextExpandedState => {
      if (nextExpandedState) {
        emitter.emit('dropdown:opening:trigger')
      }

      onToggle()
      setIsExpanded(nextExpandedState)
    }

    const hasDefaultHorizontalPosition = () => positionedOn === 'left'
    const isSelfReference = () => typeof positionedWith === 'undefined'

    const getReferenceElement = () => {
      if (!isSelfReference()) return positionedWith()

      return dropdownRef.current
    }

    const getReferenceElementHeight = () =>
      domElementHelper.getComputedHeight(
        getReferenceElement(),
        positionedWithBorder,
      )

    const getArrowPositionStyle = () => {
      return { position: 'absolute', top: 0, ...arrowHorizontalPosition }
    }

    const getContentPosition = () => {
      return { top: referenceElementHeightState, ...contentHorizontalPosition }
    }

    // Component listener callbacks
    const revertHandleClickOnLinks = () => {
      const links = dropdownContentRef.current.getElementsByTagName('a')

      Array.prototype.forEach.call(links, link => {
        link.removeEventListener('click', closeDropdown)
      })
    }

    const handleClickOnLinks = () => {
      const links = dropdownContentRef.current.getElementsByTagName('a')

      Array.prototype.forEach.call(links, link => {
        link.removeEventListener('click', closeDropdown)
      })
    }

    const handleDropdownPosition = () => {
      if (domElementHelper.canUseDom()) {
        onPositionUpdate()
        setReferenceElementHeight(getReferenceElementHeight())
      }
    }

    const handleButtonClick = event => {
      event.stopPropagation()
      event.preventDefault()

      toggle(!isExpandedState)
    }

    // Rendering
    const renderButtonContentElement = () => {
      if (isExpandedState) {
        return buttonContentOnExpanded
      }

      return buttonContentOnCollapsed
    }

    const Arrow = () => {
      if (!dropdownListArrow) return null

      return (
        <span ref={arrowRef} style={getArrowPositionStyle()}>
          {dropdownListArrow}
        </span>
      )
    }

    const dropdownClassName = classNames(
      'k-Dropdown',
      {
        'is-expanded': isExpandedState,
        'k-Dropdown--asReference': isSelfReference(),
      },
      className,
    )

    return (
      <div ref={dropdownRef} className={dropdownClassName}>
        {button || (
          <DropdownButton
            ref={dropdownButtonRef}
            className={buttonClassName}
            id={buttonId}
            isExpanded={isExpandedState}
            onClick={handleButtonClick}
          >
            {renderButtonContentElement()}
          </DropdownButton>
        )}

        <div
          ref={dropdownContentRef}
          className="k-Dropdown__content"
          style={getContentPosition()}
          aria-hidden="true"
          aria-labelledby={buttonId}
        >
          {dropdownContent}
          <Arrow />
        </div>
      </div>
    )
  },
)

Dropdown.propTypes = {
  isExpanded: PropTypes.bool,
  positionedWith: PropTypes.func,
  positionedWithBorder: PropTypes.bool,
  positionedOn: PropTypes.string,
  notifications: PropTypes.number,
  refreshEvents: PropTypes.array,
  closeEvents: PropTypes.array,
  onPositionUpdate: PropTypes.func,
}

Dropdown.defaultProps = {
  // Take border into account to compute reference element height.
  positionedWithBorder: true,

  // Fix the dropdown on the left or on the right.
  positionedOn: 'left', // 'left' | 'right'

  // Custom horizontal position for content and content arrow.
  contentHorizontalPosition: { left: '0' },
  arrowHorizontalPosition: { left: '50%' },

  // Button settings
  buttonContentOnExpanded: 'Close me',
  buttonContentOnCollapsed: 'Expand me',

  // List of events that will trigger the update of the reference element
  // height.
  refreshEvents: [], // eg. ['resize']

  // List of events that will trigger the closure.
  closeEvents: [],

  // Called when one of the `refreshEvents` is triggered.
  onPositionUpdate: function() {},

  // Called when the dropdown is opened or closed
  onToggle: function() {},
}

// DEPRECATED: do not use default export.
export default Dropdown
