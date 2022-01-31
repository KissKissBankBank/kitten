import React, { useState, useEffect, useRef } from 'react'
import has from 'lodash/fp/has'
import isNull from 'lodash/fp/isNull'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { DropdownButton } from './dropdown-button'
import domElementHelper from '../../../../helpers/dom/element-helper'
import { useWindowWidth } from '../../../../helpers/utils/use-window-width-hook'
import domEvents, {
  TOGGLE_DROPDOWN_EVENT,
  DROPDOWN_FIRST_FOCUS_REACHED_EVENT,
  DROPDOWN_LAST_FOCUS_REACHED_EVENT,
  dispatchEvent,
} from '../../../../helpers/dom/events'
import {
  getFocusableElementsFrom,
  keyboardNavigation,
} from '../../../../helpers/dom/a11y'
import { DROPDOWN_ANIMATED_DELAY } from '../../../../constants/dropdown-config'
import { ArrowIcon } from '../../../graphics/icons/arrow-icon'

export const Dropdown = React.forwardRef(
  (
    {
      button,
      buttonClassName,
      buttonContentOnCollapsed,
      buttonContentOnExpanded,
      buttonId,
      buttonStyles,
      className,
      closeEvents,
      closeOnOuterClick,
      dropdownContent,
      dropdownContentWidth,
      hasArrow,
      isExpanded,
      keepInitialButtonAction,
      onPositionUpdate,
      onToggle,
      positionedHorizontallyWith,
      positionedVerticallyWith,
      positionedWithBorder,
      refreshEvents,
    },
    dropdownRef,
  ) => {
    const dropdownContentRef = useRef(null)
    const dropdownButtonRef = useRef(null)
    const [isExpandedState, setIsExpanded] = useState(isExpanded)
    const [toggleByEventType, setToggleByEventType] = useState(null)
    const [
      verticalReferenceElementState,
      setVerticalReferenceElement,
    ] = useState(0)

    const [
      horizontalReferenceElementState,
      setHorizontalReferenceElement,
    ] = useState(0)

    const windowWidth = useWindowWidth()

    const { keyboard } = domEvents

    const closeDropdownOnEsc = ({ keyCode }) =>
      keyCode === keyboard.esc ? toggle(false) : null

    const dropdownKbdTrigger = ({ keyCode }) => {
      setToggleByEventType('keyboard')
      if (keyCode === keyboard.down) toggle(true)
      if (keyCode === keyboard.up) toggle(false)
    }

    const blur = event => {
      event.target.blur()
    }

    useEffect(() => {
      handleDropdownPosition()
      handleClickOnLinks()

      const toggleEvent = evt => toggle(evt?.detail?.nextExpandedState)

      window.addEventListener(TOGGLE_DROPDOWN_EVENT, toggleEvent)

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

      window.addEventListener('keydown', closeDropdownOnEsc)

      if (!isNull(dropdownButtonRef.current)) {
        dropdownButtonRef.current.addEventListener(
          'keydown',
          dropdownKbdTrigger,
        )
        dropdownButtonRef.current.addEventListener('mouseup', blur)
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

        window.removeEventListener('keydown', closeDropdownOnEsc)
        window.removeEventListener(TOGGLE_DROPDOWN_EVENT, toggleEvent)

        if (!isNull(dropdownButtonRef.current)) {
          dropdownButtonRef.current.removeEventListener(
            'keydown',
            dropdownKbdTrigger,
          )
          dropdownButtonRef.current.removeEventListener('mouseup', blur)
        }
      }
    }, [])

    const manageA11yOn = event => {
      event.stopPropagation()
      event.preventDefault()

      const focusableElements = getFocusableElementsFrom(
        dropdownContentRef?.current,
      )

      const kbdNav = keyboardNavigation(focusableElements, {
        events: {
          prev: DROPDOWN_FIRST_FOCUS_REACHED_EVENT,
          next: DROPDOWN_LAST_FOCUS_REACHED_EVENT,
        },
        triggeredElement: dropdownButtonRef?.current,
      })

      const { tab, up, down, left, right, esc, shiftTab } = keyboard

      if (event.keyCode === esc) return toggle(false)

      if (event.keyCode === left) {
        return dispatchEvent(
          DROPDOWN_FIRST_FOCUS_REACHED_EVENT,
          dropdownButtonRef?.current,
        )()
      }

      if (event.keyCode === right) {
        return dispatchEvent(
          DROPDOWN_LAST_FOCUS_REACHED_EVENT,
          dropdownButtonRef?.current,
        )()
      }

      if (shiftTab(event) || event.keyCode === up) {
        return kbdNav.prev()
      }

      if (!event.shiftKey && [down, tab].includes(event.keyCode)) {
        return kbdNav.next()
      }
    }

    useEffect(() => {
      if (isExpandedState && !isNull(dropdownContentRef.current)) {
        setTimeout(() => {
          const focusableElements = getFocusableElementsFrom(
            dropdownContentRef.current,
          )
          if (focusableElements.length > 0) {
            toggleByEventType === 'keyboard' && focusableElements[0].focus()

            dropdownContentRef.current.addEventListener('keydown', manageA11yOn)
          }
        }, DROPDOWN_ANIMATED_DELAY)
      }

      return () => {
        if (!isNull(dropdownContentRef.current)) {
          dropdownContentRef.current.removeEventListener(
            'keydown',
            manageA11yOn,
          )
        }
      }
    }, [isExpandedState])

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
      toggle(false)
    }

    const toggle = nextExpandedState => {
      // Set toggleByEventType to click by default when dropdown menu is hidden.
      // The value will be override on keyboard event. This fix a bug on
      // space/enter keyboard events which trigger click event.
      if (!nextExpandedState) {
        setToggleByEventType('click')
      }
      setIsExpanded(nextExpandedState)
      onToggle({
        isExpanded: nextExpandedState,
        expandBy: nextExpandedState ? buttonId : null,
      })
    }

    const getComputedHeightElement = () =>
      domElementHelper.getComputedHeight(
        positionedVerticallyWith(),
        positionedWithBorder,
      )

    const getComputedLeftElement = () => {
      if (positionedHorizontallyWith) {
        const computedLeftElement = domElementHelper.getComputedLeft(
          positionedHorizontallyWith(),
        )

        if (!dropdownContentWidth || typeof dropdownContentWidth === 'number') {
          const minContentWidth = () =>
            dropdownContentWidth > 200 ? dropdownContentWidth : 200

          if (computedLeftElement + minContentWidth() > windowWidth) {
            return windowWidth - minContentWidth()
          }

          return computedLeftElement
        }

        return computedLeftElement
      }

      return 0
    }

    // Component listener callbacks
    const revertHandleClickOnLinks = () => handleClickOnLinks()

    const handleClickOnLinks = () => {
      if (isNull(dropdownContentRef.current)) return

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

    return (
      <div
        ref={dropdownRef}
        className={classNames(
          'k-Dropdown',
          {
            'k-Dropdown--isExpanded': isExpandedState,
          },
          className,
        )}
      >
        {button &&
          (keepInitialButtonAction ? (
            <DropdownButton
              ref={dropdownButtonRef}
              className={buttonClassName}
              id={buttonId}
              isExpanded={isExpandedState}
              onClick={handleButtonClick}
              style={{ ...buttonStyles }}
            >
              {button}
              {hasArrow && (
                <ArrowIcon
                  direction={isExpandedState ? 'top' : 'bottom'}
                  className="k-u-margin-left-single k-u-hidden@xs-down"
                  color="currentColor"
                />
              )}
            </DropdownButton>
          ) : (
            <>
              {button}
              {hasArrow && (
                <ArrowIcon
                  direction={isExpandedState ? 'top' : 'bottom'}
                  className="k-u-margin-left-single k-u-hidden@xs-down"
                  color="currentColor"
                />
              )}
            </>
          ))}

        {!button && (
          <DropdownButton
            ref={dropdownButtonRef}
            className={buttonClassName}
            id={buttonId}
            isExpanded={isExpandedState}
            onClick={handleButtonClick}
          >
            {isExpandedState
              ? buttonContentOnExpanded
              : buttonContentOnCollapsed}
          </DropdownButton>
        )}

        <div
          ref={dropdownContentRef}
          className="k-Dropdown__content"
          style={{
            top: verticalReferenceElementState,
            left: horizontalReferenceElementState || 0,
            width: dropdownContentWidth,
          }}
          aria-hidden={!isExpandedState}
          aria-labelledby={buttonId}
        >
          {dropdownContent}
        </div>
      </div>
    )
  },
)

