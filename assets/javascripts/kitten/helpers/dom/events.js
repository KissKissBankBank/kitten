/**
 * @module '../../helpers/dom/events'
 */

export const domEvents = {
  /**
   * Object for mapping keyboard keys to browser's keyCode
   */
  keyboard: {
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    pageUp: 33,
    pageDown: 34,
    end: 36,
    home: 36,
    tab: 9,
    esc: 27,
    space: 32,
    enter: 13,
    shiftTab: event => {
      return event.keyCode === domEvents.keyboard.tab && event.shiftKey
    },
  },
}
// Accessibility events
export const A11Y_EVENT = 'accessibility'
export const FOCUS_EVENT = 'focus'
export const A11Y_FIRST_FOCUS_REACHED_EVENT = `${A11Y_EVENT}:${FOCUS_EVENT}:firstElementReached`
export const A11Y_LAST_FOCUS_REACHED_EVENT = `${A11Y_EVENT}:${FOCUS_EVENT}:lastElementReached`

// Dropdown events
export const DROPDOWN_EVENT = 'dropdown'
export const TOGGLE_DROPDOWN_EVENT = `${DROPDOWN_EVENT}:toggle:trigger`
export const DROPDOWN_FIRST_FOCUS_REACHED_EVENT = `${DROPDOWN_EVENT}:${FOCUS_EVENT}:firstElementReached`
export const DROPDOWN_LAST_FOCUS_REACHED_EVENT = `${DROPDOWN_EVENT}:${FOCUS_EVENT}:lastElementReached`

export const dispatchEvent = (eventName, detail) => (root = window) =>
  detail
    ? root.dispatchEvent(new CustomEvent(eventName, { detail }))
    : root.dispatchEvent(new Event(eventName))

// DEPRECATED: do not use default export.
export default domEvents
