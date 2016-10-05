/**
 * @module 'kitten/helpers/dom/element-helper'
 */

const domElementHelper = {
  /**
   * Return element computed height with or without borders included.
   *
   * @param {HTMLElement} element
   * @param {boolean} withBorder
   */
  getComputedHeight(element, withBorder) {
    if (withBorder) {
      return element.getBoundingClientRect().height
    }

    return element.clientHeight
  },

  /**
   * Return element computed width.
   *
   * @param {HTMLElement} element
   */
  getComputedWidth(element) {
    if (!element) return

    return element.getBoundingClientRect().width
  },

  /**
   * Return value of property's style for element.
   *
   * @param {HTMLElement} element
   * @param {string} property
   */
  getComputedStyle(element, property) {
    if (!element) return

    const styles = window.getComputedStyle(element)
    return styles.getPropertyValue(property)
  },

  /**
   * Return if DOM API can be used.
   */
  canUseDom() {
    return !!(typeof window !== 'undefined' &&
              window.document && window.document.createElement)
  },
}

export default domElementHelper
