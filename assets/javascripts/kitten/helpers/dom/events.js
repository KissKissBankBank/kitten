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
  },
}

export const OPENING_DROPDOWN_EVENT = 'dropdown:opening:trigger'

// DEPRECATED: do not use default export.
export default domEvents
