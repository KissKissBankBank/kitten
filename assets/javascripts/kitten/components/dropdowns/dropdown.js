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
      closeOnOuterClick,
      contentHorizontalPosition,
      dropdownContent,
      dropdownContentWidth,
      dropdownListArrow,
      isExpanded,
      keepInitialButtonAction,
      notifications,
      onPositionUpdate,
      onToggle,
      positionedHorizontallyWith,
      positionedVerticallyWith,
      positionedWith,
      positionedWithBorder,
      refreshEvents,
    },
    dropdownRef,
  ) => {
    const dropdownContentRef = useRef(null)
    const arrowRef = useRef(null)
    const dropdownButtonRef = useRef(null)
    const [isExpandedState, setIsExpanded] = useState(false)
    const [
      verticalReferenceElementState,
      setVerticalReferenceElement,
    ] = useState(0)

    const [
      horizontalReferenceElementState,
      setHorizontalReferenceElement,
    ] = useState(0)

    useEffect(() => {
      handleDropdownPosition()
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

    useEffect(() => {
      if (!closeOnOuterClick || !isExpandedState) return

      const handleBodyClick = event => {
        if (!event.target.matches(`.${className.replace(/\s+/g, '.')} *`)) {
          toggle(false)
        }
      }

      document.body.addEventListener('click', handleBodyClick)

      return () => {
        document.body.removeEventListener('click', handleBodyClick)
      }
    }, [closeOnOuterClick, isExpandedState])

    const closeDropdown = () => {
      setIsExpanded(false)
    }

    const toggle = nextExpandedState => {
      if (nextExpandedState) {
        emitter.emit('dropdown:opening:trigger')
      }

      setIsExpanded(nextExpandedState)
      onToggle({
        isExpanded: nextExpandedState,
        expandBy: nextExpandedState ? buttonId : null,
      })
    }

    const isSelfReference = () =>
      typeof positionedWith === 'undefined' &&
      typeof positionedVerticallyWith === 'undefined'

    const getVerticalReferenceElement = () => {
      if (!isSelfReference()) {
        return (positionedVerticallyWith || positionedWith)()
      }
      // Prevent error from ref not set by `useRef`.
      return has('current')(dropdownRef) ? dropdownRef.current : dropdownRef
    }

    const getHorizontalReferenceElement = () => {
      if (!isSelfReference()) {
        return (positionedVerticallyWith || positionedWith)()
      }
      // Prevent error from ref not set by `useRef`.
      return has('current')(dropdownRef) ? dropdownRef.current : dropdownRef
    }

    const getComputedHeightElement = () =>
      domElementHelper.getComputedHeight(
        getVerticalReferenceElement(),
        positionedWithBorder,
      )

    const getComputedLeftElement = () =>
      positionedHorizontallyWith
        ? domElementHelper.getComputedLeft(positionedHorizontallyWith())
        : 0

    const getArrowPositionStyle = () => {
      return { position: 'absolute', top: 0, ...arrowHorizontalPosition }
    }

    const getDropdownContentStyle = () => {
      return {
        top: verticalReferenceElementState,
        left: horizontalReferenceElementState || 0,
        width: dropdownContentWidth,
        ...contentHorizontalPosition,
      }
    }

    // Component listener callbacks
    const revertHandleClickOnLinks = () => handleClickOnLinks()

    const handleClickOnLinks = () => {
      const links = dropdownContentRef.current.getElementsByTagName('a')

      Array.prototype.forEach.call(links, link => {
        link.removeEventListener('click', closeDropdown)
      })
    }

    const handleDropdownPosition = () => {
      if (domElementHelper.canUseDom()) {
        onPositionUpdate()
        setVerticalReferenceElement(getComputedHeightElement())
        setHorizontalReferenceElement(getComputedLeftElement())
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
          style={getDropdownContentStyle()}
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
  buttonClassName: PropTypes.string,
  buttonContentOnCollapsed: PropTypes.node,
  buttonContentOnExpanded: PropTypes.node,
  buttonId: PropTypes.string,
  className: PropTypes.string,
  closeEvents: PropTypes.array,
  closeOnOuterClick: PropTypes.bool,
  contentHorizontalPosition: PropTypes.object,
  dropdownContentWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  dropdownContent: PropTypes.node,
  dropdownListArrow: PropTypes.node,
  isExpanded: PropTypes.bool,
  keepInitialButtonAction: PropTypes.bool,
  notifications: PropTypes.number,
  onPositionUpdate: PropTypes.func,
  onToggle: PropTypes.func,
  positionedHorizontallyWith: PropTypes.func,
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

  // If set to true, keep the inital toggle events to focus on design button
  // trough `button` prop.
  keepInitialButtonAction: false,

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

  // If set to true, close dropdown on outer click.
  closeOnOuterClick: false,

  // Called when one of the `refreshEvents` is triggered.
  onPositionUpdate: function() {},

  // Called when the dropdown is opened or closed
  onToggle: function() {},
}

// DEPRECATED: do not use default export.
export default Dropdown