Dropdown.propTypes = {
  button: PropTypes.node,
  buttonClassName: PropTypes.string,
  buttonContentOnCollapsed: PropTypes.node,
  buttonContentOnExpanded: PropTypes.node,
  buttonId: PropTypes.string,
  className: PropTypes.string,
  closeEvents: PropTypes.array,
  closeOnOuterClick: PropTypes.bool,
  dropdownContentWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  dropdownContent: PropTypes.node,
  isExpanded: PropTypes.bool,
  keepInitialButtonAction: PropTypes.bool,
  onPositionUpdate: PropTypes.func,
  onToggle: PropTypes.func,
  positionedHorizontallyWith: PropTypes.func,
  positionedVerticallyWith: PropTypes.func.isRequired,
  positionedWithBorder: PropTypes.bool,
  refreshEvents: PropTypes.array,
}

Dropdown.defaultProps = {
  // Take border into account to compute reference element height.
  positionedWithBorder: true,

  // If set to true, keep the inital toggle events to focus on design button
  // trough `button` prop.
  keepInitialButtonAction: false,

  // Button settings
  buttonContentOnExpanded: 'Close me',
  buttonContentOnCollapsed: 'Expand me',

  isExpanded: false,

  // List of events that will trigger the update of the reference element
  // height.
  refreshEvents: [], // eg. ['resize']

  // List of events that will trigger the closure.
  closeEvents: [],

  // If set to true, close dropdown on outer click.
  closeOnOuterClick: false,

  // Called when one of the `refreshEvents` is triggered.
  onPositionUpdate: function () {},

  // Called when the dropdown is opened or closed
  onToggle: function () {},
}
