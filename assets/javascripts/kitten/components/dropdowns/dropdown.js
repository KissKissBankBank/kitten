import React, { useState, useEffect, useRef } from 'react'
import has from 'lodash/fp/has'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import emitter from '../../helpers/utils/emitter'
import { DropdownButton } from '../../components/dropdowns/dropdown-button'
import deprecated from 'prop-types-extra/lib/deprecated'
import domElementHelper from '../../helpers/dom/element-helper'

export const Dropdown = React.forwardRef(
  (
    {
      arrowHorizontalPosition,
      button,
      buttonClassName,
      buttonContentOnCollapsed,
      buttonContentOnExpanded,
      buttonId,
      className,
      closeEvents,
      contentHorizontalPosition,
      dropdownContent,
      dropdownListArrow,
      isExpanded,
      keepInitialButtonAction,
      notifications,
      onPositionUpdate,
      onToggle,
      positionedHorizontallyWith,
      positionedOn,
      positionedVerticallyWith,
      positionedWith,
      positionedWithBorder,
      refreshEvents,
    },
    dropdownRef,
  ) => {
    const [isExpandedState, setIsExpanded] = useState(false)
    const [referenceElementHeightState, setReferenceElementHeight] = useState(0)
    const [referenceElementWidthState, setReferenceElementWidth] = useState(0)
    const dropdownContentRef = useRef(null)
    const arrowRef = useRef(null)
    const dropdownButtonRef = useRef(null)

    useEffect(() => {
      if (domElementHelper.canUseDom()) {
        // Update dropdown content position after DOM is build.
        setReferenceElementHeight(getReferenceElementHeight())
        setReferenceElementWidth(getReferenceElementWidth())
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

      if (!has('current')(dropdownRef)) {
        console.warn(
          'The `ref` prop from <Dropdown /> should be set using `useRef`.',
        )
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
    const isSelfReference = () =>
      typeof positionedWith === 'undefined' &&
      typeof positionedVerticallyWith === 'undefined'

    const getReferenceElement = () => {
      if (!isSelfReference()) {
        return (positionedVerticallyWith || positionedWith)()
      }
      // Prevent error from ref no set by `useRef`.
      return has('current')(dropdownRef) ? dropdownRef.current : dropdownRef
    }

    const getReferenceElementHeight = () =>
      domElementHelper.getComputedHeight(
        getReferenceElement(),
        positionedWithBorder,
      )

    const getReferenceElementWidth = () =>
      positionedHorizontallyWith
        ? domElementHelper.getComputedLeft(positionedHorizontallyWith())
        : 0

    const getArrowPositionStyle = () => {
      return { position: 'absolute', top: 0, ...arrowHorizontalPosition }
    }

    const getContentPosition = () => {
      return {
        top: referenceElementHeightState,
        left: referenceElementWidthState || 0,
        ...contentHorizontalPosition,
      }
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

        const getComputedWidth = domElementHelper.getComputedWidth(
          getReferenceElement(),
          positionedWithBorder,
        )
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
        {button &&
          (keepInitialButtonAction ? (
            <DropdownButton
              ref={dropdownButtonRef}
              className={buttonClassName}
              id={buttonId}
              isExpanded={isExpandedState}
              onClick={handleButtonClick}
            >
              {button}
            </DropdownButton>
          ) : (
            button
          ))}

        {!button && (
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
  arrowHorizontalPosition: PropTypes.object,
  button: PropTypes.node,
  keepInitialButtonAction: PropTypes.bool,
  buttonClassName: PropTypes.string,
  buttonContentOnCollapsed: PropTypes.node,
  buttonContentOnExpanded: PropTypes.node,
  buttonId: PropTypes.string,
  className: PropTypes.string,
  closeEvents: PropTypes.array,
  contentHorizontalPosition: PropTypes.object,
  dropdownContent: PropTypes.node,
  dropdownListArrow: PropTypes.node,
  isExpanded: PropTypes.bool,
  notifications: PropTypes.number,
  onPositionUpdate: PropTypes.func,
  onToggle: PropTypes.func,
  positionedHorizontallyWith: PropTypes.func,
  positionedOn: PropTypes.string,
  positionedVerticallyWith: PropTypes.func,
  positionedWith: deprecated(
    PropTypes.func,
    'Prefere use `positionedVerticallyWith` when using `Dropdown` component.',
  ),
  positionedWithBorder: PropTypes.bool,
  refreshEvents: PropTypes.array,
}

Dropdown.defaultProps = {
  // Take border into account to compute reference element height.
  positionedWithBorder: true,

  // Set to true to keep the inital event et just design the button trough
  // `button` prop.
  keepInitialButtonAction: false,

  // Fix the dropdown on the left or on the right.
  positionedOn: 'left', // 'left' | 'right'

  // Custom horizontal position for content and content arrow.
  contentHorizontalPosition: {}, // { left: '0' },
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
